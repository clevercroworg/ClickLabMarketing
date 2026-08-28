"use client";

import { TrendingUp, ArrowUpRight, Building2, ArrowRight } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const cases = [
    {
      brand: "LuxeWear Direct",
      category: "E-Commerce & DTC Apparel",
      result: "+310% Revenue",
      quote: "ClickLab restructured our Meta creative testing and implemented first-party CAPI attribution. We scaled profitably from $40k to $280k monthly spend.",
      stats: [
        { label: "ROAS", value: "4.6x" },
        { label: "Revenue Lift", value: "+310%" },
        { label: "CPA Reduction", value: "-35%" },
      ],
    },
    {
      brand: "CloudScale Tech",
      category: "B2B SaaS & Enterprise Tech",
      result: "240+ Demos",
      quote: "Before ClickLab, our search campaigns were burning budget on broad keywords. They built high-intent STAGs and comparison funnels that doubled qualified demos.",
      stats: [
        { label: "Pipeline", value: "$3.8M" },
        { label: "Qualified Demos", value: "240+" },
        { label: "Target ROAS", value: "5.2x" },
      ],
    },
    {
      brand: "Apex Pro Services",
      category: "Commercial & Local Services",
      result: "1,200+ Bookings",
      quote: "The combination of high-intent Google search and streamlined mobile landing pages established us as the #1 provider in our market with 45% lower lead costs.",
      stats: [
        { label: "Cost / Lead", value: "-45%" },
        { label: "Total Bookings", value: "1,200+" },
        { label: "Market Rank", value: "#1 Spot" },
      ],
    },
  ];

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-3.5 py-1 text-xs font-bold text-blue-700 mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Client Results &amp; Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
            Real performance benchmarks achieved across search, paid social, and conversion funnels.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Clean Stacked Layout */}
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-500 truncate">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1 shrink-0">
                      <ArrowUpRight className="w-3 h-3" />
                      <span>{item.result}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{item.brand}</h3>
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* 3 Clean Stat Pills */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center mb-6">
                  {item.stats.map((st) => (
                    <div key={st.label} className="min-w-0 px-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block truncate">
                        {st.label}
                      </span>
                      <span className="text-sm sm:text-base font-black text-blue-600 block truncate mt-0.5">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Button */}
              <button
                onClick={onOpenAudit}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-sm transition-all cursor-pointer group"
              >
                <span>Request Custom Growth Plan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
