import AnimatedContent from "../react-bits/AnimatedContent.jsx";

// Preserve existing layout and millisecond delays while using React Bits throughout.
export default function ScrollReveal({
  as = "div",
  children,
  className = "",
  variant = "text",
  delay = 0,
}) {
  const horizontal = variant === "media-left" || variant === "media-right";

  return (
    <AnimatedContent
      as={as}
      className={className}
      distance={horizontal ? 44 : variant === "carousel" ? 24 : 36}
      direction={horizontal ? "horizontal" : "vertical"}
      reverse={variant === "media-left"}
      duration={0.8}
      ease="power3.out"
      threshold={0.1}
      delay={delay / 1000}
    >
      {children}
    </AnimatedContent>
  );
}
