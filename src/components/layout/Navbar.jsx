'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { navLinks } from '@/data/navLinks';
import MobileMenu from './MobileMenu';
import { Button } from '../ui/Button';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { FiPlus } from "react-icons/fi";

import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { openMobileMenu } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define dropdown items (hardcoded based on images; extend navLinks if needed)
  const dropdownItems = {
    'Streaming Videos': [
      { label: 'Streaming Videos 1', href: '/streaming/videos-1' },
      { label: 'Streaming Videos 2', href: '/streaming/videos-2' },
      { label: 'Streaming Videos 3', href: '/streaming/videos-3' },
      { label: 'Streaming Video Details', href: '/streaming/video-details' },
    ],
    'Pages': [
      { label: 'Video Shop', href: '/pages/video-shop' },
      { label: 'Video Shop Details', href: '/pages/video-shop-details' },
      { label: 'Services', href: '/pages/services' },
      { label: 'Service Details', href: '/pages/service-details' },
      { label: 'Checkout', href: '/pages/checkout' },
      { label: 'Sign up', href: '/pages/sign-up' },
      { label: 'Sign in', href: '/pages/sign-in' },
      { label: 'Pricing', href: '/pages/pricing' },
    ],
    'Blog': [
      { label: 'Blogs', href: '/blog/blogs' },
      { label: 'Blog Details', href: '/blog/details' },
    ],
  };

  const hasDropdown = (label) => dropdownItems[label] && dropdownItems[label].length > 0;

  const handleMouseEnter = (label) => {
    if (hasDropdown(label)) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "px-0 lg:px-8 xl:px-16"
        )}
      >
        <div 
          className={cn(
            "mx-auto bg-white/50 backdrop-blur-[75px] transition-all duration-300",
            "lg:max-w-[90vw] lg:rounded-b-2xl",
            "w-full lg:w-auto",
            isScrolled 
              ? "shadow-[0_4px_20px_rgba(0,0,0,0.12)]" 
              : "shadow-[0_0_15px_rgba(0,0,0,0.08)]"
          )}
        >
          <div className="flex h-16 sm:h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image 
                src="/logo.svg" 
                alt="Influtics Logo" 
                width={140} 
                height={28}
                className="w-32 sm:w-40 lg:w-[170px]"
                priority 
              />
            </Link>

            <nav className="hidden items-center gap-6 sm:gap-8 lg:gap-10 text-sm font-semibold lg:flex relative">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-black transition-colors hover:text-pink-500 inline-block py-2 px-2 rounded',
                      pathname === link.href ? 'text-pink-500' : 'text-black',
                      activeDropdown === link.label && 'bg-pink-50 text-pink-500'
                    )}
                  >
                    {link.label}
                  </Link>
                  {activeDropdown === link.label && hasDropdown(link.label) && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-48 sm:w-56 lg:w-64 bg-pink-50 rounded-xl shadow-lg py-4 z-50 border border-pink-100"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {dropdownItems[link.label].map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 sm:px-6 py-3 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors rounded-lg mx-2"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="hidden items-center gap-4 lg:flex">
                <Button className="w-28 sm:w-32 h-10 gap-1 text-sm sm:text-md" variant="gradient" asChild>
                  <Link href="/routes/contact" className="flex items-center">
                    <FiPlus style={{strokeWidth:'3'}}/>
                    <span className=''>Follow Me</span>
                  </Link>
                </Button>
              </div>
            </nav>

            <button
              onClick={openMobileMenu}
              aria-label="Open menu"
              className="rounded-md p-2 text-black transition hover:bg-accent lg:hidden"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu dropdownItems={dropdownItems} />
    </>
  );
}