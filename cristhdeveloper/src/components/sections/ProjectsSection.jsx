'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projectsData';

export function ProjectsSection({ id }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const uniqueTechs = ['All', ...new Set(projectsData.flatMap((p) => p.tech))];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <motion.section
      id={id}
      className="min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-10 text-center relative"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-[var(--color-primary)]">
          Mis Proyectos
        </h1>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {uniqueTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-3 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                tech === activeFilter
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 md:gap-10">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-lg text-gray-500 mt-10">
            No hay proyectos en esta categoría.
          </p>
        )}
      </div>
    </motion.section>
  );
}