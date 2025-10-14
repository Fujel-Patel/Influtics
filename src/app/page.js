import HeroSection from '@/components/sections/home/HeroSection';
import SocialStats from '@/components/sections/home/SocialStats';
import ServicesSection from '@/components/sections/home/ServicesSection';
import AboutSection from '@/components/sections/home/AboutSection';
import VideoReels from '@/components/sections/home/VideoReels';
import UpcomingLives from '@/components/sections/home/UpcomingLives';
import PremiumVideos from '@/components/sections/home/PremiumVideos';
import BlogSection from '@/components/sections/home/BlogSection';
import ContactFormSection from '@/components/sections/home/ContactFormSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialStats />
      <VideoReels />
      <ServicesSection />
       <AboutSection />
       <UpcomingLives />
       <PremiumVideos />
       <ContactFormSection />
       <BlogSection />
    </>
  );
}
