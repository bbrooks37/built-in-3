'use client';

import React from 'react';
import Image from 'next/image';

interface FeaturedResourceSectionProps {
  onViewShop: () => void;
}

const highlights = [
  'Guided reflection and writing prompts',
  'Real-life examples and action steps',
  'Flexible fitness and lifestyle guidance',
  'A 30-day foundation calendar',
];

export default function FeaturedResourceSection({ onViewShop }: FeaturedResourceSectionProps) {
  return (
    <section
      aria-labelledby="featured-resource-heading"
      className="border-t border-zinc-800/80 pt-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
        {/* Manual cover card */}
        <div className="relative rounded-2xl border border-[#a3e635]/40 bg-linear-to-b from-zinc-900/80 to-zinc-950 px-8 py-10 text-center transition-shadow duration-300 shadow-[0_0_20px_rgba(163,230,53,0.25),0_0_60px_rgba(163,230,53,0.15),inset_0_0_24px_rgba(163,230,53,0.05)] hover:shadow-[0_0_28px_rgba(163,230,53,0.35),0_0_80px_rgba(163,230,53,0.2),inset_0_0_24px_rgba(163,230,53,0.08)]">
          <span className="absolute left-1/2 top-5 -translate-x-14 text-[9px] font-bold tracking-widest text-[#a3e635]/70">
            01
          </span>

          <div className="relative mx-auto h-28 w-28">
            <Image
              src="/logos/b3.png"
              alt="Built in 3 logo"
              fill
              sizes="112px"
              className="object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(163,230,53,0.15)]"
            />
          </div>

          <h3 className="mt-6 text-xl font-extrabold uppercase tracking-wide text-white">
            The Builder&apos;s Manual
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#a3e635]">
            Part 1 · The Foundation
          </p>
          <p className="mt-6 text-sm text-neutral-200">
            Build your body · Build your mind · Build your life
          </p>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
            Featured Resource
          </p>

          <h2
            id="featured-resource-heading"
            className="mt-5 text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl"
          >
            Start with <span className="text-[#a3e635]">the foundation.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300">
            A guided experience to help you take an honest look at where you are, decide what
            matters, and take practical next steps.
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-400 marker:text-neutral-500">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onViewShop}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#a3e635] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(163,230,53,0.2)] transition hover:bg-[#bef264] cursor-pointer"
          >
            Take a closer look <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
