"use client";

import { Phone, ArrowRight, Sparkles } from "lucide-react";

interface CallCTABannerProps {
  headline?: string;
  onOpenAudit: () => void;
}

export function CallCTABanner({
  headline = "Ready to Scale Your Customer Acquisition?",
  onOpenAudit,
}: CallCTABannerProps) {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek Modern Gradient CTA Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white rounded-3xl p-8 sm:p-14 md:p-16 shadow-2xl border border-blue-800/40 text-center">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Top Accent Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-black text-cyan-300 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Let&apos;s Build Your Growth Engine</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              {headline}
            </h2>

            {/* Responsive Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenAudit}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-9 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Claim Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:2164088962"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-2xl border-2 border-white/20 bg-white/[0.06] hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider active:scale-98 transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>(216) 408-8962</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
