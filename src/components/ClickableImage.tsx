'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

// Global state for the page lightbox (client-side only)
let globalImages: { src: string; alt: string }[] = [];
let globalSetOpen: ((open: boolean) => void) | null = null;
let globalSetIndex: ((index: number) => void) | null = null;
let registrationOrder = 0;

export function PageLightboxManager() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    // Reset on mount (new page)
    globalImages = [];
    registrationOrder = 0;
    globalSetOpen = setIsOpen;
    globalSetIndex = setCurrentIndex;

    // Update images state periodically to catch all registered images
    const timer = setTimeout(() => {
      setImages([...globalImages]);
    }, 100);

    return () => {
      clearTimeout(timer);
      globalSetOpen = null;
      globalSetIndex = null;
    };
  }, []);

  // Keep images in sync
  useEffect(() => {
    const interval = setInterval(() => {
      if (globalImages.length !== images.length) {
        setImages([...globalImages]);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <Lightbox
      open={isOpen}
      close={() => setIsOpen(false)}
      index={currentIndex}
      slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
    />
  );
}

export default function ClickableImage({
  src,
  alt,
  className = '',
  fill = true,
  priority = false
}: ClickableImageProps) {
  const [myIndex, setMyIndex] = useState(-1);

  useEffect(() => {
    // Register this image and get its index (client-side only)
    const existingIndex = globalImages.findIndex((img) => img.src === src);
    if (existingIndex >= 0) {
      setMyIndex(existingIndex);
    } else {
      const index = globalImages.length;
      globalImages.push({ src, alt });
      setMyIndex(index);
    }
  }, [src, alt]);

  const handleClick = () => {
    if (myIndex >= 0 && globalSetOpen && globalSetIndex) {
      globalSetIndex(myIndex);
      globalSetOpen(true);
    }
  };

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={`${className} cursor-pointer`}
      onClick={handleClick}
    />
  );
}
