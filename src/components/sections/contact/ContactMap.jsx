// src/components/sections/contact/ContactMap.jsx
import { Card } from '@/components/ui/Card';

export default function ContactMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Me Here</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Located in the heart of New York City, ready to meet for coffee chats or virtual calls.
          </p>
        </div>
        <Card className="overflow-hidden rounded-2xl shadow-lg">
          <div className="relative h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142299472!2d-73.987319684590!3d40.758896979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a8b8330d21%3A0x2cb1e5940e84b5e9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1630000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}