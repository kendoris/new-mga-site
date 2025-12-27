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
  { src: '/images/troopergiveswarning.jpg', alt: 'Trooper gives warning', caption: 'Roadside Repairs - 1970', category: 'vintage' },
  { src: '/images/fuelpump.jpg', alt: 'Fuel pump repair', caption: 'Fuel pump fix on the road', category: 'vintage' },

  // Restoration
  { src: '/images/melonhelps.jpg', alt: 'Melon helps with engine', caption: 'February 2004 - Engine work', category: 'restoration' },
  { src: '/images/body_off.jpg', alt: 'Body off frame', caption: 'July 2004 - Body off and primed', category: 'restoration' },
  { src: '/images/dcp_0027.jpg', alt: 'Frame sandblasted', caption: 'Frame ready for primer', category: 'restoration' },
  { src: '/images/Welding Drivers lower doorsil.jpg', alt: 'Welding door sill', caption: 'August 2004 - Welding work', category: 'restoration' },
  { src: '/images/frontwithbumper.jpg', alt: 'Front with bumper', caption: 'Coming together', category: 'restoration' },
  { src: '/images/suspensionwork.jpg', alt: 'Suspension work', caption: 'Suspension rebuild', category: 'restoration' },
  { src: '/images/wheel_well.jpg', alt: 'Wheel well work', caption: 'December 2004 - Body work', category: 'restoration' },
  { src: '/images/left_front.jpg', alt: 'Left front view', caption: 'Left front progress', category: 'restoration' },
  { src: '/images/back_with_bumper.jpg', alt: 'Back with bumper', caption: 'Rear end coming together', category: 'restoration' },
  { src: '/images/ken_and_kyle_mga.jpg', alt: 'Ken and Kyle with MGA', caption: 'First ride - October 31, 2004', category: 'restoration' },

  // Shows
  { src: '/images/Pigeon Key.jpg', alt: 'Pigeon Key', caption: 'Key West Regional 2006', category: 'shows' },
  { src: '/images/MelonDiningCarSmall.jpg', alt: 'Melon in dining car', caption: 'Key West 2006 - Train ride', category: 'shows' },
  { src: '/images/MGAsOnthebridge.jpg', alt: 'MGAs on the bridge', caption: 'Key West 2006 - Bridge crossing', category: 'shows' },
  { src: '/images/Waiting for the Parade to begin.jpg', alt: 'Waiting for parade', caption: 'Key West 2006 - Parade lineup', category: 'shows' },
  { src: '/images/IMG_1592.jpg', alt: 'Savannah gathering', caption: 'Savannah Regional 2013', category: 'shows' },
  { src: '/images/RhettInn.jpg', alt: 'Rhett Inn', caption: 'Savannah 2013 - Rhett Inn', category: 'shows' },
  { src: '/images/MGA in Beaufort.JPG', alt: 'MGA in Beaufort', caption: 'Savannah 2013 - Beaufort stop', category: 'shows' },
  { src: '/images/Magnette and As.jpg', alt: 'Magnette and As', caption: 'Savannah 2013 - Car show', category: 'shows' },
  { src: '/images/MelonAtTybeeLighthouse.JPG', alt: 'Tybee Lighthouse', caption: 'Savannah 2013 - Tybee Island', category: 'shows' },
  { src: '/images/MGAsBiltmore.jpg', alt: 'MGAs at Biltmore', caption: 'Asheville GT 2013', category: 'shows' },
  { src: '/images/Ranchero.jpg', alt: 'Ranchero', caption: 'Asheville 2013 - Ranchero spotted', category: 'shows' },
  { src: '/images/LargeBeer.jpg', alt: 'Large beer', caption: 'Asheville 2013 - Local brewery', category: 'shows' },
  { src: '/images/FishStone.jpg', alt: 'Fish Stone', caption: 'Asheville 2013', category: 'shows' },
  { src: '/images/Melon&AlanaBiltmore.jpg', alt: 'Melon and Alana at Biltmore', caption: 'Asheville 2013 - Biltmore Estate', category: 'shows' },

  // Trips - Cape Breton 2010
  { src: '/images/CabotTrailfromAir.jpg', alt: 'Cabot Trail from air', caption: 'Cape Breton 2010', category: 'trips' },
  { src: '/images/IMG_2252.JPG', alt: 'Cape Breton scenery', caption: 'Cape Breton 2010', category: 'trips' },
  { src: '/images/IMG_2181.JPG', alt: 'Cape Breton drive', caption: 'Cape Breton 2010', category: 'trips' },
  { src: '/images/IMG_2226.JPG', alt: 'Cape Breton views', caption: 'Cape Breton 2010', category: 'trips' },
  { src: '/images/IMG_2065.JPG', alt: 'Cape Breton adventure', caption: 'Cape Breton 2010', category: 'trips' },

  // Trips - Ottawa GT-39 2014
  { src: '/images/MelonErieCanal.jpg', alt: 'Erie Canal', caption: 'Ottawa GT-39 2014', category: 'trips' },
  { src: '/images/MapSacketsHarbor.jpg', alt: 'Sackets Harbor map', caption: 'Ottawa 2014 - Route planning', category: 'trips' },
  { src: '/images/ClubSackets.jpg', alt: 'Club at Sackets', caption: 'Ottawa 2014 - Sackets Harbor', category: 'trips' },
  { src: '/images/MGAsFerry2.jpg', alt: 'MGAs on ferry', caption: 'Ottawa 2014 - Ferry crossing', category: 'trips' },
  { src: '/images/MGAsFerry.jpg', alt: 'MGAs boarding ferry', caption: 'Ottawa 2014 - Ferry ride', category: 'trips' },
  { src: '/images/K&MatCarShow.jpg', alt: 'K and M at car show', caption: 'Ottawa 2014 - Car show', category: 'trips' },
  { src: '/images/DriveIn.jpg', alt: 'Drive-in theater', caption: 'Ottawa 2014 - Drive-in movie', category: 'trips' },

  // Trips - Wedding
  { src: '/images/WeddingCoverMGA.jpg', alt: 'Wedding cover with MGA', caption: "Our Daughter's Wedding", category: 'trips' },
  { src: '/images/314.jpg', alt: 'Wedding ceremony', caption: 'Wedding Day', category: 'trips' },
  { src: '/images/320.jpg', alt: 'Wedding celebration', caption: 'Wedding celebration', category: 'trips' },
  { src: '/images/524.jpg', alt: 'Wedding MGA', caption: 'MGA at the wedding', category: 'trips' },
  { src: '/images/525.jpg', alt: 'Wedding departure', caption: 'Wedding send-off', category: 'trips' },
  { src: '/images/KarenPeteDriveAway.jpg', alt: 'Wedding drive away', caption: 'Driving off into the sunset', category: 'trips' },

  // Trips - 50th Anniversary
  { src: '/images/Morgan.jpg', alt: 'Morgan car', caption: '50th Anniversary Trip - Morgan', category: 'trips' },
  { src: '/images/KimberHouse.jpg', alt: 'Kimber House', caption: '50th Anniversary - Kimber House', category: 'trips' },
  { src: '/images/MGADay.jpg', alt: 'MGA Day', caption: '50th Anniversary - MGA Day', category: 'trips' },
  { src: '/images/MorganLakeDistrict.jpg', alt: 'Morgan in Lake District', caption: '50th Anniversary - Lake District', category: 'trips' },
  { src: '/images/MOGBumper.jpg', alt: 'MOG Bumper', caption: '50th Anniversary - Morgan factory', category: 'trips' },
  { src: '/images/E-Jag.jpg', alt: 'E-Type Jaguar', caption: '50th Anniversary - E-Type spotted', category: 'trips' },
  { src: '/images/WiperDeparts.jpg', alt: 'Wiper departs', caption: '50th Anniversary - Departure', category: 'trips' },
  { src: '/images/Toolkit.jpg', alt: 'Toolkit', caption: '50th Anniversary - Prepared!', category: 'trips' },
  { src: '/images/Melon&Lads.jpg', alt: 'Melon and the lads', caption: '50th Anniversary - New friends', category: 'trips' },
  { src: '/images/Cavern.jpg', alt: 'Cavern', caption: '50th Anniversary - Cave visit', category: 'trips' },
  { src: '/images/CliffsOfMoher.jpg', alt: 'Cliffs of Moher', caption: '50th Anniversary - Cliffs of Moher', category: 'trips' },
  { src: '/images/Dingle.jpg', alt: 'Dingle', caption: '50th Anniversary - Dingle Peninsula', category: 'trips' },
  { src: '/images/DingleWideView.jpg', alt: 'Dingle wide view', caption: '50th Anniversary - Dingle views', category: 'trips' },

  // Trips - Colorado GT-47 2022
  { src: '/images/GT-47 Poster.jpeg', alt: 'GT-47 Poster', caption: 'Colorado GT-47 2022', category: 'trips' },
  { src: '/images/TotalTripGT-47.jpeg', alt: 'Total trip GT-47', caption: 'Colorado 2022 - Trip overview', category: 'trips' },
  { src: '/images/Passenger side rear profile.png', alt: 'Passenger side rear', caption: 'Colorado 2022 - Ready to go', category: 'trips' },
  { src: '/images/Flags.jpeg', alt: 'Flags', caption: 'Colorado 2022 - On the road', category: 'trips' },
  { src: '/images/3States.jpeg', alt: 'Three states', caption: 'Colorado 2022 - Three states corner', category: 'trips' },
  { src: '/images/Cairo_IL_Mississippi_R_Bridge_P6190061.jpg', alt: 'Cairo IL Mississippi Bridge', caption: 'Colorado 2022 - Mississippi crossing', category: 'trips' },
  { src: '/images/TomCruise.jpeg', alt: 'Tom Cruise encounter', caption: 'Colorado 2022 - Celebrity sighting!', category: 'trips' },
  { src: '/images/HelloColorado.jpeg', alt: 'Hello Colorado', caption: 'Colorado 2022 - Welcome sign', category: 'trips' },
  { src: '/images/GardenGods.jpeg', alt: 'Garden of the Gods', caption: 'Colorado 2022 - Garden of the Gods', category: 'trips' },
  { src: '/images/GlenEyrie.jpeg', alt: 'Glen Eyrie Castle', caption: 'Colorado 2022 - Glen Eyrie', category: 'trips' },
  { src: '/images/HighTea.jpeg', alt: 'High Tea', caption: 'Colorado 2022 - High Tea', category: 'trips' },
  { src: '/images/Broadmoor.jpeg', alt: 'The Broadmoor', caption: 'Colorado 2022 - The Broadmoor', category: 'trips' },
  { src: '/images/GoldenBeeBar.jpeg', alt: 'Golden Bee Bar', caption: 'Colorado 2022 - Golden Bee', category: 'trips' },
  { src: '/images/Melon&KarenFarmerMkt.jpeg', alt: 'Melon and Karen at Farmer Market', caption: 'Colorado 2022 - Farmer Market', category: 'trips' },
  { src: '/images/LastDay.jpeg', alt: 'Last day', caption: 'Colorado 2022 - Final day', category: 'trips' },
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
