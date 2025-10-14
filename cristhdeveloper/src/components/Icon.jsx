'use client'

import React from "react";
import { icons } from "@/data/icons";
import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const Icon = ({ name, size, className = "" }) => {
  const icon = icons[name];
  const width = useWindowWidth();

  if (!icon) return null;

  // Tamaño responsivo según el ancho de la ventana
  let responsiveSize = size; // default
  if (width < 640) responsiveSize = size - 25; // xs, sm
  else if (width >= 640 && width < 768) responsiveSize = size - 15; // sm
  // md y lg usan el tamaño original

  return (
    <div
      className={`text-[var(--color-primary)] ${className}`}
      style={{ width: responsiveSize, height: responsiveSize }}
    >
      {React.cloneElement(icon, {
        width: responsiveSize,
        height: responsiveSize,
        className: "w-full h-full",
      })}
    </div>
  );
};

export default Icon;