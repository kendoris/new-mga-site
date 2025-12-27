'use client';

import { motion } from 'framer-motion';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--nav-bg)] transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--nav-hover)] border-4 border-[var(--nav-bg)] rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-[var(--content-bg)] backdrop-blur-sm rounded-lg p-6 shadow-md">
                <span className="inline-block px-3 py-1 bg-[var(--nav-bg)] text-white text-sm rounded-full mb-2">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-[var(--nav-bg)] mb-2">
                  {event.title}
                </h3>
                <p className="text-[var(--foreground)]">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
