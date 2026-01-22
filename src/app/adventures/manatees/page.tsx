'use client';

import { motion } from 'framer-motion';
import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function ManateesPage() {
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
          Swimming with the Manatees
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          April 2024 - GOF South &amp; the Florida Panhandle
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              The &quot;Gathering of the Faithful&quot;, otherwise known as the GOF, has a history going
              back to the 1960s. The New England MG-T Registry held the first GOF in New Hampshire
              in 1965. There are now individual GOFs held annually in each region of the country.
              We&apos;ve attended several GOFs in the south since moving to Beaufort in 2016.
            </p>
            <p>
              Our wedding anniversary is in April, so in 2024 we decided to celebrate it with an
              MGA trip to the GOF South in Crystal River, Florida. This was an area of Florida
              we&apos;d never visited before, so we planned on taking an extra week to explore
              northward to the Panhandle region.
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <ContentCard>
            <p className="text-lg">
              After a 310 mile drive, we arrived at The Plantation on Crystal River just as
              the sun was setting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/Ken Sunset Grystal River Resort.jpeg"
                  alt="Ken at sunset at Crystal River Resort"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/IMG_0396.jpeg"
                  alt="Beautiful sunset at Crystal River"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              As we went to the GOF registration room, we learned the registration packets
              hadn&apos;t arrived yet because the person who prepared them had tested positive
              for COVID that afternoon. We looked at each other and decided not to attend
              the event despite having prepaid for events and meals. Sometimes you just
              have to make the safe choice!
            </p>
            <p className="text-lg mt-4">
              But that didn&apos;t stop us from enjoying Crystal River. The side trips turned
              out to be the most fun - especially Melon hopping in the water to swim with
              the manatees!
            </p>
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto mt-4">
              <ClickableImage
                src="/images/IMG_3259.jpeg"
                alt="Melon swimming with the manatees"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4">
              <video
                controls
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
                preload="metadata"
                poster="/images/IMG_3287-thumb.jpg"
              >
                <source src="/images/IMG_3287.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-center text-sm mt-2 italic">Melon after swimming with the manatees</p>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We explored the beautiful Florida coastline, finding some perfect spots
              to park the A and take in the scenery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/IMG_3237.jpeg"
                  alt="Melon with the MGA by the water"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/IMG_3240.jpeg"
                  alt="Ken with the MGA"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              One of our favorite stops was Peck&apos;s Old Port Cove, a classic Florida
              seafood restaurant right on the water.
            </p>
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto mt-4">
              <ClickableImage
                src="/images/IMG_3255.jpeg"
                alt="Melon at Peck's Old Port Cove"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              The seafood was incredible - fresh Gulf oysters and perfectly fried soft
              shell crab!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[4/3]">
                <ClickableImage
                  src="/images/Melon with tray of oysters.jpeg"
                  alt="Melon with fresh Gulf oysters"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <ClickableImage
                  src="/images/IMG_3253.jpeg"
                  alt="Fried soft shell crab"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We then headed north to explore the Florida Panhandle. The beaches there
              are simply stunning - crystal clear turquoise water and sugar-white sand.
            </p>
            <div className="relative w-full aspect-[3/1] mt-4">
              <ClickableImage
                src="/images/IMG_3292.jpeg"
                alt="Panoramic view of Panhandle beach"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              The water was so clear and warm - we couldn&apos;t resist wading in!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/IMG_3301.jpeg"
                  alt="Ken on the beach"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/IMG_3299.jpeg"
                  alt="Melon on the beach"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We found a charming spot in Rosemary Beach, one of the beautiful planned
              communities along Scenic Highway 30A.
            </p>
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto mt-4">
              <ClickableImage
                src="/images/IMG_3289.jpeg"
                alt="Melon with the MGA in Rosemary Beach"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              The trip was full of great food, beautiful scenery, and unexpected adventures.
              Even though we missed the GOF South due to COVID concerns, we made the most
              of our anniversary trip - swimming with manatees, exploring the Panhandle,
              and enjoying fresh Gulf seafood along the way. The total trip was over 1500
              miles and the MGA ran without a hiccup.
            </p>
            <p className="text-lg mt-4 font-bold">
              Sometimes the detours turn out to be the best part of the journey!
            </p>
          </ContentCard>
        </div>
      </motion.div>
      </div>
    </>
  );
}
