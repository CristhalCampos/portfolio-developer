'use client';

import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, image, repo, tech = [] }) => {
  return (
    <div
      className={`relative rounded-2xl shadow-xl overflow-hidden
                  w-72 sm:w-80 md:w-[400px] lg:w-[450px]
                  bg-[var(--color-background)] text-[var(--color-foreground)]
                  transition-all duration-500 ease-out
                  hover:shadow-[var(--color-primary)]/40 hover:shadow-2xl`}
    >
      {/* IMAGEN DEL PROYECTO */}
      <div className="relative w-full h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-4 sm:p-5 flex flex-col items-start text-left">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--color-foreground)]/80 mb-3 sm:mb-4 leading-relaxed">
          {description}
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-[0.55rem] sm:text-xs font-medium px-1.5 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BOTÓN REPOSITORIO */}
        <div className="mt-auto">
          <Link
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full
                      bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-darker)]
                      transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaGithub className="text-sm sm:text-lg" /> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;