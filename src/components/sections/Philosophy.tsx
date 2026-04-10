"use client";

import { motion } from "framer-motion";
import { Zap, LayoutDashboard, Shuffle } from "lucide-react";

const philosophy = [
  {
    title: "Data Over Intuition",
    description: "Gut feelings don't scale. We architect data collection frameworks that provide mathematically proven pathways to profitability.",
    icon: LayoutDashboard,
    border: "border-blue-500",
  },
  {
    title: "Relentless Agility",
    description: "The digital landscape shifts daily. We deploy agile feedback loops that adapt your acquisition strategy in real-time, outpacing competitors.",
    icon: Shuffle,
    border: "border-cyan-500",
  },
  {
    title: "Full Funnel Mastery",
    description: "Traffic means nothing without conversion. We optimize the entire journey from the first ad impression to lifetime brand loyalty.",
    icon: Zap,
    border: "border-indigo-500",
  },
];

export function Philosophy() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-lg border border-blue-100">
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
             <h2 className="text-3xl font-black text-gray-900">Our Agency Philosophy</h2>
             <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-blue-50/80 rounded-2xl p-8 border-t-2 ${item.border} border-blue-100 hover:bg-blue-50 transition-colors duration-300 flex flex-col`}
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-blue-200/50">
                  <item.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
