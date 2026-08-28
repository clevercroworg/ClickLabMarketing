"use client";

import { TrendingUp, DollarSign, Target, Layers } from "lucide-react";

export function MetricsBar() {
  const stats = [
    {
      icon: DollarSign,
      value: "$25M+",
      label: "Client Revenue Generated",
      subtext: "Tracked across search & paid social",
    },
    {
      icon: TrendingUp,
      value: "4.2x",
      label: "Average Blended ROAS",
      subtext: "Return on advertising spend",
    },
    {
      icon: Target,
      value: "100k+",
      label: "Qualified Leads & Demos",
      subtext: "Delivered to sales pipelines",
    },
    {
      icon: Layers,
      value: "250+",
      label: "Campaigns Engineered",
      subtext: "Across B2B, DTC & high-ticket services",
    },
  ];

  return (
    <section className="py-10 bg-[#060b1c] text-white border-y border-white/[0.06] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-5 bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-cyan-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-cyan-300 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                  {stat.value}
                </h3>
                <span className="text-xs sm:text-sm font-bold text-slate-200 block mb-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">{stat.subtext}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
