"use client";

import { motion } from "framer-motion";
import { Server, ShoppingBag, Stethoscope, Building2, Landmark, Briefcase, GraduationCap, Utensils } from "lucide-react";

const industries = [
  { title: "SaaS & Tech", icon: Server, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "E-Commerce", icon: ShoppingBag, color: "text-pink-500", bg: "bg-pink-50" },
  { title: "Healthcare", icon: Stethoscope, color: "text-emerald-500", bg: "bg-emerald-50" },
  { title: "Real Estate", icon: Building2, color: "text-orange-500", bg: "bg-orange-50" },
  { title: "FinTech", icon: Landmark, color: "text-indigo-500", bg: "bg-indigo-50" },
  { title: "B2B Professional", icon: Briefcase, color: "text-slate-500", bg: "bg-slate-100" },
  { title: "Education", icon: GraduationCap, color: "text-cyan-500", bg: "bg-cyan-50" },
  { title: "Food & Hospitality", icon: Utensils, color: "text-amber-500", bg: "bg-amber-50" },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3"
          >
            Industries We Work With
          </motion.h2>
          <p className="text-lg text-gray-500 font-medium">Specialized strategies for every sector</p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.06 } }
          }}
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl ${ind.bg} border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center`}>
                <ind.icon className={`w-6 h-6 ${ind.color}`} strokeWidth={2} />
              </div>
              <span className="text-sm font-bold text-gray-800 text-center">{ind.title}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
