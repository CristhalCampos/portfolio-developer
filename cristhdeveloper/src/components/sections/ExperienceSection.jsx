'use client';

import { experienceData } from "@/data/experienceData";
import { motion } from "framer-motion";

export function ExperienceSection({ id }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-8 py-16 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--color-primary)]">
          Experiencia
        </h2>

        {experienceData.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {experienceData.map((exp) => (
              <motion.div
                className="group w-full max-w-sm bg-[var(--color-background)] rounded-2xl shadow-md overflow-hidden border border-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/40 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
              >
                <div className="p-6 text-left space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {exp.company} — <span className="italic">{exp.duration}</span>
                    </p>
                  </div>
                  
                  {exp.context && (
                    <p className="text-sm text-[var(--color-fg-secondary)] leading-relaxed">
                      {exp.context}
                    </p>
                  )}

                  {exp.responsibilities && (
                    <ul className="list-disc list-inside text-sm text-[var(--color-fg-secondary)] space-y-1">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="leading-tight">{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-12 text-lg">
            No hay experiencia disponible aún.
          </p>
        )}
      </div>
    </motion.section>
  );
}