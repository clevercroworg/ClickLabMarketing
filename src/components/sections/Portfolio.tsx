"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const portfolioItems = [
  { id: 1, title: "Harmony", image: "/portfolio/harmony.png" },
  { id: 2, title: "Bethlehem", image: "/portfolio/bethlehem.png" },
  { id: 3, title: "Karavali", image: "/portfolio/karavali.png" },
  { id: 4, title: "Smart Build", image: "/portfolio/smart-build1.png" },
  { id: 5, title: "Sky Head", image: "/portfolio/sky-head.png" },
  { id: 6, title: "Top Gear Nutrition", image: "/portfolio/top-gear-nutrition.png" },
  { id: 7, title: "British Dart", image: "/portfolio/british-dart.png" },
  { id: 8, title: "Lake Rotoiti Hot Pools", image: "/portfolio/screencapture-lakerotoitihotpools-co-nz-2022-09-28-10_22_18.png" },
  { id: 9, title: "Zrava", image: "/portfolio/zrava.png" },
  { id: 10, title: "Simply", image: "/portfolio/simply.png" },
  { id: 11, title: "Recreate", image: "/portfolio/recreate-scaled.jpg" },
  { id: 12, title: "Sugar", image: "/portfolio/sugar-scaled.jpg" },
];

export function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(9); // Initial 3x3 grid (9 items)
  
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, portfolioItems.length));
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="portfolio">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-blue-900 uppercase">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            Take a look at some of the high-performance revenue engines we've built and scaled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, visibleCount).map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image container focusing on hero section using object-top */}
              <div className="w-full h-72 md:h-80 overflow-hidden bg-gray-100 relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <h3 className="text-white text-2xl font-bold text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < portfolioItems.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore} 
              className="relative px-8 py-4 text-base font-bold rounded-xl border-2 border-blue-600 text-blue-600 overflow-hidden group transition-all shadow-sm"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Load More Projects
              </span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
