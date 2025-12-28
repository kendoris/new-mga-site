'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ClickableImage from '@/components/ClickableImage';
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
          June 2022 - 4,100 miles round trip
        </p>

        <ContentCard className="mb-8">
          <div className="prose max-w-none text-lg leading-relaxed space-y-4">
            <p className="font-bold">
              GT&apos;s are the annual main event for all MGA&apos;s. Originally scheduled for 2020,
              the GT in Colorado Springs was postponed due to Covid.
            </p>
          </div>
        </ContentCard>

        <div className="relative w-full aspect-video mb-8">
          <ClickableImage
            src="/images/GT-47 Poster.jpeg"
            alt="GT-47 Poster"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-8">
          <ContentCard>
            <p className="text-lg">
              We planned the trip out as a leisurely 8 day drive through secondary roads,
              passing through Georgia, Alabama, Tennessee, Kentucky, Missouri, and Kansas -
              1770 miles to reach the DoubleTree hotel in Colorado Springs, then on to
              Boulder to visit our daughter after the event.
            </p>
            <div className="relative w-full aspect-[2/1] mt-4">
              <ClickableImage
                src="/images/TotalTripGT-47.jpeg"
                alt="Trip route map"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We left on Memorial Day weekend of 2022 on a beautiful sunny day.
              The sign on the luggage says it all...
            </p>
            <div className="relative w-full aspect-square max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/Passenger side rear profile.png"
                alt="Colorado or Bust - ready for the trip"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              That Memorial Day Weekend it was great to see all of the US Heartland
              celebrating Old Glory!
            </p>
            <div className="relative w-full aspect-square max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/Flags.jpeg"
                alt="Memorial Day flags"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We crossed the Mississippi River on a bridge that was much older than the car -
              the Cairo-Mississippi Bridge, built in 1929 - at the intersection of Kentucky,
              Illinois and Missouri.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[2/1]">
                <ClickableImage
                  src="/images/3States.jpeg"
                  alt="Three states intersection sign"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[4/3]">
                <ClickableImage
                  src="/images/Cairo_IL_Mississippi_R_Bridge_P6190061.jpg"
                  alt="Cairo Mississippi River Bridge"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <video
                controls
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
                preload="metadata"
              >
                <source src="/images/Bridge.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-center text-sm mt-2 italic">Crossing the historic Cairo-Mississippi Bridge</p>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              Each night on the trip out we&apos;d find a nearby chain restaurant for dinner.
              One night we ran into an old friend from back in the days Ken worked at Top Gun school...
            </p>
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto mt-4">
              <ClickableImage
                src="/images/TomCruise.jpeg"
                alt="Running into Tom Cruise"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              One week after leaving Beaufort, SC, we reached Colorado.
            </p>
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/HelloColorado.jpeg"
                alt="Welcome to Colorado"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              Soon after arriving in Colorado Springs, we drove out to the Garden of the Gods,
              an incredibly beautiful rock formation just a few miles from downtown. The garden&apos;s
              red rock formations were created during a geological upheaval along a natural fault
              line millions of years ago.
            </p>
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/GardenGods.jpeg"
                alt="Garden of the Gods"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              From the Garden of the Gods we drove a short distance to Glen Eyrie Castle,
              built in 1871 by General William Jackson Palmer, the founder of Colorado Springs.
              The GT-47 Committee arranged for High Tea and a tour of the Castle and grounds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/GlenEyrie.jpeg"
                  alt="Glen Eyrie Castle"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <ClickableImage
                  src="/images/HighTea.jpeg"
                  alt="High Tea at Glen Eyrie"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <p className="text-center italic mt-2">Melon was upset that she forgot to bring a Fascinator!</p>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              Of course, Colorado Springs also has its own attractions, with the Broadmoor Estate
              known as one of the most exclusive high-end resorts in the US.
            </p>
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto mt-4">
              <ClickableImage
                src="/images/Broadmoor.jpeg"
                alt="The Broadmoor"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              Somehow the MGA provided us with an air of exclusivity that allowed us on the grounds
              and a seat at the bar of the famous Golden Bee Pub. The Pub Bar was taken apart in
              England and reassembled in Colorado Springs!
            </p>
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/GoldenBeeBar.jpeg"
                alt="The Golden Bee Pub"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              One of the most exciting moments of the trip was our drive out to Royal Gorge Bridge,
              about 50 miles southwest of Colorado Springs.
            </p>
            <div className="mt-4">
              <video
                controls
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
                preload="metadata"
              >
                <source src="/images/RoyalGorgeBridgeOverview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-lg mt-4">
              The bridge crosses the gorge 955 feet above the Arkansas River and held the record
              of highest bridge in the world from 1929 until 2001.
            </p>
            <p className="text-lg mt-2">
              Melon crossed it during an impending lightning storm...
            </p>
            <div className="mt-4">
              <video
                controls
                className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
                preload="metadata"
              >
                <source src="/images/MelonBridge.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-center text-sm mt-2 italic">Melon braves the Royal Gorge Bridge</p>
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              After the GT we travelled up to Boulder to visit our daughter and son-in-law.
            </p>
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto mt-4">
              <ClickableImage
                src="/images/Melon&KarenFarmerMkt.jpeg"
                alt="Melon and Karen at Boulder Farmer's Market"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              We then travelled home, following basically the same route as going out, arriving
              back in Beaufort on Father&apos;s Day, June 19, 2022. The odometer showed a total of
              just over 4,100 miles for the round trip.
            </p>
            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto mt-4">
              <ClickableImage
                src="/images/LastDay.jpeg"
                alt="Last day of the trip"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </ContentCard>

          <ContentCard>
            <p className="text-lg">
              The car ran great the entire time, climbing as high as 8,800 feet in
              temperatures over 90°. The only casualty was the speedometer which &quot;fried&quot;
              its internal gears the last day of the trip - probably too much high speed
              combined with really hot weather!
            </p>
          </ContentCard>
        </div>
      </motion.div>
    </div>
    
  );
}
