'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Star, Heart, ShieldCheck, ArrowRight, Calendar, Camera } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-baby-radial">
      {/* Decorative ambient background orbs */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-blush-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-honey-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sage-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Trust Signals, Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-blush-200 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blush-500 animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-neutral-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Hyderabad's Favorite Baby Photography Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Every Tiny Smile Tells a Story{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-rose-500 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Forever Cherished
                </span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-honey-200/60 -z-10 rounded-sm transform -rotate-1" />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Step into an enchanted world crafted exclusively for your little one. Over <strong>20+ handcrafted themes</strong>, hospital-grade sanitized sets, and certified baby-led pacing for pure, stress-free joy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#themes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white font-semibold text-base shadow-lg shadow-rose-200/70 hover:shadow-glow hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore 21 Themes</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-neutral-800 font-semibold text-base border border-neutral-200 shadow-soft hover:bg-neutral-50 hover:border-blush-300 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-blush-500" />
                <span>Book a Session</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="glass-card px-3 py-2.5 rounded-2xl text-center">
                <div className="text-xl font-bold text-neutral-900 font-serif">21+</div>
                <div className="text-xs text-neutral-500 font-medium">Ready Themes</div>
              </div>
              <div className="glass-card px-3 py-2.5 rounded-2xl text-center">
                <div className="text-xl font-bold text-amber-500 font-serif flex items-center justify-center gap-1">
                  <span>★</span> {STUDIO_INFO.googleRating}
                </div>
                <div className="text-xs text-neutral-500 font-medium">Google Rating</div>
              </div>
              <div className="glass-card px-3 py-2.5 rounded-2xl text-center">
                <div className="text-xl font-bold text-emerald-600 font-serif">100%</div>
                <div className="text-xs text-neutral-500 font-medium">Sanitized Props</div>
              </div>
              <div className="glass-card px-3 py-2.5 rounded-2xl text-center">
                <div className="text-xl font-bold text-neutral-900 font-serif">1200+</div>
                <div className="text-xs text-neutral-500 font-medium">Happy Babies</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Collage with real baby and theme photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Center Card (Baby smiling on floral swing) */}
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/gallery/gallery-02.jpeg"
                    alt="Baby smiling on floral wooden swing"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-1.5">
                      <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                      <span>Milestone Favorite</span>
                    </div>
                    <h3 className="text-lg font-serif font-semibold">Enchanted Floral Swing</h3>
                    <p className="text-xs text-neutral-200">Captured at Babies Studio Hyd</p>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Mini Card (Pink Grand Piano) */}
              <div className="hidden sm:block absolute -top-8 -right-8 z-30 w-44 rounded-2xl overflow-hidden shadow-xl border-3 border-white bg-white animate-float-slow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/themes/theme-03.jpeg"
                    alt="Pink grand piano theme"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 bg-white text-center">
                  <p className="text-[11px] font-semibold text-neutral-800">Royal White Piano</p>
                  <p className="text-[9px] text-blush-500 font-medium">1st Birthday Set</p>
                </div>
              </div>

              {/* Floating Bottom-Left Mini Card (Little Giggling Pianist) */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 z-30 w-48 rounded-2xl overflow-hidden shadow-xl border-3 border-white bg-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/gallery/gallery-05.jpeg"
                    alt="Happy baby smiling at piano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 bg-white flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold text-neutral-800">Joyful Giggles</p>
                    <p className="text-[9px] text-neutral-500">Unposed & Natural</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Floating Shield Seal */}
              <div className="absolute top-1/2 -left-6 z-30 transform -translate-y-1/2 bg-white rounded-2xl p-3 shadow-lg border border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-800">Baby-Safe Certified</div>
                  <div className="text-[10px] text-neutral-500">Sanitized & Cozy 26°C</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
