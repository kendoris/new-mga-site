'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

const adventures = [
  {
    title: "Key West Regional - April '06",
    year: '2006',
    slug: 'keywest',
    description: 'Our first major show after the restoration. The MGA turned heads and brought home some hardware.',
    image: '/images/Pigeon Key.jpg',
  },
  {
    title: 'Cape Breton, Nova Scotia 2010',
    year: '2010',
    slug: 'capebreton',
    description: 'A 2400 mile, 8 day round trip through the stunning landscapes of Nova Scotia and Cape Breton Island.',
    image: '/images/CabotTrailfromAir.jpg',
  },
  {
    title: 'Savannah Regional 2013',
    year: '2013',
    slug: 'savannah',
    description: 'Exploring the beautiful coastal city of Savannah while connecting with fellow MG enthusiasts.',
    image: '/images/MelonAtTybeeLighthouse.JPG',
  },
  {
    title: 'Asheville Regional 2013',
    year: '2013',
    slug: 'asheville',
    description: 'Tackling the Blue Ridge Mountains and enjoying the scenic drives around Asheville.',
    image: '/images/MGAsBiltmore.jpg',
  },
  {
    title: 'Ottawa GT-39 2014',
    year: '2014',
    slug: 'ottawa',
    description: 'Taking the MGA international for a memorable trip to Canada\'s capital.',
    image: '/images/MelonErieCanal.jpg',
  },
  {
    title: "Our Daughter's Wedding",
    year: '',
    slug: 'wedding',
    description: 'A special family moment where the MGA played a starring role in the celebration.',
    image: '/images/KarenPeteDriveAway.jpg',
  },
  {
    title: '50th Wedding Anniversary Trip',
    year: '',
    slug: 'anniversary',
    description: 'Celebrating 50 years with a memorable journey.',
    image: '/images/CliffsOfMoher.jpg',
  },
  {
    title: 'Colorado GT-47 2022',
    year: '2022',
    slug: 'colorado',
    description: '4,100 mile round trip to Colorado Springs, climbing as high as 8,800 feet through Georgia, Alabama, Tennessee, Kentucky, Missouri, and Kansas!',
    image: '/images/HelloColorado.jpeg',
  },
];

export default function AdventuresPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-4 text-center">
          Adventures
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8 italic">
          Road trips, shows, and memorable journeys
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {adventures.map((adventure, index) => (
            <motion.div
              key={adventure.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/adventures/${adventure.slug}`} className="block h-full">
                <ContentCard className="hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer">
                  <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={adventure.image}
                      alt={adventure.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h2 className="text-lg font-bold text-[var(--nav-bg)]">
                      {adventure.title}
                    </h2>
                    {adventure.year && (
                      <span className="inline-block px-3 py-1 bg-[var(--nav-bg)] text-white text-xs rounded-full w-fit">
                        {adventure.year}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--foreground)]">
                    {adventure.description}
                  </p>
                  <p className="text-sm text-[var(--nav-bg)] mt-2 font-bold">
                    View photos &rarr;
                  </p>
                </ContentCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured: Colorado Trip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-[var(--nav-bg)] mb-6 text-center">
            Featured: Colorado GT-47 2022
          </h2>
          <ContentCard>
            <div className="text-lg leading-relaxed space-y-4">
              <p className="font-bold">
                GT&apos;s are the annual main event for all MGA&apos;s. Originally scheduled for 2020,
                the GT in Colorado Springs was postponed due to Covid.
              </p>

              <div className="relative w-full aspect-video my-6">
                <Image
                  src="/images/GT-47 Poster.jpeg"
                  alt="GT-47 Poster"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>

              <p>
                We planned the trip out as a leisurely 8 day drive through secondary roads,
                passing through Georgia, Alabama, Tennessee, Kentucky, Missouri, and Kansas -
                1770 miles to reach the DoubleTree hotel in Colorado Springs, then on to
                Boulder to visit our daughter after the event.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/Flags.jpeg"
                    alt="Memorial Day flags"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/GardenGods.jpeg"
                    alt="Garden of the Gods"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/GlenEyrie.jpeg"
                    alt="Glen Eyrie Castle"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/Broadmoor.jpeg"
                    alt="The Broadmoor"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <p>
                The car ran great the entire time, climbing as high as 8,800 feet in
                temperatures over 90°. The only casualty was the speedometer which &quot;fried&quot;
                its internal gears the last day of the trip - probably too much high speed
                combined with really hot weather!
              </p>

              <div className="relative w-full aspect-[4/3] mt-6">
                <Image
                  src="/images/LastDay.jpeg"
                  alt="Last day of the trip"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
