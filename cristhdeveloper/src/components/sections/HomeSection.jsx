'use client';

import { motion } from 'framer-motion';
import ScrollButtons from '../ScrollButtons';
import Image from 'next/image';
import Link from 'next/link';

export function HomeSection({ id }) {

  return (
    <motion.section
      id={id}
      className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center relative"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Líneas diagonales */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="diagonal-line bg-[var(--color-primary)] absolute w-px h-full left-1/3 animate-diagonal" />
        <div className="diagonal-line bg-[var(--color-secondary)] absolute w-px h-full left-2/3 animate-diagonal delay-[1.5s]" />
      </div>

      {/* Contenido */}
      <div className="z-10 max-w-xl">
        <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-secondary)] shadow-lg transition-all duration-300">
          <Image src="/logo.png" alt="Logo de CristhDeveloper" width={128} height={128} className="object-cover" priority />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[var(--color-fg-secondary)]">
          Hola, soy Cristh
        </h1>
        <span className="text-xl text-gray-500 block">Desarrolladora web Fullstack</span>

        <Link
          href="#about"
          className="inline-block mt-10 px-8 py-3 font-semibold rounded-full shadow-xl transition-all duration-300 hover:scale-[1.05] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-darker)]"
        >
          Conoce más sobre mí
        </Link>
      </div>

      <ScrollButtons next="#about" />
    </motion.section>
  );
}