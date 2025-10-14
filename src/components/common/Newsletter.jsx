import NewsletterForm from '@/components/forms/NewsletterForm'; // We'll create this next

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Join my Newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Get the latest updates, exclusive content, and behind-the-scenes stories delivered right to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <NewsletterForm />
        </div>
        <p className="text-sm text-gray-500 mt-4">No spam, I promise. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
