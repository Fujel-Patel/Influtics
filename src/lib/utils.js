import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function to conditionally join class names together.
 * It's a key part of the Shadcn UI setup for component styling.
 * @param {...(string|Object|Array)} inputs - Class names to be merged.
 * @returns {string} The merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string or Date object into a more readable format.
 * Example: "October 8, 2025"
 * @param {string | Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Creates an absolute URL from a given path.
 * Useful for SEO, metadata, and social sharing links.
 * @param {string} path - The path to append to the base URL.
 * @returns {string} The absolute URL.
 */
export function absoluteUrl(path) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  return `${baseUrl}${path}`;
}
