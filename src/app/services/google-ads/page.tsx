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
      <section className="relative flex flex-col justify-center pt-[180px] pb-[80px] md:pt-[220px] md:pb-[120px] overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Deep Tech Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Ambient Lighting */}
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/40 via-cyan-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500/40 via-purple-500/10 to-transparent blur-3xl"></div>

          {/* High-Fidelity 3D Grid */}
          <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>

          {/* Abstract Floating Glass Geometries */}
          <div className="hidden md:block absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-gradient-to-br from-blue-400/10 to-transparent border border-white/20 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)] animate-[spin_40s_linear_infinite]" style={{ transform: 'rotate(-15deg) skew(-10deg) perspective(1000px)' }}></div>
          
          <div className="hidden md:block absolute bottom-[5%] right-[25%] w-[200px] h-[200px] bg-gradient-to-tr from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-full backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-pulse" style={{ transform: 'translateZ(50px)' }}></div>
          
          <div className="hidden md:block absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-gradient-to-bl from-indigo-400/10 to-transparent border border-indigo-400/20 rounded-full backdrop-blur-lg shadow-[0_0_60px_rgba(99,102,241,0.2)] animate-[spin_50s_linear_infinite_reverse]"></div>

          {/* Dynamic Laser Slash */}
          <div className="absolute top-[-10%] right-[20%] w-[1200px] h-[100px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-2xl transform rotate-45 origin-top-right"></div>
          <div className="absolute top-[-10%] right-[20%] w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-sm transform rotate-45 origin-top-right"></div>
          
          {/* Subtle Data Scanlines */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 2px, #fff 2px, #fff 4px)' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Google Ads <span className="text-cyan-400">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-2 font-medium max-w-[90vw] md:max-w-4xl whitespace-nowrap overflow-hidden text-ellipsis">
              Engineer profitability with precision search targeting and rigorous ad optimization.
            </p>
          </div>
        </div>
      </section>

      <WorldwideClients />

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

      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
