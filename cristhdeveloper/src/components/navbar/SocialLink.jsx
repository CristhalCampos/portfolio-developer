'use client';

import Link from 'next/link';

export default function SocialLink({ href, label, icon }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-[var(--color-fg-secondary)] hover:text-[var(--color-primary-darker)] transition-colors duration-300"
    >
      {icon}
    </Link>
  );
}
