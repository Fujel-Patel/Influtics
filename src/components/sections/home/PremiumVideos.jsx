'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { premiumVideos } from '@/data/premiumeVideos';

const VideoCard = ({ video }) => {
  return (
    <div className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-[calc(33.333%-1rem)] h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
      <Image
        src={video.thumbnail}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Play Button */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <PlayCircleIcon className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />
      </div>

      {/* Premium Crown Badge */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      {/* Price Tag */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
        <span className="font-bold text-pink-500 text-sm sm:text-base">{video.price}</span>
      </div>
    </div>
  );
};

const PremiumVideosSection = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  // Duplicate videos for infinite scroll effect
  const row1Videos = [...premiumVideos, ...premiumVideos, ...premiumVideos];
  const row2Videos = [...premiumVideos, ...premiumVideos, ...premiumVideos];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
      {/* Header with Title and Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">My Latest Premium Videos</h2>
          <button className="bg-white border-2 border-pink-500 text-pink-500 px-4 sm:px-6 py-2 rounded-lg hover:bg-pink-50 transition-all text-sm sm:text-base flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" /></svg>
            View All Videos
          </button>
        </div>
      </div>
      <div className="w-full space-y-4 sm:space-y-6 lg:space-y-8">
        {/* First Row - Sliding Right to Left */}
        <div
          className="relative"
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => setIsPausedRow1(false)}
        >
          <div className={`flex gap-3 sm:gap-4 lg:gap-6 ${isPausedRow1 ? '' : 'animate-scroll-rtl'}`}>
            {row1Videos.map((video, index) => (
              <VideoCard key={`row1-${video.id}-${index}`} video={video} />
            ))}
          </div>
        </div>

        {/* Second Row - Sliding Left to Right */}
        <div
          className="relative"
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => setIsPausedRow2(false)}
        >
          <div className={`flex gap-3 sm:gap-4 lg:gap-6 ${isPausedRow2 ? '' : 'animate-scroll-ltr'}`}>
            {row2Videos.map((video, index) => (
              <VideoCard key={`row2-${video.id}-${index}`} video={video} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 6s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 8s linear infinite;
        }

        /* Pause animation on hover for touch devices */
        @media (hover: none) {
          .animate-scroll-rtl,
          .animate-scroll-ltr {
            animation-play-state: running;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumVideosSection;