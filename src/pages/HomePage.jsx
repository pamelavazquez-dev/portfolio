import React from 'react';
import RevealOnScroll from '../components/common/RevealOnScroll';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import EducationSection from '../components/sections/EducationSection';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import StackSection from '../components/sections/StackSection';

function HomePage() {
  return (
    <main>
      <RevealOnScroll immediate>
        <HeroSection />
      </RevealOnScroll>
      <RevealOnScroll delay={80}>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <ProjectsSection />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <StackSection />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <EducationSection />
      </RevealOnScroll>
      <RevealOnScroll delay={120}>
        <ContactSection />
      </RevealOnScroll>
    </main>
  );
}

export default HomePage;
