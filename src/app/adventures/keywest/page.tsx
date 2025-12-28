'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function KeyWestPage() {
  return (
    
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/adventures" className="text-[var(--nav-bg)] hover:underline mb-4 inline-block">
          &larr; Back to Adventures
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-2 text-center">
          NAMGAR Key West Regional
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          April 2006
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              In April of 2006 we traveled to Key West to join over 20 other MGAs in the second annual
              Key West Regional. NAMGAR&apos;s George Merryweather organizes the Regional held each year
              and schedules it during the &quot;Conch Republic Festival&quot;, which is Key West&apos;s version of Mardi Gras.
            </p>
            <p>
              We drove the A to DC in a driving rainstorm and stayed overnight with friends Deb and Al Gray.
              On Monday we boarded the AMTRAK AutoTrain in Lorton VA and arrived the next day in Sanford, FL,
              about 30 miles north of Orlando and 400 miles from Key West.
            </p>
            <p>
              After staying over in Key Largo, we hooked up with the other MGAs in Marathon Key and formed a
              caravan over the old railroad bridge to Pigeon Key. This bridge has been closed to traffic for
              decades, but we were given special permission to use it. Many thanks to local resident
              (and owner of the legendary 100,000th MGA) Fred Skomp for arranging that!
            </p>
            <p>
              Thursday night was the big parade down Duval street, and we were the guests of honor - tossing
              beads and getting cheers from the crowd. After a car show and banquet on Saturday we all headed
              home, sunburnt but loaded with great memories. If you ever get the chance, this is one MGAdventure
              you just can&apos;t miss!
            </p>
          </div>
        </ContentCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/MelonDiningCarSmall.jpg"
                alt="Melon in the AutoTrain Dining Car"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Melon in the AutoTrain Dining Car</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/Pigeon Key.jpg"
                alt="Melon on the old railroad bridge to Pigeon Key"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Melon on the old railroad bridge to Pigeon Key</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/MGAsOnthebridge.jpg"
                alt="The Caravan to Pigeon Key"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">The Caravan to Pigeon Key</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/Waiting for the Parade to begin.jpg"
                alt="Waiting for the parade to begin"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Waiting for the parade to begin</p>
          </div>
        </div>
      </motion.div>
    </div>
    
  );
}
