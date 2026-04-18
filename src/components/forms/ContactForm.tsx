"use client";

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to send message.');
      }

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Contact Form Error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-[0.03] rounded-bl-[100px] pointer-events-none -z-10" />

      {submitStatus === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">Message Sent!</h3>
          <p className="text-gray-600 text-lg">Thank you for reaching out. Our team will get back to you shortly.</p>
          <Button onClick={() => setSubmitStatus('idle')} variant="outline" className="mt-8">
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-800">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900" htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" placeholder="John" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900" htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" placeholder="Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900" htmlFor="email">Work Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-900" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900" htmlFor="company">Company Name</label>
            <input type="text" id="company" name="company" placeholder="Company Inc." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900" htmlFor="service">Services Required</label>
            <select id="service" name="service" defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-900">
              <option value="" disabled>Select a primary service</option>
              <option value="Google Ads Management">Google Ads Management</option>
              <option value="Meta Ads & Social Advertising">Meta Ads & Social Advertising</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO & Organic Growth">SEO & Organic Growth</option>
              <option value="Full-Stack Retainer">Full-Stack Retainer (All of the above)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900" htmlFor="message">How can we help? <span className="text-red-500">*</span></label>
            <textarea id="message" name="message" required rows={4} placeholder="Tell us about your current challenges and revenue goals..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium resize-none text-gray-900"></textarea>
          </div>

          <Button type="submit" variant="premium" className="w-full py-4 text-lg mt-4 flex items-center justify-center font-bold" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message <Send className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to our Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
}
