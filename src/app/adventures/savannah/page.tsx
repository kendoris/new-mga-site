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
          2013
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/MelonAtTybeeLighthouse.JPG"
                alt="Melon at Tybee Lighthouse"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">Melon at Tybee Lighthouse</p>
          </div>
          <div className="space-y-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/MGAsFerry.jpg"
                alt="MGAs on the Ferry"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-sm font-bold">MGAs on the Ferry</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
