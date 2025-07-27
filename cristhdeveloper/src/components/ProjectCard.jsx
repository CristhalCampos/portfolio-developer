'use client';

import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, image, repo }) => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode ? 'bg-zinc-800' : 'bg-[#ededed]'} rounded-lg shadow-md overflow-hidden max-w-sm w-full transition-transform hover:scale-[1.02]`}>
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={`Imagen del proyecto ${title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-[var(--blue)] dark:text-[var(--orange)]">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--orange)] dark:text-[var(--blue)] hover:underline"
        >
          <FaGithub className="text-xl" /> Ver en GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;