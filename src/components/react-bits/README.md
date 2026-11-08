# React Bits components

JavaScript components sourced from https://github.com/DavidHDev/react-bits:

- TextAnimations/ScrollFloat: https://reactbits.dev/text-animations/scroll-float
- Animations/ScrollExpand: https://reactbits.dev/animations/scroll-expand
- Animations/AnimatedContent: https://reactbits.dev/animations/animated-content

GSAP is installed through npm. The upstream license is preserved in LICENSE.md.

Local adaptations:
- ScrollFloat supports semantic heading tags and inherits portfolio typography.
- ScrollExpand supports an `inline` mode for page-driven expansion within each
  existing thumbnail, without nested scrollbars or full-screen pinned sections.
  It preserves the whole thumbnail, lazy-loads offscreen media, skips unchanged
  progress updates and responds to reduced-motion preference changes.
- AnimatedContent supports semantic wrapper tags, keeps content readable before
  effects initialize and responds to reduced-motion preference changes.
- Effects clean up on unmount, including React StrictMode remounts.
- SectionTitle uses ScrollFloat; the existing ScrollReveal adapter routes general
  content through AnimatedContent, preserving layout, direction and delay props.

- Components/Carousel: https://reactbits.dev/components/carousel. Used in Clients
  with custom testimonial cards, Spanish navigation labels, inactive-slide
  accessibility isolation and optional `autoHeight` measured from the active
  custom card with ResizeObserver. Set `autoHeight="max"` to reserve the tallest
  custom card and keep navigation stationary between testimonials. `--carousel-min-height` remains available
  for fixed-ratio cards. Hugeicons dependencies are installed through npm.
  Ref updates run in layout effects; reduced-motion changes are handled live.
