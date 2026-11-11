import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/80 px-6 py-10 text-center">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/logos/b3.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <span className="text-sm font-bold uppercase tracking-wide text-neutral-300">
          Built in 3
        </span>
      </div>

      <p className="mt-5 text-sm text-neutral-400">
        Build Your Body · Build Your Mind · Build Your Life
      </p>
      <p className="mt-3 text-sm text-neutral-400">
        Fitness is the vehicle. Character is the destination.
      </p>
      <p className="mt-4 text-xs uppercase tracking-wider text-neutral-500">Brick by brick.</p>
    </footer>
  );
}
