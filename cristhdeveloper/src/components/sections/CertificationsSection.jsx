'use client';

import { certificationsData } from "@/data/certificationsData";
import Image from "next/image";
import { motion } from "framer-motion";

export function CertificationsSection({ id }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-8 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <h3 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--color-primary)]">
          Mis Certificaciones
        </h3>

        {certificationsData.length > 1 && (
          <div className="grid gap-5 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full max-w-6xl mx-auto">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="group w-64 sm:w-72 bg-[var(--color-background)] rounded-2xl shadow-md overflow-hidden border border-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/40 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
              >
                {/* Imagen del certificado */}
                <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Detalles */}
                <div className="p-4 text-left space-y-1.5">
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {cert.institution} — {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {certificationsData.length === 1 && (
          <div className="flex justify-center">
            <motion.div
              key={0}
              className="group w-64 sm:w-72 bg-[var(--color-background)] rounded-2xl shadow-md overflow-hidden border border-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/40 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
            >
              {/* Imagen del certificado */}
              <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                <Image
                  src={certificationsData[0].image}
                  alt={certificationsData[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Detalles */}
              <div className="p-4 text-left space-y-1.5">
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                  {certificationsData[0].title}
                </h3>
                <p className="text-xs text-gray-500">
                  {certificationsData[0].institution} — {certificationsData[0].date}
                </p>
                {/* <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-full bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-darker)] transition-all duration-300"
                >
                  Ver certificado
                </Link> */}
              </div>
            </motion.div>
          </div>
        )}

        {/* Si no hay certificados */}
        {certificationsData.length === 0 && (
          <p className="text-gray-500 mt-12 text-lg">
            No hay certificaciones disponibles aún.
          </p>
        )}
      </div>

    </motion.section>
  );
}
