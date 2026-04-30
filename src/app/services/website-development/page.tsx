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
              Website <span className="text-cyan-400">Development</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-2 font-medium max-w-[90vw] md:max-w-4xl whitespace-nowrap overflow-hidden text-ellipsis">
              High-performance, conversion-optimized websites and applications built for scale.
            </p>
          </div>
        </div>
      </section>

      <WorldwideClients />

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

      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
