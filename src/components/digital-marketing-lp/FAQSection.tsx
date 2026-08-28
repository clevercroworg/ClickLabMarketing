"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can ClickLab launch our campaigns and scale ROAS?",
      answer:
        "We can launch your fully configured campaigns within 5 to 7 business days after our kickoff call. This includes deep keyword & competitor research, ad creative production, server-side tracking implementation, and custom landing page deployment.",
    },
    {
      question: "What advertising channels and platforms do you specialize in?",
      answer:
        "We specialize in high-intent search (Google Ads & Microsoft Bing), paid social (Meta Ads / Facebook & Instagram, TikTok, LinkedIn Ads), and long-term organic revenue channels through technical SEO and conversion-rate optimization (CRO).",
    },
    {
      question: "Do you require long-term contracts or lock-in retainers?",
      answer:
        "No. We operate with zero long-term lock-in contracts. We believe in earning our clients' ongoing trust and business every single month by delivering transparent, measurable returns on ad spend.",
    },
    {
      question: "How do you handle tracking and attribution after recent privacy updates?",
      answer:
        "We bypass browser-based ad blockers and iOS tracking loss by implementing custom Server-Side Conversions API (CAPI) and Google Tag Manager server containers. This ensures 100% of your sales and leads are accurately attributed directly back to the winning ad creatives.",
    },
    {
      question: "What is included in the Free Growth & ROAS Audit?",
      answer:
        "Our audit is a comprehensive, 30-minute strategic deep-dive into your historical ad performance, wasted budget leaks, conversion tracking integrity, landing page friction points, and competitor positioning—ending with an action plan tailored to your goals.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 rounded-full px-3.5 py-1 text-xs font-bold text-blue-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            Common Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Clear details to help you understand our process and partnership terms.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-50 border-blue-300 text-blue-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Phone Assistance Banner */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">Have a specific campaign requirement?</h4>
            <p className="text-xs text-slate-600 font-normal">Speak directly with a senior performance marketing strategist today.</p>
          </div>
          <a
            href="tel:2164088962"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl shadow-md transition-all shrink-0 cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>(216) 408-8962</span>
          </a>
        </div>

      </div>
    </section>
  );
}
