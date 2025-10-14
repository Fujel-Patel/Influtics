import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import ContactForm from '@/components/forms/ContactForm';
import ContactMap from '@/components/sections/contact/ContactMap';
import SocialIcons from '@/components/common/SocialIcons';

export const metadata = {
  title: 'Contact Me - Get In Touch | Influtics',
  description: 'Have a collaboration idea or just want to say hello? Get in touch with Linda Susan for partnerships, collaborations, and inquiries.',
  keywords: 'contact influencer, collaboration, brand partnership, get in touch, Linda Susan contact',
  openGraph: {
    title: 'Contact Linda Susan - Beauty & Lifestyle Influencer',
    description: 'Get in touch for collaborations, partnerships, and inquiries.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
     <h1 className='bg-gray-300 text-2xl h-screen flex justify-center items-center '>
       Contact Page Coming Soon
     </h1>
    </>
  );
}