"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MetricsBar } from "./MetricsBar";
import { WorldwideClients } from "./WorldwideClients";
import { GrowthPillars } from "./GrowthPillars";
import { PositionMatters } from "./PositionMatters";
import { ToolsCarousel } from "./ToolsCarousel";
import { ComparisonSection } from "./ComparisonSection";
import { CallAdmissions } from "./CallAdmissions";
import { ReviewsSection } from "./ReviewsSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
import { MobileStickyBar } from "./MobileStickyBar";
import { LeadFormModal } from "./LeadFormModal";

export function RehabLandingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-blue-600 selection:text-white font-sans">
      {/* Navigation Header */}
      <Navbar onOpenBooking={openBookingModal} />

      {/* Hero Section with Premium Dark Navy Theme */}
      <Hero onOpenBooking={openBookingModal} />

      {/* Verified Agency Metrics & Track Record Counter Bar */}
      <MetricsBar />

      {/* Worldwide Clients Marquee Carousel */}
      <WorldwideClients />

      {/* 3 Healthcare Marketing Growth Pillars */}
      <GrowthPillars onOpenBooking={openBookingModal} />

      {/* Position Matters Section */}
      <PositionMatters onOpenBooking={openBookingModal} />

      {/* Infrastructure: The Tech We Master Marquee Section */}
      <ToolsCarousel />

      {/* Before vs After Comparison Table */}
      <ComparisonSection />

      {/* Turn Calls into New Admissions Grid */}
      <CallAdmissions onOpenBooking={openBookingModal} />

      {/* Client Success Stories Reviews */}
      <ReviewsSection />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Main Footer */}
      <Footer />

      {/* Mobile Persistent Call Bar */}
      <MobileStickyBar onOpenBooking={openBookingModal} />

      {/* Lead Form Booking Modal */}
      <LeadFormModal isOpen={isBookingOpen} onClose={closeBookingModal} />
    </div>
  );
}
