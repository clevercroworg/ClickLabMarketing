import { Globe, MessageCircle, Share2, Video, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-300 font-black text-2xl tracking-tighter">
                    CL
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white">
                ClickLab<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-8 text-gray-400 font-medium">
              We are a premium digital growth partner. We build, scale, and optimize revenue engines for the world's most ambitious brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Core Focus</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> SEO Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Paid Acquisition</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Conversion UX</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Content Strategy</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Company</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">The Lab Process</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partner Program</a></li>
            </ul>
          </div>

          {/* Elaborate Contact Card */}
          <div className="lg:col-span-4 bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
            <h4 className="text-white font-bold text-xl mb-6">Let's talk scale.</h4>
            <ul className="space-y-6 text-base font-medium">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Direct Mail</span>
                  <a href="mailto:hello@clicklabmarketing.com" className="text-white hover:text-cyan-400 transition-colors text-lg font-semibold">hello@clicklabmarketing.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Global HQ</span>
                  <span className="text-white text-lg font-semibold block">123 Innovation Drive, NY 10001</span>
                </div>
              </li>
            </ul>
            <Button className="w-full mt-8 bg-white text-gray-900 hover:bg-gray-100 font-bold h-14 rounded-xl">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-medium">
          <p className="text-base">&copy; {new Date().getFullYear()} Click Lab Marketing. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
