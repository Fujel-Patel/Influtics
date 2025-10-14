'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const stats = [
  {
    platform: 'Facebook',
    followers: '20.5K followers',
    buttonText: 'Follow Me',
    icon: '/images/socialstat/facebook.png',
    buttonColor: 'bg-gradient-to-r from-orange-400 to-pink-500',
  },
  {
    platform: 'Instagram',
    followers: '30.9K followers',
    buttonText: 'Follow Me',
    icon: '/images/socialstat/instagram.png',
    buttonColor: 'bg-gradient-to-r from-orange-400 to-pink-500',
  },
  {
    platform: 'Tiktok',
    followers: '2.5M followers',
    buttonText: 'Follow Me',
    icon: '/images/socialstat/tiktok.png',
    buttonColor: 'bg-gradient-to-r from-orange-400 to-pink-500',
  },
  {
    platform: 'YouTube',
    followers: '1.69M Subscribers',
    buttonText: 'Subscribe',
    icon: '/images/socialstat/youtube.png',
    buttonColor: 'bg-gradient-to-r from-orange-400 to-pink-500',
  },
];

export default function SocialStats() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-pink-50 w-full rounded-2xl hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 flex items-center justify-between gap-3"
            >
              {/* Icon and Text Container */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1.5">
                  <Image
                    src={stat.icon}
                    alt={`${stat.platform} icon`}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Platform name and followers */}
                <div className="flex flex-col text-left flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                    {stat.platform}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                    {stat.followers}
                  </p>
                </div>
              </div>

              {/* Button */}
              <Button
                className={`${stat.buttonColor} text-white px-3 sm:px-4 whitespace-nowrap h-8 sm:h-9 text-xs sm:text-sm  hover:shadow-lg transition-all duration-300 flex-shrink-0 font-semibold`}
              >
                {stat.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}