"use client";

import { ShieldCheck, Lock, LineChart, ArrowRight, Sparkles } from "lucide-react";

interface GuaranteeBannerProps {
  onOpenAudit: () => void;
}

export function GuaranteeBanner({ onOpenAudit }: GuaranteeBannerProps) {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "100% Asset Ownership",
      benefit: "You retain full administrative ownership of your Google Ads, Meta Business Managers, and tracking pixels at all times.",
      iconGradient: "from-blue-600 to-cyan-500",
      tag: "Full Control",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: Lock,
      title: "Zero Long-Term Lock-Ins",
      benefit: "No rigid 12-month retainers. We earn your ongoing partnership every single month by delivering positive ROAS and measurable scale.",
      iconGradient: "from-emerald-500 to-teal-500",
      tag: "Month-to-Month",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      icon: LineChart,
      title: "Real-Time Live Reporting",
      benefit: "Direct 24/7 access to transparent live analytics dashboards tracking exact ad spend, CPA, and closed customer revenue.",
      iconGradient: "from-indigo-600 to-blue-600",
      tag: "100% Transparency",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/80 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Risk-Free Partnership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our 3 Ironclad Agency Commitments
          </h2>
        </div>

        {/* 3 Bright, Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {commitments.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${c.iconGradient} text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${c.tagColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {c.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Callout Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-700/40 text-center sm:text-left">
          <span className="text-lg sm:text-xl font-black text-white">
            Ready to scale with a trusted, transparent growth partner?
          </span>
          <button
            onClick={onOpenAudit}
            className="btn-shimmer w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl transition-all cursor-pointer shrink-0 active:scale-98"
          >
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
