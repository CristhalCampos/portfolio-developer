'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import ScrollButtons from '../ScrollButtons';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projectsData';

export function ProjectsSection({ id }) {
  const [index, setIndex] = useState(0);

  const totalProjects = projectsData.length;

  const nextProject = useCallback(() => {
    setIndex((prev) => (prev + 1) % totalProjects);
  }, [totalProjects]);

  const prevProject = useCallback(() => {
    setIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  // Permitir controlar con flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  return (
    <motion.section
      id={id}
      className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center relative"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full max-w-5xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-[var(--color-secondary)]">
          Mis Proyectos
        </h2>

        {/* Contenedor del proyecto */}
        <div className="relative flex justify-center w-full">
          {projectsData.length > 0 ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full max-w-md sm:max-w-lg md:max-w-3xl flex justify-center"
            >
              <ProjectCard {...projectsData[index]} />
            </motion.div>
          ) : (
            <p className="text-lg sm:text-xl text-gray-500 mt-6 sm:mt-10">
              No hay proyectos disponibles aún.
            </p>
          )}

          {/* Botones anterior/siguiente */}
          <button
            onClick={prevProject}
            aria-label="Proyecto anterior"
            className="hidden absolute left-0 md:-left-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-foreground)] shadow-lg hover:scale-110 transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={nextProject}
            aria-label="Siguiente proyecto"
            className="hidden absolute right-0 md:-right-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-foreground)] shadow-lg hover:scale-110 transition-all"
          >
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {projectsData.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
                i === index ? 'bg-[var(--color-primary)] scale-110' : 'bg-gray-400/50'
              }`}
            />
          ))}
        </div>
      </div>

      <ScrollButtons prev="#about" next="#certifications" />
    </motion.section>
  );
}