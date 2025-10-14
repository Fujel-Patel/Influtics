// Mock data for video content.
export const videos = [
  {
    id: 'reel-1',
    title: 'Can Robot Solve This...?',
    description: 'Exploring the best vada pav and pani puri in Mumbai.',
    thumbnail: '/images/videoreels/thumbnai1.jpg',
    videoUrl: '/images/videoreels/video.mp4', // Could also be a YouTube URL
    type: 'reel',
    duration: '0:58',
    price: 499, // <-- ADD THIS
  },
  {
    id: 'reel-2',
    title: 'Can Robot Solve This...?',
    description: 'First impressions of the latest phone from Google.',
    thumbnail: '/images/videoreels/thumbnai2.jpg',
    videoUrl: '/images/videoreels/video.mp4',
    type: 'reel',
    duration: '1:15',
    price: 499, // <-- ADD THIS
  },
  {
    id: 'reel-3',
    title: 'Can Robot Solve This...?',
    description: 'Trying on the latest summer trends and outfits.',
    thumbnail: '/images/videoreels/thumbnai3.jpg',
    videoUrl: '/images/videoreels/video.mp4',
    type: 'reel',
    duration: '0:45',
    price: 499,
  },
  {
    id: 'reel-4',
    title: 'Can Robot Solve This...?',
    description: 'Quick outfit ideas for professional looks.',
    thumbnail: '/images/videoreels/thumbnai4.jpg',
    videoUrl: '/images/videoreels/video.mp4',
    type: 'reel',
    duration: '1:02',
    price: 499,
  },
  {
    id: 'premium-1',
    title: 'Mastering Smartphone Photography',
    description: 'A deep dive into the techniques I use to capture stunning photos with just my phone. This course covers lighting, composition, and editing.',
    thumbnail: '/images/videos/premium-1-thumb.jpg',
    videoUrl: '/images/videoreels/video.mp4', // Placeholder URL
    type: 'premium',
    duration: '45:30',
    price: 499, // <-- ADD THIS
  },
  {
    id: 'premium-2',
    title: 'How I Built My Brand: A-Z Guide',
    description: 'From 0 to 100k followers, I share my complete journey, strategies, and the mistakes I made along the way.',
    thumbnail: '/images/videos/premium-2-thumb.jpg',
    videoUrl: '/images/videoreels/video.mp4',
    type: 'premium',
    duration: '1:12:00',
    price: 499, // <-- ADD THIS
  },
];

// Data for the Upcoming Live Events section.
// Dates are set in the near future from our current time (Oct 8, 2025).
export const upcomingLives = [
  {
    id: 1,
    platform: 'YouTube',
    title: 'Live Q&A: My Content Creation Workflow',
    date: '2025-10-10T19:00:00.000Z', // Note: Using ISO format for dates
    link: '#', // Add your YouTube live link here
  },
  {
    id: 2,
    platform: 'Instagram',
    title: 'GRWM: Let\'s Get Ready for a Diwali Party!',
    date: '2025-10-15T16:30:00.000Z',
    link: '#', // Add your Instagram live link here
  },
  {
    id: 3,
    platform: 'YouTube',
    title: 'Co-working Session: Edit Videos With Me (Lo-fi Beats)',
    date: '2025-10-20T11:00:00.000Z',
    link: '#',
  },
];