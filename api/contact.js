import process from 'node:process';
import { Buffer } from 'node:buffer';
import { CONTACT_EMAIL, CONTACT_TOPICS } from '../src/data/contact.js';

const MAX_BYTES = 16_384;
const fail = (status, message) => Object.assign(new Error(message), { status });
const respond = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
};

async function readBody(req) {
  if (Number(req.headers['content-length'] || 0) > MAX_BYTES) throw fail(413, 'El mensaje es demasiado largo.');
  let raw = req.body;
  if (raw === undefined) {
    const chunks = [];
    let bytes = 0;
    for await (const chunk of req) {
      const buffer = Buffer.from(chunk);
      bytes += buffer.length;
      if (bytes > MAX_BYTES) throw fail(413, 'El mensaje es demasiado largo.');
      chunks.push(buffer);
    }
    raw = Buffer.concat(chunks).toString('utf8');
  }
  if (typeof raw === 'string' || Buffer.isBuffer(raw)) {
    if (Buffer.byteLength(raw) > MAX_BYTES) throw fail(413, 'El mensaje es demasiado largo.');
    try { return JSON.parse(raw.toString()); } catch { throw fail(400, 'El formulario no es válido.'); }
  }
  if (Buffer.byteLength(JSON.stringify(raw ?? null)) > MAX_BYTES) throw fail(413, 'El mensaje es demasiado largo.');
  return raw;
}

export function createContactHandler({ env = process.env, fetchImpl = fetch } = {}) {
  return async function contact(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return respond(res, 405, { error: 'Método no permitido.' });
    }
    try {
      // Only the site's own form may invoke this route from a browser.
      const origin = req.headers.origin;
      const allowed = (env.CONTACT_ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
      let sameHost = false;
      try { sameHost = new URL(origin).host === req.headers.host; } catch { /* Invalid/missing origin. */ }
      if (!origin || (!sameHost && !allowed.includes(origin))) throw fail(403, 'Origen no permitido.');
      if (!req.headers['content-type']?.startsWith('application/json')) throw fail(415, 'Formato no permitido.');
      const data = await readBody(req);
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw fail(400, 'El formulario no es válido.');
      if (data.website) throw fail(422, 'No se pudo procesar la solicitud.');
      const { name, email, topic, message } = data;
      if (typeof name !== 'string' || !name.trim() || name.trim().length > 80 || /[\r\n]/.test(name)) throw fail(400, 'Escribe un nombre válido.');
      if (typeof email !== 'string' || email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw fail(400, 'Escribe un correo válido.');
      if (typeof topic !== 'string' || !Object.hasOwn(CONTACT_TOPICS, topic)) throw fail(400, 'Selecciona un motivo de contacto.');
      if (typeof message !== 'string' || message.trim().length < 10 || message.length > 1500) throw fail(400, 'Escribe un mensaje de entre 10 y 1500 caracteres.');
      const requestId = req.headers['x-idempotency-key'];
      if (typeof requestId !== 'string' || !/^[a-f0-9-]{36}$/i.test(requestId)) throw fail(400, 'Solicitud no válida. Inténtalo de nuevo.');
      if (!env.RESEND_API_KEY?.trim() || !env.CONTACT_FROM_EMAIL?.trim()) throw fail(503, 'El formulario no está disponible en este momento. Puedes escribirme directamente por correo.');
      const response = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `portfolio-contact/${requestId}` },
        body: JSON.stringify({
          from: env.CONTACT_FROM_EMAIL,
          to: [env.CONTACT_TO_EMAIL || CONTACT_EMAIL],
          reply_to: email.trim(),
          subject: `Portafolio · ${CONTACT_TOPICS[topic]}`,
          text: `Nombre: ${name.trim()}\nCorreo: ${email.trim()}\nMotivo: ${CONTACT_TOPICS[topic]}\n\n${message.trim()}`,
        }),
        signal: AbortSignal.timeout(12_000),
      });
      const result = await response.json().catch(() => null);
      // Never return provider errors, credentials or visitor data to the client.
      if (!response.ok || !result?.id) console.error('Resend error', response.status, result?.name, result?.message);
      if (!response.ok || !result?.id) throw fail(502, 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por correo.');
      return respond(res, 200, { ok: true });
    } catch (error) {
      return respond(res, error.status || 502, { error: error.status ? error.message : 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por correo.' });
    }
  };
}

export default createContactHandler();
