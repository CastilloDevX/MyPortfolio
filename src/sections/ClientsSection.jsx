import ClientCard from "../components/cards/ClientCard.jsx";
import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import Carousel from "../components/react-bits/Carousel.jsx";
import AnimatedContent from "../components/react-bits/AnimatedContent.jsx";
import { clients } from "../data/portfolio.js";

export default function ClientsSection() {
  return (
    <PageSection id="clients">
      <div className="relative mx-auto max-w-6xl">
        <GlowOrb
          color="blue"
          position="left-1/2 top-[58%]"
          translateX="-82%"
          translateY="-45%"
          className="scale-[0.84] opacity-90"
        />
        <GlowOrb
          color="purple"
          position="left-1/2 top-[58%]"
          translateX="10%"
          translateY="-38%"
          className="scale-[0.68] opacity-70"
        />
        <SectionTitle>Clientes</SectionTitle>

        <AnimatedContent distance={32} className="flex justify-center">
          <Carousel
            label="Testimonios de clientes"
            className="clients-carousel"
            baseWidth={980}
            aspectRatio={2.5}
            autoHeight="max"
            effect="tilt"
            indicator="dots"
            arrows
            loop
            autoplay={false}
            radius={24}
            items={clients.map((client) => (
              <ClientCard key={client.clientName} {...client} />
            ))}
          />
        </AnimatedContent>
      </div>
    </PageSection>
  );
}
