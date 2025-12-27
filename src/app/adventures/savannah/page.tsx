'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function SavannahPage() {
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
          Savannah Regional
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          April 2013 - Over 2,500 miles
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              In early April Melon and I took the A down the east coast, out along the Outer Banks
              of North Carolina, then 2 ferries back to the mainland to mosey down the coastline of
              the Carolinas. We were heading to the NAMGAR Savannah Regional, but left a week early
              to allow time to relax and enjoy the Southern Hospitality and the beauty of the coastal
              towns (not to mention the great food!).
            </p>
            <p className="font-bold">
              Here&apos;s how many of our mornings started out:
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/IMG_1592.jpg"
                alt="Sunrise in Kitty Hawk"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Sunrise in Kitty Hawk</p>
          </div>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                For most of the trip down we stayed at B&Bs, with one overnight stay with good MGA
                friends Vicki and Don Carlberg in Aiken, SC.
              </p>
              <p>
                We visited both &quot;Beauforts&quot;, one in North Carolina, pronounced &quot;Bo-fort&quot; and the
                one in South Carolina, pronounced &quot;Bew-fort&quot;. Here&apos;s a photo of our favorite B&B,
                the Rhett House in Beaufort, SC.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <Image
                src="/images/RhettInn.jpg"
                alt="Rhett House Inn in Beaufort, SC"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                Well, the trip was just amazing! The car ran like a train for over 2500 miles.
                We had good weather all the way, top (hood to you Brits) down, enjoying the
                Spanish Moss gently swaying in the breeze. Here&apos;s the A on one of the beautiful
                streets in Beaufort, SC.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <Image
                src="/images/MGA in Beaufort.JPG"
                alt="MGA in Beaufort, SC"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                When we arrived at the hotel in Savannah, we knew we were in the right place -
                nothing like the sight of other MGAs and even a Magnette!
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <Image
                src="/images/Magnette and As.jpg"
                alt="MGAs and Magnette at the hotel"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                We had four fun-filled days hanging out with many of our Mid-Atlantic MGA club
                friends and making new ones. We toured the city on foot and trolley and drove
                out to the surrounding attractions. Here is Melon at the Lighthouse on Tybee
                Island - Savannah&apos;s version of the Hamptons!
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <Image
                src="/images/MelonAtTybeeLighthouse.JPG"
                alt="Melon at Tybee Lighthouse"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                On one of the organized drives, we took the ferry to Daufuskie Island and
                enjoyed exploring with our fellow MGA enthusiasts.
              </p>
            </div>
            <div className="relative aspect-[4/3] mt-4">
              <Image
                src="/images/MGAsFerry.jpg"
                alt="MGAs on the Ferry"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard className="text-center">
            <p className="text-lg italic mb-4">
              To quote Bill Marshall, &quot;It was a great time... as NAMGAR Regionals always are!&quot;
            </p>
            <p className="text-lg">
              You can read more about it in an article Melon wrote for{' '}
              <a
                href="/Savannah article.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--nav-bg)] underline hover:opacity-80"
              >
                MGA! magazine
              </a>
            </p>
          </ContentCard>
        </div>
      </motion.div>
    </div>
  );
}
