'use client';

import React from 'react';
import { Check, Sparkles, Clock, Crown, Heart, ArrowRight } from 'lucide-react';
import { PRICING_PACKAGES, PricingPackage } from '@/data/studioData';

interface PricingPackagesProps {
  onSelectPackage: (pkg: PricingPackage) => void;
  selectedPackageId?: string;
}

export default function PricingPackages({ onSelectPackage, selectedPackageId }: PricingPackagesProps) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent & Honest Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Curated Studio Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Every package includes full access to our sanitized baby wardrobe, handpicked props, and custom theme sets. No hidden studio charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isPopular
                    ? 'border-2 border-blush-400 shadow-xl ring-4 ring-blush-100/60 lg:-translate-y-2'
                    : 'border border-neutral-200/80 shadow-soft hover:border-blush-200'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white text-xs font-bold py-1.5 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-sm">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular For 1st Birthdays</span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  {/* Title & Subtitle */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-neutral-900">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>
                    {pkg.id === 'package-royal' && (
                      <Crown className="w-6 h-6 text-amber-500" />
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-neutral-500">/ session</span>
                  </div>

                  {/* Quick specs pill */}
                  <div className="mt-6 pt-6 border-t border-neutral-100 grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100">
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Themes</span>
                      <span className="font-bold text-neutral-800">{pkg.themesCount}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-100">
                      <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Duration</span>
                      <span className="font-bold text-neutral-800">{pkg.duration}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      What&apos;s Included:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white shadow-md hover:shadow-glow hover:opacity-95'
                        : isSelected
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{isSelected ? 'Package Selected' : 'Select Package'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Need custom twin baby setups, maternity add-ons, or event coverage?{' '}
          <a href="#booking" className="text-blush-500 underline font-semibold hover:text-blush-600">
            Request a personalized quotation here
          </a>
        </div>

      </div>
    </section>
  );
}
