'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';

export default function CommentForm({ postId }) {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, postId }),
      });
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.message || 'Comment submitted for review!');
        setFormData({ name: '', email: '', comment: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.message || 'Failed to submit comment.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold">Leave a Reply</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="comment-name">Name</Label>
          <Input id="comment-name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="comment-email">Email</Label>
          <Input id="comment-email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="comment-text">Comment</Label>
        <Textarea id="comment-text" name="comment" value={formData.comment} onChange={handleChange} rows={5} required />
      </div>
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Posting...' : 'Post Comment'}
      </Button>
      {responseMessage && (
        <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {responseMessage}
        </p>
      )}
    </form>
  );
}
