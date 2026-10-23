'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Calendar,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, STUDIO_INFO } from '@/data/studioData';

interface ServicesShowcaseProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenLightbox: (src: string, title: string) => void;
}

export default function ServicesShowcase({ onSelectService, onOpenLightbox }: ServicesShowcaseProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find(s => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F6F4EE] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Available For — Studio &amp; On-Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Five Pillars of Visual Craft
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            From intimate royal weddings and heartwarming baby milestones to high-fashion lookbooks, avant-garde concepts, and 4K cinema films.
          </p>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {SERVICES_LIST.map((service) => {
              const isActive = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-stone-900 text-white font-bold shadow-md scale-105'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
                  }`}
                >
                  {service.id === 'videography' ? (
                    <Film className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-amber-600'}`} />
                  ) : (
                    <Camera className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-amber-600'}`} />
                  )}
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Service Spotlight Box */}
        <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-8 lg:p-12 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Gallery & Image Showcase */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main large image */}
              <div 
                onClick={() => onOpenLightbox(activeService.primaryImage, activeService.title)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group border border-stone-200 shadow-md bg-stone-100"
              >
                <Image
                  src={activeService.primaryImage}
                  alt={activeService.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    {activeService.badge}
                  </span>
                </div>

                {/* Tap to zoom indicator */}
                <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-amber-300" />
                </div>
              </div>

              {/* Thumbnail Gallery Row */}
              <div className="grid grid-cols-4 gap-2.5">
                {activeService.galleryImages.slice(1, 5).map((imgUrl, index) => (
                  <div
                    key={index}
                    onClick={() => onOpenLightbox(imgUrl, `${activeService.title} Frame 0${index + 1}`)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-stone-200 hover:border-amber-500 shadow-sm transition-all duration-200 bg-stone-100"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${activeService.title} thumb ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>

              {/* Equipment specification strip */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong className="text-stone-900">Optics &amp; Tech:</strong> {activeService.cameraGear}</span>
              </div>

            </div>

            {/* Right: Service Details, Deliverables & Booking CTA */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-1">
                  {activeService.categoryName}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-base text-stone-600 font-medium mt-1">
                  {activeService.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                {activeService.description}
              </p>

              {/* Pricing & Duration specs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block text-[11px] uppercase font-semibold">Starting From</span>
                  <span className="font-serif text-2xl font-bold text-amber-700">{activeService.startingPrice}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block text-[11px] uppercase font-semibold">Session Pacing</span>
                  <span className="font-semibold text-stone-900 text-sm mt-1 block">{activeService.duration}</span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-800">
                  Key Deliverables &amp; Inclusions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-600">
                {activeService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onSelectService(activeService)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-stone-900 text-white font-bold text-sm shadow-md hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Book {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Snaps%20by%20Nav!%20I%20am%20interested%20in%20${encodeURIComponent(activeService.title)}.%20Could%20you%20share%20availability%20and%20details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:text-amber-700 hover:border-amber-400 text-sm font-semibold transition-all duration-200 shadow-sm"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* 5-Column Quick Service Grid for Overview */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES_LIST.map((srv) => {
            const isCurrent = selectedServiceId === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`group rounded-2xl overflow-hidden p-3.5 bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isCurrent 
                    ? 'border-stone-900 shadow-lg -translate-y-1' 
                    : 'border-stone-200 hover:border-amber-400 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                    <Image
                      src={srv.primaryImage}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="250px"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-stone-900/80 backdrop-blur-md text-[10px] text-amber-300 font-semibold">
                      {srv.categoryName}
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-700 transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                    {srv.tagline}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-amber-700 font-bold">{srv.startingPrice}</span>
                  <span className="text-[11px] text-stone-500 group-hover:text-stone-900 flex items-center gap-0.5 font-medium">
                    <span>View</span>
                    <ChevronRight className="w-3 h-3 text-amber-600" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
