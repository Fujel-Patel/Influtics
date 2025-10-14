// src/components/sections/contact/ContactInfo.jsx
import SocialIcons from '@/components/common/SocialIcons';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const contactItems = [
  {
    icon: '📧',
    title: 'Email',
    detail: 'hello@influtics.com',
    link: 'mailto:hello@influtics.com',
  },
  {
    icon: '📱',
    title: 'Phone',
    detail: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: '🌐',
    title: 'Website',
    detail: 'www.influtics.com',
    link: 'https://www.influtics.com',
  },
  {
    icon: '📍',
    title: 'Location',
    detail: 'New York, NY 10001',
    link: '#',
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Details</h3>
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-700">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {item.detail}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Badge variant="outline" className="inline-flex items-center gap-2">
              Follow me for updates
            </Badge>
            <SocialIcons />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
            <Card className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between text-red-500"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}