import GlowOrb from "../components/common/GlowOrb.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import ScrollReveal from "../components/motion/ScrollReveal.jsx";
import { heroContent } from "../data/portfolio.js";

export default function HeroSection() {
  return (
    <PageSection id="hero" className="pt-8 md:pt-10">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="order-2 flex justify-center lg:order-1">
          <ScrollReveal
            variant="media-left"
            className="relative w-full max-w-[300px] md:max-w-[420px] lg:max-w-[500px]"
          >
            <GlowOrb
              color="blue"
              position="left-1/2 top-1/2"
              translateX="-50%"
              translateY="-42%"
              className="scale-[0.86] opacity-90"
            />
            <img
              src={heroContent.image}
              alt="José Manuel Castillo Queh"
              className="animate-image-bob w-full rounded-full"
            />
          </ScrollReveal>
        </div>

        <div className="order-1 relative text-center lg:order-2 lg:text-left">
          <GlowOrb
            color="purple"
            position="left-1/2 top-1/2"
            translateX="-50%"
            translateY="-34%"
            className="scale-[0.95] opacity-95 lg:left-[32%]"
          />
          <ScrollReveal
            as="p"
            variant="media-right"
            className="mb-3 text-xl text-white/75 md:text-[28px] lg:text-[30px]"
          >
            {heroContent.role}
          </ScrollReveal>

          <ScrollReveal
            as="h1"
            delay={120}
            variant="title"
            className="m-0 text-5xl font-extrabold leading-[0.95] md:text-7xl lg:text-[5.5rem]"
          >
            {heroContent.name[0]}
            <br />
            {heroContent.name[1]}
          </ScrollReveal>
        </div>
      </div>
    </PageSection>
  );
}
