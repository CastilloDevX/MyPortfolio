import { useEffect, useMemo, useRef, useState } from "react";
import PageSection from "../components/layout/PageSection.jsx";
import SolidIcon from "../components/ui/SolidIcon.jsx";
import { featuredProjects } from "../data/portfolio.js";
import SectionTitle from "../components/common/SectionTitle.jsx";

export default function ProjectsSection() {
  const projects = useMemo(
    () =>
      [...featuredProjects].sort(
        (left, right) => new Date(right.sortDate) - new Date(left.sortDate)
      ),
    []
  );
  const sectionRef = useRef(null);
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [pinState, setPinState] = useState("before");
  const [isRailCollapsed, setIsRailCollapsed] = useState(false);

  useEffect(() => {
    if (!projects.length) {
      return undefined;
    }

    let frame = 0;

    const updateJourney = () => {
      frame = 0;

      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / travel, 0, 1);

      if (rect.top > 0) {
        setPinState("before");
      } else if (rect.bottom < window.innerHeight) {
        setPinState("after");
      } else {
        setPinState("fixed");
      }

      setJourneyIndex(progress * (projects.length - 1));
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateJourney);
      }
    };

    updateJourney();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [projects.length]);

  if (!projects.length) {
    return null;
  }

  const activeIndex = Math.round(journeyIndex);
  const activeProject = projects[activeIndex];
  const travelHeight = `${Math.max(420, projects.length * 88)}vh`;

  const scrollToProject = (index) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const travel = Math.max(1, section.offsetHeight - window.innerHeight);
    const progress = projects.length === 1 ? 0 : index / (projects.length - 1);

    window.scrollTo({
      top: sectionTop + travel * progress,
      behavior: "smooth",
    });
  };

  return (
    <PageSection id="projects" className="project-focus-section">
      <SectionTitle>Proyectos Destacados</SectionTitle>
      <div ref={sectionRef} className="project-focus-scroll" style={{ height: travelHeight }}>
        <div
          className={`project-focus-pin is-${pinState} ${
            isRailCollapsed ? "has-collapsed-rail" : "has-open-rail"
          }`}
          style={{
            "--project-accent": toGlowColor(activeProject.previewAccent, 0.36),
            "--project-accent-soft": toGlowColor(activeProject.previewAccent, 0.18),
            "--project-accent-alt": toGlowColor(
              activeProject.previewAccentAlt ?? activeProject.previewAccent,
              0.28
            ),
          }}
        >
          <aside
            className={`project-focus-rail ${isRailCollapsed ? "is-collapsed" : ""}`}
            aria-label="Navegacion de proyectos destacados"
          >
            <button
              className="project-focus-rail-toggle"
              type="button"
              aria-label={isRailCollapsed ? "Mostrar proyectos" : "Ocultar proyectos"}
              aria-expanded={!isRailCollapsed}
              onClick={() => setIsRailCollapsed((current) => !current)}
            >
              <SolidIcon name="menu" className="h-5 w-5" />
            </button>

            <div className="project-focus-rail-list">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`project-focus-rail-card ${index === activeIndex ? "is-active" : ""}`}
                  type="button"
                  aria-label={`Ver proyecto ${project.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => scrollToProject(index)}
                >
                  <span className="project-focus-rail-node" aria-hidden="true" />
                  <span className="project-focus-rail-copy">
                    <strong>{project.title}</strong>
                    <small>{project.createdAt}</small>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="project-focus-lights" aria-hidden="true" />
          <div className="project-focus-scene">
            {projects.map((project, index) => (
              <ProjectFocusItem
                key={project.id}
                index={index}
                total={projects.length}
                offset={index - journeyIndex}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}

function ProjectFocusItem({ project, index, total, offset }) {
  const distance = Math.abs(offset);
  const visibility = clamp(1 - distance * 1.25, 0, 1);
  const isActive = distance < 0.55;
  const direction = offset < 0 ? -1 : 1;
  const depth = Math.min(distance, 1.35);
  const imageY = offset * 92;
  const textY = offset * -72;
  const imageX = direction * Math.min(distance, 1) * -28;
  const textX = direction * Math.min(distance, 1) * 28;
  const blur = distance * 7;
  const scale = 1 - Math.min(distance, 1) * 0.08;
  const z = -depth * 220;
  const links = getProjectLinks(project);

  return (
    <article
      className="project-focus-item"
      aria-hidden={!isActive}
      style={{
        "--item-opacity": visibility,
        "--item-blur": `${blur}px`,
        "--item-accent": toGlowColor(project.previewAccent, 0.32),
        "--item-accent-soft": toGlowColor(project.previewAccent, 0.16),
        "--image-transform": `translate3d(${imageX}px, ${imageY}px, ${z}px) rotateY(${
          -offset * 8
        }deg) scale(${scale})`,
        "--text-transform": `translate3d(${textX}px, ${textY}px, ${z}px) rotateY(${
          offset * 8
        }deg) scale(${scale})`,
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      <div className="project-focus-image-card">
        {project.previewImage ? (
          <img src={project.previewImage} alt={`${project.title} preview`} loading={isActive ? "eager" : "lazy"} />
        ) : null}
        <span className="project-focus-image-glow" aria-hidden="true" />
      </div>

      <div className="project-focus-text-card">
        <p className="project-focus-eyebrow">
          {formatCount(index + 1)} / {formatCount(total)} - {project.createdAt}
        </p>
        <h3>{project.title}</h3>
        <p className="project-focus-category">{project.category}</p>
        <p className="project-focus-summary">
          {project.summary ?? project.description ?? project.tagline}
        </p>

        {links.length ? (
          <section className="project-focus-link-panel" aria-labelledby={`${project.id}-links-title`}>
            <h4 id={`${project.id}-links-title`}>Enlaces</h4>
            <div className="project-focus-links" aria-label="Enlaces del proyecto">
              {links.map((link) => (
                <a
                  key={`${link.type}-${link.url}`}
                  className={`project-focus-link is-${link.type}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.tooltip}
                >
                  <SolidIcon name={link.icon} className="h-5 w-5" />
                  <span className="project-focus-tooltip" role="tooltip">
                    {link.tooltip}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}

function getProjectLinks(project) {
  const repositories = (project.repositories ?? []).map((link) =>
    normalizeProjectLink(link, "repository")
  );
  const previews = (project.previews ?? []).map((link) => normalizeProjectLink(link, "preview"));

  return [...repositories, ...previews].filter((link) => link.url);
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
  const value = `${label ?? ""} ${url ?? ""}`.toLowerCase();

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

  if (value.includes("website") || value.includes("sitio") || value.includes("app en vivo")) {
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
    default:
      return "externalLink";
  }
}

function getLinkTooltip(type, label) {
  const fallback = {
    github: "Repositorio",
    docs: "Documentacion",
    game: "Jugar proyecto",
    site: "Sitio en vivo",
  };

  return label || fallback[type] || "Abrir enlace";
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatCount(value) {
  return String(value).padStart(2, "0");
}

function toGlowColor(hex, alpha) {
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
