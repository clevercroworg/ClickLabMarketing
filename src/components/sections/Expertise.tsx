"use client";

import { motion } from "framer-motion";
import { Server, ShoppingBag, Stethoscope, Building2, Landmark, Briefcase } from "lucide-react";

// Using deep rich colors to differentiate the bento layout instead of standard white cards
const industries = [
  {
    title: "SaaS & Tech",
    description: "Driving product-led growth and reducing churn for high-LTV software companies.",
    icon: Server,
    color: "from-blue-600 to-cyan-500",
    bgClass: "bg-[#0b1120]", 
    iconBg: "bg-blue-500/10 text-blue-400"
  },
  {
    title: "E-Commerce",
    description: "Scaling DTC brands through ruthless media buying and conversion optimization.",
    icon: ShoppingBag,
    color: "from-pink-500 to-rose-400",
    bgClass: "bg-[#181116]",
    iconBg: "bg-pink-500/10 text-pink-400"
  },
  {
    title: "Healthcare",
    description: "Ethical, compliant patient acquisition funnels for clinics and modern health tech.",
    icon: Stethoscope,
    color: "from-emerald-500 to-teal-400",
    bgClass: "bg-[#0c1813]",
    iconBg: "bg-teal-500/10 text-teal-400"
  },
  {
    title: "Real Estate",
    description: "High-intent lead generation for brokerages and commercial property developers.",
    icon: Building2,
    color: "from-orange-500 to-amber-400",
    bgClass: "bg-[#1f130a]",
    iconBg: "bg-orange-500/10 text-orange-400"
  },
  {
    title: "FinTech",
    description: "Acquiring users and building trust for disruptors in the financial sector.",
    icon: Landmark,
    color: "from-indigo-500 to-violet-400",
    bgClass: "bg-[#100d1c]",
    iconBg: "bg-indigo-500/10 text-indigo-400"
  },
  {
    title: "B2B Professional",
    description: "Authority building and ABM strategies for elite B2B service providers.",
    icon: Briefcase,
    color: "from-slate-600 to-slate-400",
    bgClass: "bg-[#13151a]",
    iconBg: "bg-slate-500/10 text-slate-300"
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Deploying specialized architectures tailored specifically to the nuances of your sector.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Design Upgrade */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group overflow-hidden rounded-[2rem] p-8 ${ind.bgClass} relative border border-gray-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Subtle Gradient Glow inside Box */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${ind.color} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${ind.iconBg} flex items-center justify-center mb-8`}>
                  <ind.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{ind.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-grow">{ind.description}</p>
                
                {/* Visual Indicator Line (keeping the bottom-left color line from original requirement but modernizing it) */}
                <div className="w-12 h-1.5 rounded-full overflow-hidden mt-auto">
                   <div className={`w-full h-full bg-gradient-to-r ${ind.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
