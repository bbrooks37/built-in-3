'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'shop', label: 'Shop' },
  { id: 'community', label: 'Community' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (view: string) => {
    setActiveView(view);
    setMenuOpen(false);
  };

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative z-40 border-b border-[#a3e635]/40 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Brand */}
        <button
          type="button"
          onClick={() => go('home')}
          aria-label="Built in 3 - go to home"
          className="flex shrink-0 cursor-pointer items-center gap-3"
        >
          <span className="relative block h-10 w-10 shrink-0">
            <Image
              src="/logos/b3.png"
              alt=""
              fill
              sizes="40px"
              className="object-contain mix-blend-screen"
              priority
            />
          </span>
          <span className="h-5 w-px bg-[#a3e635]" aria-hidden="true" />
          <span className="whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.2em] text-white sm:text-sm">
            Built in 3
          </span>
        </button>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            {links.map((link) => {
              const active = activeView === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`cursor-pointer text-xs font-bold uppercase tracking-widest transition-colors hover:text-[#a3e635] ${
                      active ? 'text-[#a3e635]' : 'text-neutral-200'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[#a3e635]/40 text-[#a3e635] transition hover:border-[#a3e635] md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute left-0 right-0 top-full border-b border-[#a3e635]/40 bg-black md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-6 py-2">
            {links.map((link) => {
              const active = activeView === link.id;
              return (
                <li key={link.id} className="border-b border-zinc-800/80 last:border-0">
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`block w-full cursor-pointer py-4 text-left text-sm font-bold uppercase tracking-widest transition-colors ${
                      active ? 'text-[#a3e635]' : 'text-neutral-200 hover:text-[#a3e635]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
