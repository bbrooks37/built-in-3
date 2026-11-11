'use client';

import React from 'react';

interface HeroSectionProps {
  onExploreManual: () => void;
  onJoinCommunity: () => void;
}

export default function HeroSection({
  onExploreManual,
  onJoinCommunity,
}: HeroSectionProps) {
  return (
    <section className="py-12 md:py-20 border-b border-[#a3e635]/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-bold tracking-[0.25em] text-[#a3e635] uppercase">
            BRICK BY BRICK.
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            <span className="block text-white">BUILD YOUR</span>
            <span className="block text-[#a3e635]">BODY.</span>
            <span className="block text-white">BUILD YOUR</span>
            <span className="block text-[#a3e635]">MIND.</span>
            <span className="block text-white">BUILD YOUR</span>
            <span className="block text-[#a3e635]">LIFE.</span>
          </h1>

          <div 
            className="space-y-4 text-zinc-200 text-sm sm:text-base max-w-lg leading-relaxed pt-2 font-semibold"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            <p>Fitness is the vehicle. Character is the destination.</p>
            <p>
              A community for people doing the work — one decision, one habit,
              one brick at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onExploreManual}
              className="bg-[#a3e635] text-black text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded hover:bg-[#bef264] transition-colors shadow-[0_0_20px_rgba(163,230,53,0.2)]"
            >
              EXPLORE THE BUILDER&apos;S MANUAL →
            </button>
            <button
              onClick={onJoinCommunity}
              className="border border-[#a3e635]/50 text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded hover:bg-[#a3e635]/10 hover:border-[#a3e635] transition-colors"
            >
              JOIN THE COMMUNITY
            </button>
          </div>
        </div>

        {/* Right Column: Logo Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-2xl border border-[#a3e635]/40 bg-zinc-950/90 flex items-center justify-center p-10 overflow-hidden shadow-[0_0_30px_rgba(163,230,53,0.05)]">
            <span className="absolute top-6 left-10 text-xs font-mono text-[#a3e635]">
              01
            </span>
            <img
              src="/logos/b3.png"
              alt="Built In 3 Emblem"
              className="w-64 h-64 object-contain drop-shadow-[0_0_15px_rgba(163,230,53,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}