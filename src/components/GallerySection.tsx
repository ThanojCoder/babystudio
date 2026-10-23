'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Heart, Eye, Film, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '@/data/studioData';

interface GallerySectionProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const filters = ['All', 'Wedding', 'Baby Shoots', 'Portfolio', 'Concept', 'Videography'];

  const filteredPhotos = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Masterpiece Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Frames &amp; Cinematic Stills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light">
            Browse our signature work across royal weddings, newborn &amp; milestone memories, high-fashion editorial, creative concepts, and cinema sets.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filters.map((filter) => {
              const count = filter === 'All'
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter(g => g.category === filter).length;
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white font-bold shadow-md scale-105'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
                  }`}
                >
                  {filter === 'Videography' && <Film className="w-3.5 h-3.5" />}
                  <span>{filter}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPhotos.map((photo) => {
            const isLiked = likedPhotos[photo.id];
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(photo.src, photo.title)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-stone-200 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className={`relative w-full overflow-hidden bg-stone-100 ${
                  photo.aspect === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]'
                }`}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-[11px] font-semibold tracking-wide shadow-sm">
                      {photo.category}
                    </span>
                  </div>

                  {/* Top Right Like Button */}
                  <button
                    onClick={(e) => toggleLike(e, photo.id)}
                    className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-rose-500 border border-stone-200 shadow-sm transition-transform duration-200 hover:scale-110"
                    title="Like photo"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      {photo.subtitle}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] text-stone-300">
                      <span className="flex items-center gap-1.5 text-amber-300">
                        <Camera className="w-3 h-3" />
                        {photo.gearTag}
                      </span>
                      <span className="flex items-center gap-1 text-white group-hover:text-amber-300 transition-colors font-medium">
                        <span>Expand</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Shoot inquiries */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-stone-200/90 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Have a Specific Creative Vision or Moodboard?
            </h4>
            <p className="text-sm text-stone-600">
              Nav works directly with clients, agencies, and brands on bespoke concept sets and international destination projects.
            </p>
          </div>
          <a
            href="#booking"
            className="shrink-0 px-6 py-3.5 rounded-full bg-stone-900 text-white font-semibold text-sm shadow-md hover:bg-stone-800 transition-all duration-300"
          >
            Start Creative Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
