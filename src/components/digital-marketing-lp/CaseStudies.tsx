"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Target, BarChart3, Zap, ShieldCheck } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const steps = [
    {
      step: "01",
      title: "Search Intent & Paid Social Architecture",
      description: "We build granular Single-Theme Ad Groups (STAGs) on Google Search and broad creative testing on Meta to capture high-intent buyers while eliminating wasted spend.",
    },
    {
      step: "02",
      title: "First-Party CAPI & Server-Side Tracking",
      description: "We implement Meta Conversions API (CAPI) and Google Tag Manager server-side tracking so algorithms optimize directly toward high-LTV paying customers.",
    },
    {
      step: "03",
      title: "Sub-Second Conversion Landing Pages (CRO)",
      description: "Every campaign is paired with custom, ultra-fast landing pages featuring direct-response copywriting engineered to turn clicks into closed revenue.",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <Target className="w-3.5 h-3.5" /> Growth Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            The ClickLab Revenue Engine
          </h2>
        </div>

        {/* 2-Column Showcase: High-Res Real Image + Informative Digital Marketing Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* Left Column: High-Res Growth Dashboard Studio Photo */}
          <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
            <Image
              src="/images/digital_marketing_growth_blueprint.jpg"
              alt="ClickLab Google Ads and Meta Ads Performance Command Center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-xs text-slate-200 font-bold flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>Real-Time Ad Optimization Desk</span>
              </div>
              <span className="text-cyan-300 font-extrabold">Active Scaling</span>
            </div>
          </div>

          {/* Right Column: Informative Value Framework */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 hover:bg-slate-50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-13 px-8 text-sm uppercase tracking-wider rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-lg shadow-blue-600/30 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Request Free Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
