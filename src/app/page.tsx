import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import { ProjectSection } from "@/components/home/project-section";
import ServiceSection from "@/components/home/service-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
