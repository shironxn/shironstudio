import AboutSection from "@/components/home/about-section";
import HeroSection from "@/components/home/hero-section";
import { WorksSection } from "@/components/home/works-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WorksSection />
    </div>
  );
}
