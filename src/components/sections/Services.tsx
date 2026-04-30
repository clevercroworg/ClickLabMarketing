"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Megaphone, Search, Target, Layout, MousePointer2, Share2, Mail, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Google Ads",
    description: "High-intent search campaigns and display strategies that capture ready-to-buy customers at the perfect moment.",
    logo: "/logos/google-ads.svg",
    color: "from-blue-600 to-blue-400",
    slug: "google-ads",
  },
  {
    title: "Meta Ads",
    description: "Leveraging precision targeting on Facebook and Instagram to scale your brand through visually stunning, high-converting creative.",
    logo: "/logos/meta.svg",
    color: "from-cyan-600 to-cyan-400",
    slug: "meta-ads",
  },
  {
    title: "Social Media Management",
    description: "End-to-end community building and content strategy that turns followers into loyal brand advocates.",
    logo: "/logos/social-media.svg",
    color: "from-indigo-600 to-indigo-400",
    slug: "social-media-management",
  },
  {
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built with cutting-edge technology and premium aesthetics.",
    logo: "/logos/website.svg",
    color: "from-sky-600 to-sky-400",
    slug: "website-development",
  },
  {
    title: "SEO",
    description: "Long-term organic growth strategies that dominate search rankings and build sustainable brand authority.",
    logo: "/logos/seo.svg",
    color: "from-blue-700 to-indigo-500",
    slug: "seo",
  },
  {
    title: "Landing Page Design",
    description: "Data-driven, highly optimized landing pages engineered to maximize conversion rates and lower customer acquisition costs.",
    logo: "/logos/landing-page.svg",
    color: "from-blue-500 to-cyan-500",
    slug: "landing-page-design",
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
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-medium"
          >
            Full-stack digital marketing solutions built for measurable growth and ROI.
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
            <Link href={`/services/${service.slug}`} key={index}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="group relative p-8 md:p-10 bg-white rounded-[2.5rem] shadow-[15px_15px_30px_#e3e7eb,-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_rgba(37,99,235,0.12)] transition-all duration-500 border border-white/50 overflow-hidden cursor-pointer h-full"
              >
                {/* Dynamic hover backdrop blob */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px] pointer-events-none`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-white shadow-lg shadow-gray-200/50 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-gray-100`}>
                  <Image src={service.logo} alt={service.title} width={40} height={40} className="w-10 h-10 object-contain drop-shadow-sm" />
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-semibold mb-8 text-base">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                  Explore Capability <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
