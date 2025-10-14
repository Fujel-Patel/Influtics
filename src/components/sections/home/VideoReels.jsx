'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { videos } from '@/data/videos';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { Modal, ModalContent } from '@/components/ui/Modal';
import VideoPlayer from '@/components/common/VideoPlayer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const reels = videos.filter(video => video.type === 'reel');

export default function VideoReels() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-white via-pink-50 to-white">
        <div className="w-full max-w-7xl px-6 md:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <button
              className="swiper-prev p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-6 w-6 text-pink-500" />
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest Video Reels
            </h2>
            <button
              className="swiper-next p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-6 w-6 text-pink-500" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={600}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            }}
            className="!pb-10 premium-videos-swiper"
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id}>
                <div className="group relative w-full h-96 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div
                    className="relative w-full h-full"
                    onClick={() => setSelectedVideoUrl(reel.videoUrl)}
                  >
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/60 backdrop-blur-sm rounded-full p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/80">
                        <PlayCircleIcon className="h-16 w-16 text-red-500 drop-shadow-md" />
                      </div>
                    </div>

                    {/* Facebook button inside image at bottom */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full shadow-md hover:bg-white transition-all duration-200 z-10">
                      <Image
                        src="/images/socialstat/facebook.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="font-mono text-sm whitespace-nowrap text-gray-700">Facebook Reel</span>
                    </div>
                  </div>
                </div>
                <div className='p-2'>
                  <h5 className='font-bold hover:text-pink'><a href="">{reel.title}</a></h5>
                  <span className='p-1 text-gray-400'>16M Views</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal for Video Playback */}
      <Modal open={!!selectedVideoUrl} onOpenChange={() => setSelectedVideoUrl(null)}>
        <ModalContent className="max-w-4xl p-0 border-0">
          {selectedVideoUrl && <VideoPlayer url={selectedVideoUrl} />}
        </ModalContent>
      </Modal>
    </>
  );
}