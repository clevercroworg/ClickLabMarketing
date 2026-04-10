"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="py-12 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Creative Wrapper matching Image 1 but using strict brand colors */}
        <div className="bg-[#0b0f19] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl border border-gray-800">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left mb-16 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Boost your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">revenue</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We help businesses prosper throughout the marketing funnel to surge revenue, improve brand visibility and loyalty, and grow their customer base.
            </p>
            {/* Swapped orange to Official Blue brand color */}
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Get a free strategy session
            </button>
          </div>

          {/* Right Side: Creative Line Chart visual */}
          <div className="lg:w-1/2 relative h-64 w-full flex items-end justify-end pl-0 lg:pl-12 mt-12 lg:mt-0">
            
            {/* Highly visible Background glowing grid */}
            <div className="absolute inset-0 bg-blue-900/10 rounded-2xl border border-blue-500/20 shadow-inner backdrop-blur-sm overflow-hidden flex justify-between px-6 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
              ))}
            </div>

            {/* Glowing Smooth Path */}
            <div className="relative w-full h-full max-w-lg mx-auto lg:ml-auto p-4 z-10 block">
              <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" preserveAspectRatio="none">
                <defs>
                   <linearGradient id="lineBrandGradient" x1="0" y1="1" x2="1" y2="0">
                     <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
                     <stop offset="50%" stopColor="#3b82f6" /> {/* Blue 500 */}
                     <stop offset="100%" stopColor="#ffffff" />
                   </linearGradient>
                   <filter id="glowBrand" x="-20%" y="-20%" width="140%" height="140%">
                     <feGaussianBlur stdDeviation="8" result="blur" />
                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
                   </filter>
                </defs>
                
                {/* Glowing Smooth Path */}
                <motion.path 
                  d="M 10 130 C 60 130, 80 100, 150 90 C 220 80, 260 50, 320 40 C 350 35, 380 10, 390 10" 
                  fill="none" 
                  stroke="url(#lineBrandGradient)" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  filter="url(#glowBrand)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                {/* Nodes with pulsing glow in brand colors */}
                <circle cx="10" cy="130" r="4" fill="#06b6d4" filter="url(#glowBrand)" className="animate-pulse" />
                <circle cx="150" cy="90" r="5" fill="#0ea5e9" filter="url(#glowBrand)" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                <circle cx="320" cy="40" r="6" fill="#3b82f6" filter="url(#glowBrand)" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                <circle cx="390" cy="10" r="8" fill="#ffffff" filter="url(#glowBrand)" className="animate-pulse" style={{ animationDelay: "0.6s" }} />

                {/* Trailing Glow Particle following the path */}
                <motion.circle
                  r="6"
                  fill="white"
                  filter="url(#glowBrand)"
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  whileInView={{ offsetDistance: "100%", opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    offsetPath: "path('M 10 130 C 60 130, 80 100, 150 90 C 220 80, 260 50, 320 40 C 350 35, 380 10, 390 10')",
                  }}
                />
              </svg>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
