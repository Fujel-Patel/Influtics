'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'Many of those Products Offer the Potential',
    image: '/images/blog/blog-1.jpg',
    author: 'Admin',
    category: 'Music',
    date: '10',
    month: 'JUNE',
    slug: 'many-products-offer-potential'
  },
  {
    id: 2,
    title: 'Many of those Products Offer the Potential',
    image: '/images/blog/blog-2.jpg',
    author: 'Admin',
    category: 'Music',
    date: '10',
    month: 'JUNE',
    slug: 'many-products-offer-potential-2'
  },
  {
    id: 3,
    title: 'Many of those Products Offer the Potential',
    image: '/images/blog/blog-3.jpg',
    author: 'Admin',
    category: 'Music',
    date: '10',
    month: 'JUNE',
    slug: 'many-products-offer-potential-3'
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Latest Articles & News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg p-6"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-center rounded-lg overflow-hidden shadow-lg">
                  <div className="px-4 py-2">
                    <div className="text-2xl font-bold">{post.date}</div>
                    <div className="text-xs font-semibold">{post.month}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4 text-red-500" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TagIcon className="h-4 w-4 text-red-500" />
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}