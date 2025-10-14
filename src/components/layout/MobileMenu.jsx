'use client';

import { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useAppContext } from '@/context/AppContext';
import { navLinks } from '@/data/navLinks';

export default function MobileMenu({ dropdownItems }) {
  const { isMobileMenuOpen, closeMobileMenu } = useAppContext();
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (label) => {
    setOpenCategories(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const hasDropdown = (label) => dropdownItems && dropdownItems[label] && dropdownItems[label].length > 0;

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } bg-white lg:hidden`}
    >
      <div className="container mx-auto flex h-full flex-col p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMobileMenu}>
            <img src="/logo.svg" alt="Influtics Logo" className="h-7 sm:h-8 w-auto" />
          </Link>
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="rounded-md p-2 text-foreground transition hover:bg-accent"
          >
            <XMarkIcon className="h-5 sm:h-6 w-5 sm:w-6" />
          </button>
        </div>
        <nav className="mt-8 sm:mt-12 flex flex-col items-center space-y-4 sm:space-y-6">
          {navLinks.map((link) => (
            <div key={link.href} className="w-full max-w-md">
              <button
                onClick={() => hasDropdown(link.label) ? toggleCategory(link.label) : closeMobileMenu()}
                className="flex w-full items-center justify-between text-xl sm:text-2xl font-medium text-foreground transition-colors hover:text-brand-pink py-3 sm:py-4 px-3 sm:px-4 rounded-lg"
              >
                <Link
                  href={link.href}
                  className="flex-1 text-left"
                  onClick={!hasDropdown(link.label) ? closeMobileMenu : undefined}
                >
                  {link.label}
                </Link>
                {hasDropdown(link.label) && (
                  <ChevronDownIcon 
                    className={`h-5 sm:h-6 w-5 sm:w-6 transition-transform ${openCategories[link.label] ? 'rotate-180' : ''}`} 
                  />
                )}
              </button>
              {hasDropdown(link.label) && openCategories[link.label] && (
                <div className="ml-6 sm:ml-8 mt-2 space-y-2">
                  {dropdownItems[link.label].map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 sm:px-4 text-base sm:text-lg text-gray-600 hover:text-brand-pink transition-colors rounded"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto flex flex-col items-center gap-6 sm:gap-8 pb-6 sm:pb-8">
          <Link 
            href="/contact" 
            onClick={closeMobileMenu}
            className="inline-block w-full max-w-xs rounded-full bg-gradient-to-r from-brand-pink to-brand-orange px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            Follow Me
          </Link>
        </div>
      </div>
    </div>
  );
}