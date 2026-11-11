'use client';

import React from 'react';
import Image from 'next/image';

const values = [
  {
    title: 'HONESTY',
    desc: 'Start with where you really are. No fronting.',
  },
  {
    title: 'CONSISTENCY',
    desc: 'Small actions, repeated over time.',
  },
  {
    title: 'ACCOUNTABILITY',
    desc: 'Encourage each other and keep it real.',
  },
];

export default function AboutSection() {
  return (
    <div className="space-y-6">
      {/* Intro */}
      <section
        aria-labelledby="about-heading"
        className="grid items-center gap-10 py-6 lg:grid-cols-2 lg:gap-14"
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
            What we&apos;re about
          </p>

          <h1
            id="about-heading"
            className="mt-5 text-5xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            More than
            <br />
            <span className="text-[#a3e635]">fitness.</span>
          </h1>

          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-neutral-300 font-[Verdana,sans-serif]">
            <p>
              Built in 3 is a lifestyle brand and community built around discipline, growth, and
              accountability.
            </p>
            <p>
              Fitness can be the starting point. The bigger work is how you show up in the rest
              of your life.
            </p>
          </div>
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

      {/* Mission */}
      <section
        aria-labelledby="mission-heading"
        className="rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900/90 via-[#121616] to-zinc-950 px-6 py-8 md:px-8"
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
          Our mission
        </p>

        <h2
          id="mission-heading"
          className="mt-10 text-4xl font-black uppercase tracking-tight text-white md:text-5xl"
        >
          Build something that <span className="text-[#a3e635]">lasts.</span>
        </h2>

        <p className="mt-9 max-w-xl text-base leading-relaxed text-neutral-300 font-[Verdana,sans-serif]">
          Encourage people to become stronger in body, clearer in mind, and more intentional in
          life — without pretending the process is perfect.
        </p>
      </section>

      {/* Values */}
      <section aria-label="Our values" className="border-t border-zinc-800/80 pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-[#a3e635]/40 bg-linear-to-br from-zinc-900/80 to-zinc-950 px-6 py-6 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2),0_0_50px_rgba(163,230,53,0.1)] hover:-translate-y-0.5 hover:border-[#a3e635] hover:shadow-[0_0_28px_rgba(163,230,53,0.35),0_0_70px_rgba(163,230,53,0.2)]"
            >
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-white">
                {value.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-neutral-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
