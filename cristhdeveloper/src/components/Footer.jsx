'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const scrollTop = () => {
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bottom-0 w-full bg-[var(--color-background)] text-[var(--color-foreground)] border-t border-[var(--color-bg-secondary)] py-6 text-center relative">
      <p className="text-sm opacity-80">© {new Date().getFullYear()} CristhDeveloper - Todos los derechos reservados.</p>
      <button
        onClick={scrollTop}
        className="absolute right-0 bottom-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-darker)] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUpIcon className="w-4 h-4" />
      </button>
    </footer>
  );
}