import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClickLab Marketing',
  description: 'How ClickLab Marketing collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero for Policy */}
      <section className="relative pt-[160px] pb-16 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[100%] rounded-full bg-blue-600/15 blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('/bg-grid-white.svg')] opacity-[0.02]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 inline-block">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold tracking-widest text-cyan-100 uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400 text-lg">Last updated: April 14, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              At <strong>ClickLab Marketing</strong> ("we", "our", or "us"), your privacy is our priority. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website (clicklabmarketing.com) or engage with our digital marketing and growth services. By using our website or services, you consent to the data practices described in this statement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">We collect both Personal Information and Non-Personal Information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Includes your name, email address, phone number, company name, and any specific details provided when you fill out our contact or consultation forms.</li>
              <li><strong>Usage Data:</strong> Includes IP addresses, browser types, interaction with our pages, entry/exit pages, and timestamps. This data is collected automatically via cookies and tracking technologies to improve our user experience.</li>
              <li><strong>Client Data:</strong> If you are a client, we may temporarily access and store analytics data, ad account data, or CRM data required strictly for the execution of our contracted services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">The information we collect is utilized for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To provide, operate, and maintain our digital services and website.</li>
              <li>To respond to your inquiries, schedule consultations, and provide customer support.</li>
              <li>To analyze website usage trends and improve our marketing efforts and service offerings.</li>
              <li>To send you administrative updates, marketing communications, or promotional materials (you may opt-out at any time).</li>
              <li>To protect against fraudulent or unauthorized activity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Sharing and Disclosure</h2>
            <p className="mb-6 leading-relaxed">
              We do not sell, trade, or rent your Personal Information to third parties. We may share information with trusted third-party service providers (such as hosting providers, CRM software, or analytics tools like Google Analytics) who assist us in operating our website or conducting our business, provided those parties agree to keep this information confidential. We may also disclose information to comply with legal obligations or to protect our rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Third-Party Links</h2>
            <p className="mb-6 leading-relaxed">
              Our website may contain links to third-party sites or services (e.g., social media plugins). We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Security Options</h2>
            <p className="mb-6 leading-relaxed">
              We employ industry-standard and commercially reasonable security measures to protect the integrity and confidentiality of your Personal Information against unauthorized access, alteration, or disclosure. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:<br/>
              <strong>Email:</strong> <a href="mailto:contact@clicklabmarketing.com" className="text-blue-600 hover:underline">contact@clicklabmarketing.com</a><br/>
              <strong>Phone:</strong> 8088233259
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
