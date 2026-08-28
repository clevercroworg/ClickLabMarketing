"use client";

import { ArrowRight, Check } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-[#080f1e] pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 md:px-8">
      
      {/* ========== FLOWING AMBIENT TECH GRADIENTS & MESH ========== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base deep midnight canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] via-[#0c1a32] to-[#080f1e]" />

        {/* Ambient Gradient Sweeps */}
        <div
          className="hero-wave absolute top-[15%] -left-[20%] w-[200%] h-[40%]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.22), rgba(6,182,212,0.18), rgba(99,102,241,0.15), transparent)",
            borderRadius: "40%",
            filter: "blur(45px)",
          }}
        />
        <div
          className="hero-wave-2 absolute top-[45%] -left-[20%] w-[200%] h-[35%]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.16), rgba(6,182,212,0.2), rgba(37,99,235,0.15), transparent)",
            borderRadius: "45%",
            filter: "blur(55px)",
          }}
        />

        {/* Aurora Lighting Orbs */}
        <div className="hero-orb-1 absolute -top-[15%] -left-[10%] w-[55%] h-[55%] bg-blue-600/30 rounded-full blur-[130px]" />
        <div className="hero-orb-2 absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/25 rounded-full blur-[130px]" />

        {/* Ripple Concentric Geometry Rings */}
        <div className="hero-ripple hero-ripple-1 w-[380px] h-[380px] md:w-[820px] md:h-[820px] border border-blue-400/15" />
        <div className="hero-ripple hero-ripple-2 w-[380px] h-[380px] md:w-[820px] md:h-[820px] border border-cyan-400/12" />

        {/* Fine Radial Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(rgba(148,197,255,0.9) 1.2px, transparent 1.2px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ========== MAIN HERO CONTENT & GRID ========== */}
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Guaranteed 2-Line Desktop Heading with Perfect Rhythm */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.4rem] 2xl:text-[3.75rem] font-black text-white tracking-tight leading-[1.12] mb-5">
              <span className="block">Turn Digital Marketing</span>
              <span className="block mt-1">
                Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                  Measurable Growth.
                </span>
              </span>
            </h1>

            {/* Subheading - Increased by 2px with 2 clean lines on mobile */}
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-slate-300 font-normal leading-[1.4] sm:leading-relaxed mb-8 max-w-2xl">
              <span className="hidden sm:inline">
                We combine Google Ads, Meta Ads, conversion-focused creative, and CRO to turn marketing spend into measurable customer and revenue growth.
              </span>
              <span className="sm:hidden">
                We combine Google &amp; Meta Ads, creative, and CRO to turn ad spend into scalable revenue growth.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenAudit}
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 h-14 px-8 sm:px-9 text-base rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-xl shadow-blue-600/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base rounded-2xl border-2 border-white/15 bg-white/[0.05] text-white hover:border-white/30 hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>View Our Services</span>
              </a>
            </div>

          </div>

          {/* Right Column: ClickLab Growth Performance Outcome Console (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />

            <div className="relative bg-[#0c162e]/90 border border-white/[0.12] rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="font-black text-sm text-white tracking-tight">ClickLab Growth Performance</span>
                </div>
                <span className="text-[10px] font-extrabold text-cyan-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Verified ROI
                </span>
              </div>

              {/* 3 Outcome Metrics Cards with Glowing Accents */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                    Revenue
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-white">$186,420</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 block mt-0.5">+34.8%</span>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                    Blended ROAS
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-cyan-300">4.36x</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 block mt-0.5">+18.2%</span>
                </div>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">
                    Conversions
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-white">1,842</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 block mt-0.5">+26.4%</span>
                </div>
              </div>

              {/* Rich Month-over-Month Growth Chart */}
              <div className="bg-[#060c1d] border border-white/[0.08] rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-bold">Month-over-Month Revenue Trajectory</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> +42% Scale
                  </span>
                </div>
                
                {/* SVG Line Graphic with Gradient Fill */}
                <svg viewBox="0 0 340 90" className="w-full h-18 overflow-visible">
                  <defs>
                    <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                    <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 10 75 Q 85 70, 140 50 T 240 30 T 325 12 L 325 85 L 10 85 Z"
                    fill="url(#heroAreaGrad)"
                  />

                  <path
                    d="M 10 75 Q 85 70, 140 50 T 240 30 T 325 12"
                    fill="none"
                    stroke="url(#heroLineGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  <circle cx="10" cy="75" r="3.5" fill="#06b6d4" />
                  <circle cx="140" cy="50" r="4" fill="#38bdf8" />
                  <circle cx="240" cy="30" r="4.5" fill="#3b82f6" />
                  <circle cx="325" cy="12" r="5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]" />
                </svg>

                {/* Attribution Channel Split Bar */}
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Google Search: <strong className="text-slate-200">48%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Meta Ads: <strong className="text-slate-200">38%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>CRO Funnels: <strong className="text-slate-200">14%</strong></span>
                  </div>
                </div>
              </div>

              {/* Customer Journey Value Pipeline */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-3.5 py-2 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span>Ad Spend</span>
                <span className="text-slate-600">→</span>
                <span>Traffic</span>
                <span className="text-slate-600">→</span>
                <span>Qualified Leads</span>
                <span className="text-slate-600">→</span>
                <span className="text-cyan-300 font-extrabold">Scaled Revenue</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
