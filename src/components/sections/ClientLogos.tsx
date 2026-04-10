"use client";

import { motion } from "framer-motion";
import { Zap, Command, Box, Layout, Triangle, Hexagon, Component, Layers } from "lucide-react";

// Replacing broken SVGs with incredibly clean Lucide+Typography lockups that look like real software/tech brands.
// These are guaranteed to not break while maintaining high-fidelity authenticity and robust colors.
const authenticLogos = [
  { name: "Acme Corp", icon: Hexagon, color: "text-blue-500", weight: "font-black" },
  { name: "GlobalTech", icon: Layout, color: "text-cyan-500", weight: "font-bold" },
  { name: "Nexus", icon: Triangle, color: "text-indigo-500", weight: "font-black" },
  { name: "Stark Ind", icon: Zap, color: "text-amber-500", weight: "font-extrabold" },
  { name: "OmniCorp", icon: Component, color: "text-emerald-500", weight: "font-bold" },
  { name: "Soylent", icon: Layers, color: "text-rose-500", weight: "font-black" },
  { name: "Initech", icon: Box, color: "text-violet-500", weight: "font-bold" },
  { name: "Hooli", icon: Command, color: "text-pink-500", weight: "font-extrabold" }
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 tracking-[0.2em] uppercase mb-10">
          Our Clients
        </p>
        
        {/* Carousel Container */}
        <div className="relative flex overflow-hidden group">
          
          {/* Edge fades for smooth scroll effect */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Animation - using pure CSS animation keyframes */}
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-16 min-w-max">
            {[...authenticLogos, ...authenticLogos, ...authenticLogos].map((client, index) => (
              <div 
                key={index} 
                className="flex-none px-4 flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default"
                title={client.name}
              >
                {/* Brand Lockup */}
                <div className="flex items-center gap-3 grayscale-0">
                  <client.icon className={`w-8 h-8 ${client.color}`} strokeWidth={2.5} />
                  <span className={`text-xl tracking-tight text-gray-800 ${client.weight}`}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
