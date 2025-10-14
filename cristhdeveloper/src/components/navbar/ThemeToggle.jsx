'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  const [mounted, setMounted] = useState(false);

  // Evitar discrepancia entre SSR y cliente
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 flex items-center rounded-full p-1 bg-[var(--color-bg-secondary)] transition-colors duration-300 cursor-pointer"
      aria-label="Cambiar tema"
    >
      {/* Slider */}
      <motion.div
        className="absolute left-1 w-5 h-5 bg-[var(--color-background)] opacity-70 rounded-full flex items-center justify-center shadow-md"
        animate={{ x: darkMode ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {/* Icono */}
        {darkMode ? (
          <FaMoon className="text-[var(--color-secondary)] text-sm" />
        ) : (
          <FaSun className="text-[var(--color-secondary)] text-sm" />
        )}
      </motion.div>
      <div className="absolute flex justify-between w-full px-1 text-xs">
        <FaSun className="text-gray-600" />
        <FaMoon className="text-gray-400 mr-2" />
      </div>
    </button>
  );
}