'use client';

import React from 'react';
import { 
  Sparkles, 
  Film, 
  Palette, 
  ShieldCheck, 
  Clock, 
  Plane, 
  Camera, 
  Crown
} from 'lucide-react';
import { STUDIO_FEATURES, STUDIO_INFO } from '@/data/studioData';

export default function StudioExperience() {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Film,
    Palette,
    ShieldCheck,
    Clock,
    Plane
  };

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>The Nav Signature Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Craftsmanship in Every Pixel &amp; Pulse
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            At Snaps by Nav, we unite editorial high-fashion aesthetics with authentic candid emotion. Here is why discerning couples, families, and creators choose us.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_FEATURES.map((feat, index) => {
            const Icon = iconMap[feat.icon] || Camera;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white border border-stone-200 hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 relative shadow-sm hover:-translate-y-1"
              >
                {/* Index badge */}
                <div className="absolute top-6 right-6 font-mono text-2xl font-bold text-stone-200 group-hover:text-amber-500/30 transition-colors">
                  0{index + 1}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6 group-hover:scale-105 group-hover:bg-amber-100 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Specs Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shadow-md">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-700">9+ Years</div>
            <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">Visual Industry Experience</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">1,800+</div>
            <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">Sessions &amp; Celebrations</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-700">4.98 ★</div>
            <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">Verified Client Reviews</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-emerald-700">48 Hours</div>
            <div className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">First-Look Teasers</div>
          </div>
        </div>

      </div>
    </section>
  );
}
