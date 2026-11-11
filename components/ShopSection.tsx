'use client';

import React from 'react';
import Image from 'next/image';

// When the Payhip product is ready, paste its checkout link here.
// While this is empty, the button renders as a non-functional preview.
const CHECKOUT_URL = '';

const highlights = [
  'Guided reflection exercises and examples',
  'Flexible training and lifestyle ideas',
  '30-day calendar and check-ins',
];

const buttonClasses =
  'mt-5 inline-flex items-center rounded-md bg-[#a3e635] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(163,230,53,0.2)] transition hover:bg-[#bef264] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black';

export default function ShopSection() {
  return (
    <section aria-labelledby="shop-heading" className="pb-8">
      {/* Header */}
      <header className="border-b border-zinc-800/80 pb-10">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
          The Builder&apos;s Shop
        </p>
        <h1
          id="shop-heading"
          className="mt-4 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl"
        >
          Tools for the <span className="text-[#a3e635]">build.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
          Digital guides and practical resources to help you build your Body, Mind, and Life.
        </p>
      </header>

      {/* Product */}
      <div className="grid items-center gap-10 pt-14 lg:grid-cols-[minmax(0,412px)_1fr] lg:gap-14">
        {/* Cover card */}
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

          <h2 className="mt-6 text-xl font-extrabold uppercase tracking-wide text-white">
            The Builder&apos;s Manual
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#a3e635]">
            Part 1 · The Foundation
          </p>
          <p className="mt-6 text-sm text-neutral-200">Brick by brick.</p>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
            First Release
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            The Foundation
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300">
            A guided manual for honest reflection, practical action, and building a stronger
            foundation.
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-300 marker:text-neutral-500">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-neutral-500">
            The finished site can connect this product to Payhip for checkout and automatic PDF
            delivery.
          </p>

          {CHECKOUT_URL ? (
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              Buy now
            </a>
          ) : (
            <button type="button" className={`${buttonClasses} cursor-pointer`}>
              Product checkout — preview
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
