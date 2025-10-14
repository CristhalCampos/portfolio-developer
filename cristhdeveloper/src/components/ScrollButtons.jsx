'use client';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export default function ScrollButtons({ prev, next }) {
  return (
    <div className="hidden md:flex justify-between absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-8">
      {prev && (
        <button
          onClick={() => document.querySelector(prev)?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary-darker)] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </button>
      )}
      {next && (
        <button
          onClick={() => document.querySelector(next)?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-darker)] text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowDownIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
