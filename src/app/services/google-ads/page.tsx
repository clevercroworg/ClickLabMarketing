import { Metadata } from 'next';
import { ArrowRight, Target, BarChart, Zap, CheckCircle2, ShieldCheck, TrendingUp, SearchIcon, Rocket, MousePointer2 } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Google Ads Management Services | ClickLab Marketing',
  description: 'Maximize your ROI with ClickLab\'s high-intent Google Ads search campaigns and display strategies designed to capture ready-to-buy customers.',
};

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Service Hero Section */}
      <section className="relative pt-[160px] md:pt-[200px] pb-24 overflow-hidden bg-[#0f172a]">
        {/* Glowing Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[100%] rounded-full bg-indigo-600/15 blur-[120px]"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Logo Badge */}
            <div className="relative inline-flex items-center justify-center mb-8">
               <div className="absolute inset-0 bg-blue-400/30 blur-2xl rounded-full"></div>
               <div className="w-24 h-24 relative bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] flex items-center justify-center p-5 border border-white/60 backdrop-blur-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="/logos/google-ads.svg" alt="Google Ads Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Google Ads
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Engineer profitability with precision search targeting and rigorous ad optimization.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Strategic Account Management</h2>
            <p className="text-gray-600 text-lg">We don't just bid on keywords; we engineer profitability.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Targeting</h3>
              <p className="text-gray-600 leading-relaxed">We utilize ultra-specific keywords and comprehensive negative keyword lists to ensure your ads are only shown to highly qualified leads, minimizing wasted clicks.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Data is everything. We set up robust server-side tracking so you know exactly which campaigns are driving revenue, not just vanity metrics.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Optimization</h3>
              <p className="text-gray-600 leading-relaxed">We don't set it and forget it. We perform daily bidding adjustments, A/B ad copy testing, and Quality Score improvements to drastically lower your CPA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for Google Ads?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Google Ads is incredibly complex. Amateurs burn budgets by relying on "Smart" campaigns and broad match keywords that Google pushes. We are certified specialists who take back control of the algorithm to protect your spend.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Google Partner Certified</h4>
                    <p className="text-gray-600 text-sm mt-1">Our team is fully certified and follows the latest industry best practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">ROI-Obsessed Reporting</h4>
                    <p className="text-gray-600 text-sm mt-1">We report on closed revenue and ROI, not just CTR or impressions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MousePointer2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Custom Landing Page Synergy</h4>
                    <p className="text-gray-600 text-sm mt-1">We align the ad copy directly with your landing pages to instantly lift conversion rates.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl opacity-10 absolute -inset-4 transform rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b pb-4">Our Proven Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Comprehensive Audit</h4>
                      <p className="text-sm text-gray-600 mt-1">We analyze your historical data to identify leaks and quick wins.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Keyword & Competitor Strategy</h4>
                      <p className="text-sm text-gray-600 mt-1">We map out high-intent search terms that your competitors are missing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Campaign Build & Tracking</h4>
                      <p className="text-sm text-gray-600 mt-1">We architect the account with proper SKAGs/STAGs and bulletproof conversion tracking.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Scale & Iterate</h4>
                      <p className="text-sm text-gray-600 mt-1">We optimize bids and pause losers to efficiently scale your winning campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorldwideClients />
      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
