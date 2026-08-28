"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Calendar, CheckCircle2, ArrowRight, Loader2, ShieldCheck, TrendingUp } from "lucide-react";

interface GrowthAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl?: string;
}

export function GrowthAuditModal({
  isOpen,
  onClose,
  redirectUrl = "/digital-marketing/thank-you",
}: GrowthAuditModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "$5,000 - $15,000 / mo",
    primaryGoal: "Full-Funnel Retainer (Search, Social & CRO)",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Post lead data to /api/contact email endpoint powered by Resend
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "(General Digital Marketing Audit)",
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: `Digital Marketing Growth (${formData.budget})`,
          message: `Free Growth Audit Request from ${formData.name} at ${formData.company}. Monthly Ad Budget: ${formData.budget}. Target Focus: ${formData.primaryGoal}. Direct Phone: ${formData.phone}`,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        router.push(redirectUrl);
      }, 600);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-cyan-300 mb-2">
            <TrendingUp className="w-3 h-3 text-cyan-300" />
            <span>Free 30-Min Strategy Session</span>
          </div>
          
          <h3 className="text-2xl font-black text-white">Claim Your Free Growth Audit</h3>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Let&apos;s analyze your ad accounts, tracking health &amp; revenue scaling roadmap.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">Growth Audit Requested!</h4>
              <p className="text-sm text-slate-600 mb-6">
                Thank you, <strong>{formData.name || "there"}</strong>. Redirecting you to your confirmation page...
              </p>
              <button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm px-6 py-3 rounded-2xl w-full cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Company Name / Website *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Brands (acme.com)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@acme.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Monthly Ad Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  >
                    <option value="Under $5,000 / mo">Under $5,000 / mo</option>
                    <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                    <option value="$15,000 - $50,000 / mo">$15,000 - $50,000 / mo</option>
                    <option value="$50,000+ / mo">$50,000+ / mo (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Target Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium"
                  >
                    <option value="Full-Funnel Retainer (Search, Social & CRO)">Full-Funnel Retainer</option>
                    <option value="Google Ads & High-Intent Search Scale">Google Ads Scale</option>
                    <option value="Meta Ads & Creative Production">Meta Ads & Creative</option>
                    <option value="Technical SEO & Organic Domination">Technical SEO</option>
                    <option value="Landing Page Design & CRO">Landing Page CRO</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-black text-sm uppercase tracking-wider py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Audit Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Confirm Free Growth Audit</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center font-medium mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Confidential • 0 Obligation • No Spam</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
