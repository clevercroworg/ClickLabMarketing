import { Metadata } from 'next';
import { ArrowRight, Users, Image as ImageIcon, TrendingUp, ShieldCheck, Video, LayoutDashboard, Rocket } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Meta Ads Agency & Facebook Marketing | ClickLab Marketing',
  description: 'Scale your brand with precision targeting on Facebook and Instagram using visually stunning, high-converting Meta Ad creatives.',
};

export default function MetaAdsPage() {
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
                 <img src="/logos/meta.svg" alt="Meta Ads Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Meta Ads
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Scale your revenue with high-converting creative and aggressive media buying.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Scale Your Brand <ArrowRight className="w-5 h-5 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Precision Social Marketing</h2>
            <p className="text-gray-600 text-lg">We combine thumb-stopping design with data-driven media buying.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lookalike Audiences</h3>
              <p className="text-gray-600 leading-relaxed">We feed Meta's algorithm with your best customer data to find high-value prospects that closely mirror your top purchasers.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Testing</h3>
              <p className="text-gray-600 leading-relaxed">Ad fatigue kills ROAS. We continuously test hooks, video creatives, carousels, and copy to find the absolute winning combinations.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Funnel Strategy</h3>
              <p className="text-gray-600 leading-relaxed">We don't just blast cold traffic. We build comprehensive funnels that nurture prospects with targeted retargeting across the Facebook ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for Meta Ads?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The iOS14 update changed Meta advertising forever. We are a new-breed agency that relies on robust server-side Pixel tracking, high-volume UGC testing, and strict offer economics to beat the algorithm.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Video className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">In-House Creative Engine</h4>
                    <p className="text-gray-600 text-sm mt-1">We script, edit, and launch high-performing UGC (User Generated Content) style videos tailored for the feed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <LayoutDashboard className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Advanced CAPI Implementation</h4>
                    <p className="text-gray-600 text-sm mt-1">We hardcode the Conversions API to ensure Meta gets 100% accurate data back to fuel its AI targeting.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Strict Account Security & Scaling</h4>
                    <p className="text-gray-600 text-sm mt-1">We safeguard Business Managers from random bans while aggressively pushing budget on winning ad sets.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl opacity-10 absolute -inset-4 transform -rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b pb-4">Our Proven Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Asset & Pixel Setup</h4>
                      <p className="text-sm text-gray-600 mt-1">We ensure your catalogs, pixel, CAPI, and events are firing perfectly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Media & Copy Production</h4>
                      <p className="text-sm text-gray-600 mt-1">We storyboard and create a batch of 15+ ad creatives mapped to different buyer personas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Modular Media Buying</h4>
                      <p className="text-sm text-gray-600 mt-1">We launch controlled tests using CBO/ABO logic to isolate the best audiences and ads.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vertical Scaling</h4>
                      <p className="text-sm text-gray-600 mt-1">We duplicate winning campaigns and aggressively push the budgets without breaking ROAS.</p>
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
