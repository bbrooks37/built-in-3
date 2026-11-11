'use client';

import React from 'react';

const iconProps = {
  className: 'h-5 w-5 text-[#a3e635]',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  'aria-hidden': true,
} as const;

const pillars = [
  {
    title: 'BUILD YOUR BODY',
    desc: 'Strength, health, movement, and taking care of the body you live in.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l9 9-9 9-9-9 9-9z" />
        <path d="M12 8l4 4-4 4-4-4 4-4z" />
      </svg>
    ),
  },
  {
    title: 'BUILD YOUR MIND',
    desc: 'Discipline, self-awareness, patience, focus, and continued growth.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'BUILD YOUR LIFE',
    desc: 'Relationships, purpose, responsibility, and the life you choose to build.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 4L3 20h18L12 4z" />
      </svg>
    ),
  },
];

export default function PillarsSection() {
  return (
    <section className="border-b border-zinc-800/80 py-16">
      <div className="mb-12 space-y-3 text-center">
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#a3e635]">
          THE FOUNDATION
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          THE THREE PILLARS
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="space-y-4 rounded-xl border border-[#a3e635]/40 bg-zinc-950/90 p-8 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2),0_0_50px_rgba(163,230,53,0.1),inset_0_0_20px_rgba(163,230,53,0.04)] hover:-translate-y-0.5 hover:border-[#a3e635] hover:shadow-[0_0_28px_rgba(163,230,53,0.35),0_0_70px_rgba(163,230,53,0.2),inset_0_0_24px_rgba(163,230,53,0.08)]"
          >
            <div>{pillar.icon}</div>
            <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
