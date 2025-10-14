'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const partners = [
    { name: 'Payoneer', img: '/images/contact/partner-1.png' },
    { name: 'Affirm', img: '/images/contact/partner-2.png' },
    { name: 'Verifone', img: '/images/contact/partner-3.png' },
    { name: 'SEPA', img: '/images/contact/partner-4.png' }
  ];

  return (
    <>
      <section className="container mx-auto px-4 md:px-6 bg-gradient-to-br md:h-[658px] from-pink-200 via-purple-200 to-pink-200">
        <div className="md:lg:px-16 grid md:grid-cols-2 items-center md:relative md:top-12 py-8 md:py-0">
          {/* Left Side - Contact Form */}
          <div className="bg-white w-full md:w-11/12 md:relative md:left-16 rounded-3xl shadow-xl p-6 md:p-8">
            <div className="mb-6">
              <div className="bg-white rounded-2xl flex items-center mb-4">
                <span className="text-3xl">
                  <Image
                    src="/icons/contact-form-icon.svg"
                    alt="Contact"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Let's Work Together on your next Project
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Consectetur adipiscing elit. Donce nec mattis nulla, id ultrices diam.
                Curabitur nec pharetra ante. Nunc nec posuere quam sit ut mauris bibendum
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Write Message
                </label>
                <textarea
                  placeholder="Write Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="hidden md:block relative bottom-[96px]">
            <div className="overflow-hidden aspect-square flex items-end justify-center">
              {/* Replace this placeholder with your actual image */}
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center">
                  <Image 
                  src="/images/contact/contact.png" 
                  alt="Lady"
                  width={600}
                  height={800} 
                  className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
     <div className='grid md:grid-cols-2 bg-pink-50'>
      <div className="hidden md:block"></div>
       <div className="p-6 md:p-12">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Trusted Partners
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index} 
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform"
            >
              {/* Replace with actual partner logos */}
              <img src={partner.img} alt={partner.name} className="w-[76px] h-[28px]" />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
     </div>
    </>
  );
};

export default ContactFormSection;