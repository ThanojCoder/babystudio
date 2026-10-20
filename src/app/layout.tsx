import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babies Studio Hyd — Luxury Baby & Milestone Photography Studio",
  description: "Hyderabad's premier luxury baby, milestone & 1st birthday photography studio with 20+ handcrafted themes, certified infant safety protocols, and heartwarming fine-art portraits.",
  keywords: [
    "baby photoshoot hyderabad",
    "baby photography studio jubliee hills",
    "1st birthday photoshoot",
    "milestone baby photos",
    "newborn photography hyderabad",
    "babies studio hyd",
    "baby themes hyderabad"
  ],
  authors: [{ name: "Babies Studio Hyd" }],
  openGraph: {
    title: "Babies Studio Hyd — For Your Precious Moments",
    description: "20+ Handcrafted Themes, 100% Baby-Safe Sanitized Sets & Certified Pacing in Hyderabad.",
    siteName: "Babies Studio Hyd",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans text-neutral-800 bg-[#FDFBF7]">
        {children}
      </body>
    </html>
  );
}
