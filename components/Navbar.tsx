'use client';

import React from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Navbar({ activeView, setActiveView }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'shop', label: 'Shop' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-lg tracking-wider text-white">
        BUILT IN <span className="text-[#a3e635]">3</span>
      </div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`text-sm transition-colors ${
              activeView === item.id
                ? 'text-[#a3e635] font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}