'use client';

import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

export default function Contact() {
  const { darkMode } = useTheme();
  const [sent, setSent] = useState(false);

  return (
    <section
      className={`min-h-screen px-6 py-20 transition-colors duration-300 ${
        darkMode ? 'bg-[#1e1e1e] text-white' : 'bg-[#f2f2f2] text-black'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center ${
            darkMode ? 'text-[var(--orange)]' : 'text-[var(--blue)]'
          }`}
        >
          ¡Hablemos!
        </h2>

        <p
          className={`text-lg mb-12 text-center ${
            darkMode ? 'text-[var(--blue)]' : 'text-[var(--orange)]'
          }`}
        >
          ¿Tienes un proyecto o idea en mente? Escríbeme y te responderé pronto.
        </p>

        {!sent ? (
          <form
            action="https://formspree.io/f/tu_id_aqui"
            method="POST"
            className="space-y-6"
            onSubmit={() => setSent(true)}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-2 rounded-md border outline-none transition-colors duration-300 ${
                  darkMode
                    ? 'bg-zinc-800 border-zinc-700 text-[var(--color-foreground)]'
                    : 'bg-white border-gray-300 text-[var(--color-foreground)]'
                } focus:ring-2 focus:ring-[var(--blue)]`}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Tu correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-2 rounded-md border outline-none transition-colors duration-300 ${
                  darkMode
                    ? 'bg-zinc-800 border-zinc-700 text-[var(--color-foreground)]'
                    : 'bg-white border-gray-300 text-[var(--color-foreground)]'
                } focus:ring-2 focus:ring-[var(--blue)]`}
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={`w-full px-4 py-2 rounded-md border outline-none transition-colors duration-300 ${
                  darkMode
                    ? 'bg-zinc-800 border-zinc-700 text-[var(--color-foreground)]'
                    : 'bg-white border-gray-300 text-[var(--color-foreground)]'
                } focus:ring-2 focus:ring-[var(--blue)]`}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                darkMode
                  ? 'bg-[var(--orange)] text-white hover:bg-[var(--blue)]'
                  : 'bg-[var(--blue)] text-white hover:bg-[var(--orange)]'
              }`}
            >
              Enviar mensaje
            </button>
          </form>
        ) : (
          <div className="text-center mt-10 text-xl font-semibold text-[var(--blue)]">
            ¡Gracias! Tu mensaje ha sido enviado con éxito.
          </div>
        )}
      </div>
    </section>
  );
}