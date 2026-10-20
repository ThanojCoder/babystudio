'use client';

import React from 'react';
import { Star, Heart, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS, STUDIO_INFO } from '@/data/studioData';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Over 480+ Five-Star Parent Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Loved By Hyderabad Parents
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Read heartwarming stories from families who trusted us with their precious milestones.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-soft hover:shadow-xl hover:border-blush-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cream-300" />
                </div>

                {/* Comment */}
                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-neutral-900 text-sm">
                    {item.parentName}
                  </h4>
                  <p className="text-[11px] text-blush-500 font-medium">
                    Baby {item.babyName}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    Theme: {item.themeUsed}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <Heart className="w-4 h-4 fill-rose-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary pill */}
        <div className="mt-14 max-w-md mx-auto text-center p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex items-center justify-center gap-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-neutral-800">
            {STUDIO_INFO.googleRating} / 5.0 on Google
          </span>
          <span className="text-xs text-neutral-400">|</span>
          <span className="text-xs text-neutral-500">
            {STUDIO_INFO.reviewCount} Verified Shoots
          </span>
        </div>

      </div>
    </section>
  );
}
