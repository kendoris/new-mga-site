'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function AshevillePage() {
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
          Asheville Regional
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          2013
        </p>

        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/MGAsBiltmore.jpg"
              alt="MGAs at Biltmore Estate"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-sm font-bold">MGAs at Biltmore Estate</p>
        </div>
      </motion.div>
    </div>
  );
}
