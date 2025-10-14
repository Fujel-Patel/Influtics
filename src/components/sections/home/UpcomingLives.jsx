'use client';

import Image from 'next/image';
import Link from 'next/link';
import { upcomingLives } from '@/data/upcomingLives';

export default function UpcomingLiveVideos() {

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">My Upcoming Lives</h2>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-16"></div>

        {/* Live Events List */}
        <div className="space-y-16">
          {upcomingLives.map((live) => (
            <div
              key={live.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg p-8 bg-white/10 backdrop-blur-md border border-white/10"
            >
              {/* Image Section */}
              <div>
                <div className="h-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={live.image}
                    alt={live.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Platform Badge */}
                <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium">
                  <Image
                    src={live.platformIcon}
                    alt={live.platform}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <span>{live.platform} Live</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {live.title}
                </h3>

                {/* Date */}
                <p className="text-gray-400 text-base">
                  {live.date}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {live.description}
                </p>

                {/* Book Now Button */}
                <div className="pt-2">
                  <Link
                    href={live.link}
                    className="inline-block px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}