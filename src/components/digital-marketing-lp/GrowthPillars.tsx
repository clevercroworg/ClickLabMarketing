"use client";

import Image from "next/image";
import { Search, Share2, TrendingUp, Layout, ArrowRight, Video, Target, BarChart3 } from "lucide-react";

interface GrowthPillarsProps {
  onOpenAudit: () => void;
}

export function GrowthPillars({ onOpenAudit }: GrowthPillarsProps) {
  const pillars = [
    {
      step: "01",
      icon: Search,
      title: "Google Ads & Search Marketing",
      subtitle: "High-Intent Capture",
      description: "Capture high-intent searches from buyers ready to take action. We build granular campaign structures with aggressive negative keyword filtering to eliminate wasted spend.",
      outcome: "High-Intent Lead Volume",
    },
    {
      step: "02",
      icon: Share2,
      title: "Meta Ads & Paid Social",
      subtitle: "Scalable Customer Acquisition",
      description: "Reach your ideal customers on Facebook, Instagram, and LinkedIn. We test audience segments, custom hooks, and dynamic offers to scale customer volume profitably.",
      outcome: "Profitable ROAS at Scale",
    },
    {
      step: "03",
      icon: Video,
      title: "Performance Creative Studio",
      subtitle: "High-Converting Ad Assets",
      description: "Creative is the primary lever in modern advertising. We produce scroll-stopping video hooks, high-CTR carousels, and conversion-focused visuals tested weekly.",
      outcome: "Higher Click-Through Rates",
    },
    {
      step: "04",
      icon: Layout,
      title: "Conversion Landing Pages",
      subtitle: "Maximizing Traffic Value",
      description: "Turn clicks into paying customers. We design dedicated, fast-loading landing pages with direct-response copy and single-focus CTAs that double standard conversion rates.",
      outcome: "Higher Conversion Rates",
    },
  ];

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Full-Funnel Growth Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            How We Turn Marketing Spend Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Measurable Revenue
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl mx-auto">
            We connect high-intent search, paid social, performance creative, and conversion landing pages into one unified growth engine.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">{item.title}</h3>
                  <span className="text-xs font-bold text-blue-600 block mb-3">{item.subtitle}</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 border border-blue-200 inline-block">
                    {item.outcome}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual Custom Photography Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Card 1: Strategy & Media Buying */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> Dedicated Growth Strategy
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Senior Performance Strategists
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                You work directly with senior marketing strategists who manage budget scaling, bid optimization, and daily account performance.
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <Image
                src="/images/growth_marketing_studio.jpg"
                alt="ClickLab Senior Performance Growth Marketing Strategists"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs text-slate-200 font-bold flex items-center justify-between">
                <span>Real-Time Campaign Optimization Desk</span>
                <span className="text-emerald-400">Active Scaling</span>
              </div>
            </div>
          </div>

          {/* Card 2: Performance Creative & Video Lab */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Video className="w-3.5 h-3.5 text-cyan-400" /> In-House Creative Lab
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                High-Converting Ad Creatives
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Our in-house creative team produces scroll-stopping video hooks, high-CTR product carousels, and high-impact visual assets tested for maximum retention.
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <Image
                src="/images/performance_creative_lab.jpg"
                alt="ClickLab Creative Production and Video Testing Studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs text-slate-200 font-bold flex items-center justify-between">
                <span>In-House Video Hook &amp; Creative Suite</span>
                <span className="text-cyan-300">Continuous Testing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Trigger Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-800/40 text-center sm:text-left">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
              Want to see how your campaigns compare to top performers?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We&apos;ll audit your ads, landing pages, and tracking setup with zero obligation.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="btn-shimmer w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shrink-0 transition-all shadow-xl shadow-blue-600/30 active:scale-98 cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Request Free Growth Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
