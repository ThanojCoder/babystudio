'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ThemeShowcase from '@/components/ThemeShowcase';
import GallerySection from '@/components/GallerySection';
import StudioExperience from '@/components/StudioExperience';
import PricingPackages from '@/components/PricingPackages';
import BookingWizard from '@/components/BookingWizard';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import LightboxModal from '@/components/LightboxModal';
import { THEMES_LIST, GALLERY_LIST, ThemeItem, PricingPackage, STUDIO_INFO } from '@/data/studioData';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);

  // Lightbox navigation state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeMediaList, setActiveMediaList] = useState<{ src: string; title: string }[]>([]);

  // Open lightbox from themes
  const handleOpenThemeLightbox = (src: string, title: string) => {
    const list = THEMES_LIST.map(t => ({ src: t.src, title: t.title }));
    const idx = list.findIndex(item => item.src === src);
    setActiveMediaList(list);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  // Open lightbox from gallery
  const handleOpenGalleryLightbox = (src: string, title: string) => {
    const list = GALLERY_LIST.map(g => ({ src: g.src, title: g.title }));
    const idx = list.findIndex(item => item.src === src);
    setActiveMediaList(list);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % activeMediaList.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
  };

  const handleSelectTheme = (theme: ThemeItem) => {
    setSelectedTheme(theme);
    // Smooth scroll to booking
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackage(pkg);
    // Smooth scroll to booking
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMedia = activeMediaList[lightboxIndex] || { src: '', title: '' };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-neutral-800 relative selection:bg-blush-200">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Studio Themes Showcase (All 21 Sets) */}
      <ThemeShowcase
        onSelectTheme={handleSelectTheme}
        onOpenLightbox={handleOpenThemeLightbox}
        selectedThemeId={selectedTheme?.id}
      />

      {/* Portfolio Gallery Section (All 11 Real Baby Shoots) */}
      <GallerySection
        onOpenLightbox={handleOpenGalleryLightbox}
      />

      {/* Why Choose Us & Baby-Safe Protocol */}
      <StudioExperience />

      {/* Transparent Packages & Photobooks */}
      <PricingPackages
        onSelectPackage={handleSelectPackage}
        selectedPackageId={selectedPackage?.id}
      />

      {/* Interactive Booking & WhatsApp Wizard */}
      <BookingWizard
        selectedTheme={selectedTheme}
        selectedPackage={selectedPackage}
      />

      {/* Real Parent Love & Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={currentMedia.src}
        title={currentMedia.title}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      {/* Floating Direct WhatsApp Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Babies%20Studio%20Hyd!%20I%20would%20like%20to%20inquire%20about%20a%20baby%20photoshoot.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
          title="Chat with us on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline">WhatsApp Studio Desk</span>
        </a>
      </div>

    </main>
  );
}
