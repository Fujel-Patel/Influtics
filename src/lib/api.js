// A generic fetcher function.
async function fetcher(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // If the server responds with a non-2xx status,
      // try to parse the error message from the body.
      const errorData = await response.json();
      throw new Error(errorData.message || `An error occurred: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("API Fetch Error:", error.message);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// --- Example API Functions ---
// These functions provide a clean way to call your API endpoints.
// You would use these in your pages or server components.

/**
 * Fetches all blog posts.
 * @returns {Promise<Array>} A promise that resolves to an array of posts.
 */
export const getBlogPosts = () => {
  return fetcher('/api/blog'); // Assumes you have an endpoint at /api/blog
};

/**
 * Fetches a single blog post by its slug.
 * @param {string} slug - The slug of the post to fetch.
 * @returns {Promise<Object>} A promise that resolves to a single post object.
 */
export const getBlogPostBySlug = (slug) => {
  return fetcher(`/api/blog/${slug}`);
};

/**
* Fetches all videos.
* @returns {Promise<Array>} A promise that resolves to an array of videos.
*/
export const getVideos = () => {
  return fetcher('/api/videos');
};
