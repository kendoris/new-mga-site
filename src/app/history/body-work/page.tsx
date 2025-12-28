'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function BodyWorkPage() {
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
          Body Work
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          Almost Done - December 2004
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed italic">
            <p>
              The body is finished in the original Old English White - perfectly matched
              by the ICI paint computer at Performance Auto Body. Robert J. Hamilton did
              all of the body work and it came out incredibly well. He and I worked
              together for many nights in 2004 to complete the bumpers, headlights,
              grille, etc.
            </p>
          </div>
        </ContentCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/wheel_well.jpg"
                alt="Wheel well restoration"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm">Dec 2004</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/left_front.jpg"
                alt="Installing the fender liners"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm">Dec 2004 - Installing the fender liners</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/frontwithbumper.jpg"
                alt="Front with bumper installed"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm">Dec 2004 - Bumpers on</p>
          </div>

          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/back_with_bumper.jpg"
                alt="Back with bumper and electricals"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm">Dec 2004 - Electricals sorted out</p>
          </div>
        </div>
      </motion.div>
    </div>
    
  );
}
