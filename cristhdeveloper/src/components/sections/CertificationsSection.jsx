'use client';

import { certificationsData } from "@/data/certificationsData";
import Image from "next/image";
import { motion } from "framer-motion";

export function CertificationsSection({ id }) {
  return (
    <section id={id} className="min-h-screen py-20 px-6 flex flex-col items-center justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full mx-auto"
      >
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-[var(--color-primary)]"
        >
          Mis Certificaciones
        </motion.h2>

        {certificationsData.length > 0 ? (
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full max-w-[280px] sm:max-w-[320px] bg-[var(--color-background)] rounded-2xl shadow-md overflow-hidden border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/50 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 flex flex-col"
              >
                {/* Contenedor de Imagen */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={`Certificado de ${cert.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Detalles */}
                <div className="p-5 text-left flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-secondary)] leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {cert.institution}
                    </p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-semibold">{cert.date}</span>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[var(--color-primary)] hover:underline underline-offset-4"
                      >
                        Ver Credencial →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500 text-center text-lg italic">
            Próximamente nuevas certificaciones...
          </p>
        )}
      </motion.div>
    </section>
  );
}