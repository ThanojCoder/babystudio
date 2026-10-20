'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Phone, Calendar, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
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
    { name: 'Themes', href: '#themes', badge: '21 Sets' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-200">
              <Camera className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-300 rounded-full animate-ping opacity-75" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-neutral-800">
                  Babies Studio <span className="text-blush-500 font-sans font-semibold">Hyd</span>
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">For Your Precious Moments</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-blush-500 transition-colors flex items-center gap-1.5"
              >
                {item.name}
                {item.badge && (
                  <span className="text-[10px] font-semibold bg-blush-100 text-blush-500 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Babies%20Studio%20HYD!%20I%20would%20like%20to%20inquire%20about%20a%20baby%20photoshoot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all duration-200 shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="#booking"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white font-medium text-sm shadow-md hover:shadow-glow hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-neutral-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-fadeIn">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-medium text-neutral-800 hover:text-blush-500 border-b border-neutral-100"
            >
              <span>{item.name}</span>
              {item.badge && (
                <span className="text-xs font-semibold bg-blush-100 text-blush-500 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Babies%20Studio%20HYD!%20I%20would%20like%20to%20inquire%20about%20a%20baby%20photoshoot.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium border border-emerald-200"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-medium shadow-md"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Shoot Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
