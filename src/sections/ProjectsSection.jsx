import { useMemo } from "react";
import PageSection from "../components/layout/PageSection.jsx";
import ScrollReveal from "../components/motion/ScrollReveal.jsx";
import SolidIcon from "../components/ui/SolidIcon.jsx";
import { featuredProjects, projectRecruiterBriefs } from "../data/portfolio.js";
import SectionTitle from "../components/common/SectionTitle.jsx";

export default function ProjectsSection() {
  const projects = useMemo(
    () =>
      [...featuredProjects].sort(
        (left, right) => new Date(right.sortDate) - new Date(left.sortDate)
      ),
    []
  );

  if (!projects.length) {
    return null;
  }

  return (
    <PageSection id="projects" className="project-timeline-section">
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <div className="project-timeline" aria-label="Línea de tiempo de proyectos destacados">
        {projects.map((project, index) => (
          <ProjectTimelineItem
            key={project.id}
            index={index}
            project={project}
          />
        ))}
      </div>
    </PageSection>
  );
}

function ProjectTimelineItem({ project, index }) {
  const isReversed = index % 2 === 1;
  const links = getProjectLinks(project);
  const brief = projectRecruiterBriefs[project.id] ?? getFallbackBrief(project);
  const award = getProjectAward(project);

  return (
    <ScrollReveal
      as="article"
      className={`project-timeline-item ${isReversed ? "is-reversed" : ""}`}
      variant={isReversed ? "media-right" : "media-left"}
      delay={Math.min(index * 35, 180)}
    >
      <div className="project-timeline-node" aria-hidden="true">
        <span>{formatCount(index + 1)}</span>
      </div>

      <div className="project-timeline-media">
        {project.previewImage ? (
          <>
            <img
              src={project.previewImage}
              alt={`${project.title} - imagen representativa`}
              loading={index < 2 ? "eager" : "lazy"}
            />
            {award ? <ProjectAward award={award} placement="media" /> : null}
          </>
        ) : null}
      </div>

      <div className="project-timeline-copy">
        {award ? <ProjectAward award={award} placement="copy" /> : null}
        <p className="project-timeline-kicker">
          {project.createdAt}
        </p>
        <h3>{project.title}</h3>

        <div className="project-timeline-brief">
          <p>{renderRichText(brief)}</p>
        </div>

        {links.length ? (
          <div className="project-timeline-footer">
            <div className="project-timeline-links" aria-label={`Enlaces de ${project.title}`}>
              {links.map((link) =>
                link.url ? (
                  <a
                    key={`${link.type}-${link.url}`}
                    className={`project-timeline-link is-${link.type}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title}: ${link.tooltip}`}
                    title={link.tooltip}
                  >
                    <SolidIcon name={link.icon} className="h-5 w-5" />
                  </a>
                ) : (
                  <span
                    key={`${link.type}-${link.label}`}
                    className={`project-timeline-link is-${link.type}`}
                    aria-label={`${project.title}: ${link.tooltip}`}
                    aria-disabled="true"
                    title={link.tooltip}
                  >
                    <span className="project-timeline-link-label">{link.label}</span>
                  </span>
                )
              )}
            </div>
          </div>
        ) : null}
      </div>
    </ScrollReveal>
  );
}

function ProjectAward({ award, placement }) {
  return (
    <span className={`project-award-frame is-${placement}`}>
      <SolidIcon name="trophy" className="h-5 w-5" />
      <span className="project-award-copy">
        <strong>{award.label}</strong>
        <span>{award.detail}</span>
      </span>
    </span>
  );
}

function renderRichText(segments) {
  return segments.map((segment, index) =>
    segment.emphasis ? (
      <strong key={`${segment.text}-${index}`}>{segment.text}</strong>
    ) : (
      <span key={`${segment.text}-${index}`}>{segment.text}</span>
    )
  );
}

function getProjectLinks(project) {
  const repositories = (project.repositories ?? []).map((link) =>
    normalizeProjectLink(link, "repository")
  );
  const previews = (project.previews ?? []).map((link) => normalizeProjectLink(link, "preview"));

  return [...repositories, ...previews].filter(
    (link) => link.url || link.type === "coming-soon"
  );
}

function getFallbackBrief(project) {
  const summary = project.summary ?? project.description ?? project.tagline ?? "";

  return [
    {
      text: `${compactText(summary, 220)} Demuestra criterio para convertir una necesidad real en una solución funcional, presentable y mantenible.`,
    },
  ];
}

function getProjectAward(project) {
  const status = `${project.status ?? ""}`.toLowerCase();

  if (project.id === "educamp" || status.includes("top #1") || status.includes("top 1")) {
    return {
      label: "Top #1",
      detail: "Hackathon TCS Empowers",
    };
  }

  if (project.id === "im-king" || (status.includes("gamejam") && status.includes("campe"))) {
    return {
      label: "Champion",
      detail: "Roblox Gamejam DevRel",
    };
  }

  if (project.id === "gericam" || (status.includes("top 4") && status.includes("tcs"))) {
    return {
      label: "Top 4",
      detail: "Hackathon TCS Empowers 2023",
    };
  }

  if (project.id === "space-vision" || status.includes("top 4")) {
    return {
      label: "Top 4",
      detail: "NASA Space Apps",
    };
  }

  return null;
}

function normalizeProjectLink(link, fallbackType) {
  const type = normalizeLinkType(link.type ?? inferLinkType(link.label, link.url, fallbackType));

  return {
    ...link,
    type,
    icon: getLinkIcon(type),
    tooltip: getLinkTooltip(type, link.label),
  };
}

function inferLinkType(label, url, fallbackType) {
  const value = normalizeSearchText(`${label ?? ""} ${url ?? ""}`);

  if (value.includes("github.com") || value.includes("github")) {
    return "github";
  }

  if (value.includes("docs") || value.includes("documentacion")) {
    return "docs";
  }

  if (
    value.includes("roblox.com") ||
    value.includes("jugar") ||
    value.includes("/games/") ||
    value.includes("game")
  ) {
    return "game";
  }

  if (
    value.includes("website") ||
    value.includes("sitio") ||
    value.includes("vercel.app") ||
    value.includes("app en vivo")
  ) {
    return "site";
  }

  return fallbackType;
}

function normalizeLinkType(type) {
  const value = `${type ?? ""}`.trim().toLowerCase();

  if (value === "repository" || value === "repo" || value === "source") {
    return "github";
  }

  if (value === "preview" || value === "live" || value === "website") {
    return "site";
  }

  if (value === "comingsoon" || value === "coming-soon" || value === "soon") {
    return "coming-soon";
  }

  return value;
}

function getLinkIcon(type) {
  switch (type) {
    case "github":
      return "github";
    case "docs":
      return "document";
    case "game":
      return "gamepad";
    case "site":
      return "globe";
    case "coming-soon":
      return "sparkles";
    default:
      return "externalLink";
  }
}

function getLinkTooltip(type, label) {
  const fallback = {
    github: "Repositorio",
    docs: "Documentación",
    game: "Jugar proyecto",
    site: "Sitio en vivo",
    "coming-soon": "Próximamente",
  };

  return label || fallback[type] || "Abrir enlace";
}

function compactText(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  const trimmed = value.slice(0, maxLength).trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  const compacted = lastSpace > 80 ? trimmed.slice(0, lastSpace) : trimmed;

  return `${compacted}.`;
}

function formatCount(value) {
  return String(value).padStart(2, "0");
}

function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
