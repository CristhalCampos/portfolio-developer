'use client';

import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, image, repo, tech = [] }) => {
  return (
    <div
      className={`relative rounded-2xl shadow-xl overflow-hidden
                  w-[85%]
                  bg-[var(--color-background)] text-[var(--color-foreground)]
                  transition-all duration-500 ease-out hover:shadow-[var(--color-primary)]/40 hover:shadow-2xl`}
    >
      {/* IMAGEN */}
      <div className="relative w-full h-40 md:h-52 overflow-hidden">
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-4 sm:p-6 flex flex-col items-start text-left">
        <h3 className="text-lg sm:text-2xl font-bold mb-2 text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[var(--color-foreground)]/80 mb-4 leading-relaxed">
          {description}
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-[0.6rem] sm:text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* BOTÓN */}
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full
                    bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-darker)]
                    transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
        >
          <FaGithub className="text-base sm:text-lg" /> GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;