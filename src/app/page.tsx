'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';
import ContentCard from '@/components/ContentCard';
import Timeline from '@/components/Timeline';

const timelineEvents = [
  {
    year: '1968',
    title: 'The Beginning',
    description: 'We bought the MGA and drove it for 5 years before retiring it to the garage.',
    href: '/history',
  },
  {
    year: '1969',
    title: 'Christmas',
    description: 'As newlyweds with two roadsters, we figured out how to cart a Christmas tree home - feed the A some pine!',
    href: '/history/christmas-1969',
  },
  {
    year: '1970s',
    title: 'Roadside Repairs',
    description: 'Learning the ins and outs of maintaining a classic British sports car - including a fuel pump fix with a paper clip!',
    href: '/history/roadside-repairs',
  },
  {
    year: '2004',
    title: 'The Restoration',
    description: 'After 30 years in the garage, we decided it was finally time to get it back on the road.',
    href: '/history/first-steps',
  },
  {
    year: '2006',
    title: 'Key West Regional',
    description: 'Taking the restored MGA to shows and meeting fellow enthusiasts.',
    href: '/adventures/keywest',
  },
  {
    year: '2010',
    title: 'Cape Breton Adventure',
    description: 'A 2400 mile, 8 day round trip to Cape Breton in Nova Scotia.',
    href: '/adventures/capebreton',
  },
  {
    year: '2022',
    title: 'Colorado GT-47',
    description: '4,100 mile round trip to Colorado Springs, climbing as high as 8,800 feet!',
    href: '/adventures/colorado',
  },
];

const quickLinks = [
  { href: '/history', title: 'History', description: 'How it all began' },
  { href: '/restoration', title: 'Restoration', description: 'The rebuild journey' },
  { href: '/adventures', title: 'Adventures', description: 'Road trips & events' },
  { href: '/gallery', title: 'Gallery', description: 'Photo collection' },
];

export default function Home() {
  return (
    <>
      <PageLightboxManager />
      <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--nav-bg)] mb-4">
          1962 MGA 1600 MKII
        </h1>
        <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 italic">
          A Journey Since 1968
        </p>
      </motion.div>

      {/* Introduction with Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ContentCard className="mb-12">
          <div className="text-lg leading-relaxed italic text-center mb-6">
            <p className="font-bold">Well, it was Melon&apos;s first car.</p>
            <p>We bought it in 1968 and drove it for 5 years before retiring it to the garage.</p>
          </div>

          <div className="relative w-full max-w-xl mx-auto aspect-[4/3] mb-6">
            <ClickableImage
              src="/images/MelonMGA-Day1.jpg"
              alt="Melon's new MGA 1968"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>

          <div className="text-lg leading-relaxed italic text-center mb-6">
            <p>In January of 2004 we decided that it was finally time to get it back on the road, so we unstacked all the garden tools, toys, etc., and found this underneath it all:</p>
          </div>

          <div className="relative w-full max-w-xl mx-auto aspect-[4/3]">
            <ClickableImage
              src="/images/mgabefore.jpg"
              alt="MGA Before Restoration"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </ContentCard>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[var(--nav-bg)] text-white rounded-lg p-4 md:p-6 text-center transition-colors duration-300 group-hover:bg-[var(--nav-hover)] group-hover:text-[var(--nav-bg)]"
            >
              <h3 className="font-bold text-lg mb-1">{link.title}</h3>
              <p className="text-sm opacity-80">{link.description}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-[var(--nav-bg)] text-center mb-8">
          Our Journey Through Time
        </h2>
        <Timeline events={timelineEvents} />
      </motion.div>
      </div>
    </>
  );
}
