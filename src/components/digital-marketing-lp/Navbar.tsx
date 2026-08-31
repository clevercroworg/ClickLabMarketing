"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenAudit: () => void;
}

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar - Collapses smoothly on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-[11px] sm:text-xs font-bold"
          >
            <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 truncate">
                <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shrink-0">
                  Growth Partner
                </span>
                <span className="text-white/95 truncate">
                  Scale your revenue with high-ROAS Google &amp; Meta Ads.
                </span>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <a
                  href="tel:2164088962"
                  className="hover:text-cyan-200 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-cyan-300" />
                  <span className="hidden sm:inline">Direct Line:</span>
                  <strong className="text-white font-extrabold">(216) 408-8962</strong>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Sticky Header - Clean LP style */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ClickLab Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-36 sm:w-44 h-10 flex items-center">
                <Image
                  src="/logos/clicklab-logo.svg"
                  alt="ClickLab Marketing"
                  width={180}
                  height={42}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Middle Trust Badge */}
            <div className="hidden lg:flex items-center gap-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1 text-xs font-bold text-blue-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Performance Marketing Agency</span>
            </div>

            {/* Mobile Call Button */}
            <div className="flex sm:hidden items-center">
              <a
                href="tel:2164088962"
                className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-xs px-3.5 py-2 rounded-full shadow-md shadow-blue-600/25 active:scale-95 transition-all shrink-0"
              >
                <div className="bg-white/20 p-1 rounded-full shrink-0">
                  <Phone className="w-3 h-3 fill-current text-white" />
                </div>
                <span className="font-bold tracking-tight text-white">(216) 408-8962</span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:2164088962"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-extrabold text-sm transition-colors group px-3 py-1.5 rounded-xl hover:bg-slate-100"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="tracking-tight">(216) 408-8962</span>
              </a>

              <button
                onClick={onOpenAudit}
                className="btn-shimmer flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Claim Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
