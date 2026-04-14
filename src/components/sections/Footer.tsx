import { ArrowRight, MapPin, Phone, Mail, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-gray-900" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-gray-800 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                  <MousePointer2 className="w-7 h-7 text-cyan-400 fill-cyan-400 transition-transform" />
                </div>
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white">
                ClickLab
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-8 text-gray-400 font-medium">
              We are a premium digital growth partner. We build, scale, and optimize revenue engines for the world's most ambitious brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/clicklabmarketing" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Services</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><Link href="/services/google-ads" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Google Ads</Link></li>
              <li><Link href="/services/meta-ads" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Meta Ads</Link></li>
              <li><Link href="/services/social-media-management" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Social Media</Link></li>
              <li><Link href="/services/website-development" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Web Development</Link></li>
              <li><Link href="/services/seo" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> SEO</Link></li>
              <li><Link href="/services/landing-page-design" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Landing Pages</Link></li>
            </ul>
          </div>

          {/* Elaborate Contact Card */}
          <div className="lg:col-span-4 bg-gray-800/50 p-6 sm:p-8 rounded-3xl border border-gray-700">
            <h4 className="text-white font-bold text-xl mb-6">Let's talk scale.</h4>
            <ul className="space-y-5 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-gray-500 text-[10px] sm:text-xs mb-0.5 uppercase tracking-wider">Email Us</span>
                  <a href="mailto:contact@clicklabmarketing.com" className="text-white hover:text-cyan-400 transition-colors text-[15px] sm:text-base lg:text-lg font-semibold block truncate">contact@clicklabmarketing.com</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] sm:text-xs mb-0.5 uppercase tracking-wider">Direct Call</span>
                  <a href="tel:8088233259" className="text-white hover:text-cyan-400 transition-colors text-[15px] sm:text-base lg:text-lg font-semibold">8088233259</a>
                </div>
              </li>
            </ul>
            <Link href="/schedule">
              <Button className="w-full mt-8 bg-white text-gray-900 hover:bg-gray-100 font-bold h-14 rounded-xl">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-medium">
          <p className="text-base">&copy; {new Date().getFullYear()} ClickLabMarketing.com. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
