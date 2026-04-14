import { Metadata } from 'next';
import { CalendarDays, Clock, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Schedule a Consultation | ClickLab Marketing',
  description: 'Book a free 30-minute strategy session with ClickLab Marketing. Let us audit your digital presence and build a custom growth roadmap.',
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      {/* Premium Dark Hero */}
      <section className="relative pt-[160px] md:pt-[200px] pb-20 md:pb-28 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[30%] w-[50%] h-[80%] rounded-full bg-cyan-600/15 blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[60%] rounded-full bg-blue-600/15 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl">
              <CalendarDays className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold tracking-widest text-cyan-100 uppercase">Free Strategy Session</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Schedule Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Free Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
              Take the first step toward scaling your revenue. Book a 30-minute call with our strategists — no commitment, no hard sell.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

            {/* Left: What to Expect */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">What to Expect</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This is a no-strings-attached, strategic deep-dive into your business. We'll analyze your current marketing stack and identify the highest-impact opportunities for growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Quick Audit of Your Current Channels</h4>
                    <p className="text-gray-600 mt-1">We'll review your ad accounts, website, SEO health, and social presence to find immediate wins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Custom Growth Roadmap</h4>
                    <p className="text-gray-600 mt-1">We'll outline a 90-day action plan tailored specifically to your business goals and budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Clear Next Steps & Pricing</h4>
                    <p className="text-gray-600 mt-1">No generic proposals. You'll walk away with transparent pricing and a clear understanding of expected ROI.</p>
                  </div>
                </div>
              </div>

              {/* Session Details Card */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-900">Session Details</span>
                </div>
                <ul className="space-y-3 text-gray-600 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Duration: 30 minutes</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Format: Video call or phone</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Cost: Completely Free</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Outcome: Custom growth roadmap</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Or reach us directly</p>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:contact@clicklabmarketing.com" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">contact@clicklabmarketing.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:8088233259" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">8088233259</a>
                </div>
              </div>
            </div>

            {/* Right: Scheduling Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden h-fit">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600 opacity-[0.03] rounded-bl-[100px] pointer-events-none -z-10" />

              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2">Book Your Call</h3>
                <p className="text-gray-500 font-medium">Choose your preferred date, time, and tell us about your business.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Company Name</label>
                    <input type="text" placeholder="Acme Inc." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Email <span className="text-red-500">*</span></label>
                    <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Phone <span className="text-red-500">*</span></label>
                    <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Preferred Date <span className="text-red-500">*</span></label>
                    <input type="date" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Preferred Time <span className="text-red-500">*</span></label>
                    <select defaultValue="" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-600">
                      <option value="" disabled>Select a time slot</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">What services are you interested in?</label>
                  <select defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-600">
                    <option value="" disabled>Select a primary interest</option>
                    <option value="google-ads">Google Ads Management</option>
                    <option value="meta-ads">Meta Ads & Social Advertising</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="web-dev">Website Development</option>
                    <option value="seo">SEO & Organic Growth</option>
                    <option value="landing-pages">Landing Page Design</option>
                    <option value="full-stack">Full-Stack Retainer (Multiple Services)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Monthly Marketing Budget</label>
                  <select defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium text-gray-600">
                    <option value="" disabled>Select your budget range</option>
                    <option value="under-25k">Under ₹25,000/month</option>
                    <option value="25k-50k">₹25,000 – ₹50,000/month</option>
                    <option value="50k-1l">₹50,000 – ₹1,00,000/month</option>
                    <option value="1l-3l">₹1,00,000 – ₹3,00,000/month</option>
                    <option value="3l-plus">₹3,00,000+/month</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Tell us about your goals</label>
                  <textarea rows={3} placeholder="What does success look like for you in the next 90 days?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:bg-white transition-all font-medium resize-none"></textarea>
                </div>

                <Button type="submit" variant="premium" className="w-full py-4 text-lg mt-4 flex items-center justify-center">
                  Schedule Free Consultation
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
