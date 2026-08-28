"use client";

import { ShieldCheck, Lock, LineChart, ArrowRight } from "lucide-react";

interface GuaranteeBannerProps {
  onOpenAudit: () => void;
}

export function GuaranteeBanner({ onOpenAudit }: GuaranteeBannerProps) {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "100% Asset & Account Ownership",
      description: "You retain full administrative ownership of your Google Ads, Meta Business Managers, pixel tracking data, and custom landing page code at all times.",
    },
    {
      icon: Lock,
      title: "Zero Long-Term Lock-In Contracts",
      description: "We don't trap you in rigid 12-month retainers. We earn your ongoing partnership every single month by consistently delivering positive ROI and measurable scale.",
    },
    {
      icon: LineChart,
      title: "Real-Time Transparent Reporting",
      description: "No confusing PDF summaries at month-end. You receive access to a 24/7 live analytics dashboard tracking exact ad spend, CPA, and closed pipeline revenue.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-blue-900/50">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" /> Risk-Free Partnership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Our 3 Ironclad Agency Commitments
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
              We built ClickLab to be the antidote to untrustworthy, low-performing legacy agencies.
            </p>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">{c.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="text-base sm:text-lg font-bold text-white">
              Ready to scale with a trusted growth partner?
            </span>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl transition-all cursor-pointer shrink-0 active:scale-98"
            >
              <span>Claim Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
