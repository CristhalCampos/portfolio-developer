'use client';

import { FaGithub, FaLightbulb, FaUserTie } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ 
  title, description, image, repo, tech = [], 
  context, challenges, role, status, featured 
}) => {
  return (
    <div
      className={`relative rounded-3xl shadow-xl overflow-hidden flex flex-col
                  bg-[var(--color-background)] border border-[var(--color-primary)]/10
                  transition-all duration-500 ease-out hover:shadow-[var(--color-primary)]/20 hover:shadow-2xl
                  ${featured ? 'lg:flex-row lg:items-stretch w-full' : 'w-full max-w-md'}`}
    >
      {/* SECCIÓN DE IMAGEN / STATUS */}
      <div className={`relative overflow-hidden bg-gray-100 ${featured ? 'lg:w-1/2 min-h-[250px]' : 'h-48 md:h-56'}`}>
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge de Estado */}
        {status && (
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/20">
            {status}
          </div>
        )}
      </div>

      {/* CONTENIDO TÉCNICO */}
      <div className={`p-6 md:p-8 flex flex-col justify-between ${featured ? 'lg:w-1/2' : 'w-full'}`}>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl md:text-2xl font-extrabold text-[var(--color-secondary)] tracking-tight">
              {title}
            </h3>
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-darker)] text-white transition-colors duration-300"
              title="Ver repositorio"
            >
              <FaGithub size={20} />
            </Link>
          </div>

          {/* Contexto del Producto */}
          <p className="text-sm md:text-base text-[var(--color-fg-secondary)] leading-relaxed font-medium">
            {description}
          </p>

          {/* Grid de detalles Pro (Solo si existen) */}
          <div className="grid grid-cols-1 gap-3 py-2">
            {role && (
              <div className="flex items-start gap-3 text-sm">
                <FaUserTie className="mt-1 text-[var(--color-primary)] shrink-0" />
                <p><span className="font-bold">Mi Rol:</span> {role}</p>
              </div>
            )}
            {challenges && (
              <div className="flex items-start gap-3 text-sm p-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-bg-primary)]">
                <FaLightbulb className="mt-1 text-yellow-600 shrink-0" />
                <p className="text-yellow-800"><span className="font-bold">Reto:</span> {challenges}</p>
              </div>
            )}
          </div>

          {/* TECH STACK MINIMALISTA */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-bg-primary)] text-[var(--color-bg-primary)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;