'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';

type Category = 'all' | 'vintage' | 'restoration' | 'shows' | 'trips';

const galleryCategories: Record<Category, string> = {
  all: 'All Photos',
  vintage: 'Vintage',
  restoration: 'Restoration',
  shows: 'Car Shows',
  trips: 'Road Trips',
};

const galleryImages: Array<{ src: string; alt: string; caption?: string; category: Category }> = [
  // Vintage
  { src: '/images/MelonMGA-Day1.jpg', alt: 'Day 1 with the MGA', caption: "Melon's new MGA - 1968", category: 'vintage' },
  { src: '/images/Melon and cars 1969.jpg', alt: 'Melon and cars 1969', caption: 'Christmas 1969 - Two roadsters', category: 'vintage' },
  { src: '/images/mga_and_christmas_tree.jpg', alt: 'MGA with Christmas tree', caption: 'Feeding the A some pine!', category: 'vintage' },
  { src: '/images/melonandtree.jpg', alt: 'Melon and tree', caption: 'Another MGA in the background', category: 'vintage' },
  { src: '/images/mgabefore.jpg', alt: 'MGA before restoration', caption: 'Before restoration - 2004', category: 'vintage' },

  // Restoration
  { src: '/images/melonhelps.jpg', alt: 'Melon helps with engine', caption: 'February 2004 - Engine work', category: 'restoration' },
  { src: '/images/body_off.jpg', alt: 'Body off frame', caption: 'July 2004 - Body off and primed', category: 'restoration' },
  { src: '/images/dcp_0027.jpg', alt: 'Frame sandblasted', caption: 'Frame ready for primer', category: 'restoration' },
  { src: '/images/Welding Drivers lower doorsil.jpg', alt: 'Welding door sill', caption: 'August 2004 - Welding work', category: 'restoration' },
  { src: '/images/frontwithbumper.jpg', alt: 'Front with bumper', caption: 'Coming together', category: 'restoration' },
  { src: '/images/suspensionwork.jpg', alt: 'Suspension work', caption: 'Suspension rebuild', category: 'restoration' },

  // Shows
  { src: '/images/Pigeon Key.jpg', alt: 'Pigeon Key', caption: 'Key West Regional 2006', category: 'shows' },
  { src: '/images/MGAsBiltmore.jpg', alt: 'MGAs at Biltmore', caption: 'Asheville Regional', category: 'shows' },
  { src: '/images/MelonAtTybeeLighthouse.JPG', alt: 'Tybee Lighthouse', caption: 'Savannah Regional', category: 'shows' },
  { src: '/images/MGAsOnthebridge.jpg', alt: 'MGAs on the bridge', caption: 'MGA gathering', category: 'shows' },
  { src: '/images/MGAsFerry.jpg', alt: 'MGAs on ferry', caption: 'Ferry crossing', category: 'shows' },

  // Trips
  { src: '/images/CabotTrailfromAir.jpg', alt: 'Cabot Trail from air', caption: 'Cape Breton 2010', category: 'trips' },
  { src: '/images/MelonErieCanal.jpg', alt: 'Erie Canal', caption: 'Ottawa GT-39 2014', category: 'trips' },
  { src: '/images/HelloColorado.jpeg', alt: 'Hello Colorado', caption: 'Colorado GT-47 2022', category: 'trips' },
  { src: '/images/GardenGods.jpeg', alt: 'Garden of the Gods', caption: 'Garden of the Gods', category: 'trips' },
  { src: '/images/GlenEyrie.jpeg', alt: 'Glen Eyrie Castle', caption: 'Glen Eyrie Castle', category: 'trips' },
  { src: '/images/Broadmoor.jpeg', alt: 'The Broadmoor', caption: 'The Broadmoor', category: 'trips' },
  { src: '/images/CliffsOfMoher.jpg', alt: 'Cliffs of Moher', caption: '50th Anniversary Trip', category: 'trips' },
  { src: '/images/KarenPeteDriveAway.jpg', alt: 'Wedding drive away', caption: "Our Daughter's Wedding", category: 'trips' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-4 text-center">
          Photo Gallery
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8 italic">
          A visual journey through the years
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.entries(galleryCategories) as [Category, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === key
                  ? 'bg-[var(--nav-bg)] text-white'
                  : 'bg-[var(--content-bg)] text-[var(--nav-bg)] hover:bg-[var(--nav-hover)]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <ImageGallery images={filteredImages} columns={3} />
      </motion.div>
    </div>
  );
}
