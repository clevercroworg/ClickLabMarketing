"use client";

import { TrendingUp, ArrowUpRight, ArrowRight, Zap, Target, BarChart2 } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const visualResults = [
    {
      sector: "E-Commerce & DTC",
      strategy: "Meta Ads & Google Shopping",
      heroStat: "+310%",
      heroLabel: "Revenue Scaled",
      gradient: "from-cyan-500 to-blue-600",
      pillColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      metrics: [
        { label: "Blended ROAS", val: "4.6x" },
        { label: "CPA Reduction", val: "-35%" },
        { label: "Monthly Spend", val: "$280k+" },
      ],
      sparklinePoints: "M 0,40 Q 40,35 80,25 T 160,15 T 240,5",
    },
    {
      sector: "B2B SaaS & Tech",
      strategy: "Google Search STAGs & CRO",
      heroStat: "240+",
      heroLabel: "Qualified Demos",
      gradient: "from-blue-600 to-indigo-600",
      pillColor: "bg-blue-50 text-blue-700 border-blue-200",
      metrics: [
        { label: "Pipeline Generated", val: "$3.8M" },
        { label: "Target ROAS", val: "5.2x" },
        { label: "Conversion Lift", val: "+48%" },
      ],
      sparklinePoints: "M 0,38 Q 45,30 90,20 T 170,12 T 240,4",
    },
    {
      sector: "High-Ticket Services",
      strategy: "High-Intent PPC & Mobile Funnels",
      heroStat: "-45%",
      heroLabel: "Lower Acquisition Cost",
      gradient: "from-emerald-500 to-teal-600",
      pillColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      metrics: [
        { label: "Inbound Leads", val: "1,200+" },
        { label: "Search Rank", val: "#1 Spot" },
        { label: "Match Quality", val: "99.8%" },
      ],
      sparklinePoints: "M 0,42 Q 50,28 100,18 T 180,10 T 240,2",
    },
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Visual */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Measurable Campaign Results
          </h2>
        </div>

        {/* 3 Visual Performance Matrix Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {visualResults.map((item) => (
            <div
              key={item.sector}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Sector & Strategy Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    {item.sector}
                  </span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.pillColor}`}>
                    {item.strategy}
                  </span>
                </div>

                {/* Hero Stat & Label */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                      {item.heroStat}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-emerald-500 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 block mt-1">
                    {item.heroLabel}
                  </span>
                </div>

                {/* Visual Sparkline Trend Graphic */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-2">
                    <span>Performance Trajectory</span>
                    <span className="text-emerald-600 font-extrabold">Consistent Scale</span>
                  </div>
                  <svg viewBox="0 0 240 50" className="w-full h-10 overflow-visible">
                    <path
                      d={item.sparklinePoints}
                      fill="none"
                      stroke="currentColor"
                      className="text-blue-600"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="240" cy="5" r="4" className="fill-emerald-500" />
                  </svg>
                </div>

                {/* 3 Metric Pills Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 text-center">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-50 border border-slate-100 rounded-xl p-2.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-900 block mt-0.5">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenAudit}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer group"
                >
                  <span>Request Similar Growth Plan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
