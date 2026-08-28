"use client";

import { Star, Quote, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Marcus Aurelius",
      title: "Founder & CEO, ScaleUp Direct",
      rating: 5,
      text: "ClickLab fundamentally shifted our company revenue trajectory. Within 90 days of launching our Meta and Google Search campaigns, our blended ROAS surged to 4.8x and our cost-per-acquisition dropped by 46%. Truly world-class growth execution.",
      highlight: "4.8x Blended ROAS",
    },
    {
      name: "Sarah Jenkins",
      title: "VP of Marketing, TechFlow Dynamics",
      rating: 5,
      text: "Before ClickLab, we struggled with agencies sending PDF reports full of vanity impressions. ClickLab built high-converting landing pages, implemented server-side CAPI tracking, and doubled our qualified inbound pipeline in record time.",
      highlight: "2x Qualified Inbound",
    },
    {
      name: "David Chen",
      title: "Growth Director, NovaCorp Solutions",
      rating: 5,
      text: "Their creative velocity and ad testing are relentless. We scaled from $30k to $150k monthly ad spend with complete confidence because every single dollar was tracked directly to closed customer revenue.",
      highlight: "5x Profitable Spend Scale",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple & Clean Header - Subtext Removed */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-4 py-1.5 text-xs font-black text-blue-700 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            What Growth Leaders Say
          </h2>
        </div>

        {/* 3 White Review Cards Grid (Rehab LP Clean Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-200 pointer-events-none group-hover:text-blue-100 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs px-3 py-1 rounded-lg mb-4">
                  {rev.highlight}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                  {rev.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-black text-slate-900 truncate">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{rev.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
