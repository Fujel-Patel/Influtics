'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error caught by error.jsx:', error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong 😕</h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try again or refresh the page.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()} className="px-6 py-3 text-base">
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
            className="px-6 py-3 text-base"
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
