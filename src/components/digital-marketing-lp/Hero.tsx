"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Phone, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

// Ambient floating tool icons in low opacity
const FloatingBgTool = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <div
    className={`absolute pointer-events-none z-10 hidden md:flex items-center justify-center opacity-25 sm:opacity-30 hover:opacity-45 transition-opacity duration-300 ${className}`}
    style={{
      animation: `heroFloat 6s ease-in-out infinite ${delay}s`,
    }}
  >
    <div className="w-11 h-11 lg:w-13 lg:h-13 rounded-2xl bg-white/85 border border-slate-200/90 shadow-md backdrop-blur-xs flex items-center justify-center p-2.5">
      {children}
    </div>
  </div>
);

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
      
      {/* Inline Keyframes for Smooth Floating */}
      <style jsx global>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>

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

        {/* ========== FLOATING SOCIAL & MARKETING TOOL ICONS (LOW OPACITY) ========== */}
        {/* Google Ads (Top Left) */}
        <FloatingBgTool className="left-[3%] lg:left-[4%] top-[18%]" delay={0}>
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path fill="#4285F4" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.43 3.72L12 11.62 4.57 7.9 12 4.18z" />
            <path fill="#34A853" d="M4 8.82l7 3.5v7.36l-7-3.5V8.82z" />
            <path fill="#FBBC05" d="M13 19.68v-7.36l7-3.5v7.36l-7 3.5z" />
          </svg>
        </FloatingBgTool>

        {/* Meta / Instagram (Top Right) */}
        <FloatingBgTool className="right-[4%] lg:right-[5%] top-[16%]" delay={1.5}>
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0081FB]">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </FloatingBgTool>

        {/* TikTok (Center Left) */}
        <FloatingBgTool className="left-[2%] lg:left-[3%] top-[52%]" delay={2.5}>
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#000000]">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.34 6.34 0 0 0 1.95-4.5V8.64a8.28 8.28 0 0 0 4.82 1.5V6.69z"/>
          </svg>
        </FloatingBgTool>

        {/* LinkedIn (Center Right) */}
        <FloatingBgTool className="right-[2%] lg:right-[3%] top-[48%]" delay={3}>
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0A66C2]">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </FloatingBgTool>

        {/* Google Analytics 4 (Bottom Right) */}
        <FloatingBgTool className="right-[5%] lg:right-[6%] bottom-[12%]" delay={4}>
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#F9AB00]">
            <path d="M12 22h10V2H2v20h10zm-8-2V4h16v16H4zm6-12h-2v10h2V8zm4 4h-2v6h2v-6zm4-7h-2v13h2V5z" />
          </svg>
        </FloatingBgTool>

        {/* Shopify / E-Comm (Bottom Left) */}
        <FloatingBgTool className="left-[4%] lg:left-[5%] bottom-[12%]" delay={2}>
          <svg viewBox="0 0 24 24" className="w-full h-full fill-[#95BF47]">
            <path d="M19.8 6.4c-.1-.4-.4-.6-.8-.6h-3.5L14 3.7c-.4-.5-1-.8-1.7-.8s-1.3.3-1.7.8L9.1 5.8H5.6c-.4 0-.7.2-.8.6L2 19.3c-.1.5.2 1 .7 1.1.1 0 .2 0 .3 0h18c.5 0 1-.4 1-1 0-.1 0-.2 0-.3L19.8 6.4zM12 4.7c.3 0 .6.2.8.4l1.1 1.6H10.1l1.1-1.6c.2-.2.5-.4.8-.4zm-2.4 3.8c.4 0 .8.3.8.8v2.4c0 .4-.3.8-.8.8s-.8-.3-.8-.8V9.3c0-.5.4-.8.8-.8zm4.8 0c.4 0 .8.3.8.8v2.4c0 .4-.3.8-.8.8s-.8-.3-.8-.8V9.3c0-.5.4-.8.8-.8z" />
          </svg>
        </FloatingBgTool>
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
