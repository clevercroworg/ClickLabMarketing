"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function SubscribedSuccessfully() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const backgroundTexts = [
    { text: "Thank You", opacity: 0.06, style: "font-serif italic text-6xl md:text-8xl top-[8%] left-[5%] -rotate-12" },
    { text: "THANK YOU", opacity: 0.04, style: "font-sans font-black tracking-tighter text-7xl md:text-9xl top-[18%] right-[8%] rotate-6" },
    { text: "Thank You", opacity: 0.05, style: "font-mono font-bold text-4xl md:text-5xl bottom-[12%] left-[6%] rotate-12" },
    { text: "thank you", opacity: 0.07, style: "font-serif text-5xl md:text-7xl bottom-[22%] right-[4%] -rotate-6" },
    { text: "THANK YOU", opacity: 0.03, style: "font-sans font-light tracking-widest text-5xl md:text-6xl top-[42%] left-[10%] rotate-45" },
    { text: "Thank You", opacity: 0.05, style: "font-sans font-bold text-6xl bottom-[42%] right-[12%] -rotate-12" },
    { text: "thanks", opacity: 0.06, style: "font-serif italic font-medium text-8xl bottom-[6%] right-[32%] rotate-3" },
    { text: "Thank You.", opacity: 0.04, style: "font-mono text-3xl top-[6%] left-[38%] rotate-6" },
    { text: "THANK YOU", opacity: 0.03, style: "font-sans font-extrabold text-5xl top-[52%] left-[42%] -rotate-3" },
    { text: "Thank You", opacity: 0.04, style: "font-sans font-normal text-4xl top-[70%] left-[25%] rotate-12" },
    { text: "thank you", opacity: 0.05, style: "font-serif italic text-5xl top-[30%] left-[28%] -rotate-12" },
    { text: "THANK YOU", opacity: 0.03, style: "font-mono text-4xl bottom-[35%] right-[28%] rotate-45" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans select-none">
      
      {/* Background Typography Art */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
        {backgroundTexts.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute text-slate-900/10 ${item.style}`}
            style={{ opacity: item.opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: item.opacity }}
            transition={{ duration: 1.2, delay: index * 0.05 }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Main Thank You Box (with clean, minimal design) */}
      <motion.div 
        className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.05)] p-10 sm:p-12 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle top indicator bar */}
        <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mb-8"></div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
          Thank You!
        </h1>
        <p className="text-slate-400 text-sm font-medium">
          Your request was processed successfully.
        </p>
      </motion.div>

    </div>
  );
}
