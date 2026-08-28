"use client";

import { useState } from "react";
import { XCircle, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface CreativeTeardownProps {
  onOpenAudit: () => void;
}

export function CreativeTeardown({ onOpenAudit }: CreativeTeardownProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      time: "0:00 - 0:03",
      phase: "The Pattern-Interrupt Hook",
      bad: "Generic logo animation or corporate introduction. 80% of viewers scroll past in the first 2 seconds.",
      good: "High-contrast visual hook and targeted question that halts the scroll immediately. 40%+ 3-second hold rate.",
      stat: "+320% Hook Rate",
    },
    {
      time: "0:03 - 0:15",
      phase: "Problem Agitation & Solution",
      bad: "Listing dry product specs nobody cares about. Zero emotional connection with target buyer pain points.",
      good: "Shows the exact frustration your customer faces daily, validates their dilemma, and demonstrates the solution.",
      stat: "85% Video Retention",
    },
    {
      time: "0:15 - 0:30",
      phase: "Direct Offer & Social Proof",
      bad: "Vague closing message like 'Visit our website' with no urgency or compelling reason to take action.",
      good: "Clear risk-free guarantee, verified client outcomes, and a specific reason to claim the offer right now.",
      stat: "3.8x Click-Through",
    },
    {
      time: "Destination",
      phase: "Dedicated CRO Landing Page",
      bad: "Dumps paid traffic onto a crowded, slow homepage with 20 navigation links where visitors bounce immediately.",
      good: "Sub-second, dedicated landing page with direct match headline, zero distraction, and frictionless 1-click booking.",
      stat: "8.4% Conversion Rate",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#080f1e] text-white relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-full px-4 py-1.5 text-xs font-bold text-blue-300 uppercase tracking-widest mb-4 backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Creative Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
            Anatomy of a High-Performing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Ad Campaign
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto">
            Why some ad campaigns bleed ad budget while others generate consistent customer growth. Select each stage to see the breakdown.
          </p>
        </div>

        {/* Step Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {steps.map((st, idx) => (
            <button
              key={st.phase}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-[#0c1a32] border-cyan-400/50 shadow-xl shadow-blue-600/10"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-white/15 text-slate-400 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-black uppercase mb-1">
                <span className={activeStep === idx ? "text-cyan-300" : "text-slate-500"}>
                  Stage 0{idx + 1}
                </span>
                <span className="text-[10px] text-slate-400 font-bold">{st.time}</span>
              </div>
              <h4 className={`text-xs sm:text-sm font-bold truncate ${activeStep === idx ? "text-white" : "text-slate-300"}`}>
                {st.phase}
              </h4>
            </button>
          ))}
        </div>

        {/* Side-by-Side Comparison Box */}
        <div className="bg-[#0c162e] border border-white/[0.08] rounded-3xl p-6 sm:p-9 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/[0.06] pb-5 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Stage 0{activeStep + 1} • {steps[activeStep].time}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {steps[activeStep].phase}
              </h3>
            </div>

            <div className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0">
              <TrendingUp className="w-4 h-4" />
              <span>{steps[activeStep].stat}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Failing Way */}
            <div className="bg-rose-950/20 border border-rose-500/25 rounded-2xl p-6 relative">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-3">
                <XCircle className="w-4 h-4" />
                <span>Typical Agency Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {steps[activeStep].bad}
              </p>
            </div>

            {/* The ClickLab Engine Way */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 relative">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>ClickLab Performance Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed">
                {steps[activeStep].good}
              </p>
            </div>

          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="text-xs text-slate-300 font-medium">
              Want us to audit your active ad creative and landing page copy?
            </span>

            <button
              onClick={onOpenAudit}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free Creative Audit
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
