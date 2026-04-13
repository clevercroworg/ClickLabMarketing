import { Metadata } from 'next';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';

export const metadata: Metadata = {
  title: 'About ClickLab | Premium Digital Marketing Agency',
  description: 'Learn about ClickLab Marketing, our data-driven philosophy, and why we are obsessed with generating measurable revenue growth for our partners.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Dark Hero Section */}
      <section className="relative pt-[160px] md:pt-[200px] pb-24 md:pb-32 overflow-hidden bg-[#0a0f1c]">
        {/* Glowing Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[100px]"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 inline-block shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
              <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">Your Digital Marketing Expert</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Click Lab Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-0 leading-relaxed font-medium max-w-3xl mx-auto">
              A company that serves effortlessly in all the digital platforms. If you're looking for digital guidance who cares about the performance of your business and will give honest advice on where best to spend your money, then contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose Click Lab?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We can tell you exactly what is and isn't currently working for your business online and plan a strategy to help get you customers fast. We care about the performance of your business and will give honest advice on where best to spend your money.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                Results-driven. Always transparent.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
               <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                 <div className="text-blue-600 font-black text-4xl mb-2">250+</div>
                 <div className="text-gray-900 font-bold">Happy Clients</div>
               </div>
               <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                 <div className="text-blue-600 font-black text-4xl mb-2">370+</div>
                 <div className="text-gray-900 font-bold">Projects Done</div>
               </div>
               <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 text-center">
                 <div className="text-blue-600 font-black text-4xl mb-2">24</div>
                 <div className="text-gray-900 font-bold">Support Available</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide every campaign we launch.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Honesty</h3>
              <p className="text-gray-600 leading-relaxed">If something isn't working, we'll tell you immediately. We let the data dictate our strategy, not our egos.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Radical Transparency</h3>
              <p className="text-gray-600 leading-relaxed">You own your ad accounts, your data, and your assets. We build real-time dashboards so you can see exactly where every dollar goes.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agile Execution</h3>
              <p className="text-gray-600 leading-relaxed">The digital landscape shifts daily. We move fast, test rapidly, and iterate relentlessly to keep you ahead of your competitors.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
