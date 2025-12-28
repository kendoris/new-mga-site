'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function RoadsideRepairsPage() {
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
          Roadside Repairs
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          Back in 1970!
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              From &apos;68 to &apos;73 the MGA was the car of choice for all our summer trips -
              we drove it all over the Northeast. Naturally, some roadside repairs were
              necessary along the way.
            </p>
            <p>
              This is a picture taken on a road trip in New England. The original Lucas
              fuel pump stopped working. We drove for a while with the battery cover off
              and Ken hitting it regularly with a wrench. Whenever a gear change was
              necessary, Ken stepped on the clutch, called out the gear and Melon shifted
              with her left hand from the passenger seat!
            </p>
            <p>
              Ah, finally we reach a town, time to pull it out and attempt a repair...
              let&apos;s coast into that nice big empty parking lot over there!
            </p>
            <p className="font-bold">
              Just as I get the pump undone, a State Trooper arrives. As Melon takes this
              picture he is telling me to move the car because a bomb threat was called in
              for the adjacent factory building! So that&apos;s why the parking lot is empty!!!!
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="relative aspect-[4/3] w-full">
            <ClickableImage
              src="/images/troopergiveswarning.jpg"
              alt="State Trooper giving warning about bomb threat"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          <ContentCard>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-lg">
                  If you look carefully at the picture on the right, you can see the
                  &quot;washer&quot; Ken made from a copper paper clip. That fixed the fuel pump
                  problem for the rest of the trip!
                </p>
              </div>
              <div className="relative w-full md:w-80 aspect-[3/4]">
                <ClickableImage
                  src="/images/fuelpump.jpg"
                  alt="Fuel pump with copper paper clip washer"
                  fill
                  className="object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ContentCard>
        </div>
      </motion.div>
    </div>
    
  );
}
