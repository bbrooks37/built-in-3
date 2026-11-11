'use client';

import React from 'react';
import Image from 'next/image';

interface CommunitySectionProps {
  onGetInvolved: () => void;
}

const features = [
  {
    title: 'BUILDER SPOTLIGHTS',
    desc: 'Celebrate real progress and the people doing the work.',
  },
  {
    title: 'PEOPLE WE RESPECT',
    desc: 'Highlight people whose actions and character are worth learning from.',
  },
  {
    title: 'COMMUNITY CHALLENGES',
    desc: 'Simple shared commitments that make consistency easier.',
  },
];

export default function CommunitySection({ onGetInvolved }: CommunitySectionProps) {
  return (
    <div className="space-y-6">
      {/* Intro */}
      <section
        aria-labelledby="community-heading"
        className="grid items-center gap-10 py-6 lg:grid-cols-2 lg:gap-14"
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
            Built together
          </p>

          <h1
            id="community-heading"
            className="mt-5 text-5xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            The builder
            <br />
            <span className="text-[#a3e635]">community.</span>
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-neutral-300">
            <p>A place for real people, real growth, and shared accountability.</p>
            <p>
              No judgment. No pretending. We encourage each other, tell the truth, and keep
              building.
            </p>
          </div>

          <button
            type="button"
            onClick={onGetInvolved}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#a3e635] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#bef264] cursor-pointer"
          >
            Get involved <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Logo panel */}
        <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-2xl border border-[#a3e635]/40 bg-[radial-gradient(circle_at_50%_55%,#2a2d2d_0%,#0c0e0e_55%,#060707_100%)] transition-shadow duration-300 shadow-[0_0_24px_rgba(163,230,53,0.25),0_0_80px_rgba(163,230,53,0.15)] hover:shadow-[0_0_32px_rgba(163,230,53,0.35),0_0_100px_rgba(163,230,53,0.22)]">
          <span className="absolute left-[10%] top-[10%] text-lg font-medium text-[#a3e635]/60">
            01
          </span>
          <Image
            src="/logos/b3.png"
            alt="Built in 3 logo"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-[10%] mix-blend-screen"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section aria-label="Community features">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[#a3e635]/40 bg-linear-to-br from-zinc-900/80 to-zinc-950 px-6 py-7 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2),0_0_50px_rgba(163,230,53,0.1)] hover:-translate-y-0.5 hover:border-[#a3e635] hover:shadow-[0_0_28px_rgba(163,230,53,0.35),0_0_70px_rgba(163,230,53,0.2)]"
            >
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                {feature.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-neutral-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
