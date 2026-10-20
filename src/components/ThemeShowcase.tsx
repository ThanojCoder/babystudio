'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Check, Eye, Calendar, Tag } from 'lucide-react';
import { THEMES_LIST, ThemeItem } from '@/data/studioData';

interface ThemeShowcaseProps {
  onSelectTheme: (theme: ThemeItem) => void;
  onOpenLightbox: (imageSrc: string, title: string) => void;
  selectedThemeId?: string;
}

export default function ThemeShowcase({ onSelectTheme, onOpenLightbox, selectedThemeId }: ThemeShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Signature Sets',
    'Fantasy & Adventure',
    'Traditional & Culture',
    'Cosplay & Roles',
    'Nature & Boho'
  ];

  const filteredThemes = activeCategory === 'All'
    ? THEMES_LIST
    : THEMES_LIST.filter(t => t.category === activeCategory);

  return (
    <section id="themes" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>21 Handcrafted Themes Ready For Your Baby</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Magical Studio Themes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            From fairytale dreams and traditional heritage to playful miniature careers. Every theme is an authentic physical set styled with baby-safe props.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? THEMES_LIST.length 
                : THEMES_LIST.filter(t => t.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredThemes.map((theme) => {
            const isSelected = selectedThemeId === theme.id;
            return (
              <div
                key={theme.id}
                className={`group rounded-3xl overflow-hidden bg-cream-50 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? 'border-blush-500 ring-2 ring-blush-400/50 shadow-lg' 
                    : 'border-neutral-200/80 hover:border-blush-300 hover:shadow-soft'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={theme.src}
                    alt={theme.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-neutral-800 shadow-sm flex items-center gap-1">
                      <Tag className="w-3 h-3 text-blush-500" />
                      {theme.category}
                    </span>
                  </div>

                  {/* Top Right Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-neutral-900 shadow-sm">
                      {theme.tag}
                    </span>
                  </div>

                  {/* Quick Zoom Trigger */}
                  <button
                    onClick={() => onOpenLightbox(theme.src, theme.title)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-neutral-800 hover:bg-white hover:text-blush-500 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md transform translate-y-1 group-hover:translate-y-0"
                    title="View Full Resolution"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-blush-600 transition-colors">
                      {theme.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                      {theme.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-3 border-t border-neutral-200/60 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenLightbox(theme.src, theme.title)}
                      className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview Set</span>
                    </button>

                    <button
                      onClick={() => onSelectTheme(theme)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-neutral-900 text-white hover:bg-blush-500'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Choose Theme</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-cream-100 border border-cream-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-neutral-900 text-base">
              Want a unique custom theme or combination?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              We design custom color palettes and personalized baby name boards for all milestone shoots.
            </p>
          </div>
          <a
            href="#booking"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-blush-500 text-white text-xs sm:text-sm font-semibold shadow hover:bg-blush-600 transition-colors"
          >
            Customize My Session
          </a>
        </div>

      </div>
    </section>
  );
}
