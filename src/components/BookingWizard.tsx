'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MessageCircle, 
  User, 
  Phone, 
  Mail,
  Camera,
  Film,
  CheckCircle2, 
  Clock, 
  MapPin
} from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO, ServiceItem, PricingPackage } from '@/data/studioData';

interface BookingWizardProps {
  selectedService?: ServiceItem | null;
  selectedPackage?: PricingPackage | null;
}

export default function BookingWizard({ selectedService, selectedPackage }: BookingWizardProps) {
  const [chosenServiceTitle, setChosenServiceTitle] = useState(
    selectedService?.title || SERVICES_LIST[0].title
  );
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [locationType, setLocationType] = useState('Jubilee Hills Studio (Hyderabad)');
  const [preferredSlot, setPreferredSlot] = useState('Morning Golden Hour (9:30 AM – 1:00 PM)');
  const [visionNotes, setVisionNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync prop changes
  useEffect(() => {
    if (selectedService) {
      setChosenServiceTitle(selectedService.title);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPackage) {
      const matchingService = SERVICES_LIST.find(s => s.categoryName === selectedPackage.serviceCategory);
      if (matchingService) {
        setChosenServiceTitle(matchingService.title);
      }
    }
  }, [selectedPackage]);

  const activeServiceObj = SERVICES_LIST.find(s => s.title === chosenServiceTitle) || SERVICES_LIST[0];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phoneNumber) {
      alert('Please provide your name and phone number so our studio coordinator can reach you.');
      return;
    }

    const messageText = `Hi Snaps by Nav! 📸✨
I would like to inquire about reserving a shoot:

• Client: ${clientName}
• Contact: ${phoneNumber}
• Email: ${email || 'Not specified'}
• Service: ${chosenServiceTitle}
• Preferred Date: ${eventDate || 'Upcoming Weekend / Flexible'}
• Preferred Location: ${locationType}
• Preferred Slot: ${preferredSlot}
${visionNotes ? `• Creative Vision / Notes: ${visionNotes}` : ''}

Please share available slots and next steps!`;

    const encoded = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phoneNumber) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-[#FAF8F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Studio Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Reserve Your Session with Nav
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Select your desired discipline below. Our studio coordinator will review your creative brief and confirm availability within 2 hours.
          </p>
        </div>

        {/* Main Booking Card Container */}
        <div className="rounded-3xl bg-white border border-stone-200/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
          
          {submitted ? (
            <div className="py-16 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900">
                Inquiry Successfully Dispatched!
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thank you, <strong className="text-stone-900">{clientName}</strong>! Your inquiry for <strong className="text-amber-700">{chosenServiceTitle}</strong> has been logged. Our studio coordinator will connect with you shortly via WhatsApp &amp; Phone with date confirmation and moodboard guides.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm border border-stone-300"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSend} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Form Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                    1. Select Service / Topic (Available For):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_LIST.map((srv) => {
                      const isSelected = chosenServiceTitle === srv.title;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setChosenServiceTitle(srv.title)}
                          className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                            isSelected
                              ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                              : 'bg-stone-50 border-stone-200 text-stone-800 hover:border-amber-400 hover:bg-white'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-amber-400 text-stone-900' : 'bg-white text-amber-700 border border-stone-200'
                          }`}>
                            {srv.id === 'videography' ? <Film className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="font-bold text-xs">{srv.title}</div>
                            <div className={`text-[10px] ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                              {srv.startingPrice}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Client Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Navjot Singh / Meera Varma"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-600" />
                      <span>WhatsApp / Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-600" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm"
                    />
                  </div>
                </div>

                {/* Location & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Shoot Location</span>
                    </label>
                    <select
                      value={locationType}
                      onChange={(e) => setLocationType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm"
                    >
                      <option value="Jubilee Hills Studio (Hyderabad)">Jubilee Hills Studio (Hyderabad)</option>
                      <option value="Outdoor / Heritage Location in Hyderabad">Outdoor / Heritage Location in Hyderabad</option>
                      <option value="Destination Shoot (Goa, Jaipur, Udaipur, etc.)">Destination Shoot (Goa, Jaipur, Udaipur, etc.)</option>
                      <option value="Client Residence / Private Venue">Client Residence / Private Venue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      value={preferredSlot}
                      onChange={(e) => setPreferredSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm"
                    >
                      <option value="Morning Golden Hour (9:30 AM – 1:00 PM)">Morning Golden Hour (9:30 AM – 1:00 PM)</option>
                      <option value="Afternoon Studio Production (1:30 PM – 5:00 PM)">Afternoon Studio Production (1:30 PM – 5:00 PM)</option>
                      <option value="Sunset / Evening Golden Hour (4:30 PM – 7:30 PM)">Sunset / Evening Golden Hour (4:30 PM – 7:30 PM)</option>
                      <option value="Full Day Multi-Hour Production">Full Day Multi-Hour Production</option>
                    </select>
                  </div>
                </div>

                {/* Special Vision Notes */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Creative Vision, Baby Age, Theme Ideas, or Wedding Details:
                  </label>
                  <textarea
                    rows={3}
                    value={visionNotes}
                    onChange={(e) => setVisionNotes(e.target.value)}
                    placeholder="Share your ideas, outfit requirements, references, or specific deliverables..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 focus:bg-white focus:outline-none text-stone-900 text-sm placeholder:text-stone-400 resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectSubmit}
                    className="w-full sm:w-auto py-4 px-6 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm"
                  >
                    Submit Online
                  </button>
                </div>

                <p className="text-[11px] text-stone-500 text-center sm:text-left">
                  🔒 We respect your privacy. No spam. You will receive a direct, personal response from Nav &amp; the studio team.
                </p>

              </div>

              {/* Right Column: Dynamic Summary & Studio Assurance */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Live Selection Card */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <span className="text-xs uppercase font-bold text-stone-800 tracking-wider">
                      Selected Service Brief
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Available
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-stone-900">
                      {activeServiceObj.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">
                      {activeServiceObj.tagline}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 space-y-1.5 text-xs text-stone-700 shadow-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Starting Price:</span>
                      <span className="font-bold text-amber-700">{activeServiceObj.startingPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Session Pacing:</span>
                      <span className="text-stone-900 font-medium">{activeServiceObj.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Optics:</span>
                      <span className="text-stone-900 font-medium truncate max-w-[170px]">{activeServiceObj.cameraGear.split('•')[0]}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Included With This Session:
                    </p>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {activeServiceObj.deliverables.slice(0, 4).map((del, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Studio Contact Pill */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3 text-xs text-stone-600 shadow-sm">
                  <div className="font-serif font-bold text-base text-stone-900">
                    Need Immediate Assistance?
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Call our studio coordinator directly at <strong className="text-stone-900">{STUDIO_INFO.phone}</strong> or visit our Jubilee Hills studio for a coffee and portfolio viewing.
                  </p>
                  <div className="pt-1 flex items-center gap-2 text-stone-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Studio Hours: {STUDIO_INFO.hours}</span>
                  </div>
                </div>

              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
