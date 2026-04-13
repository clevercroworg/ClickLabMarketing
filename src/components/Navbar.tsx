"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MousePointer2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const servicesMenu = [
  { name: "Google Ads", href: "/services/google-ads", description: "Search & display campaigns", icon: "/logos/google-ads.svg" },
  { name: "Meta Ads", href: "/services/meta-ads", description: "Precision targeting on Meta", icon: "/logos/meta.svg" },
  { name: "Social Media", href: "/services/social-media-management", description: "Engaged community building", icon: "/logos/social-media.svg" },
  { name: "Web Development", href: "/services/website-development", description: "High-performance websites", icon: "/logos/website.svg" },
  { name: "SEO", href: "/services/seo", description: "Dominate search rankings", icon: "/logos/seo.svg" },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // To keep track of route changes and close mobile menu
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menus on route change
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header 
        className="fixed w-full z-50 transition-all duration-300"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        style={{
           backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
           backdropFilter: isScrolled ? 'blur(10px)' : 'none',
           borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
           boxShadow: isScrolled ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
        }}
      >
        {/* Top Bar Strip - Collapses smoothly on scroll */}
        <motion.div 
           initial={{ height: "auto", opacity: 1 }}
           animate={{ 
             height: isScrolled ? 0 : "auto", 
             opacity: isScrolled ? 0 : 1,
             overflow: "hidden"
           }}
           transition={{ duration: 0.3 }}
           className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white"
        >
          <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-semibold tracking-wide">
            <div className="flex items-center gap-4">
               <span className="hidden sm:inline text-blue-100">Scale your revenue with ClickLab.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@clicklab.com" className="hover:text-blue-200 transition-colors">hello@clicklab.com</a>
            </div>
          </div>
        </motion.div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              
              {/* Left Logo */}
              <div className="flex-1 flex justify-start">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 p-[1px] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                      <MousePointer2 className="w-6 h-6 text-blue-400 fill-blue-400 transition-transform" />
                    </div>
                  </div>
                  <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                    ClickLab
                  </span>
                </Link>
              </div>

              {/* Centered Nav Links */}
              <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-8">

                <Link
                  href="/about"
                  className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
                >
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Services Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button className="text-sm font-bold flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative">
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
                      >
                        <div className="p-4 grid grid-cols-2 gap-2 bg-white relative z-20">
                          {servicesMenu.map((service) => (
                            <Link 
                              key={service.name} 
                              href={service.href}
                              className="group/item flex items-center p-3 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all duration-300"
                            >
                              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-2.5 mr-4 group-hover/item:shadow-md group-hover/item:scale-105 transition-all">
                                <img src={service.icon} alt={service.name} className="w-full h-full object-contain" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors mb-0.5">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-600">Need a custom solution?</span>
                          <Link href="/contact" className="text-sm font-bold text-blue-600 flex items-center hover:text-blue-700">
                            Book a Consultation <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/portfolio"
                  className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
                >
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Right Action */}
              <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
                <Link href="/contact">
                  <Button variant="premium" className="px-6">
                    Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors flex-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-xl z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/about"
                className="text-lg font-bold text-gray-900 px-4 py-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
              >
                About Us
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between text-lg font-bold text-gray-900 px-4 py-3 uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-gray-200/50"
                    >
                      <div className="flex flex-col p-2 gap-1 bg-white">
                        {servicesMenu.map((service) => (
                          <Link 
                            key={service.name}
                            href={service.href}
                            className="px-4 py-3 rounded-lg text-gray-700 font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors block"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                className="text-lg font-bold text-gray-900 px-4 py-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-lg font-bold text-gray-900 px-4 py-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
              >
                Contact Us
              </Link>
              
              <div className="pt-4 mt-2 border-t border-gray-100 px-4">
                <Link href="/contact" className="block w-full">
                   <Button variant="premium" className="w-full justify-center">
                     Get in Touch
                   </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
