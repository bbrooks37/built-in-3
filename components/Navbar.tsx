'use client';

import React from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'shop', label: 'SHOP' },
    { id: 'community', label: 'COMMUNITY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-[#a3e635] px-6 py-4">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <button
          onClick={() => setActiveView('home')}
          className="flex items-center gap-3 text-left"
        >
          <img
            src="/logos/b3.png"
            alt="Built In 3 Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="h-5 w-px bg-[#a3e635]" />
          <span className="font-bold text-sm tracking-[0.2em] text-white">
            BUILT IN 3
          </span>
        </button>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`text-xs font-semibold tracking-[0.15em] transition-colors ${
                activeView === item.id
                  ? 'text-[#a3e635]'
                  : 'text-zinc-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}