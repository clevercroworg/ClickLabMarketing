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
      <section className="relative pt-[160px] md:pt-[200px] pb-24 overflow-hidden bg-[#0f172a]">
        {/* Glowing Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[100%] rounded-full bg-indigo-600/15 blur-[120px]"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Logo Badge */}
            <div className="relative inline-flex items-center justify-center mb-8">
               <div className="absolute inset-0 bg-blue-400/30 blur-2xl rounded-full"></div>
               <div className="w-24 h-24 relative bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] flex items-center justify-center p-5 border border-white/60 backdrop-blur-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="/logos/seo.svg" alt="SEO Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
              SEO Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Build a sustainable moat around your business with long-term organic growth and technical SEO.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Get Your SEO Audit <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

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

      <WorldwideClients />
      <TestimonialsCarousel />
      <CTA />
    </div>
  );
}
