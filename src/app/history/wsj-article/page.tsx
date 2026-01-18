'use client';

import { motion } from 'framer-motion';
import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function WSJArticlePage() {
  return (
    <>
      <PageLightboxManager />
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
            Wall Street Journal Feature
          </h1>
          <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-2">
            October 8, 2022 - &quot;My Ride&quot; Column
          </p>
          <p className="text-center text-[var(--foreground)] opacity-60 mb-8 italic">
            &quot;Her Classic Roadster Languished for Decades. Now She Hits the Road in Style.&quot;
          </p>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] w-full mb-8">
            <ClickableImage
              src="/images/wsj/wsj-hero.jpg"
              alt="Melon Doris and her husband Ken with their 1962 MG in Beaufort, S.C."
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-sm text-[var(--foreground)] opacity-60 mb-8">
            Photo: Daniel Roa for The Wall Street Journal
          </p>

          <ContentCard className="mb-8">
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p className="text-sm text-[var(--foreground)] opacity-70">
                By A.J. Baime | October 8, 2022
              </p>
              <p className="italic">
                Melon Doris, 73, an architectural designer living in Beaufort, S.C., on her 1962 MG MGA 1600 Mk II, as told to A.J. Baime.
              </p>
            </div>
          </ContentCard>

          <ContentCard className="mb-8">
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                In 1968, I graduated from the Fashion Institute of Technology in New York. I always loved cars, even though no one in my family knew anything about them. My boyfriend, Ken, had a 1956 Chevy Bel Air (he ran out of gas in this car on our first date), and when he graduated college, he bought a 1967 Corvette. He taught me to drive in that car. I was living in Brooklyn, and I needed a car to get to my first job on Long Island.
              </p>
              <p>
                I saved like crazy. Ken found my MGA in a post on the bulletin board at his employer. I turned over $800, he bought the car, and he spent about a month compounding the dimpled paint. I have a photo of myself sitting in the car in his parents&apos; driveway, in Hicksville, Long Island, the day I picked it up in 1968, which was the year before Ken and I were married.
              </p>
            </div>
          </ContentCard>

          {/* Car exterior shot */}
          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mb-2">
            <ClickableImage
              src="/images/wsj/wsj-car-solo.jpg"
              alt="The 1962 MG MGA in Old English White"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-sm text-[var(--foreground)] opacity-60 mb-8">
            Ms. Doris paid $800 for the 1962 MG more than 50 years ago.
          </p>

          <ContentCard className="mb-8">
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                That little roadster [referring to a two-seat, open-top car] was my daily driver for six years. In the winter, sometimes the engine wouldn&apos;t start, and I would have to roll it and pop the clutch to get it going. The car had no air conditioning, no radio&mdash;it was very rudimentary. The &quot;A&quot; model was built by MG in England, from 1955 to 1962. [The brand still exists today.]
              </p>
              <p>
                As I got older, the thought of a real heater won me over and I bought a 1973 Chevy Nova. We pushed the MGA into the garage, as it needed repairs and wouldn&apos;t pass inspection. And that is where it stayed. Our son and daughter would get in it in the garage and go on imaginary road trips.
              </p>
            </div>
          </ContentCard>

          {/* Side profile shot */}
          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mb-2">
            <ClickableImage
              src="/images/wsj/wsj-side-profile.jpg"
              alt="MG MGA side profile under Spanish moss trees"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-sm text-[var(--foreground)] opacity-60 mb-8">
            MG, an English car company, built the MGA model from 1955 to 1962.
          </p>

          <ContentCard className="mb-8">
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                Then, one snowy day, our son (who had recently graduated college) said, &quot;Mom, Dad, when you are...uh...gone, what should we do with the MGA?&quot; That is when Ken and I decided to restore the car. It had been sitting for over 30 years; the tires were deflated and fused to the floor of the garage. Ken is an engineer and he could fix everything on the car. I worked a lot on the interior. It took about a year.
              </p>
              <p>
                At one point, we went to Abingdon, England, where the car was built. There are records there, and we got the formula for the original paint&mdash;Old English White&mdash;so we could have the car painted just as it was when it left the factory.
              </p>
            </div>
          </ContentCard>

          {/* Interior and detail shots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <div className="relative aspect-[3/4] w-full mb-2">
                <ClickableImage
                  src="/images/wsj/wsj-interior-seats.jpg"
                  alt="The 1962 MG's restored red leather interior"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-[var(--foreground)] opacity-60">
                The interior has seen extensive restoration.
              </p>
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full mb-2">
                <ClickableImage
                  src="/images/wsj/wsj-luggage-rack.jpg"
                  alt="The vehicle's luggage rack sits atop the MG logo"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-[var(--foreground)] opacity-60">
                The luggage rack sits atop the MG logo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <div className="relative aspect-[3/4] w-full mb-2">
                <ClickableImage
                  src="/images/wsj/wsj-steering-wheel.jpg"
                  alt="The car's steering wheel and instrument panel"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-[var(--foreground)] opacity-60">
                The steering wheel and instrument panel.
              </p>
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full mb-2">
                <ClickableImage
                  src="/images/wsj/wsj-dashboard.jpg"
                  alt="Dashboard detail showing MG badge"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-[var(--foreground)] opacity-60">
                &quot;It&apos;s a speedy little thing. Wherever it goes, it draws a crowd.&quot;
              </p>
            </div>
          </div>

          <ContentCard className="mb-8">
            <div className="prose max-w-none text-lg leading-relaxed space-y-4">
              <p>
                We started taking trips in the MGA in 2005. We have been as far north as Cape Breton Island in Nova Scotia. I have driven it all the way to Key West. Just weeks ago, we drove the car to Colorado and back, with a sign on the car&apos;s rear reading &quot;Colorado or bust!&quot; But it was our trip to Savannah, Ga., with an MGA club, that changed our lives. As lifelong Northeasterners, we fell in love with the south. In 2015, we moved to South Carolina where we could drive the MGA all year long. I drive it nearly every day.
              </p>
              <p>
                I often think that once you fall in love with a car you have an invisible tattoo that can only be seen by people who love a car, or cars, as you do. Some of our most treasured friends are in the MGA family. When our daughter asked to use the MGA to drive away from her wedding ceremony in 2014, I knew that this car was a family member that brings joy to us all.
              </p>
            </div>
          </ContentCard>

          {/* Final image */}
          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mb-2">
            <ClickableImage
              src="/images/wsj/wsj-toy-mga.jpg"
              alt="Ken and Melon Doris with a toy version of the MGA, and the real thing behind"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
          <p className="text-center text-sm text-[var(--foreground)] opacity-60 mb-8">
            Ken and Melon with a toy version of the MGA, and the real thing behind.
          </p>

          <ContentCard className="mb-8 bg-amber-50 border border-amber-200">
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">
                All photos by Daniel Roa for The Wall Street Journal
              </p>
              <p className="text-sm text-gray-700">
                Original article published October 8, 2022 in the &quot;My Ride&quot; column
              </p>
            </div>
          </ContentCard>

          <div className="text-center">
            <Link href="/history" className="text-[var(--nav-bg)] hover:underline">
              &larr; Back to History
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
