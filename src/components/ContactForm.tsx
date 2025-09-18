'use client';

import { useState } from 'react';
import { trackFormSubmission } from '@/lib/mixpanel';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track form submission
      trackFormSubmission('Contact Form', {
        company: formData.company,
        has_message: formData.message.length > 0
      });

      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Company/Clinic Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Tell us about your aesthetic practice and how we can help..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      <div className="mt-4 p-4 bg-gray-800 rounded-lg">
        <p className="text-gray-400 text-xs">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-orange-500 hover:text-orange-400 underline">
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="/terms" className="text-orange-500 hover:text-orange-400 underline">
            Terms of Service
          </a>
          . We will only use your email address to respond to your inquiry.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
