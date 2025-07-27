'use client';

import ProjectCard from '../../components/ProjectCard';
import { useTheme } from '../../context/ThemeContext';

const projects = [
  {
    title: 'Books Online',
    description: 'E-commerce para venta y lectura de libros en línea, con lector integrado, descargas y audiolibros.',
    image: '/projects/books-online.png',
    repo: 'https://github.com/cristhdeveloper/books-online',
  },
  {
    title: 'Kirtily Social',
    description: 'Red social para compartir hobbies, con planes premium y traducción automática de publicaciones.',
    image: '/projects/kirtily-social.png',
    repo: 'https://github.com/cristhdeveloper/kirtily',
  },
  {
    title: 'ClimaApp',
    description: 'Aplicación web que muestra el clima actual por ciudad usando APIs abiertas.',
    image: '/projects/clima-app.png',
    repo: 'https://github.com/cristhdeveloper/clima-app',
  },
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`min-h-screen px-6 py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-[#1e1e1e] text-white'
          : 'bg-[#f2f2f2] text-black'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1
          className={`text-3xl md:text-5xl font-bold mb-12 ${
            darkMode ? 'text-[var(--blue)]' : 'text-[var(--orange)]'
          }`}
        >
          Mis Proyectos
        </h1>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}