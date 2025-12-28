'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function FirstAwardPage() {
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
          Our First Award
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          September 2005 - Southampton Rally
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              In late September of 2005 we participated in a rally in Southampton, NY
              (yes, THAT Hampton, with all the &quot;bling bling&quot;) for a charity rally.
              After the rally we ended up in our own wine country on the North Fork
              of Long Island for an awards ceremony (free wine and food at Pindar Vineyards).
            </p>
            <p>
              Well, we came in next to last out of 80 cars in the rally - seems that
              stopping twice to clear dirt out of the float needles is not a way to win
              a 2 hour rally. Especially when some of the Mercedes and BMW owners were
              cheating and using their built-in GPS systems!
            </p>
            <p className="font-bold">
              BUT, they had a &quot;People&apos;s Choice Award&quot; for the most popular car and
              we tied for first place with a gorgeous &apos;69 Shelby Mustang! We won a
              bottle of Pindar wine - nothing to hang on the wall, but better than the
              taste of gasoline in my mouth from blowing out the needle valves (I installed
              an in-line filter the following weekend).
            </p>
            <p>Here&apos;s a picture of us with our &quot;trophy&quot;.</p>
          </div>
        </ContentCard>

        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
          <ClickableImage
            src="/images/IMG_0153.JPG"
            alt="Ken and Melon with their People's Choice Award"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}
