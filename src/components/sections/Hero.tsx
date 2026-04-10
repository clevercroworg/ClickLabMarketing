"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Custom raw SVG Icons replacing generic geometries for a realistic look
const SVGIcons = {
  LinkedIn: () => <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#0a66c2]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Insta: () => <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-[#E1306C]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2.5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2.5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5"/></svg>,
  Facebook: () => <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#1877F2]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  Analytics: () => <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#F9AB00]"><path d="M12 22h10V2H2v20h10zm-8-2V4h16v16H4zm6-12h-2v10h2V8zm4 4h-2v6h2v-6zm4-7h-2v13h2V5z"/></svg>
};

// Hanging creatively marketing apps logo bounding ONLY to right side wrapper.
// Adjusted coordinates specifically to be safe for diverse viewport sizes.
const floatingLogos = [
  { id: 1, component: SVGIcons.LinkedIn, border:"border-[#0a66c2]/30", x: "-8%", y: "10%", delay: 0 }, 
  { id: 2, component: SVGIcons.Insta, border:"border-[#E1306C]/30", x: "75%", y: "0%", delay: 1.5 }, 
  { id: 3, component: SVGIcons.Facebook, border:"border-[#1877F2]/30", x: "80%", y: "75%", delay: 0.8 }, 
  { id: 4, component: SVGIcons.Analytics, border:"border-[#F9AB00]/30", x: "0%", y: "85%", delay: 2.2 }, 
];

export function Hero() {
  return (
    // Fixed Top Padding so it's flush below the navbar, and added relative overflow hidden for aurora
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-8 lg:pt-32 lg:pb-24">
      
      {/* High-Intensity Vertical Aurora - REDESIGNED for maximum visibility and glass effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] md:h-[320px] lg:h-[400px] overflow-hidden pointer-events-none z-0">
        
        {/* Layered Background Glows for rich coloration */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full lg:w-[130%] h-[300px] bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-20px] left-1/4 w-[40%] h-[200px] bg-cyan-400/20 blur-[80px]" />
        <div className="absolute bottom-[-20px] right-1/4 w-[40%] h-[200px] bg-indigo-500/20 blur-[80px]" />
        
        {/* Structural Vertical Glass Bars - 30 items for density */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center px-1 gap-1 md:gap-2">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 md:w-6 lg:w-10 bg-gradient-to-t from-blue-700/80 via-blue-500/40 to-white/10 border-x border-white/40 backdrop-blur-xl rounded-t-3xl shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              initial={{ height: "10%" }}
              animate={{ 
                height: [
                  `${(i % 5) * 15 + 20}%`, 
                  `${(i % 3) * 25 + 35}%`, 
                  `${(i % 5) * 15 + 20}%`
                ],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ 
                duration: 3 + (i % 4), 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.05
              }}
            />
          ))}
        </div>

        {/* High-Intensity Glowing Highlight Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[80px] md:h-[120px] bg-gradient-to-t from-blue-600/40 to-transparent blur-md z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full overflow-visible">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-8 lg:mt-0">
          
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs md:text-sm tracking-wide uppercase mb-6 border border-blue-100 shadow-sm">
                <Sparkles className="w-4 h-4" /> Growth Marketing Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
                Scale Your Revenue <br className="hidden sm:block" />
                With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Precision.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We design and execute data-driven marketing infrastructures that turn clicks into measurable enterprise growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="default" className="w-full sm:w-auto text-base">
                  Book Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                  View Case Studies
                </Button>
              </div>
              
              <div className="mt-8 md:mt-10 hidden lg:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">
                <span>Data-Driven</span>
                <span className="hidden sm:block w-2 h-2 rounded-full bg-gray-300"></span>
                <span>ROI Focused</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Dashboard Visuals Wrapper - Full width for mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[350px] sm:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000 w-full"
          >
            {/* Hanging / Floating Logos - Glassmorphism, larger size, visible across all devices */}
            {floatingLogos.map((logo) => (
              <motion.div
                 key={logo.id}
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ 
                   opacity: 1, 
                   scale: 1,
                   y: [0, -15, 0],
                   rotate: [0, 5, -5, 0]
                 }}
                 transition={{ 
                   opacity: { duration: 1, delay: logo.delay },
                   scale: { duration: 1, delay: logo.delay },
                   y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: logo.delay },
                   rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: logo.delay }
                 }}
                 className="absolute z-10 pointer-events-none"
                 style={{ left: logo.x, top: logo.y }}
              >
                <div className={`w-16 h-16 sm:w-24 sm:h-24 bg-white/70 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 backdrop-blur-xl rotate-12 ${logo.border}`}>
                  <logo.component />
                </div>
              </motion.div>
            ))}

            <motion.div 
              className="relative w-full max-w-[85%] sm:max-w-md lg:max-w-lg transform-3d z-30 mx-auto"
              animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, -3, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-100 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <div>
                    <p className="text-gray-400 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1">Total Revenue</p>
                    <h3 className="text-xl sm:text-3xl font-black text-gray-900">$2,845,900</h3>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>
                
                <div className="h-24 sm:h-40 flex items-end gap-1.5 sm:gap-3 pb-2 border-b border-gray-100">
                  {[40, 65, 45, 80, 55, 90, 75, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm sm:rounded-t-lg opacity-90"
                    />
                  ))}
                </div>
              </div>

              {/* Conversion Box */}
              <motion.div 
                className="absolute right-0 sm:-right-8 -top-6 sm:-top-8 z-40 bg-white p-2 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 scale-75 sm:scale-100 origin-top-right"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <BarChart3 className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Conversion</p>
                    <p className="text-sm sm:text-xl font-black text-gray-900">+42.8%</p>
                  </div>
                </div>
              </motion.div>

              {/* ROAS Box */}
              <motion.div 
                className="absolute left-0 sm:-left-12 -bottom-4 sm:-bottom-12 z-40 bg-white p-2 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 scale-75 sm:scale-100 origin-bottom-left"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <LineChart className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[9px] sm:text-xs font-bold uppercase tracking-wider">ROAS</p>
                    <p className="text-sm sm:text-xl font-black text-gray-900">4.2x Avg</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Data Driven ROI block strictly for Mobile - shown at bottom of grid */}
          <motion.div 
            className="flex lg:hidden items-center justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider w-full mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>Data-Driven</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span>ROI Focused</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
