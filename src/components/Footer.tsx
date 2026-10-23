'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MapPin, Phone, Mail, Clock, Instagram, Sparkles, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '@/data/studioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white pt-20 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-500 flex items-center justify-center text-white shadow-md">
                <Camera className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white">
                  Snaps by <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Nav</span>
                </span>
                <p className="text-[10px] tracking-widest text-stone-400 uppercase font-semibold">Fine Art Photography &amp; Cinema</p>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed font-light">
              Premier luxury photo &amp; cinema studio. Creating timeless visual art across weddings, baby milestones, high-fashion portfolios, avant-garde concepts, and 4K commercial cinematography.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://instagram.com/${STUDIO_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-400/50 transition-all duration-200"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400">
                Follow <strong className="text-amber-300">{STUDIO_INFO.instagram}</strong> for daily cinema reels &amp; BTS
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Available For</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                  <span>Curated Portfolio Archive</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Studio Location &amp; Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span className="font-light">{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-1" />
                <span className="text-stone-500 font-light">{STUDIO_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-stone-300">Snaps by Nav</strong>. All rights reserved. Available Pan-India &amp; Worldwide for Destinations.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors p-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
