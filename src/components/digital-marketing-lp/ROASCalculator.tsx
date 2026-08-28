"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Users, ArrowRight, ShieldCheck, MousePointerClick } from "lucide-react";

interface ROASCalculatorProps {
  onOpenAudit: () => void;
}

const industries = [
  { id: "ecom", name: "E-Commerce & DTC Brands", cpaRange: "$22 - $35", cpc: 1.8, label: "Est. Monthly Orders" },
  { id: "saas", name: "B2B SaaS & Tech", cpaRange: "$75 - $110", cpc: 4.5, label: "Est. Qualified Demos" },
  { id: "services", name: "Professional & Commercial Services", cpaRange: "$35 - $60", cpc: 3.2, label: "Est. Inbound Inquiries" },
  { id: "healthcare", name: "Healthcare & Clinics", cpaRange: "$45 - $70", cpc: 3.8, label: "Est. Patient Consultations" },
  { id: "realestate", name: "Real Estate & High-Value Assets", cpaRange: "$55 - $85", cpc: 3.5, label: "Est. Verified Inquiries" },
];

export function ROASCalculator({ onOpenAudit }: ROASCalculatorProps) {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("ecom");

  const currentIndustry = industries.find((i) => i.id === selectedIndustry) || industries[0];

  const avgCpa = parseInt(currentIndustry.cpaRange.replace(/[^0-9]/g, "").slice(0, 2)) || 30;
  const estimatedConversions = Math.round(adSpend / avgCpa);
  const estimatedClicks = Math.round(adSpend / currentIndustry.cpc).toLocaleString("en-US");

  return (
    <section className="py-16 sm:py-24 bg-[#050814] text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-400/25 rounded-full px-3.5 py-1 text-xs font-bold text-cyan-300 mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Campaign Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
            Estimate Your Acquisition Potential
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal max-w-xl mx-auto">
            Model your estimated traffic, qualified conversions, and target efficiency benchmarks based on monthly ad budget.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="max-w-4xl mx-auto bg-[#090e24] border border-slate-800 rounded-2xl p-6 sm:p-9 shadow-2xl">
          
          {/* Controls: Industry & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                Industry / Business Model
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/90 text-white text-sm sm:text-base font-bold rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              >
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Current Spend Display */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  Target Monthly Ad Budget
                </label>
                <span className="text-lg sm:text-xl font-black text-cyan-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-700">
                  ${adSpend.toLocaleString("en-US")}
                </span>
              </div>
              <input
                type="range"
                min="2500"
                max="100000"
                step="2500"
                value={adSpend}
                onChange={(e) => setAdSpend(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500 mt-3"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-bold mt-2">
                <span>$2,500 / mo</span>
                <span>$50,000 / mo</span>
                <span>$100k+ / mo</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/90 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                {currentIndustry.label}
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white">{estimatedConversions}+</h4>
              <span className="text-[11px] text-cyan-400 font-semibold block mt-1">Projected Conversions</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/90 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Target CPA Range
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-emerald-400">{currentIndustry.cpaRange}</h4>
              <span className="text-[11px] text-emerald-300 font-semibold block mt-1">Efficiency Benchmark</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/90 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Est. High-Intent Clicks
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-indigo-300">{estimatedClicks}+</h4>
              <span className="text-[11px] text-slate-400 font-semibold block mt-1">Monthly Qualified Traffic</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2.5 justify-center sm:justify-start">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-400 font-medium">
                Estimates based on aggregated data across Google Ads &amp; Meta ad auctions.
              </p>
            </div>

            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all text-center active:scale-98 shrink-0 cursor-pointer whitespace-nowrap"
            >
              <span>Request Custom Growth Strategy</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
