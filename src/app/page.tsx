import HeroSection from "@/app/templates/HeroSection";
import AboutSection from "@/app/organisms/AboutSection";
import EducationSection from "@/app/organisms/EducationSection";
import SkillsSection from "@/app/organisms/SkillsSection";
import ExperienceSection from "@/app/organisms/ExperienceSection";
import ProjectsSection from "@/app/organisms/ProjectsSection";
import ContactSection from "@/app/organisms/ContactSection";

export default function Home() {
  return (
    <main className="bg-bg text-text-light">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
