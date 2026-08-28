"use client";

import Image from "next/image";
import { Search, Share2, Layout, ArrowRight, Video, Target, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";

interface GrowthPillarsProps {
  onOpenAudit: () => void;
}

export function GrowthPillars({ onOpenAudit }: GrowthPillarsProps) {
  const capabilities = [
    {
      title: "Google Ads & PPC Management",
      subtitle: "High-Intent Search & Shopping",
      description: "We build granular Single-Theme Ad Groups (STAGs), rigorous negative keyword lists, and value-based bidding strategies to capture ready-to-buy customers at the lowest CPA.",
      deliverables: ["Search & Shopping Campaigns", "Negative Keyword Sculpting", "Competitor Ad Interception", "Server-Side Conversion Tracking"],
      icon: Search,
      badge: "Google Premier Partner Strategy",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      title: "Meta Ads & Paid Social",
      subtitle: "Facebook, Instagram & LinkedIn",
      description: "We scale acquisition through rapid creative testing, custom audience modeling, and full-funnel retargeting to maximize blended ROAS across all stages of awareness.",
      deliverables: ["Creative Hook & Angle Testing", "Broad & Lookalike Audience Scaling", "CAPI Server-Side Attribution", "Dynamic Catalog Retargeting"],
      icon: Share2,
      badge: "Scale Without Audience Fatigue",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    },
    {
      title: "Performance Creative Studio",
      subtitle: "Scroll-Stopping Visual Assets",
      description: "Creative is your highest-leverage growth variable. Our studio delivers direct-response video ads, high-CTR product carousels, and visual hooks tested weekly.",
      deliverables: ["Direct-Response Video Hooks", "High-CTR Static & Carousel Ads", "Weekly Creative Refresh Cycles", "Competitor Teardown Analysis"],
      icon: Video,
      badge: "Tested for Maximum CTR",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      title: "Conversion Landing Pages (CRO)",
      subtitle: "Turning Clicks into Revenue",
      description: "Stop wasting ad traffic on slow, generic websites. We design dedicated, sub-second landing pages with direct-response copywriting engineered to double your conversion rate.",
      deliverables: ["Sub-Second Next.js Landing Pages", "Direct-Response Conversion Copy", "A/B Multivariate Testing", "Mobile-First UX Optimization"],
      icon: Layout,
      badge: "2x Industry Avg Conversion Rate",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-bold text-blue-700 uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Full-Funnel Growth Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            PPC Management, Paid Social &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              High-Converting Funnels
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            We eliminate wasted ad spend and scale qualified customer acquisition with full-funnel digital marketing.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-7 sm:p-9 hover:bg-white hover:border-blue-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">{item.title}</h3>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-3">{item.subtitle}</span>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/70">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Key Deliverables</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual Visual Production Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Card 1: Dedicated PPC Strategy & Media Buying */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> Dedicated Growth Strategy
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                PPC &amp; Media Buying Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Direct access to senior media buyers who proactively optimize bids, search query reports, and budget allocations to maximize your monthly ROAS.
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

          {/* Card 2: Performance Creative Studio */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-blue-900/50 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Video className="w-3.5 h-3.5 text-cyan-400" /> In-House Creative Lab
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Performance Ad Creatives
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Our in-house creative lab produces scroll-stopping video hooks, high-CTR carousels, and conversion-engineered ad creatives designed to scale profitably.
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
                <span>In-House Creative &amp; Video Suite</span>
                <span className="text-cyan-300">Continuous Testing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Trigger Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-800/40 text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            Want to see how your campaigns compare to top performers?
          </h4>

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
