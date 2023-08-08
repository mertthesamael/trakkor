import BottomCtaSection from "@/containers/bottom-cta-section";
import BrandsSection from "@/containers/brands-section";
import ControlSection from "@/containers/control-section";
import CtaTitleSection from "@/containers/cta-title-section";
import DiagramSection from "@/containers/diagram-section";
import HeroSection from "@/containers/hero-section";
import ManagementSection from "@/containers/management-section";
import StatsSection from "@/containers/stats-section";
import TeamSection from "@/containers/team-section";
import TestimonialSection from "@/containers/testimonial-section";
import ToolsSection from "@/containers/tools-section";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <CtaTitleSection />
      <TeamSection />
      <DiagramSection />
      <ToolsSection />
      <ManagementSection />
      <StatsSection />
      <ControlSection />
      <TestimonialSection />
      <BottomCtaSection />
    </main>
  )
}
