"use client";

import Image from "next/image";
import { Phone, Mail, Globe, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/clicklab-logo-white.svg"
                alt="ClickLab Marketing"
                width={180}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6 font-normal">
              High-growth digital marketing agency specializing in Google Ads, Meta advertising, technical SEO, and conversion rate optimization for scaling enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl inline-flex">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Full Data Ownership &amp; Transparent Reporting</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
              Growth Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <a href="#pillars" className="hover:text-cyan-400 transition-colors">
                  Growth Pillars
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-cyan-400 transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">
                  Verified Client Reviews
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-cyan-400 transition-colors">
                  Advertising Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="tel:2164088962"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors font-bold text-base text-blue-400"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-900/60 text-cyan-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(216) 408-8962</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@clicklabmarketing.com"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-slate-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>contact@clicklabmarketing.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://clicklabmarketing.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-slate-400 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Boca Raton, Florida-33433</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ClickLab Marketing. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
