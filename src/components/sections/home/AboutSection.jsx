'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { Modal, ModalContent } from '@/components/ui/Modal';
import VideoPlayer from '@/components/common/VideoPlayer';

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    'Non mattis nulla, in ultrices diam',
    'Web design done Delightful Visualization',
    'Alienum phaedrum torquatos nec eu, vis detraxit periculis',
    'Software Makes Your Profit Double if You Scale Properly.'
  ];

  return (
    <>
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Curved Line SVG with Animation */}
        <svg
          className="absolute left-0 top-0 h-full w-48 opacity-20"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curvePath"
            d="M 50 0 Q 150 200, 50 400 Q -50 600, 50 800"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Animated Red Dot */}
          <circle r="8" fill="#ef4444">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M 50 0 Q 150 200, 50 400 Q -50 600, 50 800"
            />
          </circle>
        </svg>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                I'm a Social Media influencer & digital content creator
              </h2>

              <p className="text-white text-base sm:text-md leading-relaxed">
                consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border-2 border-white font-medium rounded-lg bg-transparent hover:bg-gradient-to-r from-orange-400 via-pink-500 to-pink-400 text-white transition-all duration-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Image with Play Button */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-l-full shadow-2xl">
                <Image
                  src="/images/about/about.jpg"
                  alt="Content Creator"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 group"
                  aria-label="Play video"
                >
                  <div className="bg-white absolute bottom-3 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 shadow-xl transform transition-transform duration-300 group-hover:scale-110">

                    <PlayCircleIcon className="h-20 w-20 text-red-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <ModalContent className="max-w-4xl p-0 border-0">
          <VideoPlayer url="/videos/about-video.mp4" />
        </ModalContent>
      </Modal>
    </>
  );
}