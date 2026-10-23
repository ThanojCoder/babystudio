'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '@/data/studioData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 lg:py-32 bg-[#F6F4EE] text-stone-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-stone-600 font-light">
            Everything you need to know about preparing for your session, timelines, gear, and deliverables with Snaps by Nav.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-stone-900 shadow-md'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-stone-900 hover:text-amber-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 rounded-full border border-stone-200 shrink-0 text-stone-700 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-stone-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-4 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center text-xs text-stone-500">
          Still have a unique query or special request?{' '}
          <a
            href="#booking"
            className="text-stone-900 hover:text-amber-700 font-bold underline underline-offset-4"
          >
            Chat directly with our studio desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
