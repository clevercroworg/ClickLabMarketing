"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Inline SVG icons for background flow (lightweight, no external deps)
const BgIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`hero-icon-float absolute pointer-events-none ${className}`}>
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center shadow-lg">
      {children}
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#080f1e] pt-28 pb-12 lg:pt-40 lg:pb-32 px-4 md:px-8">
      
      {/* ========== FLOWING GRADIENT WAVES + ICONS BACKGROUND ========== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Base deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e] via-[#0c1a32] to-[#080f1e]" />

        {/* Flowing Gradient Wave 1 — Blue to Cyan sweep */}
        <div className="hero-wave absolute top-[20%] -left-[20%] w-[200%] h-[35%]" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.12), rgba(6,182,212,0.1), rgba(99,102,241,0.08), transparent)", borderRadius: "40%", filter: "blur(40px)" }} />

        {/* Flowing Gradient Wave 2 — Indigo to Cyan counter-sweep */}
        <div className="hero-wave-2 absolute top-[50%] -left-[20%] w-[200%] h-[30%]" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.1), rgba(6,182,212,0.12), rgba(37,99,235,0.08), transparent)", borderRadius: "45%", filter: "blur(50px)" }} />

        {/* Aurora Orbs for depth */}
        <div className="hero-orb-1 absolute -top-[20%] -left-[15%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="hero-orb-2 absolute -bottom-[20%] -right-[10%] w-[65%] h-[65%] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="hero-orb-3 absolute top-[15%] right-[5%] w-[40%] h-[40%] bg-indigo-600/12 rounded-full blur-[100px]" />

        {/* Ripple rings — visible on mobile */}
        <div className="hero-ripple hero-ripple-1 w-[350px] h-[350px] md:w-[800px] md:h-[800px] border-2 md:border border-blue-400/20 md:border-blue-400/10" />
        <div className="hero-ripple hero-ripple-2 w-[350px] h-[350px] md:w-[800px] md:h-[800px] border-2 md:border border-cyan-400/15 md:border-cyan-400/8" />
        <div className="hero-ripple hero-ripple-3 w-[350px] h-[350px] md:w-[800px] md:h-[800px] border-2 md:border border-indigo-400/15 md:border-indigo-400/8" />
        <div className="hero-ripple hero-ripple-4 w-[350px] h-[350px] md:w-[800px] md:h-[800px] border md:border border-blue-300/10" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(rgba(148,197,255,0.8) 1px, transparent 1px)', backgroundSize: '44px 44px' }} 
        />

        {/* ===== Floating App Icons embedded in the flow ===== */}
        {/* LinkedIn */}
        <BgIcon className="hidden md:flex left-[8%] top-[18%]" >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#0a66c2]/60"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </BgIcon>

        {/* Instagram */}
        <BgIcon className="hidden md:flex right-[10%] top-[22%]" >
          <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-[#E1306C]/50 fill-none" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </BgIcon>

        {/* Facebook */}
        <BgIcon className="hidden md:flex left-[15%] bottom-[25%]" >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1877F2]/50"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </BgIcon>

        {/* Google Analytics */}
        <BgIcon className="hidden md:flex right-[12%] bottom-[20%]" >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#F9AB00]/50"><path d="M12 22h10V2H2v20h10zm-8-2V4h16v16H4zm6-12h-2v10h2V8zm4 4h-2v6h2v-6zm4-7h-2v13h2V5z"/></svg>
        </BgIcon>

        {/* Google Ads */}
        <BgIcon className="left-[40%] top-[8%] hidden lg:flex" >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#4285F4]/50"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.43 3.72L12 11.62 4.57 7.9 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/></svg>
        </BgIcon>

        {/* Meta/WhatsApp */}
        <BgIcon className="right-[35%] bottom-[12%] hidden lg:flex" >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]/50"><path d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.5 1.134 6.742 3.058 9.375L1.06 31.316l6.155-1.975C9.764 31.07 12.76 32 16.004 32 24.83 32 32 24.826 32 16S24.83 0 16.004 0z"/></svg>
        </BgIcon>

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="container mx-auto max-w-5xl relative z-20 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.06] text-blue-300 font-bold text-xs md:text-sm tracking-widest uppercase mb-10 border border-white/[0.1] shadow-[0_8px_32px_rgba(37,99,235,0.12)] backdrop-blur-lg">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Growth Marketing Agency
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.08] mb-8"
        >
          Your Growth Partner <br className="hidden md:block" />
          For{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Digital Success
            </span>
            <motion.span 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-blue-500/40 to-cyan-400/40 rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed mb-8 sm:mb-14 max-w-3xl mx-auto px-2"
        >
          We design and execute data-driven marketing infrastructures{" "}
          <br className="hidden lg:block" />
          that turn clicks into measurable enterprise growth.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-5 justify-center w-full sm:w-auto"
        >
          <Button size="lg" variant="default" className="btn-shimmer w-full sm:w-auto h-14 px-10 text-lg rounded-2xl shadow-xl shadow-blue-600/30 active:scale-[0.97] transition-transform">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl border-2 border-white/15 bg-white/[0.05] text-white backdrop-blur-lg hover:border-transparent active:scale-[0.97] transition-all duration-200">
            View Case Studies
          </Button>
        </motion.div>
        
        {/* Trust Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 sm:mt-14 flex items-center justify-center gap-5 text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.25em]"
        >
          <span>Data-Driven Strategy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
          <span>Unmatched ROI Focus</span>
        </motion.div>
      </div>
    </section>
  );
}
