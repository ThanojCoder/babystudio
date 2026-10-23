'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Calendar, Camera, Film, Star } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const heroItems = [
    {
      title: "Wedding Photography",
      subtitle: "Royal Celebrations & Raw Emotion",
      src: "/images/hero-wedding.jpg",
      tag: "Weddings",
      gear: "Sony A1 • 85mm f/1.4 GM",
      highlight: "Signature Collection"
    },
    {
      title: "Baby Shoots",
      subtitle: "20+ Themed Sets & Gentle Baby-Led Pacing",
      src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
      tag: "Baby & Milestones",
      gear: "Safe Strobe • 50mm f/1.2",
      highlight: "Medical-Grade Hygiene"
    },
    {
      title: "Portfolio Shoots",
      subtitle: "High-Fashion Editorial & Model Casting",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      tag: "Portfolios",
      gear: "Profoto B10X • 85mm GM",
      highlight: "Agency Lookbooks"
    },
    {
      title: "Concept Shoots",
      subtitle: "Cinematic Noir, Neon & Fine Art Surrealism",
      src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85",
      tag: "Creative Concepts",
      gear: "Prisms & Atmospheric Smoke",
      highlight: "Avant-Garde Production"
    },
    {
      title: "Cinematic Videography",
      subtitle: "4K Cinema Films, Wedding Reels & Commercials",
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
      tag: "Cinematography",
      gear: "Sony FX6 Cinema • Anamorphic",
      highlight: "4K 60fps & Drone"
    }
  ];

  const currentHero = heroItems[activeTab];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAF8F5] text-stone-900 bg-editorial-mesh">
      {/* Ambient background glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-champagne-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-8 w-80 h-80 bg-stone-200/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, Service Selector & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Pill - Clean & Minimal */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-semibold tracking-wider uppercase text-stone-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Available Pan-India &amp; International Destinations
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-stone-900 leading-[1.14]">
              Where Every Frame Becomes{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Timeless Art.
                </span>
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-amber-200/60 -z-10 rounded-sm transform -rotate-1" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Led by <strong className="text-stone-900 font-semibold">Nav</strong>, we bring an editorial fine-art vision to life across weddings, precious baby milestones, high-fashion portfolios, creative concept productions, and 4K cinema films.
            </p>

            {/* Interactive "Available For" Selector Tabs */}
            <div className="pt-1">
              <div className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Camera className="w-3.5 h-3.5 text-amber-600" />
                <span>Available For — Tap to Preview</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {heroItems.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      activeTab === idx
                        ? 'bg-stone-900 text-white font-bold shadow-md scale-105'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
                    }`}
                  >
                    <span>{item.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white font-semibold text-base shadow-md hover:shadow-lg hover:bg-stone-800 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </a>

              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-stone-800 font-semibold text-base border border-stone-300 hover:bg-stone-50 hover:border-amber-400 transition-all duration-200 shadow-sm"
              >
                <Calendar className="w-5 h-5 text-amber-600" />
                <span>Book a Session</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="glass-card px-3 py-3 rounded-2xl text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">1,800+</div>
                <div className="text-[11px] text-stone-500 font-medium">Stories Captured</div>
              </div>
              <div className="glass-card px-3 py-3 rounded-2xl text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-amber-600 font-serif flex items-center justify-center gap-1">
                  <span>★</span> {STUDIO_INFO.googleRating}
                </div>
                <div className="text-[11px] text-stone-500 font-medium">Google Reviews</div>
              </div>
              <div className="glass-card px-3 py-3 rounded-2xl text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">4K 60fps</div>
                <div className="text-[11px] text-stone-500 font-medium">Cinema Optics</div>
              </div>
              <div className="glass-card px-3 py-3 rounded-2xl text-center shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 font-serif">48 Hours</div>
                <div className="text-[11px] text-stone-500 font-medium">First-Look Teaser</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Interactive Hero Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Soft Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200/50 via-champagne-300/40 to-stone-200/50 rounded-3xl blur-xl -z-10" />

              {/* Main Feature Display Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={currentHero.src}
                    alt={currentHero.title}
                    fill
                    priority
                    className="object-cover transform group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, 500px"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      {currentHero.highlight}
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-widest block mb-1">
                      {currentHero.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1.5">
                      {currentHero.title}
                    </h3>
                    <p className="text-stone-200 text-xs sm:text-sm mb-3">
                      {currentHero.subtitle}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs text-stone-300">
                      <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-amber-400" />
                        {currentHero.gear}
                      </span>
                      <a
                        href="#booking"
                        className="text-amber-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Bottom Card: Real Milestone badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xl backdrop-blur-xl animate-float-slow">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Bespoke Cinematography</div>
                  <div className="text-[11px] text-stone-500">4K Color Graded &amp; Sound Designed</div>
                </div>
              </div>

              {/* Floating Top-Right Mini Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold text-stone-800 shadow-lg">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Nav &amp; Team</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
