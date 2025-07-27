'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden transition-colors duration-700 ${
        darkMode ? 'bg-[#1f1f1f] text-white' : 'bg-[#f2f2f2] text-[#1f8ff5]'
      }`}
    >
      {/* Líneas animadas diagonales */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="diagonal-line bg-blue absolute w-px h-full left-1/3 animate-diagonal" />
        <div className="diagonal-line bg-orange absolute w-px h-full left-2/3 animate-diagonal delay-1000" />
      </div>

      {/* Contenido */}
      <div className="z-10 max-w-xl">
        {/* Foto y logo */}
        <div className={`mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden border-4 ${darkMode ? 'border-[#fe735e]' : 'border-[#1f8ff5]'} shadow-lg`}>
          <Image
            src="/logo.png"
            alt="Logo de CristhDeveloper"
            width={128}
            height={128}
            className="object-cover"
            priority
          />
        </div>

        {/* Texto con animación de tipeo */}
        <h1
          className={`text-2xl font-semibold ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Hola, soy CristhDeveloper
        </h1>
        <span className="text-lg text-gray-500 block mt-2">
          Desarrolladora FullStack
        </span>

        {/* CTA */}
        <Link
          href="/about"
          className={`inline-block mt-10 px-8 py-3 font-semibold rounded-full shadow-lg transition-colors
            ${
              darkMode
                ? 'bg-[#fe735e] text-white hover:bg-[#f5573e]'
                : 'bg-[#1f8ff5] text-white hover:bg-[#1067d3]'
            }`}
        >
          Conoce más sobre mí
        </Link>
      </div>
    </section>
  );
}