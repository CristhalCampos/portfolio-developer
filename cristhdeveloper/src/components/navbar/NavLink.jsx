'use client';

import Link from 'next/link';

export default function NavLink({ href, name, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[var(--color-foreground)] hover:text-[var(--color-primary-darker)] transition-colors duration-300"
    >
      {name}
    </Link>
  );
}
