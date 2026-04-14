import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | ClickLab Marketing',
  description: 'Terms and conditions for using ClickLab Marketing services and website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero for Legal */}
      <section className="relative pt-[160px] pb-16 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[20%] w-[60%] h-[100%] rounded-full bg-cyan-600/15 blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 inline-block">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-400 text-lg">Effective Date: April 14, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing and using the website (clicklabmarketing.com) and the digital marketing services provided by <strong>ClickLab Marketing</strong> ("Company," "we," "us," our"), you signify your agreement to comply with these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Services Provided</h2>
            <p className="mb-6 leading-relaxed">
              ClickLab Marketing provides digital marketing services, including but not limited to, Google Ads management, Meta Ads, SEO optimization, website development, and landing page design. The scope, deliverables, fees, and timelines for specific client projects are outlined in individually signed Master Service Agreements (MSAs) or Statements of Work (SOWs) which take precedence over these general terms for active clients.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Intellectual Property Rights</h2>
            <p className="mb-6 leading-relaxed">
              All website content, including text, design, graphics, layouts, and software, is the exclusive property of ClickLab Marketing or its content suppliers and protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without express written consent. Client deliverables become the intellectual property of the client only upon full payment for the respective services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. User Conduct</h2>
            <p className="mb-4 leading-relaxed">When utilizing our website or services, you agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the site in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to, interfere with, or disrupt any parts of the site, the server on which the site is stored, or any server, computer, or database connected to our agency operations.</li>
              <li>Impersonate or attempt to impersonate ClickLab Marketing, an employee, another user, or any other person or entity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Disclaimer of Guarantees</h2>
            <p className="mb-6 leading-relaxed">
              While ClickLab Marketing utilizes data-driven strategies and industry best practices to scale our clients' digital revenue, we do not and cannot guarantee specific numerical results (e.g., exact return on ad spend, exact search engine ranking positions, or exact revenue increases) due to the unpredictable nature of third-party platforms (like Google or Facebook) and market variables outside our direct control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed">
              In no event shall ClickLab Marketing, nor its directors, employees, partners, agents, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use our services; or (ii) any conduct or content of any third party on the services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Amendments to Terms</h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will indicate at the top of this page the date such terms were last modified. Your continued use of the website following any changes signifies your acceptance of the new Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Contact Information</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about these Terms, please contact us at:<br/>
              <strong>Email:</strong> <a href="mailto:contact@clicklabmarketing.com" className="text-blue-600 hover:underline">contact@clicklabmarketing.com</a><br/>
              <strong>Phone:</strong> 8088233259
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
