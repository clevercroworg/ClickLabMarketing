"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Lake Rotoiti Hot Pools", src: "/clients/Lake-Rotoiti-Hot-Pools.png" },
  { name: "Ektha", src: "/clients/ektha.png" },
  { name: "Gulf Cloud", src: "/clients/gulf-cloud.png" },
  { name: "New Atharva", src: "/clients/newatharva-1.png" },
  { name: "RLTS", src: "/clients/rlts.png" },
  { name: "Sky Meet", src: "/clients/skymeet.png" },
  { name: "Smart Build", src: "/clients/smart-build.png" },
  { name: "South East", src: "/clients/southeast.png" },
];

export function WorldwideClients() {
  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">
            Our Worldwide Clients
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative flex overflow-hidden group">
          
          {/* Edge fades for smooth scroll effect */}
          <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee Animation - using pure CSS animation keyframes */}
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-16 min-w-max">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={index} 
                className="flex-none px-6 flex justify-center items-center hover:scale-110 transition-transform duration-300"
                title={client.name}
              >
                <Image 
                  src={client.src} 
                  alt={client.name}
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-20 md:h-24 w-auto object-contain transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
