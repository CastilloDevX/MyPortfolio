import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function IconCarousel({ items = [], autoPlay = true, speed = 1800 }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const buttonRefs = useRef([]);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });
  const tooltipId = useId();
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [dismissed, setDismissed] = useState(false);
  const tooltipIndex = dismissed ? null : hoveredIndex ?? focusedIndex;
  const paused = hovered || focusedIndex !== null;
  const total = items.length;

  useEffect(() => {
    if (!autoPlay || total <= 1 || paused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % total);
    }, speed);

    return () => window.clearInterval(intervalId);
  }, [autoPlay, speed, total, paused]);

  const positionTooltip = (node) => {
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setTooltipPosition({
      left: Math.max(128, Math.min(window.innerWidth - 128, rect.left + rect.width / 2)),
      top: rect.bottom + 48 <= window.innerHeight ? rect.bottom + 10 : Math.max(8, rect.top - 42),
    });
  };

  useEffect(() => {
    if (tooltipIndex === null) return;
    const update = () => positionTooltip(buttonRefs.current[tooltipIndex]);
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [tooltipIndex]);

  if (!total) {
    return null;
  }

  const next = () => setCurrent((previous) => (previous + 1) % total);
  const prev = () => setCurrent((previous) => (previous - 1 + total) % total);
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (event) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;

    touchStartX.current = null;

    if (startX === null || endX === null) {
      return;
    }

    const distance = startX - endX;

    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance > 0) {
      next();
      return;
    }

    prev();
  };

  return (
    <ScrollReveal variant="carousel" className="w-full">
      <div
        className="technology-carousel relative h-[10rem] w-full"
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => { setHovered(false); setHoveredIndex(null); }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocusedIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") { setDismissed(true); event.stopPropagation(); }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-12">
          {items.map((item, index) => {
            const offset = getOffset(index, current, total);
            const distance = Math.abs(offset);
            const opacity = Math.max(0.18, 1 - distance * 0.24);
            const scale = Math.max(0.52, 1 - distance * 0.14);
            const translateY = distance === 0 ? -4 : distance === 1 ? 12 : 24;

            return (
              <button
                key={item.label}
                type="button"
                ref={(node) => { buttonRefs.current[index] = node; }}
                aria-label={item.label}
                aria-describedby={tooltipIndex === index ? tooltipId : undefined}
                tabIndex={distance <= 1 ? 0 : -1}
                data-current={offset === 0 ? "true" : undefined}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") { setHoveredIndex(index); setDismissed(false); positionTooltip(event.currentTarget); }
                }}
                onFocus={(event) => { setFocusedIndex(index); setDismissed(false); positionTooltip(event.currentTarget); }}
                onClick={(event) => { setDismissed(false); positionTooltip(event.currentTarget); }}
                className="technology-icon absolute h-[4.5rem] w-[4.5rem] md:h-[5.5rem] md:w-[5.5rem]"
                style={{
                  transform: `translate(${offset * 7.5}rem, ${translateY}px) scale(${scale})`,
                  opacity: tooltipIndex === index ? 1 : opacity,
                  filter: distance > 1 && tooltipIndex !== index ? "blur(2px)" : "none",
                }}
              >
                <img src={item.src} alt="" loading="lazy" className="h-full w-full object-contain" draggable={false} />
              </button>
            );
          })}
        </div>
        {tooltipIndex !== null && items[tooltipIndex] ? createPortal(
          <span
            id={tooltipId}
            role="tooltip"
            className="technology-tooltip"
            style={tooltipPosition}
          >
            {items[tooltipIndex].label}
          </span>,
          document.body
        ) : null}
      </div>
    </ScrollReveal>
  );
}

function getOffset(index, current, total) {
  let offset = index - current;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}
