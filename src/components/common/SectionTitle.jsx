import ScrollFloat from "../react-bits/ScrollFloat.jsx";

export default function SectionTitle({ children, className = "" }) {
  return (
    <ScrollFloat containerClassName={`section-title ${className}`} scrollStart="top bottom" scrollEnd="top 60%" stagger={0.025}>
      {children}
    </ScrollFloat>
  );
}
