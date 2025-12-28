'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function FirstStepsPage() {
  return (
    
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/history" className="text-[var(--nav-bg)] hover:underline mb-4 inline-block">
          &larr; Back to History
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-2 text-center">
          First Steps in 30 Years!
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          October 31st, 2004
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed italic space-y-4">
            <p>
              After 31 years in the garage, Melon&apos;s &apos;62 MGA 1600 MKII is finally out
              on the road again. Still needed the bumpers and cockpit rails, etc. but
              it was sooo good to have it running!
            </p>
            <p>
              Here&apos;s a picture of Ken and Kyle (our 24 year old son who never saw
              the car running before) heading down through our little town on Long Island.
              Kyle said &quot;Wow, this really runs like a real car! Hard to believe that
              it wasn&apos;t just a big toy in the garage.&quot;
            </p>
          </div>
        </ContentCard>

        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
          <ClickableImage
            src="/images/ken_and_kyle_mga.jpg"
            alt="Ken and Kyle in the MGA for the first ride"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
        <p className="text-center text-sm mt-2 italic">Ken & Kyle in MGA for first ride</p>
      </motion.div>
    </div>
    
  );
}
