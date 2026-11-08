import test from 'node:test';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import { createContactHandler } from '../api/contact.js';

const env = { RESEND_API_KEY: 'test-key-not-real', CONTACT_FROM_EMAIL: 'Portfolio <onboarding@resend.dev>', CONTACT_TO_EMAIL: 'owner@example.com' };
const valid = { name: 'Cliente de prueba', email: 'client@example.com', topic: 'proyecto', message: 'Me interesa desarrollar una plataforma para mi negocio.', website: '' };
const headers = { host: 'portfolio.example', origin: 'https://portfolio.example', 'content-type': 'application/json', 'x-idempotency-key': '12345678-1234-1234-1234-123456789abc' };
async function invoke({ method = 'POST', body = valid, requestHeaders = headers, config = env, send = async () => ({ ok: true, json: async () => ({ id: 'email-test' }) }), stream } = {}) {
  const req = stream ? Readable.from(stream) : {};
  Object.assign(req, { method, headers: requestHeaders });
  if (!stream) req.body = body;
  const res = { headers: {}, setHeader(key, value) { this.headers[key] = value; }, end(value) { this.body = JSON.parse(value); } };
  await createContactHandler({ env: config, fetchImpl: send })(req, res);
  return res;
}

test('sends a fixed-recipient plain-text email with reply-to and idempotency', async () => {
  let call;
  const res = await invoke({ body: { ...valid, to: 'attacker@example.com', from: 'attacker@example.com', message: 'A message with <script>markup</script> treated as plain text.' }, send: async (url, options) => {
    call = { url, options, body: JSON.parse(options.body) }; return { ok: true, json: async () => ({ id: 'email-test' }) };
  } });
  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body, { ok: true });
  assert.equal(call.url, 'https://api.resend.com/emails');
  assert.deepEqual(call.body.to, ['owner@example.com']);
  assert.equal(call.body.from, env.CONTACT_FROM_EMAIL);
  assert.equal(call.body.reply_to, valid.email);
  assert.equal(call.body.html, undefined);
  assert.match(call.options.headers['Idempotency-Key'], /^portfolio-contact\//);
  assert.ok(call.options.signal instanceof AbortSignal);
});

test('validates method, origin, content type, fields and honeypot before delivery', async () => {
  let calls = 0;
  const send = async () => { calls++; throw Error('Must not send'); };
  for (const [options, status] of [
    [{ method: 'GET' }, 405],
    [{ requestHeaders: { ...headers, origin: 'https://attacker.example' } }, 403],
    [{ requestHeaders: { ...headers, origin: undefined } }, 403],
    [{ requestHeaders: { ...headers, 'content-type': 'text/plain' } }, 415],
    [{ body: { ...valid, email: 'invalid' } }, 400],
    [{ body: { ...valid, name: 'Injected\nSubject' } }, 400],
    [{ body: { ...valid, message: ' '.repeat(20) } }, 400],
    [{ body: { ...valid, message: 'x'.repeat(1501) } }, 400],
    [{ body: { ...valid, topic: '__proto__' } }, 400],
    [{ body: { ...valid, website: 'bot.example' } }, 422],
    [{ body: 'not json' }, 400],
    [{ body: null }, 400],
    [{ requestHeaders: { ...headers, 'x-idempotency-key': undefined } }, 400],
  ]) assert.equal((await invoke({ ...options, send })).statusCode, status);
  assert.equal(calls, 0);
});

test('rejects oversized parsed and streamed request bodies', async () => {
  assert.equal((await invoke({ body: 'x'.repeat(17000) })).statusCode, 413);
  assert.equal((await invoke({ stream: ['x'.repeat(17000)] })).statusCode, 413);
  assert.equal((await invoke({ requestHeaders: { ...headers, 'content-length': '20000' } })).statusCode, 413);
  assert.equal((await invoke({ stream: [JSON.stringify(valid)] })).statusCode, 200);
});

test('reports unavailable configuration and upstream failures without leaking details', async () => {
  assert.equal((await invoke({ config: {} })).statusCode, 503);
  const rejected = await invoke({ send: async () => ({ ok: false, json: async () => ({ message: 'secret provider detail' }) }) });
  assert.equal(rejected.statusCode, 502);
  assert.doesNotMatch(JSON.stringify(rejected.body), /secret|test-key/);
  assert.equal((await invoke({ send: async () => { throw Error('private network details'); } })).statusCode, 502);
  assert.equal((await invoke({ send: async () => ({ ok: true, json: async () => ({}) }) })).statusCode, 502);
});
