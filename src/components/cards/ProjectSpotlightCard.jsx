import SolidIcon from "../ui/SolidIcon.jsx";

export default function ProjectSpotlightCard({ project }) {
  const accent = project.previewAccent ?? "#ffffff";
  const accentAlt = project.previewAccentAlt ?? accent;
  const description = project.summary ?? project.description ?? project.tagline ?? "";
  const projectLinks = [
    ...project.repositories.map((link) =>
      resolveProjectLink(link, "github", accent)
    ),
    ...project.previews.map((link) =>
      resolveProjectLink(link, "external", accent)
    ),
  ];
  const statusMeta = getStatusMeta(project.status, project.statusType, accent);

  return (
    <article
      className="project-spotlight-card relative flex min-h-0 flex-col overflow-hidden rounded-[1.55rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),rgba(4,6,12,0.24)] p-4 backdrop-blur-sm md:p-5"
      style={{
        "--card-accent": toAlpha(accent, 0.42),
        "--card-accent-soft": toAlpha(accent, 0.18),
        "--card-accent-alt": toAlpha(accentAlt, 0.24),
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 14% 18%, ${toAlpha(accent, 0.18)}, transparent 26%), radial-gradient(circle at 84% 20%, ${toAlpha(
            accentAlt,
            0.12
          )}, transparent 24%)`,
        }}
      />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <ProjectPreview project={project} accent={accent} accentAlt={accentAlt} />

        <div className="project-panel-scroll mt-4 min-h-0 max-h-[500px] overflow-y-auto pr-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="max-w-4xl">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase text-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <SolidIcon name="layers" className="h-3.5 w-3.5 text-white/76" />
                {project.category}
              </p>
              <h3 className="max-w-4xl text-3xl font-black leading-[0.98] text-white md:text-[2.8rem]">
                {project.title}
              </h3>
              <CreationMeta accent={accent} createdAt={project.createdAt} />
            </div>

            <StatusBadge label={project.status} meta={statusMeta} />
          </div>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/72 md:text-base">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.13)]"
                style={{
                  backgroundColor: toAlpha(accent, 0.15),
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {projectLinks.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {projectLinks.map((link) => (
                <ProjectActionLink key={link.url} href={link.url} link={link} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectPreview({ project, accent, accentAlt }) {
  return (
    <div
      className="project-preview-3d relative h-[240px] flex-none overflow-hidden rounded-[1.35rem] bg-transparent md:h-[320px] xl:h-[380px]"
      style={{
        "--preview-accent": toAlpha(accent, 0.38),
        "--preview-accent-alt": toAlpha(accentAlt, 0.28),
      }}
    >
      {project.previewImage ? (
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.24),transparent_20%,transparent_70%,rgba(255,255,255,0.1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_20%,transparent_0,transparent_45%,rgba(0,0,0,0.5)_100%)]" />
      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between gap-3 rounded-[1rem] bg-black/32 px-4 py-3 text-white shadow-[0_20px_55px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md">
        <span className="min-w-0">
          <span className="block truncate text-xs font-semibold uppercase text-white/54">
            Vista del proyecto
          </span>
          <span className="mt-1 block truncate text-sm font-bold text-white/95">
            {project.previewLabel ?? project.title}
          </span>
        </span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-white shadow-[0_10px_22px_rgba(0,0,0,0.22)]">
          <SolidIcon name="sparkles" className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

function CreationMeta({ accent, createdAt }) {
  return (
    <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/70">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full shadow-[0_10px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.16)]"
        style={{
          backgroundColor: toAlpha(accent, 0.12),
        }}
      >
        <SolidIcon name="calendar" className="h-4 w-4 text-white" />
      </span>
      <span>Creado el {createdAt}</span>
    </div>
  );
}

function StatusBadge({ label, meta }) {
  return (
    <span
      className="inline-flex max-w-full items-center gap-2 rounded-[1rem] px-2.5 py-2 text-[11px] font-semibold text-white md:text-xs"
      style={{
        background: `linear-gradient(135deg, ${toAlpha(meta.color, 0.24)}, ${toAlpha(
          meta.colorAlt,
          0.12
        )})`,
        boxShadow: `0 18px 38px ${toAlpha(meta.color, 0.14)}, inset 0 1px 0 rgba(255,255,255,0.14)`,
      }}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.85rem]"
        style={{
          backgroundColor: toAlpha(meta.color, 0.18),
          boxShadow: `0 12px 28px ${toAlpha(meta.color, 0.15)}`,
        }}
      >
        <SolidIcon name={meta.icon} className="h-4 w-4 text-white" />
      </span>
      <span className="leading-relaxed text-white/95">{label}</span>
    </span>
  );
}

function ProjectActionLink({ href, link }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-w-[175px] max-w-full items-center gap-3 rounded-[1.15rem] px-3.5 py-3 text-left text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.015]"
      style={{
        background: `linear-gradient(135deg, ${toAlpha(link.color, 0.22)}, ${toAlpha(
          link.colorAlt,
          0.08
        )} 58%, rgba(7,10,16,0.42))`,
        boxShadow: `0 18px 42px ${toAlpha(link.color, 0.13)}, inset 0 1px 0 rgba(255,255,255,0.12)`,
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem]"
        style={{
          backgroundColor: toAlpha(link.color, 0.2),
          boxShadow: `0 12px 28px ${toAlpha(link.color, 0.16)}`,
        }}
      >
        <SolidIcon name={link.icon} className="h-5 w-5 text-white" />
      </span>

      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/58">
          {link.typeLabel}
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-white/95">
          {link.label}
        </span>
      </span>
    </a>
  );
}

function resolveProjectLink(link, variant, accent) {
  const type = normalizeLinkType(link.type ?? inferLinkType(link, variant));
  const meta = getLinkTypeMeta(type, accent);

  return {
    ...link,
    ...meta,
    type,
  };
}

function inferLinkType(link, variant) {
  const value = `${link.label ?? ""} ${link.url ?? ""}`.toLowerCase();

  if (variant === "github" || value.includes("github")) {
    return "repo";
  }

  if (value.includes("doc")) {
    return "docs";
  }

  if (
    value.includes("jugar") ||
    value.includes("roblox.com") ||
    value.includes("/games/")
  ) {
    return "game";
  }

  if (
    value.includes("website") ||
    value.includes("sitio") ||
    value.includes("vercel.app") ||
    value.includes("github.io") ||
    value.includes("app")
  ) {
    return "site";
  }

  return variant === "external" ? "site" : "repo";
}

function normalizeLinkType(type) {
  const value = `${type ?? ""}`.trim().toLowerCase();

  if (value === "github") {
    return "repo";
  }

  if (value === "website" || value === "web" || value === "external") {
    return "site";
  }

  if (value === "documentation") {
    return "docs";
  }

  return value;
}

function getLinkTypeMeta(type, accent) {
  switch (type) {
    case "repo":
      return {
        typeLabel: "Repositorio",
        color: "#a78bfa",
        colorAlt: "#7c3aed",
        icon: "github",
      };
    case "docs":
      return {
        typeLabel: "Documentacion",
        color: "#38bdf8",
        colorAlt: "#0ea5e9",
        icon: "document",
      };
    case "game":
      return {
        typeLabel: "Juego",
        color: "#f59e0b",
        colorAlt: "#fb7185",
        icon: "gamepad",
      };
    case "site":
      return {
        typeLabel: "Sitio web",
        color: "#34d399",
        colorAlt: "#22c55e",
        icon: "globe",
      };
    default:
      return {
        typeLabel: "Enlace",
        color: accent ?? "#ffffff",
        colorAlt: accent ?? "#ffffff",
        icon: "externalLink",
      };
  }
}

function getStatusMeta(status, explicitType, accent) {
  const type = normalizeStatusType(explicitType ?? inferStatusType(status));

  switch (type) {
    case "live":
      return {
        color: "#34d399",
        colorAlt: "#22c55e",
        icon: "rocket",
      };
    case "open-source":
      return {
        color: "#22d3ee",
        colorAlt: "#38bdf8",
        icon: "sparkles",
      };
    case "prototype":
      return {
        color: "#f59e0b",
        colorAlt: "#f97316",
        icon: "flask",
      };
    case "award":
      return {
        color: "#f472b6",
        colorAlt: "#c084fc",
        icon: "trophy",
      };
    case "completed":
      return {
        color: "#60a5fa",
        colorAlt: "#38bdf8",
        icon: "checkCircle",
      };
    default:
      return {
        color: accent ?? "#ffffff",
        colorAlt: accent ?? "#ffffff",
        icon: "sparkles",
      };
  }
}

function inferStatusType(status) {
  const value = `${status ?? ""}`.toLowerCase();

  if (value.includes("open source")) {
    return "open-source";
  }

  if (value.includes("prototipo")) {
    return "prototype";
  }

  if (
    value.includes("hackathon") ||
    value.includes("top") ||
    value.includes("campeon") ||
    value.includes("champion") ||
    value.includes("gamejam")
  ) {
    return "award";
  }

  if (value.includes("terminado")) {
    return "completed";
  }

  if (
    value.includes("desplegado") ||
    value.includes("publicado") ||
    value.includes("en vivo")
  ) {
    return "live";
  }

  return "custom";
}

function normalizeStatusType(type) {
  const value = `${type ?? ""}`.trim().toLowerCase();

  if (value === "opensource") {
    return "open-source";
  }

  if (value === "published") {
    return "live";
  }

  return value;
}

function toAlpha(hex, alpha) {
  if (!hex?.startsWith("#")) {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  const value = hex.slice(1);
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
