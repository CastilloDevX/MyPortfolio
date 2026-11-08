import { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Mail01Icon, Message01Icon, SentIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import AnimatedContent from "../components/react-bits/AnimatedContent.jsx";
import SoftAurora from "../components/react-bits/SoftAurora.jsx";
import { CONTACT_EMAIL, CONTACT_TOPICS } from "../data/contact.js";

export default function ContactSection() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const requestId = useRef(null);
  const submitting = useRef(false);

  async function submitMessage(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name.trim() || data.message.trim().length < 10) {
      setStatus({ type: "error", message: "Escribe tu nombre y un mensaje de al menos 10 caracteres." });
      return;
    }
    submitting.current = true;
    setStatus({ type: "sending", message: "Enviando tu mensaje…" });
    requestId.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Idempotency-Key": requestId.current },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error(result?.error || "No se pudo enviar el mensaje. Inténtalo de nuevo o utiliza el enlace de correo.");
      form.reset();
      requestId.current = null;
      setStatus({ type: "success", message: "Mensaje enviado. Gracias por escribirme; te responderé al correo que indicaste." });
    } catch (error) {
      setStatus({ type: "error", message: error.name === "TimeoutError" ? "El envío tardó más de lo esperado. Puedes volver a intentarlo." : error instanceof TypeError ? "No se pudo conectar. Revisa tu conexión e inténtalo de nuevo." : error.message || "No se pudo enviar el mensaje. Inténtalo de nuevo." });
    } finally {
      submitting.current = false;
    }
  }

  return (
    <PageSection id="contact" className="contact-section">
      <div className="contact-aurora" aria-hidden="true">
        <SoftAurora
          color1="#b541ff"
          color2="#207dff"
          spectrum={0}
          speed={0.3}
          brightness={0.7}
          opacity={0.8}
          bandHeight={0.5}
          bandSpread={0.7}
          layerOffset={1.5}
          tilt={-8}
          mouseInfluence={0.12}
          clickPulse={false}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle>Contacto</SectionTitle>
        <div className="contact-layout">
          <AnimatedContent distance={28} className="contact-intro">
            <h3>Una buena idea merece<br /><span>un siguiente paso.</span></h3>
            <p className="contact-intro-text">¿Buscas desarrollar un producto o sumar a alguien a tu equipo? Cuéntame qué necesitas y encontremos la forma de hacerlo realidad.</p>
            <div className="contact-actions" aria-label="Contacto y redes">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-social-button" aria-label="Enviar correo electrónico" title="Enviar correo electrónico">
                <HugeiconsIcon icon={Mail01Icon} size={24} />
              </a>
              <a href="https://github.com/CastilloDevX" target="_blank" rel="noreferrer" className="contact-social-button" aria-label="Visitar mi GitHub" title="Visitar mi GitHub">
                <HugeiconsIcon icon={GithubIcon} size={24} />
              </a>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={28} delay={0.1}>
            <form className="contact-form" onSubmit={submitMessage} onChange={() => { requestId.current = null; }} aria-label="Formulario de contacto" aria-busy={status.type === "sending"}>
              <div className="contact-form-heading"><span className="contact-form-icon"><HugeiconsIcon icon={Message01Icon} size={22} /></span><div><h3>Cuéntame qué tienes en mente</h3><p>Empecemos con una conversación.</p></div></div>
              <fieldset disabled={status.type === "sending"}>
                <legend className="sr-only">Datos de contacto y mensaje</legend>
                <div className="contact-field-row">
                  <label>Tu nombre<input name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={80} /></label>
                  <label>Tu correo<input name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required maxLength={254} /></label>
                </div>
                <label>Me gustaría hablar sobre<select name="topic" defaultValue="proyecto">{Object.entries(CONTACT_TOPICS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                <label>Tu mensaje<textarea name="message" rows={5} placeholder="Cuéntame un poco sobre tu proyecto, equipo o idea…" required minLength={10} maxLength={1500} aria-describedby="contact-message-hint" /></label>
                <p id="contact-message-hint" className="contact-field-hint">Comparte lo esencial. Podemos conversar sobre los detalles después.</p>
                <div className="contact-honeypot" aria-hidden="true"><label>Deja este campo vacío<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
                <button type="submit" className="contact-submit"><span>{status.type === "sending" ? "Enviando…" : "Enviar mensaje"}</span><HugeiconsIcon icon={status.type === "success" ? Tick02Icon : SentIcon} size={20} /></button>
              </fieldset>
              <p className="contact-form-note">Tu mensaje llegará directamente a mi correo.</p>
              <div className={`contact-form-status is-${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</div>
            </form>
          </AnimatedContent>
        </div>
      </div>
    </PageSection>
  );
}
