'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextType {
  registerImage: (src: string, alt: string) => number;
  openLightbox: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export function PageLightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const registerImage = useCallback((src: string, alt: string) => {
    let index = -1;
    setImages((prev) => {
      // Check if image already registered
      const existingIndex = prev.findIndex((img) => img.src === src);
      if (existingIndex >= 0) {
        index = existingIndex;
        return prev;
      }
      index = prev.length;
      return [...prev, { src, alt }];
    });
    return index;
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <LightboxContext.Provider value={{ registerImage, openLightbox }}>
      {children}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within PageLightboxProvider');
  }
  return context;
}
