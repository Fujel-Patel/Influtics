'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-orange-200 to-pink-200" />

      {/* Decorative Wave Elements - Hidden on mobile */}
      <div className="absolute left-4 sm:left-10 bottom-10 sm:bottom-20 opacity-40">
        <svg width="80" height="60" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-12 sm:w-[120px] sm:h-20">
          <path d="M0 40 Q20 20, 40 40 T80 40 T120 40" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 opacity-40 hidden sm:block">
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 Q30 40, 60 60 T120 60 T180 60" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative mt-20 sm:mt-24 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left space-y-6 sm:space-y-8 relative pt-20 sm:pt-24 lg:pt-0 -mb-20 sm:mb-0">
            {/* Bryan liked bubble - Top Left - Only visible on desktop */}
            <div className="flex absolute top-4 sm:-top-16 left-4 items-center gap-3 bg-white rounded-full shadow-xl px-4 py-3 animate-float">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/hero/User.png"
                  alt="Bryan"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="pr-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700 block">Bryan has</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 block">liked</span>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                I'm <span className="relative inline-block">
                  Linda Susan
                  {/* Animated Circle Around Name */}
                  <svg className="absolute -inset-1 sm:-inset-2 w-full h-full" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="200" cy="50" rx="180" ry="45" stroke="#FF6B9D" strokeWidth="3" fill="none" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw 3s ease-in-out infinite' }} />
                  </svg>
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Beauty & Lifestyle
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Influencer
              </h2>
            </div>

            <div className="flex flex-row gap-3 sm:gap-4 pt-2">
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-6 sm:px-8 py-3 shadow-lg text-sm sm:text-base"
              >
                <Link href="/about">
                  About Me
                </Link>
              </Button>
              <Button 
                size="lg" 
                asChild 
                variant="outline" 
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 shadow-lg hover:bg-white/30 text-sm sm:text-base"
              >
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Profile Image with Bubbles */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-screen flex justify-center items-end lg:items-center mt-8 lg:mt-0">
            {/* Profile Image */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-lg h-full">
              <Image
                src="/images/hero/Profile.png"
                alt="Linda Susan Profile"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* 74K Followers Badge - Responsive positioning */}
            <div className="absolute top-34 sm:top-60 right-2 sm:right-6 lg:right-12">
              <div className="relative w-24 h-20 sm:w-28 sm:h-24 lg:w-32 lg:h-28 animate-bounce-slow hover:scale-105 transition-transform duration-300">
                {/* Background Shape Image */}
                <Image
                  src="/icons/follower-count.svg"
                  alt="Follower badge"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />

                {/* Content Overlay - Perfectly Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Number */}
                  <div className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-red-600 leading-none">
                    74K
                  </div>
                  {/* Label */}
                  <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-800 mt-0.5 sm:mt-1">
                    Followers
                  </div>
                </div>
              </div>
            </div>

            {/* Bryan liked bubble - Bottom */}
            <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-2 sm:left-4 lg:left-8 flex items-center gap-2 sm:gap-3 bg-white rounded-full shadow-xl px-3 sm:px-4 py-2 sm:py-3 animate-float-delayed">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/hero/User.png"
                  alt="Bryan"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="pr-1 sm:pr-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700 block">Bryan has</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 block">liked</span>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-1.5 sm:p-2">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1000;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}