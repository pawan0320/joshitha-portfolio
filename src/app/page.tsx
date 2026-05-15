'use client';

import React, { useState, useEffect } from 'react';
import LoaderScreen from '@/components/LoaderScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';
import ParticleBackground from '@/components/ParticleBackground';
import CursorFollower from '@/components/CursorFollower';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <main className="relative w-full overflow-hidden bg-dark-black">
      <ParticleBackground />
      <CursorFollower />
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="certifications">
        <CertificationsSection />
      </section>

      <section id="timeline">
        <TimelineSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <footer className="bg-black border-t border-cyan-neon/20 py-6 text-center text-sm text-gray-400">
        <p>© 2024 Joshitha Dantam. Futuristic Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
