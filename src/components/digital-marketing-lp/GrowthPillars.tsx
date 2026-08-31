"use client";

import Image from "next/image";
import { Search, Share2, Layout, ArrowRight, Video, Target, BarChart3, CheckCircle2, TrendingUp } from "lucide-react";

interface GrowthPillarsProps {
  onOpenAudit: () => void;
}

export function GrowthPillars({ onOpenAudit }: GrowthPillarsProps) {
  const capabilities = [
    {
      title: "Google Ads",
      subtitle: "Search, Shopping & Performance Max",
      description: "We build granular Single-Theme Ad Groups (STAGs), rigorous negative keyword lists, and value-based bidding strategies to capture ready-to-buy customers at the lowest CPA.",
      deliverables: ["Search & Shopping Campaigns", "Negative Keyword Sculpting", "Competitor Ad Interception", "Server-Side Conversion Tracking"],
      logoSrc: "/logos/google-ads.svg",
      icon: Search,
      badge: "Google Ads Specialist",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      title: "Meta Ads",
      subtitle: "Facebook & Instagram Scaling",
      description: "We scale acquisition through rapid creative testing, custom audience modeling, and full-funnel retargeting to maximize blended ROAS across all stages of awareness.",
      deliverables: ["Creative Hook & Angle Testing", "Broad & Lookalike Audience Scaling", "CAPI Server-Side Attribution", "Dynamic Catalog Retargeting"],
      logoSrc: "/logos/meta.svg",
      icon: Share2,
      badge: "Meta Scaling Systems",
      badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    },
    {
      title: "Performance Creative",
      subtitle: "High-CTR Video & Static Ads",
      description: "Creative is your highest-leverage growth variable. Our studio delivers direct-response video ads, high-CTR product carousels, and visual hooks tested weekly.",
      deliverables: ["Direct-Response Video Hooks", "High-CTR Static & Carousel Ads", "Weekly Creative Refresh Cycles", "Competitor Teardown Analysis"],
      icon: Video,
      badge: "Tested for Maximum CTR",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      title: "Landing Pages & CRO",
      subtitle: "Turning Clicks into Revenue",
      description: "Stop wasting ad traffic on slow, generic websites. We design dedicated, sub-second landing pages with direct-response copywriting engineered to double your conversion rate.",
      deliverables: ["Sub-Second Next.js Landing Pages", "Direct-Response Conversion Copy", "A/B Multivariate Testing", "Mobile-First UX Optimization"],
      logoSrc: "/logos/landing-page.svg",
      icon: Layout,
      badge: "2x Avg Conversion Rate",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean Typography & No Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Growth Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Google Ads, Meta Ads &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              High-Converting Funnels
            </span>
          </h2>
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
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 p-2.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      {item.logoSrc ? (
                        <Image src={item.logoSrc} alt={item.title} width={36} height={36} className="w-8 h-8 object-contain" />
                      ) : (
                        <div className="w-full h-full rounded-xl bg-blue-600 text-white flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                      )}
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

        {/* Action Trigger Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-700/40 text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl font-black text-white">
            Want to see how your campaigns compare to top performers?
          </h4>

          <button
            onClick={onOpenAudit}
            className="btn-shimmer w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shrink-0 transition-all shadow-xl shadow-cyan-500/20 active:scale-98 cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Request Free Growth Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
