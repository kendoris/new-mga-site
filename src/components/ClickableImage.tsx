'use client';

import { useState } from 'react';
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

export default function ClickableImage({
  src,
  alt,
  className = '',
  fill = true,
  priority = false
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        className={`${className} cursor-pointer`}
        onClick={() => setIsOpen(true)}
      />
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src, alt }]}
      />
    </>
  );
}
