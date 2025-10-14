'use client';

import { motion } from 'framer-motion';
import Icon from '../Icon';
import { techStackData } from '@/data/techData';

export function TechnologiesSection({ id }) {
  return (
    <motion.div
      id={id}
      className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-[var(--color-secondary)]">
        Tecnologías
      </h3>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex w-max gap-2 h-20 md:h-28"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStackData, ...techStackData].map((tech, idx) => (
            <div
              key={idx}
              title={tech.name}
              className="flex-shrink-0 w-16 md:w-24 h-16 md:h-24 flex flex-col items-center justify-center rounded-xl
                        border border-[var(--color-primary)]/30 bg-[var(--color-foreground)]/10
                        hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/40
                        transition-all cursor-pointer"
            >
              <Icon name={tech.name} size={50} />
              <span className="mt-1 text-xs md:text-sm font-semibold text-[var(--color-primary)]">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}