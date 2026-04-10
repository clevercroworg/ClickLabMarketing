"use client";

import { motion } from "framer-motion";
import { Megaphone, Search, PenTool, LayoutTemplate, MousePointerClick, Mail, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Organic Dominance",
    description: "Enterprise-level SEO architecture and content strategies that build insurmountable moats in search results.",
    icon: Search,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Paid Acquisition",
    description: "Multi-channel media buying across Meta, Google, and TikTok. We engineer math that makes scaling inevitable.",
    icon: MousePointerClick,
    color: "from-cyan-600 to-cyan-400",
  },
  {
    title: "Brand & Social",
    description: "Data-informed creative that stops thumbs and builds rabid communities across the social graph.",
    icon: Megaphone,
    color: "from-indigo-600 to-indigo-400",
  },
  {
    title: "Premium Web UX",
    description: "High-fidelity, lightning-fast digital storefronts optimized relentlessly for conversion and aesthetics.",
    icon: LayoutTemplate,
    color: "from-sky-600 to-sky-400",
  },
  {
    title: "Content Engineering",
    description: "Authority-building content systems designed to educate, nurture, and ultimately convert sophisticated buyers.",
    icon: PenTool,
    color: "from-blue-700 to-indigo-500",
  },
  {
    title: "Lifecycle Marketing",
    description: "Advanced email and SMS infrastructures that turn one-time buyers into lifetime brand advocates.",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50 relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-6"
          >
            Capabilities engineered for <br/> <span className="text-blue-600">exponential growth.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-medium"
          >
            We don't offer generic templates. We build custom marketing infrastructures combining elite creative, rigorous data science, and lethal media buying.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group relative p-8 md:p-10 bg-white rounded-[2.5rem] shadow-[15px_15px_30px_#e3e7eb,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_rgba(37,99,235,0.12)] transition-all duration-500 border border-white/50 overflow-hidden cursor-pointer"
            >
              {/* Dynamic hover backdrop blob */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px] pointer-events-none`} />

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed font-semibold mb-8 text-base">
                {service.description}
              </p>

              <div className="flex items-center text-blue-600 font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Explore Capability <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
