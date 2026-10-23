'use client';

import React from 'react';
import Image from 'next/image';
import { Film, Play, Sparkles, Video, Volume2, Disc, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studioData';

interface CinemaShowcaseProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export default function CinemaShowcase({ onOpenLightbox }: CinemaShowcaseProps) {
  const cinemaFeatures = [
    {
      title: "Netflix-Approved Cinema Bodies",
      desc: "Captured on full-frame Sony FX3 & FX6 cinema bodies offering 15+ stops of dynamic range.",
      icon: Film
    },
    {
      title: "Anamorphic & G-Master Primes",
      desc: "Delivering distinctive anamorphic oval bokeh, widescreen 2.39:1 aspect ratio, and organic cinematic flares.",
      icon: Sparkles
    },
    {
      title: "Hollywood Sound & Foley Design",
      desc: "Multi-mic wireless lavaliers for crisp vows and speeches, paired with commercially licensed symphonic soundtracks.",
      icon: Volume2
    },
    {
      title: "DaVinci Resolve Film Emulation",
      desc: "Handcrafted color grading modeled after Kodak 2383 35mm film stock for rich, timeless cinematic skin tones.",
      icon: Disc
    }
  ];

  return (
    <section id="cinematography" className="py-24 lg:py-32 bg-[#F6F4EE] text-stone-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Film className="w-3.5 h-3.5 text-amber-600" />
            <span>Haute Cinematography &amp; Motion Films</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Cinematic Storytelling in 4K
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            We don&apos;t just record events; we direct and compose full cinematic films. From royal wedding highlight trailers to fashion lookbook motion reels and commercial brand commercials.
          </p>
        </div>

        {/* Featured Cinema Rig / Monitor Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-xl p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Cinema Video Mockup Player with Play Button */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => onOpenLightbox("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85", "Cinematic Film Production")}
                className="relative aspect-video rounded-2xl overflow-hidden border border-stone-300 group cursor-pointer shadow-lg bg-black"
              >
                <Image
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85"
                  alt="Director Framing Cinematic Scene"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />

                {/* Cinema overlay grid & frame guides */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Center Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-amber-400/30 animate-ping absolute inset-0" />
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-stone-900 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 fill-stone-900 ml-1 text-stone-900" />
                    </div>
                  </div>
                </div>

                {/* Top Overlay Spec Indicators */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-rose-600 text-white text-[10px] font-bold tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    REC 4K RAW
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/70 text-amber-300 border border-white/10 text-[10px] font-mono">
                    24 FPS • 1/48s • ISO 800
                  </span>
                </div>

                {/* Bottom Overlay Spec */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                  <span className="font-serif font-bold text-white text-sm">
                    The Royal Rajasthan Wedding — Highlight Trailer
                  </span>
                  <span className="text-[11px] text-amber-300 font-mono">
                    03:45 / 03:45
                  </span>
                </div>

              </div>
            </div>

            {/* Right: Technical Highlights & Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-1">
                  The Cinema Standard
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Motion Pictures Crafted with Soul
                </h3>
                <p className="text-sm text-stone-600 font-light mt-2 leading-relaxed">
                  Every film is approached with meticulous storyboarding, intentional camera movements, and evocative sound engineering that immerses viewers directly back into the emotion.
                </p>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Resolution</span>
                  <span className="text-sm font-bold text-stone-900">4K DCI (3840x2160)</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Color Depth</span>
                  <span className="text-sm font-bold text-stone-900">10-Bit 4:2:2 All-Intra</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Soundtrack</span>
                  <span className="text-sm font-bold text-stone-900">Commercially Licensed</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Reel Formats</span>
                  <span className="text-sm font-bold text-stone-900">16:9 Cinema &amp; 9:16 Vertical</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Snaps%20by%20Nav!%20I%20would%20like%20to%20inquire%20about%20your%20Videography%20and%20Cinema%20Film%20packages.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-stone-900 text-white font-semibold text-sm shadow-md hover:bg-stone-800 transition-all duration-300"
                >
                  <Video className="w-4 h-4 text-amber-400" />
                  <span>Request Cinema Showreel &amp; Quote</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cinemaFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900">
                  {feat.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
