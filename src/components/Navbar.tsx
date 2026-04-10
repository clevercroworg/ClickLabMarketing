"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Globe, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "#cta" },
  ];

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
                <a href="#" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 p-[1px] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                      <MousePointer2 className="w-6 h-6 text-blue-400 fill-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                    ClickLab<span className="text-blue-600">.</span>
                  </span>
                </a>
              </div>

              {/* Centered Nav Links */}
              <div className="hidden md:flex items-center justify-center gap-8 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Right Action */}
              <div className="hidden md:flex items-center justify-end gap-6 flex-1">
                <Button variant="premium" className="px-6">
                  Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors flex-none"
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
            className="fixed top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-xl z-40 md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-gray-900 px-4 py-3 bg-gray-50 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-colors uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 px-4">
                 <Button variant="premium" className="w-full justify-center">
                   Get in Touch
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
