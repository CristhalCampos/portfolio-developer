'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollButtons from '../ScrollButtons';
import { TechnologiesSection } from './TechnologiesSection';

export function AboutSection({ id }) {
  return (
    <motion.section
      id={id}
      className="snap-start h-screen flex flex-col items-center justify-center px-8 text-center relative"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-lg md:max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-10 text-[var(--color-primary)]">
          Sobre Mí
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-10">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/foto.jpg"
              alt="Imagen de perfil de Cristhal Campos"
              width={200}
              height={200}
              className="rounded-xl border-4 border-[var(--color-primary)] shadow-2xl shadow-[var(--color-secondary)]/40 object-cover hover:scale-[1.02] transition-all duration-500
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52"
            />
          </div>

          <div className="text-sm md:text-lg leading-relaxed text-left space-y-2">
            <p>
              Hola, me llamo <strong className='text-[var(--color-fg-secondary)]'>Cristhal</strong> pero me dicen <strong className='text-[var(--color-fg-secondary)]'>Cristh</strong>.
              Mi formación principal es la <strong className='text-[var(--color-fg-secondary)]'>Ingeniería Química</strong>, un campo que me ha enseñado
              el valor del pensamiento analítico y la resolución de problemas complejos.
            </p>
            <p>
              Hace dos años, esa pasión por la lógica y la creación se fusionó con el mundo digital.
              Desde entonces, he dedicado mi tiempo libre a formarme en el <strong className='text-[var(--color-fg-secondary)]'>Desarrollo Web FullStack</strong>, especialmente en el stack <strong className='text-[var(--color-fg-secondary)]'>MERN</strong> (MongoDB, Express, React, Node.js) y <strong className='text-[var(--color-fg-secondary)]'>Next.js</strong>..
            </p>
          </div>
        </div>

        <div className="pt-5 md:pt-10">
          <TechnologiesSection id="technologies" />
        </div>
      </div>

      <ScrollButtons prev="#home" next="#projects" />
    </motion.section>
  );
}