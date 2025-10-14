import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import ContactFormSection from '@/components/sections/home/ContactFormSection';
import PremiumVideosSection from '@/components/sections/home/PremiumVideos';

export const metadata = {
  title: 'About | Influtics',
  description: 'Learn more about me, my journey, achievements, and creative skills.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <PremiumVideosSection />
      <ContactFormSection />
    </>
  );
}
