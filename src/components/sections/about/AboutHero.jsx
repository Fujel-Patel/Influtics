'use client'
import React from 'react';

const AboutHero = () => {
  // Array for social icons to make it easier to manage
  const socialIcons = [
    {
      name: 'Facebook',
      src: '/images/socialstats/facebook.png',
      position: 'top-[10%] left-[5%] md:top-[20%] md:left-[15%]',
      animation: 'animate-float1',
    },
    {
      name: 'Instagram',
      src: '/images/socialstats/instagram.png',
      position: 'bottom-[10%] left-[8%] md:bottom-[20%] md:left-[25%]',
      animation: 'animate-float2',
    },
    {
      name: 'TikTok',
      src: '/images/socialstats/tiktok.png',
      position: 'bottom-[12%] right-[5%] md:bottom-[25%] md:right-[15%]',
      animation: 'animate-float3',
    },
    {
      name: 'YouTube',
      src: '/images/socialstats/youtube.png',
      position: 'top-[12%] right-[8%] md:top-[30%] md:right-[20%]',
      animation: 'animate-float4',
    },
  ];

  return (
    <>
      {/* This style block contains the keyframe animations for the floating icons.
        By defining them here, we keep the component self-contained.
      */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translate(0, 0) rotate(-5deg); }
            50% { transform: translate(-10px, 15px) rotate(5deg); }
            100% { transform: translate(0, 0) rotate(-5deg); }
          }
          @keyframes float2 {
            0% { transform: translate(0, 0) rotate(3deg); }
            50% { transform: translate(15px, -10px) rotate(-3deg); }
            100% { transform: translate(0, 0) rotate(3deg); }
          }
          @keyframes float3 {
            0% { transform: translate(0, 0) rotate(-8deg); }
            50% { transform: translate(-15px, -12px) rotate(10deg); }
            100% { transform: translate(0, 0) rotate(-8deg); }
          }
          @keyframes float4 {
            0% { transform: translate(0, 0) rotate(6deg); }
            50% { transform: translate(12px, 15px) rotate(-8deg); }
            100% { transform: translate(0, 0) rotate(6deg); }
          }

          .animate-float1 {
            animation: float1 8s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 10s ease-in-out infinite;
          }
          .animate-float3 {
            animation: float3 12s ease-in-out infinite;
          }
          .animate-float4 {
            animation: float4 9s ease-in-out infinite;
          }
        `}
      </style>

      {/* Hero Section Container */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url(/about/lady.png)' }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400 opacity-80 z-10"></div>

        {/* Central Text Content */}
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg mb-2 sm:mb-3">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-lg drop-shadow-md">
            Home / About Me
          </p>
        </div>

        {/* Floating Social Media Icons */}
        {socialIcons.map((icon) => (
          <div
            key={icon.name}
            className={`absolute z-20 ${icon.position} ${icon.animation}`}
          >
            <img
              src={icon.src}
              alt={`${icon.name} icon`}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain bg-white/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src='https://placehold.co/100x100/FFFFFF/333333?text=Icon';
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutHero;