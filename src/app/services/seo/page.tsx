import { Metadata } from 'next';
import { ArrowRight, Search, FileText, Link as LinkIcon, ShieldCheck, Gauge, Blocks, Rocket } from 'lucide-react';
import { CTA } from '@/components/sections/CTA';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { WorldwideClients } from '@/components/sections/WorldwideClients';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'SEO & Organic Growth Services | ClickLab Marketing',
  description: 'Dominate search engine rankings with long-term organic growth strategies, technical SEO, and high-authority link building.',
};

export default function SEOPage() {
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

          {/* Abstract Floating Glass Geometries */}
          <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-gradient-to-br from-blue-400/10 to-transparent border border-white/20 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)] animate-[spin_40s_linear_infinite]" style={{ transform: 'rotate(-15deg) skew(-10deg) perspective(1000px)' }}></div>
          
          <div className="absolute bottom-[5%] right-[25%] w-[200px] h-[200px] bg-gradient-to-tr from-cyan-400/20 to-transparent border border-cyan-400/30 rounded-full backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-pulse" style={{ transform: 'translateZ(50px)' }}></div>
          
          <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-gradient-to-bl from-indigo-400/10 to-transparent border border-indigo-400/20 rounded-full backdrop-blur-lg shadow-[0_0_60px_rgba(99,102,241,0.2)] animate-[spin_50s_linear_infinite_reverse]"></div>

          {/* Dynamic Laser Slash */}
          <div className="absolute top-[-10%] right-[20%] w-[1200px] h-[100px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-2xl transform rotate-45 origin-top-right"></div>
          <div className="absolute top-[-10%] right-[20%] w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-sm transform rotate-45 origin-top-right"></div>
          
          {/* Subtle Data Scanlines */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0, transparent 2px, #fff 2px, #fff 4px)' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              Search Engine <span className="text-cyan-400">Optimization</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-2 font-medium max-w-[90vw] md:max-w-4xl whitespace-nowrap overflow-hidden text-ellipsis">
              Build a sustainable moat around your business with long-term organic growth and technical SEO.
            </p>
          </div>
        </div>
      </section>

      <WorldwideClients />

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">A Holistic Approach to Search</h2>
            <p className="text-gray-600 text-lg">We don't use spammy tactics. We build true, unshakeable domain authority.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Foundation</h3>
              <p className="text-gray-600 leading-relaxed">We fix the foundation. From core web vitals and crawl errors to schema markup, we ensure Google can properly index and reward your website effortlessly.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Strategy</h3>
              <p className="text-gray-600 leading-relaxed">We identify high-volume, low-competition keywords and produce authoritative content that systematically builds interconnected topic clusters around your niche.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <LinkIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authority Building</h3>
              <p className="text-gray-600 leading-relaxed">We earn high-quality backlinks from reputable, high-DA domains in your industry via strict outreach, signaling to search engines that your website is a trusted authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for SEO?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SEO agencies are notorious for vague reporting and hidden methodologies. We operate with complete transparency. We use 100% white-hat strategies that future-proof your site against Google's constant algorithm updates.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">100% White-Hat Practices</h4>
                    <p className="text-gray-600 text-sm mt-1">We never use PBNs (Private Blog Networks) or spammy link software that puts your domain at risk of a manual penalty.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Developer-Level Technical Fixes</h4>
                    <p className="text-gray-600 text-sm mt-1">Because we are also a web development agency, we can directly implement complex site-speed and structural code fixes that other agencies can only put in a PDF report.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Blocks className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Conversion-Focused Traffic</h4>
                    <p className="text-gray-600 text-sm mt-1">Rankings don't pay the bills; revenue does. We target bottom-of-funnel commercial keywords before informational ones to ensure the traffic we generate actually converts.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl opacity-10 absolute -inset-4 transform rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b pb-4">Our Proven Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Deep Technical Audit</h4>
                      <p className="text-sm text-gray-600 mt-1">We run your site through enterprise tools to find every crawl error and indexation issue.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Keyword & Competitor Gap Analysis</h4>
                      <p className="text-sm text-gray-600 mt-1">We reverse-engineer your top competitors to steal their best-converting keywords.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">On-Page & Content Optimization</h4>
                      <p className="text-sm text-gray-600 mt-1">We rewrite meta tags, headings, and body copy to perfectly align with search intent.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Off-Page Authority Building</h4>
                      <p className="text-sm text-gray-600 mt-1">We launch targeted outreach campaigns to secure contextual backlinks every single month.</p>
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
