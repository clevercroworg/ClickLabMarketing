"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
  onOpenAudit: () => void;
}

const servicesMenu = [
  { name: "Google Ads", href: "/services/google-ads", description: "Search & display campaigns" },
  { name: "Meta Ads", href: "/services/meta-ads", description: "Precision targeting on Meta" },
  { name: "SEO & Content", href: "/services/seo", description: "Dominate search rankings" },
  { name: "Landing Page Design", href: "/services/landing-page-design", description: "High-converting CRO funnels" },
  { name: "Social Media Management", href: "/services/social-media-management", description: "Engaged community growth" },
  { name: "Website Development", href: "/services/website-development", description: "High-performance web apps" },
];

export function Navbar({ onOpenAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 transition-all duration-300">
        
        {/* Top Bar Strip - Collapses smoothly on scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white"
            >
              <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-semibold tracking-wide">
                <div className="flex items-center gap-4">
                  <span className="text-blue-100">Scale your revenue with ClickLab.</span>
                </div>
                <div className="flex items-center gap-6">
                  <a href="tel:2164088962" className="hidden sm:inline-flex items-center gap-1.5 hover:text-blue-200 transition-colors">
                    <Phone className="w-3 h-3 text-cyan-300" />
                    <span>(216) 408-8962</span>
                  </a>
                  <a href="mailto:contact@clicklabmarketing.com" className="hover:text-blue-200 transition-colors">
                    contact@clicklabmarketing.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-[#080f1e]/95 backdrop-blur-md shadow-xl py-3.5 border-b border-slate-800/80"
              : "bg-[#080f1e]/90 backdrop-blur-sm py-4 border-b border-white/[0.06]"
          }`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex-1 flex justify-start">
                <Link href="/" className="flex items-center gap-3 group">
                  <Image
                    src="/logos/clicklab-logo-white.svg"
                    alt="ClickLab Marketing"
                    width={180}
                    height={40}
                    priority
                    className="h-9 sm:h-10 w-auto"
                  />
                </Link>
              </div>

              {/* Centered Navigation Links */}
              <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
                <Link
                  href="/about"
                  className="text-xs xl:text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button className="text-xs xl:text-sm font-bold flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative cursor-pointer">
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-cyan-400" : ""}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-[#0c162e] rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden"
                      >
                        <div className="p-3 grid grid-cols-2 gap-2 bg-[#0c162e]">
                          {servicesMenu.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="group/item flex flex-col p-3 hover:bg-white/[0.05] rounded-xl transition-all"
                            >
                              <h4 className="text-xs sm:text-sm font-bold text-white group-hover/item:text-cyan-400 transition-colors mb-0.5">
                                {service.name}
                              </h4>
                              <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                                {service.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/portfolio"
                  className="text-xs xl:text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  href="/contact"
                  className="text-xs xl:text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-widest relative group"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>

              {/* Right CTA Button */}
              <div className="hidden lg:flex items-center justify-end gap-5 flex-1">
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 active:scale-98 transition-all cursor-pointer"
                >
                  <span>Get a Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors flex-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 w-full bg-[#080f1e] border-b border-slate-800 shadow-2xl z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-70px)]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-base font-bold text-slate-200 px-4 py-3 bg-white/[0.04] rounded-xl hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                About Us
              </Link>
              <Link
                href="/portfolio"
                className="text-base font-bold text-slate-200 px-4 py-3 bg-white/[0.04] rounded-xl hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-base font-bold text-slate-200 px-4 py-3 bg-white/[0.04] rounded-xl hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                Contact Us
              </Link>
              
              <div className="pt-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider shadow-lg cursor-pointer"
                >
                  <span>Get a Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
