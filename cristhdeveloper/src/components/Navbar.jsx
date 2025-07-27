'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  const navLinks = [
    { name: 'Sobre mí', href: '/about' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Contáctame', href: '/contact' },
  ];

  const socialLinks = [
    { href: 'https://www.instagram.com/cristhdeveloper?igsh=MXZvMTBzOXY4MmV4', icon: <FaInstagram size={20} />, label: 'Instagram' },
    { href: 'https://www.tiktok.com/@cristhdeveloper?_t=ZM-8yLxhhwI9zh&_r=1', icon: <FaTiktok size={20} />, label: 'TikTok' },
    { href: 'https://www.linkedin.com/in/cristhal-campos-7877b5167', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
  ];

  // Cerrar menú al cambiar tamaño a md+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  const bgColor = darkMode ? '#1f1f1f' : '#f2f2f2';
  const textColor = darkMode ? '#fe735e' : '#1f8ff5';
  const hoverColor = darkMode ? '#1f8ff5' : '#fe735e';

  return (
    <>
      {/* Botón hamburguesa visible solo en móvil */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed top-4 left-4 z-50 md:hidden p-2 rounded-md
          ${darkMode ? 'text-[#fe735e] bg-[#1f1f1f]' : 'text-[#1f8ff5] bg-[#f2f2f2]'}
          hover:brightness-90 transition`}
        aria-label="Abrir menú"
      >
        <span className="text-3xl select-none">☰</span>
      </button>

      {/* Fondo oscuro semi-transparente al abrir menú en móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar / menú */}
      <nav
        className={`fixed top-0 left-0 h-full z-50
          ${darkMode ? 'bg-[#1f1f1f]' : 'bg-[#f2f2f2]'}
          shadow-lg flex flex-col justify-between
          w-60
          transform md:translate-x-0 transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        aria-label="Menú de navegación"
      >
        {/* Logo + título */}
        <div className="flex items-center justify-start px-6 py-6 border-b"
          style={{ borderColor: darkMode ? '#333' : '#ddd' }}
        >
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center space-x-1">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
            >
              <Image
                src="/icon.png"
                alt="Logo de CristhDeveloper"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="text-lg font-bold">
              <span className='text-[#1f8ff5]'>Cristh</span>
              <span className='text-[#fe735e]'>Developer</span>
            </div>
          </Link>
        </div>

        {/* Links de navegación */}
        <div className="flex flex-col px-6 mt-8 space-y-6 overflow-y-auto">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)} // cierra menú al clicar en móvil
              className={`cursor-pointer text-lg font-medium
                ${darkMode ? 'text-[#fe735e]' : 'text-[#1f8ff5]'}
                hover:underline hover:text-[${hoverColor}] transition-colors`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Redes sociales + toggle modo */}
        <div
          className="px-6 py-6 border-t flex items-center justify-between"
          style={{ borderColor: darkMode ? '#333' : '#ddd' }}
        >
          <div className="flex space-x-6">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`cursor-pointer text-2xl
                  ${darkMode ? 'text-[#fe735e]' : 'text-[#1f8ff5]'}
                  hover:text-[${hoverColor}] transition-colors`}
              >
                {icon}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full transition-colors text-white
              ${darkMode ? 'hover:bg-[#f5573e] bg-[#fe735e]' : 'hover:bg-[#1067d3] bg-[#1f8ff5]'}`}
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;