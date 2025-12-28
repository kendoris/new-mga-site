'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import ContentCard from '@/components/ContentCard';

const restorationImages = [
  { src: '/images/melonhelps.jpg', alt: 'Melon Sheds Light on the Engine', caption: 'February 2004 - Melon Sheds Light on the Engine' },
  { src: '/images/Welding Drivers lower doorsil.jpg', alt: 'Welding Drivers Door Sill', caption: 'August 2004 - RJ welds Drivers Door Sill' },
  { src: '/images/body_off.jpg', alt: 'Body off and primed', caption: 'July 2004 - Body off and primed' },
  { src: '/images/dcp_0027.jpg', alt: 'Frame sandblasted', caption: 'July 2004 - Frame sandblasted and ready for primer' },
  { src: '/images/wheel_well.jpg', alt: 'Wheel well restoration', caption: 'December 2004 - Wheel well' },
  { src: '/images/left_front.jpg', alt: 'Installing fender liners', caption: 'December 2004 - Installing fender liners' },
  { src: '/images/back_with_bumper.jpg', alt: 'Rear with bumper', caption: 'December 2004 - Electricals sorted out' },
];

export default function RestorationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-8 text-center">
          The Restoration
        </h1>

        <ContentCard className="mb-8">
          <div className="text-lg leading-relaxed space-y-4 italic">
            <p>
              In February of 2004 the car was transported to Sports Car Haven in St. James, NY
              for mechanical work - suspension and engine rebuild. After disassembly, the
              body/frame was sent to Performance Auto Body in Smithtown, NY for a full frame-up
              restoration. Soon things got stalled and Ken had to become part of the restoration
              team, working at both Performance and Sports Car Haven every night and weekends
              through the summer of 2004.
            </p>
            <p>
              We expected to have it all complete and be on the road by the &quot;Tour deMarque&quot; at
              Watkins Glen in September, but that was not to be. In spite of that we had a great
              time at the Glen, meeting many wonderful other MG owners that we hope to have as
              long-time MGA friends.
            </p>
            <p>
              In May of 2005, with 55 miles on the engine &quot;rebuild&quot;, we bent a valve. Upon pulling
              the head we found that the rebuild, supposedly done by Sports Car Haven was only
              partially done! The head was then rebuilt by Tyrolean Autosport in Northport, using
              stellite valves and seats. Rich Mooers&apos; rework of the head was excellent, and we put
              2,500 miles on it that year.
            </p>
            <p>
              In December of 2005 Ken removed the SU&apos;s and took them to Joe Curto (Mr. SU) for a
              rebuild. Since then they have been running fine, with trips to Key West, Gatlinburg,
              and Watkins Glen all completed during 2006. Now we&apos;ve put over 24,000 miles on the
              car since the head rebuild in 2005. In July of 2010 we did a 2400 mile, 8 day round
              trip to Cape Breton in Nova Scotia.
            </p>
          </div>
        </ContentCard>

        <ContentCard className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-6 text-center">
            Restoration Photos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restorationImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <p className="text-sm font-bold text-center mb-2">{image.caption}</p>
                <div className="relative aspect-[4/3]">
                  <ClickableImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain rounded-lg shadow-lg border-4 border-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ContentCard>

        <ContentCard>
          <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-4">
            The Result
          </h2>
          <p className="text-lg leading-relaxed">
            The completed restoration revealed the true beauty of the 1962 MGA
            1600 MKII - a testament to British automotive craftsmanship and
            the dedication of those who worked to preserve it.
          </p>
          <div className="relative w-full aspect-[4/3] mt-6">
            <ClickableImage
              src="/images/frontwithbumper.jpg"
              alt="Restored MGA front view"
              fill
              className="object-contain rounded-lg shadow-lg border-4 border-white"
            />
          </div>
        </ContentCard>
      </motion.div>
    </div>
  );
}
