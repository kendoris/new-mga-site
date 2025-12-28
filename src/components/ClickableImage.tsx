'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLightbox } from './PageLightbox';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function ClickableImage({
  src,
  alt,
  className = '',
  fill = true,
  priority = false
}: ClickableImageProps) {
  const { registerImage, openLightbox } = useLightbox();
  const [imageIndex, setImageIndex] = useState(-1);

  useEffect(() => {
    // Register this image and get its index
    const index = registerImage(src, alt);
    setImageIndex(index);
  }, [src, alt, registerImage]);

  const handleClick = () => {
    if (imageIndex >= 0) {
      openLightbox(imageIndex);
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
