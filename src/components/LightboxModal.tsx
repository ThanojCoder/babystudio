'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  onNext,
  onPrev
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
    >
      {/* Top Bar */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50 pointer-events-auto"
      >
        <div className="flex items-center gap-3">
          <span className="font-serif font-semibold text-sm sm:text-base text-neutral-200">
            {title}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all z-50"
          title="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image Center */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-2"
      >
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Next Button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all z-50"
          title="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Bottom info helper */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-400 text-xs hidden sm:block">
        Press Esc to close • Left/Right arrows to navigate
      </div>
    </div>
  );
}
