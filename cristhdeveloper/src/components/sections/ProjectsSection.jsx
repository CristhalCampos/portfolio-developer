'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projectsData';

export function ProjectsSection({ id }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const uniqueTechs = useMemo(() => 
    ['All', ...new Set(projectsData.flatMap((p) => p.tech))], 
  []);

  const filteredProjects = useMemo(() => {
    let filtered = projectsData;
    if (activeFilter !== 'All') {
      filtered = projectsData.filter((p) => p.tech.includes(activeFilter));
    }
    // Ordenar para que los "featured" salgan primero
    return [...filtered].sort((a, b) => (b.featured ? 1 : -1));
  }, [activeFilter]);

  return (
    <motion.section
      id={id}
      className="min-h-screen py-20 px-6 bg-[var(--color-bg)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[var(--color-primary)]">
            Mis Proyectos
          </h2>
        </header>

        {/* FILTROS ESTILIZADOS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {uniqueTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                tech === activeFilter
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'bg-[var(--color-bg-primary)] border border-[var(--color-bg-primary)] text-[var(--color-bg-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* GRILLA DE PROYECTOS CON ANIMACIÓN */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // Si es Kirtily y no hay filtro, hacerlo destacar
                className={project.featured && activeFilter === 'All' ? "lg:col-span-2" : ""}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-400 mt-20">
            No se encontraron proyectos con esta tecnología.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}