'use client';
import React from 'react';

// A simple SVG checkmark component to use in the list.
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AboutStory = () => {
  const listItems = [
    'Non mattis nulla, in ultrices diam',
    'Web design done Delightful Visualization',
    'Alienum phaedrum torquatos nec eu, vis detraxit periculis',
    'Software Makes Your Profit Double if You Scale Properly.',
  ];

  return (
    <div className="bg-white font-sans py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - Card First, Then Content */}
        <div className="lg:hidden">
          {/* Profile Card */}
          <div className="relative bg-gray-900 rounded-2xl p-6 text-center text-white shadow-2xl -mt-16 mb-8">
            <div 
              className="absolute inset-0 bg-black opacity-20 rounded-2xl" 
              style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-scratch.png)'}}>
            </div>

            {/* Followers Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-400 text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-lg z-10 whitespace-nowrap">
              85.5M Followers
            </div>
            
            <div className="relative inline-block">
              <img 
                src="/about/lady.png" 
                alt="Silvia Pinho" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover mx-auto shadow-lg"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src='https://placehold.co/200x200/FFFFFF/333333?text=Profile';
                }}
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/50"></div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-4">Silvia Pinho</h2>
            
            <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-2.5 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-sm">
              Get In Touch
            </button>
            <p className="text-xs text-gray-400 mt-2">typically response within 24 hours</p>
          </div>

          {/* Story Content */}
          <div className="text-gray-800">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
              I'm a <span className="text-pink-500">Social Media</span> influencer & digital content creator
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
            </p>
            
            <ul className="space-y-3 mb-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckmarkIcon />
                  </div>
                  <span className="ml-3 text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4">
              <img 
                src="/about/signature.jpg" 
                alt="Signature" 
                className="w-28 sm:w-32 h-auto"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src='https://placehold.co/160x60/FFFFFF/333333?text=Signature';
                }}
              />
              <p className="text-gray-900 font-bold text-sm sm:text-base font-sans italic">
                Jio helps agencies like yours operate at a much larger scale with <span className="text-pink-500">a vital Platform to Effectively Manage</span> and grow your network
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Profile Card */}
          <div className="relative bg-gray-900 rounded-3xl p-8 text-center text-white shadow-2xl">
            <div 
              className="absolute inset-0 bg-black opacity-20 rounded-3xl" 
              style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/dark-scratch.png)'}}>
            </div>

            {/* Followers Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-400 text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg z-10 whitespace-nowrap">
              85.5M Followers
            </div>
            
            <div className="relative inline-block">
              <img 
                src="/about/lady.png" 
                alt="Silvia Pinho" 
                className="w-48 h-48 rounded-full border-4 border-white object-cover mx-auto shadow-lg"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src='https://placehold.co/200x200/FFFFFF/333333?text=Profile';
                }}
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/50"></div>
            </div>

            <h2 className="text-3xl font-bold mt-6">Silvia Pinho</h2>
            
            <button className="w-full mt-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              Get In Touch
            </button>
            <p className="text-xs text-gray-400 mt-2">typically response within 24 hours</p>
          </div>

          {/* Right Column: Story Content */}
          <div className="text-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              I'm a <span className="text-pink-500">Social Media</span> influencer & digital content creator
            </h1>
            <p className="text-base text-gray-600 mb-6">
              Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
            </p>
            
            <ul className="space-y-4 mb-8">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckmarkIcon />
                  </div>
                  <span className="ml-3 text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img 
                src="/about/signature.jpg" 
                alt="Signature" 
                className="w-40 h-auto"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src='https://placehold.co/160x60/FFFFFF/333333?text=Signature';
                }}
              />
              <p className="text-gray-900 font-bold text-lg xl:text-xl font-sans">
                Jio helps agencies like yours operate at a much larger scale with a vital Platform to Effectively Manage and grow your network
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;