"use client";

import { Phone, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

interface CallCTABannerProps {
  headline?: string;
  subtext?: string;
  onOpenAudit: () => void;
}

export function CallCTABanner({
  headline = "Ready to Scale Your Customer Acquisition?",
  subtext = "Speak directly with a senior performance marketing strategist to identify quick wins.",
  onOpenAudit,
}: CallCTABannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-[#0a192f] to-[#020617] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-900/40">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Contact Details */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-5">
              <a
                href="tel:2164088962"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 text-cyan-300 flex items-center justify-center shrink-0 transition-all active:scale-95 group mx-auto sm:mx-0"
              >
                <Phone className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
              </a>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Direct Growth Line
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {headline}
                </h3>
                <a
                  href="tel:2164088962"
                  className="text-xl sm:text-2xl font-black text-cyan-300 hover:text-cyan-200 transition-colors tracking-tight block mt-0.5"
                >
                  (216) 408-8962
                </a>
                <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                  {subtext}
                </p>
              </div>
            </div>

            {/* Middle Divider (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 border-l border-slate-800 h-20 mx-auto" />

            {/* Right Side: Free Audit Button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full flex flex-col items-center lg:items-end">
                <button
                  onClick={onOpenAudit}
                  className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-cyan-200 shrink-0" />
                  <span>Claim Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <p className="text-[11px] text-slate-400 text-center lg:text-right mt-2 font-medium">
                  30-min strategic consultation • Zero obligation
                </p>
              </div>
            </div>

          </div>

          {/* Sub-footer strip */}
          <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct outreach within 2 business hours</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 justify-center">
              <a
                href="https://clicklabmarketing.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                clicklabmarketing.com
              </a>
              <span>|</span>
              <a
                href="mailto:contact@clicklabmarketing.com"
                className="hover:text-cyan-400 transition-colors truncate"
              >
                contact@clicklabmarketing.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
