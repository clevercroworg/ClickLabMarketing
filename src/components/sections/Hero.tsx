"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

// Data Flux Lines Component for "Magic" Background
const DataFluxLines = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M-100 200 C 200 100, 400 300, 800 100 S 1200 400, 1600 200"
      stroke="url(#grad1)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M-100 400 C 300 300, 600 500, 900 350 S 1300 200, 1800 450"
      stroke="url(#grad2)"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
    />
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
  </svg>
);

// Floating Glass Shard Component
const GlassShard = ({ delay = 0, x = "0%", y = "0%", rotate = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 1, 0], 
      scale: [0.8, 1, 1.1, 0.9],
      y: [0, -40, 0],
      rotate: [rotate, rotate + 10, rotate - 10, rotate]
    }}
    transition={{ 
      duration: 10 + delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
    className="absolute pointer-events-none z-10"
    style={{ left: x, top: y }}
  >
    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl rotate-12 shadow-2xl skew-x-12" />
  </motion.div>
);

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for content
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const bgY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50 pt-32 pb-16 lg:pt-40 lg:pb-32 px-4 md:px-8"
    >
      
      {/* 1. LAYER: MESH GRADIENT (THE MAGIC BACKGROUND) */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <motion.div 
          animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{ x: [0, -150, 100, 0], y: [0, 120, -80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[90%] h-[90%] bg-cyan-400/20 rounded-full blur-[180px]"
        />
        <motion.div 
          animate={{ x: [0, 80, -120, 0], y: [0, 60, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[50%] h-[50%] bg-indigo-500/15 rounded-full blur-[140px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-white/60 to-transparent blur-[120px] opacity-60" />
      </motion.div>

      {/* 2. LAYER: DATA FLUX LINES */}
      <DataFluxLines />

      {/* 3. LAYER: GRAIN & TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 4. LAYER: GLASS SHARDS */}
      <GlassShard x="10%" y="15%" delay={0} rotate={15} />
      <GlassShard x="85%" y="65%" delay={2} rotate={-20} />
      <GlassShard x="75%" y="10%" delay={4} rotate={45} />
      <GlassShard x="5%" y="75%" delay={1} rotate={-10} />

      {/* 5. LAYER: CONTENT */}
      <div className="container mx-auto max-w-6xl relative z-20 flex flex-col items-center text-center">
        
        <motion.div
           style={{ y: textY }}
           className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/80 text-blue-700 font-bold text-xs md:text-sm tracking-widest uppercase mb-12 border border-blue-100 shadow-[0_10px_40px_rgba(37,99,235,0.1)] backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" /> Growth Marketing Agency
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-10"
          >
            Scale Your Revenue <br className="hidden md:block" />
            With <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">Precision.</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-2 bg-blue-600/20 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-600 font-medium leading-[1.4] mb-16 max-w-5xl mx-auto px-4 lg:px-12"
          >
            We design and execute data-driven marketing infrastructures <br className="hidden lg:block" />
            that turn clicks into measurable enterprise growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full max-w-md md:max-w-none"
          >
            <Button size="lg" variant="default" className="relative group w-full sm:w-auto h-20 px-14 text-2xl rounded-[2rem] shadow-2xl shadow-blue-600/30 overflow-hidden active:scale-95 transition-transform">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 z-0"
              />
              <span className="relative z-10">Book Strategy Session</span>
              <ArrowRight className="ml-3 w-7 h-7 relative z-10" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-20 px-14 text-2xl rounded-[2rem] border-2 border-slate-200 bg-white/50 backdrop-blur-xl hover:bg-white active:scale-95 transition-transform">
              View Case Studies
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex items-center justify-center gap-6 text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.3em]"
          >
            <span>Data-Driven Strategy</span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span>Unmatched ROI Focus</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-30" />
    </section>
  );
}
