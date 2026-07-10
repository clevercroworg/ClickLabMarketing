"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function SubscribedSuccessfully() {
  const [transactionId, setTransactionId] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Generate a random-looking transaction ID on client mount to prevent SSR mismatch
    const randomId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
    setTransactionId(randomId);

    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
  }, []);

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 } 
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
        delay: 0.1
      } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
      <motion.div 
        className="max-w-md w-full bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 sm:p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Checkmark Wrapper */}
        <div className="flex justify-center mb-6">
          <motion.div 
            className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100"
            variants={checkmarkVariants}
          >
            <motion.svg
              className="w-8 h-8 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
                d="M20 6L9 17l-5-5"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Heading & Subtext */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Thank You!
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Your payment was successful and your subscription is now active. A confirmation email has been sent with your receipt details.
          </p>
        </motion.div>

        {/* Generic Neutral Receipt Box */}
        <motion.div 
          className="bg-slate-50 rounded-xl p-5 mb-8 text-xs sm:text-sm border border-slate-100/50 space-y-3"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-medium">Status</span>
            <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              Completed
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-medium">Date</span>
            <span className="text-slate-700 font-medium">{currentDate || "Loading..."}</span>
          </div>
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-medium">Receipt ID</span>
            <span className="text-slate-700 font-mono font-medium">{transactionId || "Generating..."}</span>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/" 
            className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-sm hover:shadow transition-colors duration-200 group active:scale-[0.99] text-sm"
          >
            Continue to Website
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Secure Transaction Tag */}
        <motion.div 
          className="mt-8 flex justify-center items-center gap-1.5 text-xs text-slate-400 font-medium"
          variants={itemVariants}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Secure transaction processed successfully</span>
        </motion.div>
      </motion.div>

      {/* Ultra-Minimal Footer */}
      <footer className="mt-8 text-xs text-slate-400 text-center">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  );
}
