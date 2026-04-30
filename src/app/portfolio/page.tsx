import { Metadata } from 'next';
import { Portfolio } from '@/components/sections/Portfolio';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Our Portfolio | Featured Projects by ClickLab Marketing',
  description: 'Explore our portfolio of high-performance websites and digital marketing campaigns built for revenue and scale.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Dark Hero Section */}
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

        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 inline-block shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">Case Studies & Examples</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-tight drop-shadow-lg">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-0 leading-relaxed font-medium max-w-3xl mx-auto">
            Browse our gallery of customized digital experiences, robust marketing funnels, and high-performance assets.
          </p>
        </div>
      </section>

      {/* The Portfolio Gallery */}
      <Portfolio />

      {/* Action Section */}
      <CTA />
    </div>
  );
}
