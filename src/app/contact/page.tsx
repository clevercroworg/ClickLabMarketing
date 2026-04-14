import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us | ClickLab Marketing Agency',
  description: 'Get in touch with ClickLab Marketing. Request a free audit, ask a question, or scale your revenue with our expert digital marketing services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Dark Hero Section */}
      <section className="relative pt-[160px] md:pt-[200px] pb-24 md:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Glowing Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[100%] rounded-full bg-indigo-600/15 blur-[120px]"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 inline-block shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              <span className="text-xs font-bold tracking-widest text-cyan-100 uppercase">Contact Our Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
              Let's Build Something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Incredible Together.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-0 leading-relaxed font-medium max-w-3xl mx-auto">
              Whether you need to scale your existing ad accounts or build a high-performance website from scratch, our team is ready to execute.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fill out the form to request a free audit or strategy session. We aim to respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-5 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</h4>
                    <a href="mailto:contact@clicklabmarketing.com" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">contact@clicklabmarketing.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-5 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</h4>
                    <a href="tel:8088233259" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">8088233259</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form UI */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
               {/* Decorative background blob */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-[0.03] rounded-bl-[100px] pointer-events-none -z-10" />

               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-900">First Name</label>
                     <input type="text" placeholder="John" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-900">Last Name</label>
                     <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-900">Work Email <span className="text-red-500">*</span></label>
                     <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-900">Phone Number <span className="text-red-500">*</span></label>
                     <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-900">Company Name</label>
                   <input type="text" placeholder="Company Inc." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-900">Services Required</label>
                   <select defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-600">
                     <option value="" disabled>Select a primary service</option>
                     <option value="google-ads">Google Ads Management</option>
                     <option value="meta-ads">Meta Ads & Social Advertising</option>
                     <option value="web-dev">Website Development</option>
                     <option value="seo">SEO & Organic Growth</option>
                     <option value="full-stack">Full-Stack Retainer (All of the above)</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-900">How can we help? <span className="text-red-500">*</span></label>
                   <textarea required rows={4} placeholder="Tell us about your current challenges and revenue goals..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium resize-none"></textarea>
                 </div>

                 <Button type="submit" variant="premium" className="w-full py-4 text-lg mt-4 flex items-center justify-center">
                   Send Message <Send className="w-5 h-5 ml-2" />
                 </Button>
                 
                 <p className="text-xs text-center text-gray-500 mt-4">
                   By submitting this form, you agree to our Privacy Policy.
                 </p>
               </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
