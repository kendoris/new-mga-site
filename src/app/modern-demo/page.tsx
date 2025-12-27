'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Camera, Wrench, Map } from 'lucide-react';

// Reusing content but restructuring for the new design
const quickLinks = [
    {
        href: '/history',
        title: 'History',
        description: '1968 - Present',
        icon: Calendar,
        image: '/images/MelonMGA-Day1.jpg',
        className: 'col-span-1 row-span-2'
    },
    {
        href: '/restoration',
        title: 'The Restoration',
        description: 'Rebuilding a legend',
        icon: Wrench,
        image: '/images/mgabefore.jpg',
        className: 'col-span-2 row-span-1'
    },
    {
        href: '/adventures',
        title: 'Adventures',
        description: 'On the road',
        icon: Map,
        className: 'col-span-1 row-span-1 bg-[var(--nav-bg)] text-white'
    },
    {
        href: '/gallery',
        title: 'Gallery',
        description: 'Visual journey',
        icon: Camera,
        className: 'col-span-1 row-span-1'
    },
];

const timelineHighlights = [
    { year: '1968', title: 'The Beginning', desc: "Melon's first car." },
    { year: '2004', title: 'Restoration Begins', desc: "Awakening from 30 years of slumber." },
    { year: '2022', title: 'Colorado GT-47', desc: "Climbing to 8,800 feet." },
];

export default function ModernDemo() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--nav-bg)] selection:text-white">

            {/* Hero Section - Full height, clean typography */}
            <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 text-center max-w-4xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-[var(--nav-bg)] text-[var(--nav-bg)] text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
                        Est. 1968
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-[var(--nav-bg)] mb-6 tracking-tight leading-tight">
                        The MGA <br /> Chronicles
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--foreground)] opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
                        One car. One family. <span className="italic font-serif">Five decades of stories.</span>
                    </p>
                </motion.div>

                {/* Abstract Background Element */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[100px] border-[var(--nav-bg)] blur-[100px]" />
                </div>
            </section>

            {/* Intro Grid - Asymmetrical Layout */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/MelonMGA-Day1.jpg"
                                    alt="Vintage MGA"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--nav-bg)]/80 to-transparent mix-blend-multiply opacity-60" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:col-span-7 space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif font-bold text-[var(--nav-bg)]"
                        >
                            "Melon's First Car"
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg space-y-6 leading-relaxed opacity-90"
                        >
                            <p>
                                We bought it in 1968. It was more than just a vehicle; it was a member of the family.
                                After five years of daily driving, it retired to the garage, sleeping under a pile of life's accumulations
                                for thirty years.
                            </p>
                            <p>
                                In 2004, we decided it was time to wake it up. This site documents that awakening
                                and every mile driven since.
                            </p>

                            <div className="pt-4">
                                <Link href="/history" className="inline-flex items-center gap-2 group text-[var(--nav-bg)] font-semibold uppercase tracking-wider text-sm border-b border-[var(--nav-bg)] pb-1 hover:opacity-70 transition-opacity">
                                    Read the full story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Navigation */}
            <section className="py-24 px-4 bg-[var(--nav-bg)]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 flex justify-between items-end">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--nav-bg)] mb-2">Explore</h3>
                            <h2 className="text-4xl font-serif font-bold">The Collection</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                        {quickLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className={`relative group overflow-hidden rounded-2xl border border-[var(--nav-bg)]/10 bg-white/50 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl ${link.className}`}
                            >
                                {link.image && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={link.image}
                                            alt={link.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                )}

                                <div className={`absolute bottom-0 left-0 p-6 w-full z-10 flex flex-col justify-end h-full ${link.image ? 'text-white' : 'text-[var(--nav-bg)]'}`}>
                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                        <link.icon className={`w-8 h-8 mb-3 ${link.image ? 'text-white' : 'text-[var(--nav-bg)]'}`} />
                                        <h3 className="text-2xl font-bold font-serif">{link.title}</h3>
                                        <p className={`text-sm mt-1 ${link.image ? 'text-white/80' : 'opacity-70'}`}>{link.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Minimal Timeline */}
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-16 text-[var(--nav-bg)]">Timeline Highlights</h2>
                <div className="relative border-l border-[var(--nav-bg)]/20 ml-4 md:ml-1/2 space-y-12">
                    {timelineHighlights.map((item, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-0">
                            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--nav-bg)] rounded-full border-4 border-[var(--background)] shadow-sm -left-[22px] absolute mt-1.5" />

                            <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-[45%] mb-2 md:mb-0">
                                    <span className="text-6xl font-bold text-[var(--nav-bg)]/10 absolute -z-10 -top-8 -left-4 font-serif">
                                        {item.year}
                                    </span>
                                    <div className="bg-white/40 p-6 rounded-xl border border-[var(--nav-bg)]/10 backdrop-blur-sm">
                                        <span className="text-sm font-bold text-[var(--nav-bg)] block mb-1">{item.year}</span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="opacity-80">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="md:w-[45%]" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/" className="px-8 py-3 bg-[var(--nav-bg)] text-white rounded-full hover:bg-[var(--foreground)] transition-colors duration-300">
                        Back to Original
                    </Link>
                </div>
            </section>

        </div>
    );
}
