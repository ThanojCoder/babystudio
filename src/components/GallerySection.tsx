'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Heart, Eye, Sparkles } from 'lucide-react';
import { GALLERY_LIST, GalleryItem } from '@/data/studioData';

interface GallerySectionProps {
  onOpenLightbox: (src: string, title: string) => void;
}

export default function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const filters = ['All', 'Milestones', 'Themes in Action', 'Traditional', 'Outdoor & Nature'];

  const filteredPhotos = activeFilter === 'All'
    ? GALLERY_LIST
    : GALLERY_LIST.filter(item => item.category === activeFilter);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100 text-blush-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Captured With Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Our Little Stars Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Real candid expressions, sparkling eyes, and tiny milestones captured in our Hyderabad studio.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {filters.map((filter) => {
              const count = filter === 'All'
                ? GALLERY_LIST.length
                : GALLERY_LIST.filter(g => g.category === filter).length;
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blush-500 text-white shadow-md'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  <span>{filter}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isLiked = likedPhotos[photo.id];
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(photo.src, photo.title)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-neutral-200/80 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transform group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Right Like Button */}
                  <button
                    onClick={(e) => toggleLike(e, photo.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-neutral-700 hover:text-rose-500 shadow-sm transition-transform duration-200 hover:scale-110"
                    title="Like photo"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
                  </button>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-900/70 backdrop-blur-md text-white">
                      {photo.category}
                    </span>
                  </div>

                  {/* Bottom Info revealed on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-serif font-bold text-base leading-snug">
                      {photo.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-neutral-200 mt-1">
                      <span>{photo.ageGroup}</span>
                      <span className="flex items-center gap-1 text-[11px] text-amber-300">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visible caption on mobile & desktop default */}
                <div className="p-3.5 bg-white flex items-center justify-between lg:group-hover:bg-cream-50 transition-colors">
                  <div>
                    <h4 className="text-xs font-bold text-neutral-800 line-clamp-1">{photo.title}</h4>
                    <p className="text-[10px] text-neutral-500">{photo.ageGroup}</p>
                  </div>
                  <span className="text-[10px] text-blush-500 font-semibold bg-blush-50 px-2 py-0.5 rounded-full">
                    {photo.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            Want to see how your baby will look in our bespoke setups?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-blush-500 transition-colors shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Book Your Baby's Milestone Shoot</span>
          </a>
        </div>

      </div>
    </section>
  );
}
