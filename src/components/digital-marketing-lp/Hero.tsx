"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Phone, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

export function Hero({ onOpenAudit }: HeroProps) {
  const heroStats = [
    {
      value: "14+",
      label: "Years Experience",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      value: "4.8x",
      label: "Average ROAS",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      value: "$50M+",
      label: "Ad Spend Scaled",
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      value: "98%",
      label: "Client Retention",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="relative min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50 pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* ========== VIBRANT LIGHT AMBIENT GLOWS & GRID ========== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Colorful Lighting Orbs */}
        <div className="absolute -top-[10%] -left-[5%] w-[45%] h-[45%] bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-[110px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-bl from-indigo-400/15 via-purple-300/15 to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-gradient-to-tr from-emerald-300/15 via-teal-200/10 to-transparent rounded-full blur-[130px]" />

        {/* Subtle Modern Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ========== MAIN HERO CONTENT ========== */}
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct-Response Growth Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Colorful Sleek Line Accent */}
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <div className="h-[3px] w-7 sm:w-9 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-full shrink-0" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-700 whitespace-nowrap">
                Google Ads • Meta Ads • Performance Funnels
              </span>
            </div>

            {/* Short, Punchy End-to-End Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-[4.5rem] font-black text-slate-900 tracking-tight leading-[1.08] mb-5">
              End-to-End <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Digital Marketing.
              </span>
            </h1>

            {/* Subheading - Tailored 2-lines on mobile, +2px font size */}
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] text-slate-600 font-normal leading-[1.4] sm:leading-relaxed mb-8 max-w-2xl">
              <span className="hidden sm:inline">
                We manage &amp; scale your Google Ads, Meta campaigns, and high-converting landing pages to acquire more qualified customers profitably.
              </span>
              <span className="sm:hidden">
                We combine Google &amp; Meta Ads, creative, and CRO to turn ad spend into scalable revenue growth.
              </span>
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-2">
              <button
                onClick={onOpenAudit}
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 h-14 px-8 sm:px-9 text-base rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-xl shadow-blue-600/25 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:2164088962"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 text-base rounded-2xl border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-blue-300 font-bold active:scale-[0.98] transition-all shadow-xs whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>(216) 408-8962</span>
              </a>
            </div>

            {/* 4 Performance Stat Cards */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-200/90 rounded-2xl py-3 px-2.5 sm:px-3 shadow-xs hover:shadow-md hover:border-blue-300 transition-all text-center group"
                >
                  <span
                    className={`text-xl sm:text-2xl font-black block tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase font-extrabold block mt-0.5 tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Bright, Colorful Performance Telemetry Console (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 relative w-full">
            
            {/* Soft Colorful Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400/20 via-cyan-400/15 to-indigo-300/20 rounded-[2.5rem] blur-2xl pointer-events-none" />

            <div className="relative bg-white/95 border border-slate-200/90 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
              
              {/* Card Header Bar with Live Indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                  <span className="font-black text-sm text-slate-900 tracking-tight">ClickLab Performance Console</span>
                </div>
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Verified ROAS
                </span>
              </div>

              {/* 3 Colorful Outcome Metrics Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden group hover:bg-white hover:border-blue-300 transition-all">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                    Revenue
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-slate-900">$186,420</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 block mt-0.5">+34.8%</span>
                </div>

                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden group hover:bg-white hover:border-cyan-300 transition-all">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                    Blended ROAS
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-blue-600">4.36x</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 block mt-0.5">+18.2%</span>
                </div>

                <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 text-center relative overflow-hidden group hover:bg-white hover:border-emerald-300 transition-all">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                    Conversions
                  </span>
                  <h4 className="text-lg sm:text-2xl font-black text-slate-900">1,842</h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 block mt-0.5">+26.4%</span>
                </div>
              </div>

              {/* Month-over-Month Revenue Trajectory Chart */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-700 font-bold">Month-over-Month Revenue Scale</span>
                  <span className="text-emerald-600 font-extrabold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +42% Scale
                  </span>
                </div>
                
                {/* Colorful SVG Line Graphic */}
                <svg viewBox="0 0 340 90" className="w-full h-18 overflow-visible">
                  <defs>
                    <linearGradient id="heroLineGradLight" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                    <linearGradient id="heroAreaGradLight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 10 75 Q 85 70, 140 50 T 240 30 T 325 12 L 325 85 L 10 85 Z"
                    fill="url(#heroAreaGradLight)"
                  />

                  <path
                    d="M 10 75 Q 85 70, 140 50 T 240 30 T 325 12"
                    fill="none"
                    stroke="url(#heroLineGradLight)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  <circle cx="10" cy="75" r="3.5" fill="#06b6d4" />
                  <circle cx="140" cy="50" r="4" fill="#38bdf8" />
                  <circle cx="240" cy="30" r="4.5" fill="#3b82f6" />
                  <circle cx="325" cy="12" r="5" fill="#4f46e5" className="drop-shadow-[0_0_6px_rgba(79,70,229,0.5)]" />
                </svg>

                {/* Attribution Channel Split Bar */}
                <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Google Search: <strong className="text-slate-800">48%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>Meta Ads: <strong className="text-slate-800">38%</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>CRO Funnels: <strong className="text-slate-800">14%</strong></span>
                  </div>
                </div>
              </div>

              {/* Customer Journey Value Pipeline */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl px-3.5 py-2 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>Ad Spend</span>
                <span className="text-slate-400">→</span>
                <span>High-Intent Traffic</span>
                <span className="text-slate-400">→</span>
                <span>Qualified Leads</span>
                <span className="text-slate-400">→</span>
                <span className="text-blue-600 font-black">Scaled Revenue</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
