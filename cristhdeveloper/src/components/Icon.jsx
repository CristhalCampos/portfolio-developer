'use client'

import React from "react";
import { icons } from "@/data/icons";

const Icon = ({ name, className = "" }) => {
  const icon = icons[name];

  if (!icon) return null;

  return (
    <div
      className={`
        text-[var(--color-primary)]
        /* Definimos los tamaños por breakpoints de Tailwind */
        w-[25px] h-[25px]       /* Tamaño por defecto (móvil < 640px) */
        sm:w-[35px] sm:h-[35px] /* sm (640px - 767px) */
        md:w-[50px] md:h-[50px] /* md y superiores (768px+) */
        ${className}
      `}
    >
      {React.cloneElement(icon, {
        className: "w-full h-full",
      })}
    </div>
  );
};

export default Icon;