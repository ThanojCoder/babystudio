'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Calendar, Menu, X, MessageCircle, Sparkles, Film, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Available For', href: '#services', badge: '5 Pillars' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cinematography', href: '#cinematography', icon: true },
    { name: 'The Craft', href: '#experience' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3.5 shadow-soft' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-500 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-all duration-300">
              <Camera className="w-5 h-5 text-white stroke-[2.2]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                  Snaps by <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700 bg-clip-text text-transparent">Nav</span>
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-stone-500 uppercase font-semibold">Fine Art Photo &amp; Cinema</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-650 hover:text-amber-700 transition-colors flex items-center gap-1.5 py-1 text-stone-700"
              >
                {item.icon && <Film className="w-3.5 h-3.5 text-amber-600" />}
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Snaps%20by%20Nav!%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot%20or%20videography%20session.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="#booking"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white font-medium text-sm shadow-sm hover:shadow-md hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Session</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white/98 backdrop-blur-2xl border-b border-stone-200 px-6 py-6 shadow-xl transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-amber-700 transition-colors flex items-center justify-between py-2 border-b border-stone-100"
              >
                <div className="flex items-center gap-2">
                  {item.icon && <Film className="w-4 h-4 text-amber-600" />}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-stone-900 text-white font-bold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Reserve Session Online</span>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Snaps%20by%20Nav!%20I%20would%20like%20to%20inquire%20about%20a%20photoshoot%20or%20videography%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
