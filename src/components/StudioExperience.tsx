'use client';

import React from 'react';
import { 
  ShieldCheck, 
  ThermometerSun, 
  HeartHandshake, 
  Sparkles, 
  Crown, 
  Camera, 
  Coffee, 
  Smile, 
  CheckCircle2 
} from 'lucide-react';
import { STUDIO_FEATURES } from '@/data/studioData';

export default function StudioExperience() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    ThermometerSun: <ThermometerSun className="w-6 h-6 text-amber-500" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-indigo-500" />,
    Crown: <Crown className="w-6 h-6 text-amber-600" />,
    Camera: <Camera className="w-6 h-6 text-blue-500" />,
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background soft gradients */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-honey-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-blush-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Parent Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            The Baby-Safe Studio Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            We know how delicate your little angel is. Our Hyderabad studio is designed from the floor up to be calm, comforting, and warm for both baby and parents.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_FEATURES.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-cream-50/70 border border-cream-200/80 hover:border-blush-300 hover:bg-white hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-500" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-200/60 flex items-center gap-2 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Certified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Parental Comfort Highlights Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-200/70 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Lounge & Amenities
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
                Relax While We Work Our Magic
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Enjoy our private nursing cabin, baby changing station, complimentary hot tea/coffee, and high-speed Wi-Fi while our specialized baby handlers and photographer capture timeless joy.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Private Nursing Suite
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sanitized Changing Station
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Feeding Warmers & Diaper Bar
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#booking"
                className="px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-blush-500 shadow-lg transition-colors"
              >
                Schedule Studio Tour / Session
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
