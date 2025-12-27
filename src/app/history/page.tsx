'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContentCard from '@/components/ContentCard';

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-8 text-center">
          History
        </h1>

        <ContentCard className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-4">
            Christmas, 1969
          </h2>
          <blockquote className="text-lg leading-relaxed italic mb-6 border-l-4 border-[var(--nav-bg)] pl-4">
            <p>We were newlyweds with two cars, the &apos;62 MGA (Melon&apos;s) and a &apos;67 Corvette (Ken&apos;s) - both roadsters. The problem was &quot;how do we cart a Christmas tree home?&quot;</p>
          </blockquote>

          <div className="relative w-full aspect-[4/3] mb-6">
            <Image
              src="/images/Melon and cars 1969.jpg"
              alt="Melon and cars 1969"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>

          <blockquote className="text-lg leading-relaxed italic mb-6 border-l-4 border-[var(--nav-bg)] pl-4">
            <p>Our solution, in the words of another MGA owner, Steve Simmons, was to &quot;feed the &apos;A&apos; some pine&quot;!</p>
          </blockquote>

          <div className="relative w-full aspect-[4/3] mb-6">
            <Image
              src="/images/mga_and_christmas_tree.jpg"
              alt="MGA with Christmas tree"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>

          <p className="text-lg leading-relaxed italic text-center">
            ...and yes, that is another MGA in the background!
          </p>

          <div className="relative w-full aspect-square mt-6">
            <Image
              src="/images/melonandtree.jpg"
              alt="Melon and Tree"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </ContentCard>

        <ContentCard className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-4">
            First Steps
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Learning to drive and maintain a classic British sports car was an
            adventure in itself. Every squeak, rattle, and mechanical quirk
            became part of the experience.
          </p>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-4">
            Roadside Repairs - 1970
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Part of owning a classic car is learning to handle the unexpected.
            Those roadside repair stories become some of the most memorable
            tales to share.
          </p>
        </ContentCard>
      </motion.div>
    </div>
  );
}
