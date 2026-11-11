'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const fieldClasses =
  'w-full rounded-lg border border-zinc-700 bg-[#101414] px-4 py-3.5 text-sm text-neutral-100 placeholder:text-neutral-500 transition focus:border-[#a3e635] focus:outline-none focus:ring-1 focus:ring-[#a3e635]';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // Demo only: prevents a page reload and does not send or store anything.
  // Connect this to your form service or API route when the site goes live.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section aria-labelledby="contact-heading" className="relative">
      {/* Header */}
      <header className="relative z-10 border-b border-zinc-800/80 pb-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a3e635]">
          Start a conversation
        </p>

        <h1
          id="contact-heading"
          className="mt-4 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl"
        >
          Let&apos;s <span className="text-[#a3e635]">connect.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300">
          Questions, partnerships, collaborations, or just want to connect? Send a message.
        </p>
      </header>

      {/* Form + watermark */}
      <div className="relative mt-9">
        {/* Watermark: faint, lime-tinted logo beside the form (desktop only).
            Anchored to the top of the form area, so it always sits below the divider line.
            To move it further down, raise top-6 (e.g. top-10).
            To make it stronger or fainter, change opacity-[0.12]. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-2 hidden aspect-square w-100 opacity-[0.12] mix-blend-screen filter-[grayscale(1)_sepia(1)_saturate(3)_hue-rotate(50deg)] [-webkit-mask-image:radial-gradient(circle,black_40%,transparent_70%)] mask-[radial-gradient(circle,black_40%,transparent_70%)] lg:block"
        >
          <Image src="/logos/b3.png" alt="" fill sizes="400px" className="object-contain" />
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 max-w-150 space-y-3">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Your message"
              className={`${fieldClasses} min-h-30 resize-y`}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-[#a3e635] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#bef264] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Send message <span aria-hidden="true">→</span>
          </button>

          <p className="pt-1 text-xs text-neutral-400" role="status" aria-live="polite">
            {submitted
              ? 'Thanks for reaching out. (Demo only — nothing was sent or stored.)'
              : 'Demo only — this form does not send or store messages.'}
          </p>
        </form>
      </div>
    </section>
  );
}
