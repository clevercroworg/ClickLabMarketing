"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function SubscribedSuccessfully() {
  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const checkmarkVariants: Variants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.2
      } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans select-none">
      <motion.div 
        className="max-w-md w-full bg-white rounded-3xl border border-slate-100/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] p-10 sm:p-12 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Checkmark */}
        <div className="flex justify-center mb-8">
          <motion.div 
            className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100/50"
            variants={checkmarkVariants}
          >
            <motion.svg
              className="w-10 h-10 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
                d="M20 6L9 17l-5-5"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Core Content */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">
          Thank You!
        </h1>
        <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm mx-auto">
          Your subscription is confirmed.
        </p>
      </motion.div>
    </div>
  );
}
