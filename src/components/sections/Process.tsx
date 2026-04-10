"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Presentation, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Discovery & Analysis",
    description: "We audit your current digital footprint, analyze competitors, and map out your unique path to growth.",
  },
  {
    icon: Presentation,
    title: "Strategy Formulation",
    description: "Creating a bespoke, data-driven action plan aligning channels like SEO, PPC, and content to your KPIs.",
  },
  {
    icon: Rocket,
    title: "Flawless Execution",
    description: "Our specialists deploy high-end creative, robust tech, and precision targeting to launch your campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Scale",
    description: "Continuous A/B testing, data analysis, and refinement to maximize ROI and rapidly scale what works.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Background glow effects to improve readability and contrast */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-900/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              The Blueprint to Scale
            </h2>
            <p className="text-xl text-blue-100/70 font-medium leading-relaxed max-w-2xl mx-auto">
              Our systematic, four-step process eliminates guesswork and focuses purely on mathematically sound, measurable results.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Main glowing timeline line running horizontally through the middle of the icons */}
          <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-900/0 via-blue-500 to-cyan-500/0" />
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group flex flex-col items-center text-center px-4"
              >
                {/* Highly Visible Step Number Watermark */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 md:-translate-y-8 text-5xl md:text-8xl font-black text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-500 pointer-events-none -z-10">
                  0{index + 1}
                </div>

                {/* Glowing Icon Container intercepting the timeline */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0a0f1e] border-2 border-blue-500/40 flex items-center justify-center mb-6 md:mb-8 relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover:border-cyan-400 group-hover:bg-[#0b1429] transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 group-hover:text-white transition-colors drop-shadow-md" strokeWidth={2} />
                </div>
                
                {/* Text Content - Extremely readable against dark background */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-sm group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed group-hover:text-white transition-colors text-sm sm:text-base">
                  {step.description}
                </p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
