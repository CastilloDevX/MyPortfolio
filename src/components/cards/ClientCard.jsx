import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function ClientCard({
  testimonial,
  clientAvatar,
  clientName,
  clientPosition,
}) {
  const initial = getClientInitial(clientName);

  return (
    <ScrollReveal
      as="article"
      variant="card"
      className="mx-auto flex min-h-[24rem] w-full max-w-[920px] flex-col justify-center gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-5 text-center md:min-h-[25rem] md:p-7 lg:min-h-[22rem] lg:flex-row lg:items-center lg:gap-8 lg:text-left"
    >
      <div className="flex h-[140px] items-center justify-center lg:h-[190px] lg:w-[190px] lg:flex-shrink-0">
        {clientAvatar ? (
          <img
            src={clientAvatar}
            alt={clientName}
            loading="lazy"
            className="aspect-square w-[140px] rounded-full object-cover sm:w-[165px] md:w-[185px] lg:w-[190px]"
          />
        ) : (
          <div className="flex aspect-square w-[140px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.72),rgba(147,51,234,0.72))] text-5xl font-black uppercase text-white shadow-[0_24px_70px_rgba(59,130,246,0.28)] sm:w-[165px] md:w-[185px] lg:w-[190px]">
            {initial}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <p className="mb-4 min-h-[8.5rem] text-sm italic leading-7 text-white/85 sm:min-h-[8rem] sm:text-base md:min-h-[8.5rem] md:text-lg lg:min-h-[9.5rem]">
          "{testimonial}"
        </p>
        <p className="text-sm text-white/75 sm:text-base md:text-lg">
          <span className="text-base font-bold text-white sm:text-lg md:text-xl">
            {clientName}
          </span>{" "}
          {clientPosition}
        </p>
      </div>
    </ScrollReveal>
  );
}

function getClientInitial(clientName) {
  if (!clientName?.trim()) {
    return "?";
  }

  return clientName.trim().charAt(0).toUpperCase();
}
