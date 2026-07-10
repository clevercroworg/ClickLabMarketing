"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Check, 
  Calendar, 
  ArrowRight, 
  Inbox, 
  Video, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
  }, []);

  // Framer Motion Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  const checkmarkVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 10,
        delay: 0.2
      } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* Top Header / Branding Area */}
      <header className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logos/clicklab-logo.svg"
            alt="ClickLab Logo"
            width={130}
            height={30}
            priority
            className="opacity-75 group-hover:opacity-100 transition-opacity duration-200"
          />
        </Link>
        <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-1.5 bg-white py-1.5 px-3 rounded-full border border-slate-100 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Secure Checkout
        </span>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center py-10">
        <motion.div 
          className="max-w-2xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Success Card */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Card Hero Banner (Elegant Radial Gradient Backdrop) */}
            <div className="relative pt-12 pb-8 flex flex-col items-center justify-center overflow-hidden bg-radial from-indigo-50/30 to-white">
              
              {/* Checkmark Animation Container */}
              <motion.div 
                className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-md relative z-10 text-emerald-600"
                variants={checkmarkVariants}
              >
                <motion.svg
                  className="w-10 h-10 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                    d="M20 6L9 17l-5-5"
                  />
                </motion.svg>
              </motion.div>

              <motion.div className="text-center mt-6 px-6" variants={itemVariants}>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Subscription Successful!
                </h1>
                <p className="mt-2.5 text-base text-slate-500 font-medium max-w-md mx-auto">
                  Thank you for subscribing. Your payment has been processed and your account is now active.
                </p>
              </motion.div>
            </div>

            {/* Receipt / Details Section */}
            <motion.div 
              className="border-t border-slate-100 bg-slate-50/40 px-6 sm:px-10 py-6 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div>
                <span className="text-slate-400 block font-semibold text-xs tracking-wider uppercase">Transaction ID</span>
                <span className="text-slate-700 font-mono font-medium">{transactionId || "Generating..."}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-xs tracking-wider uppercase">Date & Time</span>
                <span className="text-slate-700 font-medium">{currentDate || "Loading..."}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-xs tracking-wider uppercase">Payment Method</span>
                <span className="text-slate-700 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Credit Card / Razorpay (Success)
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-xs tracking-wider uppercase">Subscription Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mt-0.5">
                  Active
                </span>
              </div>
            </motion.div>

            {/* Step-by-Step Next Steps Section */}
            <div className="px-6 sm:px-10 py-8 border-t border-slate-100">
              <motion.h2 
                className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-6"
                variants={itemVariants}
              >
                <Sparkles className="w-5 h-5 text-indigo-500" /> What Happens Next?
              </motion.h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <motion.div className="flex gap-4 items-start" variants={itemVariants}>
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-xs">
                    <Inbox className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Check Your Email</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      We've sent a welcome package and detailed receipt to your registered email address. Please check your inbox (and spam folder, just in case).
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div className="flex gap-4 items-start" variants={itemVariants}>
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-xs">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Book Your Onboarding Session</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      Schedule your 1-on-1 kick-off call with our strategy leads to align your goals and kickstart target campaign setups.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div className="flex gap-4 items-start" variants={itemVariants}>
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">Access Your Dashboard</h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      Log in to submit your digital assets, ad creatives, and outline target audiences for our engineering team.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <motion.div 
              className="bg-slate-50 px-6 sm:px-10 py-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between"
              variants={itemVariants}
            >
              <Link 
                href="/schedule" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group active:scale-[0.98]"
              >
                Schedule Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold py-3 px-6 rounded-xl shadow-xs transition-colors duration-200 active:scale-[0.98]"
              >
                Return to Homepage
              </Link>
            </motion.div>

          </div>

          {/* Secure SSL Tag / Support info below the card */}
          <motion.div 
            className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium px-4"
            variants={itemVariants}
          >
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> Account active since today
            </span>
            <span className="flex items-center gap-1 hover:text-slate-600 transition-colors cursor-pointer">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" /> Need help? <a href="mailto:contact@clicklabmarketing.com" className="underline font-semibold text-slate-400 hover:text-indigo-600">Contact Support</a>
            </span>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer Area */}
      <footer className="max-w-7xl mx-auto w-full text-center mt-8 text-xs text-slate-400 font-medium">
        <p>&copy; {new Date().getFullYear()} ClickLab. All rights reserved. Payments secure and encrypted.</p>
      </footer>
    </div>
  );
}
