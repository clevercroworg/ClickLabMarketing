"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { WorldwideClients } from "./WorldwideClients";
import { GrowthPillars } from "./GrowthPillars";
import { ToolsCarousel } from "./ToolsCarousel";
import { CaseStudies } from "./CaseStudies";
import { ReviewsSection } from "./ReviewsSection";
import { GuaranteeBanner } from "./GuaranteeBanner";
import { FAQSection } from "./FAQSection";
import { CallCTABanner } from "./CallCTABanner";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";
import { GrowthAuditModal } from "./GrowthAuditModal";

export function DigitalMarketingLandingPage() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const openAuditModal = () => setIsAuditOpen(true);
  const closeAuditModal = () => setIsAuditOpen(false);

  return (
    <div className="min-h-screen bg-white relative selection:bg-blue-600 selection:text-white font-sans text-slate-900">
      {/* ClickLab Navigation Header */}
      <Navbar onOpenAudit={openAuditModal} />

      {/* Dark Atmospheric Hero (ClickLab Brand DNA with Growth Outcome Card) */}
      <Hero onOpenAudit={openAuditModal} />

      {/* Worldwide Clients Marquee Carousel (Clean light section matching main site) */}
      <WorldwideClients />

      {/* Core Growth Capabilities */}
      <GrowthPillars onOpenAudit={openAuditModal} />

      {/* Tech Stack We Master Marquee Section */}
      <ToolsCarousel />

      {/* Client Case Studies & Results */}
      <CaseStudies onOpenAudit={openAuditModal} />

      {/* Client Testimonials */}
      <ReviewsSection />

      {/* Ironclad Commitments */}
      <GuaranteeBanner onOpenAudit={openAuditModal} />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Signature ClickLab CTA Card Section */}
      <CallCTABanner onOpenAudit={openAuditModal} />

      {/* Standalone Footer */}
      <Footer />

      {/* Mobile Persistent Call & Audit Bar */}
      <MobileStickyBar onOpenAudit={openAuditModal} />

      {/* Growth Audit Modal */}
      <GrowthAuditModal isOpen={isAuditOpen} onClose={closeAuditModal} />
    </div>
  );
}
