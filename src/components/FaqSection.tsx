'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, STUDIO_INFO } from '@/data/studioData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-honey-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Everything you need to know about planning a joyful, stress-free photoshoot for your baby.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200/80 bg-cream-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-cream-100/60 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-neutral-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white text-neutral-600 shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-blush-500' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-white animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-emerald-950 text-base">
              Still have a specific query or want to discuss themes?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-800">
              Our baby photographer is available to chat directly and guide you!
            </p>
          </div>
          <a
            href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Babies%20Studio%20HYD!%20I%20have%20a%20few%20questions%20regarding%20the%20photoshoot.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow hover:bg-emerald-700 transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
