'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Sparkles, 
  MessageCircle, 
  User, 
  Baby, 
  Phone, 
  Heart, 
  CheckCircle2, 
  Clock, 
  Send 
} from 'lucide-react';
import { THEMES_LIST, PRICING_PACKAGES, STUDIO_INFO, ThemeItem, PricingPackage } from '@/data/studioData';

interface BookingWizardProps {
  selectedTheme?: ThemeItem | null;
  selectedPackage?: PricingPackage | null;
  onClearSelection?: () => void;
}

export default function BookingWizard({ selectedTheme, selectedPackage }: BookingWizardProps) {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [babyName, setBabyName] = useState('');
  const [babyAge, setBabyAge] = useState('1st Birthday (10-12 Months)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (10:00 AM - 12:30 PM)');
  const [chosenThemeTitle, setChosenThemeTitle] = useState(selectedTheme?.title || THEMES_LIST[0].title);
  const [chosenPackageId, setChosenPackageId] = useState(selectedPackage?.id || PRICING_PACKAGES[1].id);
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update if prop changes
  React.useEffect(() => {
    if (selectedTheme) {
      setChosenThemeTitle(selectedTheme.title);
    }
  }, [selectedTheme]);

  React.useEffect(() => {
    if (selectedPackage) {
      setChosenPackageId(selectedPackage.id);
    }
  }, [selectedPackage]);

  const activePackage = PRICING_PACKAGES.find(p => p.id === chosenPackageId) || PRICING_PACKAGES[1];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phoneNumber) {
      alert('Please provide your name and phone number so we can confirm your slot.');
      return;
    }

    const messageText = `Hi Babies Studio Hyd! 🎈
I would like to book a baby photoshoot session:

• Parent: ${parentName}
• Phone: ${phoneNumber}
• Baby: ${babyName || 'Little One'} (${babyAge})
• Package: ${activePackage.name} (${activePackage.price})
• Selected Theme: ${chosenThemeTitle}
• Preferred Date: ${preferredDate || 'Flexible / Upcoming Weekend'}
• Preferred Slot: ${preferredSlot}
${specialNotes ? `• Special Requests: ${specialNotes}` : ''}

Please confirm availability!`;

    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phoneNumber) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100 text-blush-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Your Date</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            Book Your Baby&apos;s Session
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Tell us about your baby and dream theme. We limit to only 2 baby sessions per day to guarantee clean sanitized sets and unrushed comfort.
          </p>
        </div>

        {/* Wizard Form & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-cream-50 p-6 sm:p-10 rounded-3xl border border-cream-200">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Booking Request Received!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{parentName}</strong>! Our studio coordinator will review your requested date for <strong>{babyName || 'your baby'}</strong> and contact you via WhatsApp / Call within 2 hours.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-neutral-600 underline hover:text-neutral-900"
                  >
                    Modify details or submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-6">
                
                {/* Parent details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Parent Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      WhatsApp / Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Baby details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Baby&apos;s Name
                    </label>
                    <div className="relative">
                      <Baby className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={babyName}
                        onChange={(e) => setBabyName(e.target.value)}
                        placeholder="e.g. Aarav"
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Milestone / Age
                    </label>
                    <select
                      value={babyAge}
                      onChange={(e) => setBabyAge(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                    >
                      <option>1st Birthday (10-13 Months)</option>
                      <option>Milestone Sitter (6-9 Months)</option>
                      <option>Toddler (2 - 3 Years)</option>
                      <option>Newborn (7 - 25 Days)</option>
                      <option>Maternity + Baby Combo</option>
                    </select>
                  </div>
                </div>

                {/* Select Package */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Choose Package
                  </label>
                  <select
                    value={chosenPackageId}
                    onChange={(e) => setChosenPackageId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition font-medium"
                  >
                    {PRICING_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — {pkg.price} ({pkg.themesCount})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Theme */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Primary Favorite Theme (from 21 sets)
                  </label>
                  <select
                    value={chosenThemeTitle}
                    onChange={(e) => setChosenThemeTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                  >
                    {THEMES_LIST.map((theme) => (
                      <option key={theme.id} value={theme.title}>
                        {theme.title} ({theme.category})
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Tip: You can change or add more themes during your pre-shoot call!
                  </p>
                </div>

                {/* Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Preferred Time Slot
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                    >
                      <option>Morning (10:00 AM - 12:30 PM)</option>
                      <option>Afternoon (2:00 PM - 4:30 PM)</option>
                      <option>Evening (4:30 PM - 6:30 PM)</option>
                      <option>Flexible / Best light slot</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                    Any Special Notes / Nap Timing
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Baby usually naps around 1 PM, grandparents will also attend..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blush-400 transition"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Booking Enquiry via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectSubmit}
                    className="w-full py-3 px-6 rounded-2xl bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request (We will call you)</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Booking Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blush-500/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Live Booking Summary
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1 mb-6">
                {activePackage.name}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 border-t border-neutral-800 pt-5">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Package Rate:</span>
                  <span className="font-bold text-white font-serif text-lg">{activePackage.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Session Allowance:</span>
                  <span className="text-white">{activePackage.themesCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Selected Theme:</span>
                  <span className="text-amber-300 font-medium text-right max-w-[200px] truncate">{chosenThemeTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Duration:</span>
                  <span className="text-white">{activePackage.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Props & Wardrobe:</span>
                  <span className="text-emerald-400 font-semibold">100% Included Free</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Zero cancellation fee if your baby falls sick on shoot day. We happily reschedule to any available date!
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Direct Studio Desk:</span>
                <a href={`tel:${STUDIO_INFO.phone}`} className="text-white font-bold hover:underline">
                  {STUDIO_INFO.phone}
                </a>
              </div>
            </div>

            {/* Quick Studio Promise */}
            <div className="p-6 rounded-3xl bg-cream-100 border border-cream-200 text-xs text-neutral-700 space-y-2">
              <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span>Our Happiness Guarantee</span>
              </div>
              <p className="leading-relaxed">
                If your baby is having an unusually rough day and won&apos;t settle despite calm breaks, we don&apos;t force it. We offer a complimentary return session to complete the shoot.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
