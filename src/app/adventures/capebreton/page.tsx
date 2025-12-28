'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function CapeBretonPage() {
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
          Cape Breton, Nova Scotia
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          2010 - 2,400 miles in 8 days
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              Melon and I took the A up the east coast, along the coast of Mass, New Hampshire, and Maine
              on into Canada. Our destination was the Cabot Trail, on Cape Breton, NS, touted as one of
              the most beautiful drives in North America.
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-center font-bold">Here&apos;s the &quot;Chamber of Commerce&quot; photo of the Cabot Trail:</p>
            <div className="relative aspect-[4/3] max-w-2xl mx-auto">
              <ClickableImage
                src="/images/CabotTrailfromAir.jpg"
                alt="Cabot Trail from the Air"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <ContentCard>
            <p className="text-lg">
              And here is the trail from the &apos;A&apos;, taken right after rounding that big curve on the left:
            </p>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/IMG_2252.JPG"
                alt="View of the trail from the MGA"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              We did 2400 miles in 8 days, stayed in B&Bs, watched step dancing, fiddle playing,
              and drank beer with the locals.
            </p>
            <p className="text-lg">
              Show up in a small town in a 48 yr. old car and you immediately have a conversation
              going with someone who had one, knew someone who had one, etc. This happened just
              after I snapped this photo (the fellow coming out the door has an uncle, who had a friend with...)
            </p>
            <div className="relative aspect-[4/3] mt-4">
              <ClickableImage
                src="/images/IMG_2181.JPG"
                alt="General Store on Cabot Trail"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              On the way to the Cabot Trail we drove up along the coast of New Brunswick and
              along the way wanted to constantly stop to take in the view...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3]">
                <ClickableImage
                  src="/images/IMG_2226.JPG"
                  alt="Melon and MGA on Cabot Trail"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <ClickableImage
                  src="/images/IMG_2065.JPG"
                  alt="Overlooking Fundy Trail"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>
        </div>
      </motion.div>
      </div>
    </>
  );
}
