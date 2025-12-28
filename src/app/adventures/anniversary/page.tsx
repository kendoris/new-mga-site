'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
import { PageLightboxProvider } from '@/components/PageLightbox';
import Link from 'next/link';
import ContentCard from '@/components/ContentCard';

export default function AnniversaryPage() {
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
          50th Anniversary Trip
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          UK and Ireland - July/August 2019
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p>
              We decided we&apos;d celebrate our 50th Anniversary driving through the British Isles
              and what better way than to ship our MGA over? Then we did some research on shipping
              a car overseas, only to read about a Mercedes 300 SL Gullwing being dropped onto the
              deck of a container ship from 30 feet up! That, combined with the fact that the shipping
              process could take up to 6 weeks each way convinced us not to ship!
            </p>
            <p>
              We next tried to find an MGA rental in the UK, but to no avail, so we decided to rent
              something equally impractical - a Morgan! As one of our friends pointed out, MorGAn
              has a hidden MGA in its name!
            </p>
          </div>
        </ContentCard>

        <div className="space-y-8">
          <div className="relative aspect-[4/3]">
            <ClickableImage
              src="/images/Morgan.jpg"
              alt="The Morgan rental car"
              fill
              className="object-contain rounded-lg shadow-lg"
            />
          </div>

          <ContentCard>
            <p className="text-lg mb-4">
              We arrived in London in late July and picked up the Morgan at Heathrow, then took off
              to visit the birthplace of all MGA&apos;s - Abingdon. The factory was replaced by condos
              years ago, but the Kimber House office building remains.
            </p>
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/KimberHouse.jpg"
                alt="Kimber House"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              From Abingdon we headed north to meet up with MGA friends, Colyn and Chris Firth.
              We had never met in person before, but had &quot;met&quot; on the MGA BBS internet forum.
              Colyn and Chris, in their beautiful 1960 MGA MKI, led us north into Scotland where
              we participated in the yearly Scottish MGA Day - a wonderful 125 mile tour of the
              Scottish Highlands and Lochs.
            </p>
            <div className="relative aspect-video">
              <ClickableImage
                src="/images/MGADay.jpg"
                alt="Scottish MGA Day"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg mt-4 mb-4">
              Here&apos;s a video of driving the &quot;High Road&quot; through the Scottish Highlands:
            </p>
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              preload="metadata"
            >
              <source src="/images/HighRoad.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              We drove the Morgan all through Scotland, then down to England&apos;s incredibly beautiful
              Lake District.
            </p>
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/MorganLakeDistrict.jpg"
                alt="Morgan in the Lake District"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg mt-4">
              While there, the Morgan surprised us with the classic &quot;parts falling off this vehicle
              are of the finest British Craftsmanship&quot;
            </p>
            <div className="relative aspect-[3/4] max-w-md mx-auto mt-4">
              <ClickableImage
                src="/images/MOGBumper.jpg"
                alt="Morgan bumper falling off"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              We managed to zip-tie the bumper back on, then later got some bailing wire to make it solid.
              Unfortunately, the cooling fan died while in heavy traffic. The rental agency sent a repair truck,
              but no permanent fix could be found, so we asked for another car. They offered a new Mustang GT,
              but we couldn&apos;t see ourselves touring the British Isles in Detroit &quot;Iron&quot;. After threatening
              to end our contract they came up with this...
            </p>
            <div className="relative aspect-square max-w-lg mx-auto">
              <ClickableImage
                src="/images/E-Jag.jpg"
                alt="E-Type Jaguar"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center mt-2 font-bold">Yikes! This was a rolling piece of historic art!</p>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              Despite the problems, the E-Jag got us to Liverpool - the place the Beatles became famous.
              Melon was in heaven!
            </p>
            <div className="relative aspect-[4/3] mb-4">
              <ClickableImage
                src="/images/Melon&Lads.jpg"
                alt="Melon with the Beatles statues"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <ClickableImage
                src="/images/Cavern.jpg"
                alt="The Cavern Club"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg mt-4 mb-4">
              Inside the Cavern Club:
            </p>
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              preload="metadata"
            >
              <source src="/images/CavernClub.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-lg mt-4 mb-4">
              Ferry Cross the Mersey:
            </p>
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              preload="metadata"
            >
              <source src="/images/Mersey.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              After two days in Dublin, we rented a 2019 Audi in Dublin (stick shift of course),
              then traveled the full width of Ireland to the west coast and the famous Cliffs of Moher.
            </p>
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <ClickableImage
                src="/images/CliffsOfMoher.jpg"
                alt="Cliffs of Moher"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg mb-4">
              We spent a week touring the Dingle Peninsula, the Ring of Kerry, Killarney, Cork and
              Kinsale before flying home from Dublin.
            </p>
            <div className="relative aspect-video">
              <ClickableImage
                src="/images/Dingle.jpg"
                alt="Dingle Peninsula"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard className="text-center">
            <p className="text-lg font-bold">
              2500 miles driven; 3 rental cars; 15 hotels/B&Bs; 29 days; 4 countries; 50+ pubs and restaurants.
            </p>
            <p className="text-lg mt-4">
              Made many new friends - fellow travelers as well as innkeepers.
            </p>
            <p className="text-lg mt-2">
              Great Trip - flew home with broad smiles and wonderful memories!
            </p>
            <p className="text-lg mt-4">
              You can read more about the trip in the article Melon wrote for <em>MGA!</em> magazine.
              It is a 4 page spread so it takes two PDF files -{' '}
              <a
                href="/FiveCars1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--nav-bg)] underline hover:opacity-80"
              >
                here
              </a>
              {' '}and{' '}
              <a
                href="/FiveCars2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--nav-bg)] underline hover:opacity-80"
              >
                here
              </a>
            </p>
          </ContentCard>
        </div>
      </motion.div>
    </div>
    </PageLightboxProvider>
  );
}
