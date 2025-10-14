// src/components/sections/contact/ContactHero.jsx
import GradientText from '@/components/common/GradientText';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/contact/background-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle
              title="Get In Touch"
              subtitle="Let's Collaborate"
              description="Ready to elevate your brand's social presence? Whether it's content creation, strategy consulting, or influencer partnerships, I'm here to help. Drop me a message and let's create something amazing together!"
            />
            <div className="flex flex-wrap gap-4">
              <GradientText text="Quick Response" className="text-sm" />
              <GradientText text="100% Satisfaction" className="text-sm" />
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/contact/contact-girl.jpg"
              alt="Contact Illustration"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}