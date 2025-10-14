'use client';

import { useState } from 'react';
import { FaPaperPlane, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-pink-600 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
            <span className="text-white font-bold text-2xl">Influtics</span>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-6 py-4 pr-40 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Newsletter
              </button>
            </div>
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-white/20 hover:bg-white rounded-full flex items-center justify-center text-white hover:text-pink-600 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
