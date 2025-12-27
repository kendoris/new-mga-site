'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

const historyPages = [
  {
    title: 'Christmas 1969',
    subtitle: 'Newlyweds with Two Roadsters',
    description: 'We were newlyweds with two cars, the \'62 MGA and a \'67 Corvette - both roadsters. The problem was "how do we cart a Christmas tree home?"',
    image: '/images/mga_and_christmas_tree.jpg',
    href: '/history/christmas-1969',
  },
  {
    title: 'Roadside Repairs',
    subtitle: 'Back in 1970!',
    description: 'From \'68 to \'73 the MGA was the car of choice for all our summer trips. Naturally, some roadside repairs were necessary along the way.',
    image: '/images/troopergiveswarning.jpg',
    href: '/history/roadside-repairs',
  },
  {
    title: 'First Steps in 30 Years!',
    subtitle: 'October 2004',
    description: 'After 31 years in the garage, the MGA is finally out on the road again. Kyle said "Wow, this really runs like a real car!"',
    image: '/images/ken_and_kyle_mga.jpg',
    href: '/history/first-steps',
  },
  {
    title: 'Body Work',
    subtitle: 'Almost Done - December 2004',
    description: 'The body is finished in the original Old English White - perfectly matched by the ICI paint computer at Performance Auto Body.',
    image: '/images/frontwithbumper.jpg',
    href: '/history/body-work',
  },
  {
    title: 'Our First Award',
    subtitle: 'September 2005',
    description: 'We tied for first place in the People\'s Choice Award with a gorgeous \'69 Shelby Mustang at a Southampton charity rally!',
    image: '/images/IMG_0153.JPG',
    href: '/history/first-award',
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-4 text-center">
          History
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          The Story of Our 1962 MGA 1600 MKII
        </p>

        <div className="space-y-6">
          {historyPages.map((page, index) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={page.href}>
                <ContentCard className="hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 aspect-[4/3] flex-shrink-0">
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-1">
                        {page.title}
                      </h2>
                      <p className="text-sm text-[var(--foreground)] opacity-70 mb-2">
                        {page.subtitle}
                      </p>
                      <p className="text-[var(--foreground)]">
                        {page.description}
                      </p>
                      <span className="inline-block mt-3 text-[var(--nav-bg)] font-semibold">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </ContentCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
