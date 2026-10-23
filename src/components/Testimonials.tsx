'use client';

import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS, STUDIO_INFO } from '@/data/studioData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span>Client Words &amp; Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Loved by Couples, Families &amp; Creators
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Rated {STUDIO_INFO.googleRating}★ across {STUDIO_INFO.reviewCount} reviews. Here is what our clients share about working with Nav and the team.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl relative group"
            >
              {/* Quote icon background */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-stone-100 group-hover:text-amber-100 transition-colors pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-stone-700 font-light leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">
                    {t.clientName}
                  </h4>
                  <div className="text-xs text-amber-700 font-medium mt-0.5">
                    {t.serviceType}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-stone-400 block font-mono">
                    {t.date}
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">
                    {t.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
