export default function ClientCard({
  testimonial,
  clientAvatar,
  clientName,
  clientPosition,
  clientAvatarOnWhite = false,
}) {
  const initial = clientName?.trim().charAt(0).toUpperCase() || "?";

  return (
    <article className="client-testimonial">
      <div className={`client-testimonial-avatar${clientAvatarOnWhite ? " is-logo" : ""}`}>
        {clientAvatar ? (
          <img src={clientAvatar} alt={clientName} loading="lazy" draggable={false} />
        ) : (
          <span aria-hidden="true">{initial}</span>
        )}
      </div>
      <div className="client-testimonial-copy">
        <blockquote>“{testimonial}”</blockquote>
        <p className="client-testimonial-name">{clientName}</p>
        <p className="client-testimonial-role">{clientPosition}</p>
      </div>
    </article>
  );
}
