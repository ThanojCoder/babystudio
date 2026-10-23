'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Crown, ArrowRight, Calendar } from 'lucide-react';
import { PRICING_PACKAGES, PricingPackage } from '@/data/studioData';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  selectedPackageId?: string;
}

export default function PricingPackages({ onSelectPackage, selectedPackageId }: PricingPackagesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Weddings', 'Baby & Milestones', 'Fashion & Modeling', 'Creative Fine Art', 'Films & Cinema'];

  const filteredPackages = activeCategory === 'All'
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter(p => p.serviceCategory === activeCategory);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F6F4EE] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Honest &amp; Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Studio Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Every package is all-inclusive with dedicated art direction, high-resolution color-graded deliverables, and private digital archive access.
          </p>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-stone-900 text-white font-bold shadow-md'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isPopular
                    ? 'border-2 border-amber-500 shadow-xl lg:-translate-y-2'
                    : 'border border-stone-200/90 hover:border-amber-400 shadow-md'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-amber-300 text-xs font-bold py-1.5 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm">
                    <Crown className="w-3.5 h-3.5 text-amber-400" />
                    <span>Most Popular Experience</span>
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1">
                  
                  {/* Category Pill */}
                  <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold block mb-2">
                    {pkg.serviceCategory}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-stone-400 line-through">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-stone-500">/ package</span>
                  </div>

                  {/* Quick specs pill */}
                  <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-stone-500 block text-[10px] uppercase font-semibold">Duration</span>
                      <span className="font-semibold text-stone-900 truncate block">{pkg.duration}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-stone-500 block text-[10px] uppercase font-semibold">Suitable For</span>
                      <span className="font-semibold text-stone-900 truncate block">{pkg.bestFor.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-800">
                      Inclusions &amp; Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="p-7 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular || isSelected
                        ? 'bg-stone-900 text-white shadow-md hover:bg-stone-800'
                        : 'bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-800 border border-stone-200'
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>{isSelected ? 'Package Selected' : 'Select & Reserve'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Quote Request Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-stone-600">
            Need a tailored multi-day destination wedding package, commercial brand campaign, or custom lookbook production?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-stone-900 hover:text-amber-700 font-bold text-sm mt-2 transition-colors underline underline-offset-4"
          >
            <span>Request a Bespoke Studio Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
