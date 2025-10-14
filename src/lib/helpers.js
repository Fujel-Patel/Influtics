/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length and appends an ellipsis.
 * @param {string} str - The string to truncate.
 * @param {number} num - The maximum length of the string.
 * @returns {string} The truncated string.
 */
export function truncate(str, num = 100) {
  if (typeof str !== 'string' || str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

/**
 * Estimates the reading time for a given text.
 * @param {string} text - The text content to estimate.
 * @param {number} wpm - Words per minute rate.
 * @returns {number} The estimated reading time in minutes.
 */
export function getReadingTime(text, wpm = 200) {
    if (typeof text !== 'string' || text.length === 0) {
        return 0;
    }
    // Matches words (sequences of non-space characters)
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
}

// ... (keep the other helper functions) ...

/**
 * Formats a number as Indian Rupee currency.
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string (e.g., "₹499.00").
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}
