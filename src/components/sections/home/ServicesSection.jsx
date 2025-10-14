'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(3); // Default to "Relevant Content" (index 3)

  const currentService = services[activeService];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Container with Pink Background */}
        <div className="bg-pink-50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10">
          {/* Header with Title and Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              What Will I Give You?
            </h2>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap text-sm sm:text-base"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 mb-6 sm:mb-8"></div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
           {/* Left Sidebar - Service Menu */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left px-4 sm:px-5 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg'
                        : 'bg-white text-gray-800 hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Service Details Card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-8">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full order-1">
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>

                  {/* Details Section */}
                  <div className="flex flex-col justify-center space-y-4 sm:space-y-5 order-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black">
                      {currentService.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                      {currentService.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 sm:space-y-3">
                      {currentService.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-black"
                        >
                          <span className="text-lg sm:text-xl flex-shrink-0 mt-0.5">•</span>
                          <span className="text-sm sm:text-base font-medium leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}