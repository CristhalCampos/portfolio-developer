'use client';

import React, { useEffect } from 'react';
import { HomeSection  } from '../components/sections/HomeSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function SPAContainer() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let current = 0;

    const handleKey = (e) => {
      if (e.key === 'ArrowDown' && current < sections.length - 1) {
        current++;
        sections[current].scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' && current > 0) {
        current--;
        sections[current].scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <CertificationsSection id="certifications" />
      <ContactSection id="contact" />
    </div>
  );
}