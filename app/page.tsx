'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PillarsSection from '@/components/PillarsSection';
import FeaturedResourceSection from '@/components/FeaturedResourceSection';
import QuoteSection from '@/components/QuoteSection';
import AboutSection from '@/components/AboutSection';
import ShopSection from '@/components/ShopSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import BuilderManualPage from '@/components/BuilderManualPage';
import Footer from '@/components/Footer';

const TOTAL_PAGES = 40;

export default function Page() {
  const [activeView, setActiveView] = useState('home');

  // Page 1 data so the manual renders the proper cover/content
  const pageOneData = {
    pageNumber: 1,
    title: "THE BUILDER'S MANUAL",
    subtitle: 'PART 1 | THE FOUNDATION',
    chapterTitle: "BUILT IN 3 • THE BUILDER'S MANUAL",
    contentBlocks: [
      { type: 'text', text: 'Fitness is the vehicle. Character is the destination.' },
      {
        type: 'text',
        text: 'A guided field guide for honest reflection, practical action, and lasting growth.',
      },
    ],
  };

  // Start each view at the top, since views swap without a page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#a3e635] selection:text-black">
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <div className="mx-auto max-w-7xl px-6 py-8">
        {activeView === 'home' && (
          <div className="space-y-16 animate-fadeIn">
            <HeroSection
              onExploreManual={() => setActiveView('manual')}
              onJoinCommunity={() => setActiveView('community')}
            />
            <PillarsSection />
            <FeaturedResourceSection onViewShop={() => setActiveView('shop')} />
            <QuoteSection />
          </div>
        )}

        {activeView === 'about' && (
          <div className="animate-fadeIn">
            <AboutSection />
          </div>
        )}

        {activeView === 'shop' && (
          <div className="space-y-12 animate-fadeIn">
            <ShopSection />
          </div>
        )}

        {activeView === 'community' && (
          <div className="animate-fadeIn">
            <CommunitySection onGetInvolved={() => setActiveView('contact')} />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="space-y-12 animate-fadeIn">
            <ContactSection />
          </div>
        )}

        {activeView === 'manual' && (
          <div className="space-y-6 animate-fadeIn">
            <BuilderManualPage
              pageData={pageOneData}
              totalPages={TOTAL_PAGES}
              onBackToHome={() => setActiveView('home')}
            />
          </div>
        )}
      </div>

      {/* The manual has its own header/footer, so hide the site footer there */}
      {activeView !== 'manual' && <Footer />}
    </main>
  );
}
