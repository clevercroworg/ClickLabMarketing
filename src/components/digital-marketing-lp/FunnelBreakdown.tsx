"use client";

import { Check, X, ShieldAlert, Zap, Layers } from "lucide-react";

export function FunnelBreakdown() {
  const comparisons = [
    {
      feature: "Search Intent & Bidding Strategy",
      traditional: "Broad-match keywords and automated 'Smart' campaigns causing wasted ad spend on unqualified clicks",
      clicklab: "Granular high-intent commercial keywords, strict negative keyword sculpting & manual bid engineering",
    },
    {
      feature: "Pixel Tracking & Attribution",
      traditional: "Basic browser-side pixel tracking affected by iOS14 and browser ad blockers with missing event data",
      clicklab: "Server-Side Conversions API (CAPI) with 100% accurate first-party event tracking and zero blindspots",
    },
    {
      feature: "Ad Creative & Video Testing",
      traditional: "Generic stock templates and static graphics refreshed once a quarter leading to severe ad fatigue",
      clicklab: "Rapid-fire UGC video creatives, multi-hook testing, dynamic product carousels & weekly creative drops",
    },
    {
      feature: "Traffic Destination & Funnel CRO",
      traditional: "Sending paid traffic to generic, slow homepages with navigation links that leak high-value visitors",
      clicklab: "Dedicated, sub-second custom conversion landing pages with direct-response copy and single-focus CTAs",
    },
    {
      feature: "Account Ownership & Terms",
      traditional: "Locked-in 6 to 12 month agency contracts where the agency holds your ad accounts hostage",
      clicklab: "You retain 100% administrative ownership of all accounts, pixels, and creatives with zero lock-in contracts",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050814] relative overflow-hidden border-t border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-400/25 rounded-full px-3.5 py-1 text-xs font-bold text-cyan-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Agency Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Why Scaling Brands Choose ClickLab
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            See how the ClickLab performance marketing engine compares to typical agency practices.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="bg-[#090e24] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-slate-950 text-white p-4 sm:p-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider items-center border-b border-slate-800">
            <div className="col-span-12 sm:col-span-4 text-slate-400 mb-2 sm:mb-0">Strategy &amp; Execution</div>
            <div className="col-span-6 sm:col-span-4 text-rose-400 flex items-center gap-1.5 justify-start">
              <ShieldAlert className="w-4 h-4 hidden sm:block" />
              <span>Generic Agencies</span>
            </div>
            <div className="col-span-6 sm:col-span-4 text-cyan-300 flex items-center gap-1.5 justify-start">
              <Zap className="w-4 h-4 hidden sm:block" />
              <span>ClickLab Revenue Engine</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {comparisons.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center transition-colors ${
                  idx % 2 === 0 ? "bg-[#090e24]" : "bg-[#0c122c]/50"
                }`}
              >
                <div className="col-span-12 sm:col-span-4 font-bold text-white mb-2 sm:mb-0">
                  {row.feature}
                </div>

                <div className="col-span-12 sm:col-span-4 text-slate-400 font-normal pr-2 flex items-start gap-2 mb-2 sm:mb-0 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{row.traditional}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 text-slate-100 font-medium pl-0 sm:pl-2 flex items-start gap-2 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-cyan-200">{row.clicklab}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
