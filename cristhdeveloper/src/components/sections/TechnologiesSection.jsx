'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon';
import { techStackData } from '@/data/techData';

export function TechnologiesSection({ id }) {
  return (
    <motion.div
      id={id}
      className="w-full flex flex-col items-center justify-center text-center px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-[var(--color-secondary)]">
        Tecnologías
      </h3>

      {/* Contenedor con máscara de desvanecimiento en los bordes */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        <motion.div
          className="flex w-max gap-4 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ cursor: 'pointer' }}
          whileHover={{ transition: { duration: 0 } }}
        >
          {[...techStackData, ...techStackData].map((tech, idx) => (
            <div
              key={idx}
              title={tech.name}
              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
                        border border-[var(--color-primary)]/20 bg-[var(--color-background)]
                        hover:border-[var(--color-primary)]/50 hover:scale-110
                        transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
            >
              <Icon
                name={tech.name}
              />
              
              <span className="mt-2 text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-[var(--color-primary)] uppercase tracking-tighter">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}