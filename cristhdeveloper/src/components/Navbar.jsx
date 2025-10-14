'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import NavLink from './navbar/NavLink';
import SocialLink from './navbar/SocialLink';
import ThemeToggle from './navbar/ThemeToggle';
import { navLinks } from '../data/navLinks';
import { socialLinks } from '../data/socialLinks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md text-[var(--color-primary)] bg-[var(--color-background)] hover:brightness-90 transition-all duration-300"
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Fondo de overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full z-50 bg-[var(--color-background)] shadow-xl flex flex-col justify-between w-60 backdrop-blur-md transform md:translate-x-0 transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center px-4 py-6 border-b" style={{ borderColor: darkMode ? '#333' : '#ddd' }}>
          <Link href="#home" onClick={() => setOpen(false)} className="flex items-center">
            <Image src="/icon.png" alt="Logo de CristhDeveloper" width={48} height={48} className="rounded-full" />
            <div className="text-lg font-bold">
              <span className="text-[var(--color-primary)]">Cristh</span>
              <span className="text-[var(--color-secondary)]">Developer</span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 md:py-4 mt-8 space-y-6 overflow-y-auto flex-grow">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} onClick={() => setOpen(false)} />
          ))}
        </div>

        {/* Social + Tema */}
        <div className="px-6 py-6 border-t flex items-center justify-between" style={{ borderColor: darkMode ? '#333' : '#ddd' }}>
          <div className="flex space-x-6">{socialLinks.map((link) => <SocialLink key={link.label} {...link} />)}</div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Cerrar menú */}
        <button onClick={() => setOpen(false)} className="absolute top-2 right-4 text-2xl md:hidden text-[var(--color-foreground)]">
          &times;
        </button>
      </nav>
    </>
  );
}