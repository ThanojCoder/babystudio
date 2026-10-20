# Babies Studio HYD — Website & Showcase

A modern, smooth, and luxury baby photography studio web application built with **Next.js (App Router)**, **Tailwind CSS**, and **Lucide Icons**.

## 🌟 Features Included

1. **Magical Studio Themes Showcase (All 21 Sets)**:
   - Interactive category filters (*Signature Sets, Fantasy & Adventure, Traditional & Culture, Cosplay & Roles, Nature & Boho*).
   - "Choose Theme" action which automatically pre-selects the theme in the booking form.
   - Lightbox modal with full-screen zoom and next/previous keyboard & click controls.
   - Easily customizable titles, tags, and descriptions in `src/data/studioData.ts`.

2. **Little Stars Milestone Gallery (All 11 Real Baby Shoots)**:
   - Categorized by Milestones, Themes in Action, Traditional, and Outdoor.
   - Interactive likes, hover captions, and high-resolution fullscreen lightbox.

3. **The Baby-Safe Studio Experience**:
   - 100% Medical-grade sanitization protocols.
   - Temperature controlled (26°C warmth) environment.
   - Baby-led pacing (unlimited feeding/nap breaks).
   - Certified infant handling photographers.
   - Private mother's nursing & feeding lounge.

4. **Transparent Packages & Pricing**:
   - **Tiny Bloom** (₹7,999) — 1 Theme, 10 retouched photos.
   - **Milestone Celebration** (₹14,999) — 2 Themes + Family Shoot + Photobook + Cake Smash option.
   - **Royal Heritage Luxe** (₹23,999) — 3 Themes + Splash Bath + 12x12 Velvet Album + 4K Reel Video + RAW files.
   - "Select Package" button connects directly into the booking wizard.

5. **Interactive Booking & WhatsApp Wizard**:
   - Pre-selects clicked themes & packages.
   - Real-time live summary card.
   - Instant 1-tap WhatsApp booking message generator.
   - Direct form submission.

6. **Parent Testimonials & FAQs**:
   - 480+ Google parent review ratings.
   - Comprehensive answers to frequently asked baby photography questions.

7. **Floating Quick WhatsApp Desk**:
   - Easily contactable from any page section.

---

## 🎨 How to Edit Theme or Gallery Names

All image data, titles, categories, pricing, and studio info are centralized in:
📂 `src/data/studioData.ts`

To change a theme name or description:
1. Open `src/data/studioData.ts`
2. Find `THEMES_LIST` or `GALLERY_LIST`
3. Update `title`, `description`, or `category` as needed!

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Or build for production
npm run build
npm run start
```
The application will run on `http://localhost:3000`.
