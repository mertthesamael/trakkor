import BrandsSection from "@/containers/brands-section";
import CtaTitleSection from "@/containers/cta-title-section";
import DiagramSection from "@/containers/diagram-section";
import HeroSection from "@/containers/hero-section";
import TeamSection from "@/containers/team-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <CtaTitleSection />
      <TeamSection />
      <DiagramSection />
    </main>
  )
}
