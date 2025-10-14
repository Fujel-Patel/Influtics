'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean); // filter(Boolean) removes empty strings

  if (segments.length === 0) {
    return null; // Don't show on the homepage
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-800">
            Home
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;
          const name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Capitalize

          return (
            <Fragment key={href}>
              <li>
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
              </li>
              <li>
                <Link
                  href={href}
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? 'font-medium text-gray-800' : 'text-gray-500 hover:text-gray-800'}
                >
                  {name}
                </Link>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
