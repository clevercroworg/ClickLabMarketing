import { Metadata } from 'next';
import { ArrowRight, MessageCircle, Heart, Share2, PenTool, BrainCircuit, LineChart, Rocket } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Social Media Management Services | ClickLab Marketing',
  description: 'Build an engaged organic community with ClickLab\'s end-to-end social media management, content strategy, and brand voice development.',
};

export default function SocialMediaPage() {
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
                 <img src="/logos/social-media.svg" alt="Social Media Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Social Media
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Build a loyal community and amplify your brand identity across all major platforms.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Grow Your Community <ArrowRight className="w-5 h-5 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Omnichannel Organic Strategy</h2>
            <p className="text-gray-600 text-lg">Consistent, high-quality output that perfectly captures your brand voice.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Strategy</h3>
              <p className="text-gray-600 leading-relaxed">We develop data-driven content calendars filled with high-impact posts, reels, and stories that resonate deeply with your specific target audience.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Active Engagement</h3>
              <p className="text-gray-600 leading-relaxed">Social media is a two-way street. We proactively interact with your comments, messages, and industry peers to build genuine trust and rapport.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Aesthetic</h3>
              <p className="text-gray-600 leading-relaxed">First impressions matter. We carefully curate your grid and visual identity to ensure a cohesive, professional, and visually stunning brand presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for Social Media?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most agencies just post generic Canva graphics. We act as your remote in-house content team. We analyze social algorithms, follow emerging viral trends, and produce authentic content that actually drives engagement and sales.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PenTool className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Expert Copywriting</h4>
                    <p className="text-gray-600 text-sm mt-1">We don't use AI-generated drivel. Our copywriters craft compelling captions that provoke thought, comments, and shares.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BrainCircuit className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Trend & Audio Monitoring</h4>
                    <p className="text-gray-600 text-sm mt-1">We monitor TikTok and Reel trends daily, capitalizing on viral audios before they peak.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <LineChart className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Data-Backed Iteration</h4>
                    <p className="text-gray-600 text-sm mt-1">We analyze view durations, save ratios, and shares to continuously improve your content matrix.</p>
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
                      <h4 className="font-bold text-gray-900">Brand Deep-Dive</h4>
                      <p className="text-sm text-gray-600 mt-1">We establish your brand voice, color palettes, and core content pillars.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Monthly Content Calendar</h4>
                      <p className="text-sm text-gray-600 mt-1">We deliver a full 30-day schedule of graphics, videos, and captions for your approval.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Scheduling & Publishing</h4>
                      <p className="text-sm text-gray-600 mt-1">We automate the posting process perfectly timed for when your audience is most active.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Community Management</h4>
                      <p className="text-sm text-gray-600 mt-1">We spend daily hours nurturing relationships, replying to DMs, and engaging with peers.</p>
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
