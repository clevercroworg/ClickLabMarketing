import { Metadata } from 'next';
import { ArrowRight, Code2, Smartphone, Zap, MonitorSmartphone, Trophy, RefreshCcw, Rocket } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Website Development & Design Services | ClickLab Marketing',
  description: 'Custom, high-performance web development services built for conversion. We build stunning Next.js, React, and HTML5 websites.',
};

export default function WebsiteDevelopmentPage() {
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
                 <img src="/logos/website.svg" alt="Website Development Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Web Development
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              High-performance, conversion-optimized websites and applications built for scale.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Upgrade Your Website <ArrowRight className="w-5 h-5 ml-2" />
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Built for Scale and Speed</h2>
            <p className="text-gray-600 text-lg">Beyond just looking good—our websites are engineered to perform.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blazing Fast Speeds</h3>
              <p className="text-gray-600 leading-relaxed">We optimize every asset and write pristine, minified code. A fast website reduces bounce rates and vastly improves your Google search rankings.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
              <p className="text-gray-600 leading-relaxed">With over 60% of traffic coming from phones, we design for mobile first, ensuring your UI/UX is flawless regardless of the device size.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Tech Stack</h3>
              <p className="text-gray-600 leading-relaxed">Say goodbye to slow, clunky drag-and-drop templates. We utilize React, Next.js, tailwindCSS, and custom code to build a genuinely premium asset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for Web Development?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Many developers know how to write code, but very few understand marketing. We bridge the gap. We don't just build websites; we build conversion funnels designed to turn cold traffic into paying customers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Trophy className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Conversion-Rate Optimization (CRO) Focused</h4>
                    <p className="text-gray-600 text-sm mt-1">Every button placement, color choice, and headline is heavily researched to drive maximum action.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MonitorSmartphone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Pixel-Perfect Aesthetics</h4>
                    <p className="text-gray-600 text-sm mt-1">We employ modern design trends (glassmorphism, clean typography, subtle micro-animations) to make your brand look world-class.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <RefreshCcw className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Seamless Integrations</h4>
                    <p className="text-gray-600 text-sm mt-1">We natively integrate your CRMs, email marketing tools, and analytics tracking directly into the codebase.</p>
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
                      <h4 className="font-bold text-gray-900">Discovery & Information Architecture</h4>
                      <p className="text-sm text-gray-600 mt-1">We map out the user journey and create low-fidelity wireframes to finalize the structure.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">High-Fidelity UI/UX Design</h4>
                      <p className="text-sm text-gray-600 mt-1">We design the final visual exacts (Figma) for your approval before writing a single line of code.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Custom Development</h4>
                      <p className="text-sm text-gray-600 mt-1">Our engineers build the site using Next.js/React, ensuring perfect responsiveness.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">QA & Launch</h4>
                      <p className="text-sm text-gray-600 mt-1">We perform rigorous cross-browser testing, SEO indexing checks, and hand over the keys.</p>
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
