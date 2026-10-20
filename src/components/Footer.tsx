'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MapPin, Phone, Mail, Clock, Instagram, Heart, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studioData';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white">
                  Babies Studio <span className="text-blush-400 font-sans font-semibold">Hyd</span>
                </span>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium">For Your Precious Moments</p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Hyderabad&apos;s premier luxury baby photography studio with 20+ ready physical sets, certified infant safety protocols, and heartwarming milestone keepsakes.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 transition"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400">
                Follow <strong className="text-white">{STUDIO_INFO.instagram}</strong> for behind-the-scenes & daily reels
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Quick Explore
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#themes" className="hover:text-blush-400 transition">21 Studio Themes Catalog</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blush-400 transition">Milestone Baby Gallery</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blush-400 transition">Baby-Safe Studio Protocol</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blush-400 transition">Packages & Photobooks</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blush-400 transition">Parent Testimonials</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blush-400 transition">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Studio Location & Contact
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition">
                  {STUDIO_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span>{STUDIO_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for little stars & happy parents</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
