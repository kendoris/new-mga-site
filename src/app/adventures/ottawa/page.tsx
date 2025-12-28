'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function OttawaPage() {
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
          Ottawa GT-39
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          July 2014 - &quot;A Capital Idea&quot;
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              They called NAMGAR&apos;s GT-39 &quot;A Capital Idea&quot; because, well, it was held in Canada&apos;s
              Capital - Ottawa! Our plan was to meet our fellow Mid-Atlantic MGA Club members in
              Sacket&apos;s Harbor, a small historic NY town close to the Canadian border. Google Maps
              put it at a 10 hr drive from Long Island (avoiding highways) so we decided to make
              it a 2 day trip, staying first in Herkimer NY, a town along the Erie/Mohawk canal.
            </p>
            <p>
              Here&apos;s Melon checking out the waterfront on the canal.
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/MelonErieCanal.jpg"
                alt="Melon at Erie Canal"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Melon at the Erie Canal in Herkimer, NY</p>
          </div>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                From Herkimer we went northwest, driving through a huge field of modern windmills,
                all along a ridge north of Syracuse, eventually reaching Sacket&apos;s Harbor in late afternoon.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/MapSacketsHarbor.jpg"
                alt="Map showing route to Sacket's Harbor"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                The rest of our club members arrived shortly after us, and we all had dinner
                together at a local brew pub, then went out on the deck to watch sunset.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/ClubSackets.jpg"
                alt="Club members at Sacket's Harbor"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                The next day we all took a Ferry to Canada. A very small ferry, but MGAs are
                also small, so they packed us in!
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/MGAsFerry2.jpg"
                alt="MGAs packed on the ferry to Canada"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                We spent four great days in Ottawa, taking a riverboat cruise, visiting Parliament,
                doing a car show, and even watching a &quot;drive-in movie&quot; from the hotel parking lot.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/K&MatCarShow.jpg"
                alt="Ken and Melon at the car show"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                OK, not a very big screen, but the movie, Blue Hawaii, featured Elvis driving an MGA.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/DriveIn.jpg"
                alt="Drive-in movie showing Blue Hawaii"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm italic mt-2">
              Watching Blue Hawaii - Elvis drives an MGA in this classic film!
            </p>
          </ContentCard>
        </div>
      </motion.div>
    </div>
    
  );
}
