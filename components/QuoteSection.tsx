import React from 'react';

export default function QuoteSection() {
  return (
    <section className="border-t border-zinc-800/80 pt-16">
      <figure className="border-l-4 border-[#a3e635] py-6 pl-6 md:pl-8">
        <blockquote className="text-2xl font-black leading-snug tracking-tight text-white md:text-4xl">
          &ldquo;A Builder doesn&apos;t need a perfect life. Just a willingness to keep
          building.&rdquo;
        </blockquote>
      </figure>
    </section>
  );
}
