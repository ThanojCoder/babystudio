'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import GallerySection from '@/components/GallerySection';
import CinemaShowcase from '@/components/CinemaShowcase';
import StudioExperience from '@/components/StudioExperience';
import PricingPackages from '@/components/PricingPackages';
import BookingWizard from '@/components/BookingWizard';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import LightboxModal from '@/components/LightboxModal';
import { 
  PORTFOLIO_ITEMS, 
  ServiceItem, 
  PricingPackage, 
  STUDIO_INFO 
} from '@/data/studioData';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);

  // Lightbox navigation state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeMediaList, setActiveMediaList] = useState<{ src: string; title: string }[]>([]);

  // Collect all media for lightbox browsing
  const allMediaList: { src: string; title: string }[] = PORTFOLIO_ITEMS.map(p => ({
    src: p.src,
    title: `${p.title} (${p.category})`
  }));

  const handleOpenLightbox = (src: string, title: string) => {
    let list = [...allMediaList];
    let idx = list.findIndex(item => item.src === src);
    if (idx === -1) {
      list = [{ src, title }, ...list];
      idx = 0;
    }
    setActiveMediaList(list);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % activeMediaList.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + activeMediaList.length) % activeMediaList.length);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    setSelectedPackage(pkg);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentMedia = activeMediaList[lightboxIndex] || { src: '', title: '' };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-stone-900 relative selection:bg-amber-200 selection:text-stone-900">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Available For: 5 Pillars of Creative Vision */}
      <ServicesShowcase
        onSelectService={handleSelectService}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Curated Portfolio Gallery */}
      <GallerySection
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Dedicated Haute Videography & Cinema Showreel */}
      <CinemaShowcase
        onOpenLightbox={handleOpenLightbox}
      />

      {/* The Craft, Gear & Experience */}
      <StudioExperience />

      {/* Curated Packages & Transparent Investment */}
      <PricingPackages
        onSelectPackage={handleSelectPackage}
        selectedPackageId={selectedPackage?.id}
      />

      {/* Interactive Booking & WhatsApp Wizard */}
      <BookingWizard
        selectedService={selectedService}
        selectedPackage={selectedPackage}
      />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Fullscreen Master Lightbox Modal */}
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
          href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Snaps%20by%20Nav!%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot%20or%20videography%20session.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-emerald-500/40"
          title="Chat directly with Nav's Studio Desk on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline">WhatsApp Studio Desk</span>
        </a>
      </div>

    </main>
  );
}
