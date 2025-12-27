'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function ColoradoPage() {
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
          Colorado GT-47
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          2022 - 4,100 miles round trip
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p className="font-bold">
              GT&apos;s are the annual main event for all MGA&apos;s. Originally scheduled for 2020,
              the GT in Colorado Springs was postponed due to Covid.
            </p>
            <p>
              We planned the trip out as a leisurely 8 day drive through secondary roads,
              passing through Georgia, Alabama, Tennessee, Kentucky, Missouri, and Kansas -
              1770 miles to reach the DoubleTree hotel in Colorado Springs, then on to
              Boulder to visit our daughter after the event.
            </p>
          </div>
        </ContentCard>

        <div className="relative w-full aspect-video mb-8">
          <Image
            src="/images/GT-47 Poster.jpeg"
            alt="GT-47 Poster"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/HelloColorado.jpeg"
                alt="Hello Colorado"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Welcome to Colorado!</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Flags.jpeg"
                alt="Memorial Day flags"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Memorial Day tribute</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/GardenGods.jpeg"
                alt="Garden of the Gods"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Garden of the Gods</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/GlenEyrie.jpeg"
                alt="Glen Eyrie Castle"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Glen Eyrie Castle</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/Broadmoor.jpeg"
                alt="The Broadmoor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">The Broadmoor</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/LastDay.jpeg"
                alt="Last day of the trip"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Last day of the trip</p>
          </div>
        </div>

        <ContentCard>
          <p className="text-lg">
            The car ran great the entire time, climbing as high as 8,800 feet in
            temperatures over 90°. The only casualty was the speedometer which &quot;fried&quot;
            its internal gears the last day of the trip - probably too much high speed
            combined with really hot weather!
          </p>
        </ContentCard>
      </motion.div>
    </div>
  );
}
