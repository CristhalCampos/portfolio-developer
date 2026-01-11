'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TechnologiesSection } from './TechnologiesSection';

export function AboutSection({ id }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-10 overflow-x-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Contenedor principal */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-[var(--color-primary)] text-center">
          Sobre Mí
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
          
          {/* Contenedor de Imagen */}
          <div className="relative flex-shrink-0 group">
            <Image
              src="/foto.jpg"
              alt="Imagen de perfil de Cristhal Campos"
              width={220}
              height={220}
              priority
              className="relative rounded-2xl border-2 border-[var(--color-primary)] object-cover
                         w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60"
            />
          </div>

          {/* Bloque de Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-base md:text-xl leading-relaxed text-[var(--color-fg-secondary)]">
              Soy desarrolladora web fullstack con experiencia especialmente en el stack MERN (MongoDB, Express, React, Node) y Next + Supabase.
            </p>
            
            <p className="mt-4 text-sm md:text-lg leading-relaxed text-[var(--color-fg-secondary)]">
              He desarrollado proyectos propios complejos, participado en hackathons y trabajado en sistemas reales de e-commerce y manejo de datos financieros.
              Además, he desempeñado roles de mentoría técnica, lo que ha fortalecido mi comunicación, liderazgo y pensamiento estructurado.
            </p>
          </div>
        </div>

        {/* Sección de Tecnologías */}
        <div className="w-full pt-12 md:pt-20">
          <TechnologiesSection id="technologies" />
        </div>
      </div>
    </motion.section>
  );
}