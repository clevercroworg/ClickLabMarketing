"use client";

import Image from "next/image";
import { ArrowRight, Target, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const steps = [
    {
      step: "01",
      title: "Search Intent & Paid Social Architecture",
      description: "We build granular Single-Theme Ad Groups on Google Search and rapid creative testing on Meta to capture ready-to-buy customers at the lowest CPA.",
      tag: "Google Ads & Meta",
      tagColor: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      step: "02",
      title: "First-Party CAPI & Conversion Attribution",
      description: "We configure Meta Conversions API (CAPI) and Google Tag Manager server-side tracking so algorithms optimize directly for high-revenue customers.",
      tag: "Precision Tracking",
      tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      step: "03",
      title: "High-Converting Dedicated Landing Pages",
      description: "Every campaign is paired with custom, ultra-fast landing pages with direct-response copywriting engineered to turn traffic into qualified leads and sales.",
      tag: "Conversion Rate (CRO)",
      tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50/80 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" /> Full-Funnel Growth Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How We Scale Your Digital Revenue
          </h2>
        </div>

        {/* 2-Column Showcase: Bright Vibrant Real Image + Clean Informative Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* Left Column: Bright Vibrant Studio Photo */}
          <div className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
            <Image
              src="/images/vibrant_digital_marketing_growth.jpg"
              alt="ClickLab Digital Marketing Growth Strategy & Media Buying Team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Clean Light Floating Tag */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/80 text-xs text-slate-800 font-bold flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-extrabold text-slate-900">Live Campaign Management Desk</span>
              </div>
              <span className="text-blue-600 font-black">Active Scaling</span>
            </div>
          </div>

          {/* Right Column: Informative Value Framework */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
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
