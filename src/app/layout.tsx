import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snaps by Nav — Fine Art Photography & Haute Cinematography",
  description: "Premier luxury photo & cinema studio. Available for Wedding Photography, Baby Shoots, High-Fashion Portfolios, Avant-Garde Concept Shoots, and 4K Cinematic Videography.",
  keywords: [
    "Snaps by Nav",
    "wedding photography",
    "baby photoshoot studio",
    "model portfolio shoot",
    "concept photography",
    "cinematic videography",
    "luxury photo studio",
    "destination wedding photographer"
  ],
  authors: [{ name: "Snaps by Nav" }],
  openGraph: {
    title: "Snaps by Nav — Fine Art Photography & Haute Cinematography",
    description: "Available for Wedding Photography, Baby Shoots, Portfolio Shoots, Concept Shoots & Cinematic Videography.",
    siteName: "Snaps by Nav",
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
      <body className="antialiased font-sans text-stone-900 bg-[#FAF8F5]">
        {children}
      </body>
    </html>
  );
}
