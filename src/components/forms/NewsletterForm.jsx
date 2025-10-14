'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    if (!email) {
      setStatus('error');
      setResponseMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.message || "Thanks for subscribing!");
        setEmail('');
      } else {
        setStatus('error');
        setResponseMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
          aria-label="Email for newsletter"
        />
        <Button type="submit" disabled={status === 'loading'} className="bg-brand-pink hover:bg-brand-pink/90 text-white">
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      {responseMessage && (
        <p className={`mt-2 text-sm text-left ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </div>
  );
}
