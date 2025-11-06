'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../Footer';

export function ContactSection({ id }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `
    w-full px-4 py-2 rounded-lg border outline-none transition-all duration-300
    bg-[var(--color-background)] border-[var(--color-foreground)]/30
    focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]
  `;

  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col gap-10 items-center justify-center px-8 py-4 sm:px-12 md:px-20 text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full max-w-xl sm:max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[var(--color-primary)]">
          ¡Hablemos!
        </h2>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-sm sm:text-base text-[var(--color-fg-secondary)]">
                Tu Nombre
              </label>
              <input type="text" id="name" name="name" required className={`${inputStyle} text-sm sm:text-base`} />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-sm sm:text-base text-[var(--color-fg-secondary)]">
                Tu Correo Electrónico
              </label>
              <input type="email" id="email" name="_replyto" required className={`${inputStyle} text-sm sm:text-base`} />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-sm sm:text-base text-[var(--color-fg-secondary)]">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className={`${inputStyle} text-sm sm:text-base`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-base sm:text-lg
                bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-darker)]
                ${loading ? 'opacity-70 cursor-not-allowed' : 'shadow-md hover:shadow-xl'}
              `}
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </span>
              ) : (
                'Enviar mensaje'
              )}
            </button>

            {error && <p className="text-red-500 text-center pt-2 sm:pt-4 text-sm sm:text-base">{error}</p>}
          </form>
        ) : (
          <div className="text-center mt-8 sm:mt-10 p-6 sm:p-8 border-2 border-[var(--color-primary)] rounded-xl bg-[var(--color-primary)]/10">
            <p className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--color-primary)]">¡Mensaje Enviado con Éxito! 🎉</p>
            <p className="text-base sm:text-lg">Gracias por tu interés. Te responderé pronto.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </motion.section>
  );
}