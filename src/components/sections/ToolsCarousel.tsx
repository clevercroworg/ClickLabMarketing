"use client";

import { motion } from "framer-motion";
import { Terminal, Database, LineChart, Globe, Zap, Megaphone, Inbox, Layout, LayoutTemplate, Smartphone, Search, Target } from "lucide-react";

// Tools array with realistic marketing SaaS tools
const toolsTop = [
  { name: "Google Analytics 4", icon: LineChart, color: "text-amber-500" },
  { name: "HubSpot", icon: Database, color: "text-orange-500" },
  { name: "Salesforce", icon: Cloud, color: "text-blue-400" }, // Replaced Cloud inside with SVG or generic. Wait, Cloud is missing, let's use other icons
  { name: "Semrush", icon: Search, color: "text-orange-600" },
  { name: "Klaviyo", icon: Inbox, color: "text-emerald-500" },
  { name: "Unbounce", icon: LayoutTemplate, color: "text-indigo-600" },
];

const toolsBottom = [
  { name: "LinkedIn Ads", icon: Target, color: "text-blue-600" },
  { name: "Google Tag Manager", icon: Terminal, color: "text-blue-500" },
  { name: "Meta Business", icon: Globe, color: "text-blue-700" },
  { name: "Shopify Plus", icon: Smartphone, color: "text-green-500" },
  { name: "ActiveCampaign", icon: Zap, color: "text-blue-400" },
  { name: "Hotjar", icon: Megaphone, color: "text-red-500" },
];

function Cloud(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
}

// I will just make it slightly more vibrant in the main export.
export function ToolsCarousel() {
  return (
    <section id="tools" className="py-16 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 z-10 mb-8 max-w-4xl text-center">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Infrastructure</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">The Tech We Master</h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          We don't rely on guesswork. We build, connect, and automate your revenue engine using the most powerful marketing infrastructure available in the ecosystem.
        </p>
      </div>

      <div className="relative flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1: Forward Marquee */}
        <div className="animate-marquee flex whitespace-nowrap items-center w-[200%]">
          {[...toolsTop, ...toolsTop, ...toolsTop].map((tool, idx) => (
            <div key={idx} className="flex-none px-3">
              <div className="h-14 lg:h-18 px-6 lg:px-9 bg-white rounded-full flex items-center gap-3 lg:gap-4 border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                 <tool.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${tool.color}`} strokeWidth={2.5} />
                 <span className="font-bold text-gray-800 tracking-tight text-base lg:text-lg">{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="animate-marquee-reverse flex whitespace-nowrap items-center w-[200%] mt-2 lg:mt-4">
          {[...toolsBottom, ...toolsBottom, ...toolsBottom].map((tool, idx) => (
             <div key={idx} className="flex-none px-3">
               <div className="h-14 lg:h-18 px-6 lg:px-9 bg-white rounded-full flex items-center gap-3 lg:gap-4 border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                 <tool.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${tool.color}`} strokeWidth={2.5} />
                 <span className="font-bold text-gray-800 tracking-tight text-base lg:text-lg">{tool.name}</span>
              </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
