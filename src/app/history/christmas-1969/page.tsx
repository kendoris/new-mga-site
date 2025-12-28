'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function Christmas1969Page() {
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
          Christmas, 1969
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          Newlyweds with Two Roadsters
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed italic">
            <p>
              We were newlyweds with two cars, the &apos;62 MGA (Melon&apos;s) and a &apos;67 Corvette
              (Ken&apos;s) - both roadsters. The problem was &quot;how do we cart a Christmas tree home?&quot;
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="relative aspect-[5/4] w-full">
            <ClickableImage
              src="/images/Melon and cars 1969.jpg"
              alt="Melon with both cars in 1969"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          <ContentCard>
            <p className="text-lg italic">
              Our solution, in the words of another MGA owner, Steve Simmons, was to
              &quot;feed the &apos;A&apos; some pine&quot;!
            </p>
          </ContentCard>

          <div className="relative aspect-[4/3] w-full">
            <ClickableImage
              src="/images/mga_and_christmas_tree.jpg"
              alt="MGA with Christmas tree"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          <ContentCard>
            <p className="text-lg italic text-center">
              ...and yes, that is another MGA in the background!
            </p>
          </ContentCard>

          <div className="relative aspect-square w-full max-w-xl mx-auto">
            <ClickableImage
              src="/images/melonandtree.jpg"
              alt="Melon with the Christmas tree"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
