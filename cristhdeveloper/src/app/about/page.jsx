'use client';

import { useTheme } from '../../context/ThemeContext';
import Image from 'next/image';

const techStack = [
  { name: 'HTML5', src: '/html.svg' },
  { name: 'CSS3', src: '/css.svg' },
  { name: 'Tailwind CSS', src: '/tailwind.svg' },
  { name: 'JavaScript', src: '/js.svg' },
  { name: 'React', src: '/react.svg' },
  { name: 'Next.js', src: '/next.svg' },
  { name: 'Node.js', src: '/node.svg' },
  { name: 'Express', src: '/express.svg' },
  { name: 'MongoDB', src: '/mongo.svg' },
  { name: 'Git', src: '/git.svg' },
  { name: 'Figma', src: '/figma.svg' },
];

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`min-h-screen px-6 py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-[#1e1e1e] text-white'
          : 'bg-[#f2f2f2] text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className={`text-3xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-[var(--orange)]' : 'text-[var(--blue)]'
          }`}
        >
          Sobre mí
        </h1>
        <p className="text-lg leading-relaxed mb-12">
          Soy Cristhal, desarrolladora web apasionada por construir experiencias digitales modernas, accesibles y atractivas. Me encanta trabajar con tecnologías como React, Next.js y Tailwind CSS. Siempre estoy aprendiendo y mejorando mis habilidades para llevar ideas a la realidad de forma eficiente y creativa.
        </p>

        {/* Slider de tecnologías */}
        <div className="overflow-hidden relative">
          <div className="flex animate-slide gap-12 px-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full hover:scale-110 transition-transform"
                />
              </div>
            ))}
            {/* Duplicamos para efecto infinito */}
            {techStack.map((tech, idx) => (
              <div key={`dup-${idx}`} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  width={96}
                  height={96}
                  className="object-contain w-full h-full hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}