import { Metadata } from 'next';
import { ArrowRight, Layout, MousePointer2, Target, Zap, Blocks, MonitorSmartphone } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'High-Converting Landing Page Design | ClickLab Marketing',
  description: 'Maximize your ROI with data-driven, conversion-optimized landing pages tailored for your paid ad campaigns.',
};

export default function LandingPageDesign() {
  return (
    <div className="min-h-screen">
      {/* Premium Service Hero Section */}
      <section className="relative flex flex-col justify-center pt-[180px] pb-[80px] md:pt-[220px] md:pb-[120px] overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {/* Deep Tech Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Ambient Lighting */}
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/40 via-cyan-400/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-indigo-500/40 via-purple-500/10 to-transparent blur-3xl"></div>

          {/* High-Fidelity 3D Grid */}
          <div className="absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent)]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
          
          {/* Subtle Data Scanlines */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 2px, #fff 2px, #fff 4px)' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Landing Page <span className="text-blue-400">Design</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-2 font-medium max-w-[90vw] md:max-w-4xl whitespace-nowrap overflow-hidden text-ellipsis">
              Stop wasting ad spend. We engineer landing pages obsessed with one thing: conversion.
            </p>
          </div>
        </div>
      </section>

      <WorldwideClients />

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Built to Convert</h2>
            <p className="text-gray-600 text-lg">A beautiful page is worthless if it doesn't generate revenue. We blend premium aesthetics with brutalist conversion psychology.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Response Copy</h3>
              <p className="text-gray-600 leading-relaxed">We write razor-sharp, compelling copy that addresses your customer's pain points directly and guides them effortlessly toward the CTA.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Load Times</h3>
              <p className="text-gray-600 leading-relaxed">For every second your page takes to load, you lose 20% of your conversions. We build impossibly fast pages using modern tech stacks.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <MonitorSmartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-First Architecture</h3>
              <p className="text-gray-600 leading-relaxed">Over 70% of ad traffic is mobile. We don't just "adapt" desktop pages; we design separate, highly-optimized mobile experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why custom landing pages?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sending expensive ad traffic to your generic homepage is the fastest way to burn your marketing budget. Homepages distract users. Landing pages funnel them into a single, undeniable action.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Layout className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Message Match</h4>
                    <p className="text-gray-600 text-sm mt-1">We align your ad copy perfectly with the landing page headline, drastically improving the ad quality score and decreasing your CPC.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MousePointer2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Frictionless UX</h4>
                    <p className="text-gray-600 text-sm mt-1">We eliminate navigation bars, external links, and complex layouts to keep the user focused solely on conversion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Blocks className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">A/B Testing Ready</h4>
                    <p className="text-gray-600 text-sm mt-1">Built structurally sound so we can effortlessly test varying headlines, layouts, and button placements to find the ultimate winner.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl opacity-10 absolute -inset-4 transform rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b pb-4">Our CRO Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Offer Architecture</h4>
                      <p className="text-sm text-gray-600 mt-1">We deconstruct your core offer to make it irresistible and eliminate any perceived risk.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Wireframe & Copy</h4>
                      <p className="text-sm text-gray-600 mt-1">We build a high-fidelity blueprint mapping out the exact psychological structure of the page.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">UI/UX Design</h4>
                      <p className="text-sm text-gray-600 mt-1">Our designers apply your brand aesthetics to create a premium, trustworthy visual experience.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Development & Tracking</h4>
                      <p className="text-sm text-gray-600 mt-1">We code the page for speed and implement robust pixel tracking to monitor every interaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
