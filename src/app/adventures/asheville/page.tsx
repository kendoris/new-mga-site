'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function AshevillePage() {
  return (
    <>
      <PageLightboxManager />
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
          Asheville GT-38
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          June 2013
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              On a rainy day in June we started off to Asheville, NC to attend NAMGAR&apos;s GT-38.
              We drove out through NJ, down through PA, into MD and stopped at a motel. Usually,
              the A is the oldest, most interesting car in the lot, but not that night. Take a look:
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/Ranchero.jpg"
                alt="Vintage Ranchero at the motel"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Not the oldest car in the lot that night!</p>
          </div>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                From that point on we took all sideroads, travelling south into Virginia, heading
                towards the Blue Ridge Parkway.
              </p>
              <p>
                We decided to overnight in a little town called Galax VA, just north of the Blue Ridge.
                From the motel, we walked downtown and found a pub for dinner.
              </p>
              <p>
                I ordered a draft beer, &quot;make it large&quot; I said. It had been a long hot day.
                I had no idea what &quot;large beer&quot; meant in Galax!
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/LargeBeer.jpg"
                alt="Large beer in Galax, VA"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                From Galax we got on the Blue Ridge Parkway and headed down to Asheville, stopping
                for lunch at a cute town called Blowing Rock. Well, by the time we finished lunch,
                the wind WAS blowing, and the rain started coming down.
              </p>
              <p>
                We put the hood up, sidecurtains in and headed back to the Parkway. As we came
                around a curve to get back on, we saw this unusual rock formation. Through our
                foggy windshield it looked like a huge fish about to swim across the road!
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/FishStone.jpg"
                alt="Fish-shaped rock formation"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                We arrived at the hotel in Asheville after a scary ride through rain and fog on
                the Blue Ridge. Turns out that we kept climbing, up into the rain clouds at around
                3000 ft. and crept along in first and second gear, just barely able to see the
                yellow line.
              </p>
              <p>
                The next morning we all headed out to the Biltmore Estate. They parked us all
                in front for a group picture. Here&apos;s Melon explaining our &quot;fun adventure&quot; to
                good MGA friend, Alana Adams, with the Biltmore in the background.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/Melon&AlanaBiltmore.jpg"
                alt="Melon and Alana at Biltmore Estate"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed">
              <p>
                Here&apos;s that same event, but taken from a different angle - all the MGAs lined
                up in front of the magnificent Biltmore Estate.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/MGAsBiltmore.jpg"
                alt="MGAs at Biltmore Estate"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>
        </div>
      </motion.div>
      </div>
    </>
  );
}
