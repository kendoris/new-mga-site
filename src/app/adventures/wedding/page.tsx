'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import { PageLightboxProvider } from '@/components/PageLightbox';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function WeddingPage() {
  return (
    <PageLightboxProvider>
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
          Our Daughter&apos;s Wedding
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          August 2014
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              When our daughter, Karen, was small, she and her brother Kyle would sit in the old MGA
              rusting away in our garage and take &quot;trips&quot;, pretending to be driving the A everywhere
              their imagination took them.
            </p>
            <p>
              Years later, as Karen and her husband to be, Pete, planned their outdoor wedding in an
              orchard in New Hampshire, the owner of the orchard asked if Karen would like to arrive
              at the wedding site in a hay wagon or carriage. Karen said, &quot;<em>My parents have an old
              sports car, maybe that would be a great way to make my entrance!</em>&quot;
            </p>
            <p>
              Well, the rest became history, and was documented in the national <em>MGA!</em> magazine.
              You can read the article Melon wrote for that issue{' '}
              <a
                href="/Wedding Article.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--nav-bg)] underline hover:opacity-80"
              >
                here
              </a>.
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="text-center">
            <p className="font-bold mb-4">Here&apos;s a picture from the cover of the June 2015 issue:</p>
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <ClickableImage
                src="/images/WeddingCoverMGA.jpg"
                alt="MGA Magazine Wedding Cover"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <ContentCard>
            <p className="font-bold text-lg mb-4">
              Here are a few more pictures, all courtesy of wedding photographer Jeff Woodward:
            </p>
            <div className="space-y-6">
              <div className="relative aspect-[3/2]">
                <ClickableImage
                  src="/images/314.jpg"
                  alt="Karen makes her entrance"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[5/4]">
                <ClickableImage
                  src="/images/320.jpg"
                  alt="Wedding photo"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[5/4]">
                <ClickableImage
                  src="/images/524.jpg"
                  alt="Wedding photo"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[16/9]">
                <ClickableImage
                  src="/images/525.jpg"
                  alt="Wedding photo"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[3/2]">
                <ClickableImage
                  src="/images/KarenPeteDriveAway.jpg"
                  alt="Karen and Pete drive away"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>
        </div>
      </motion.div>
    </div>
    </PageLightboxProvider>
  );
}
