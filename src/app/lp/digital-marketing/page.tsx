import type { Metadata } from "next";
import { DigitalMarketingLandingPage } from "@/components/digital-marketing-lp/DigitalMarketingLandingPage";

export const metadata: Metadata = {
  title: "Performance Digital Marketing & ROAS Scale | ClickLab Marketing",
  description:
    "Turn clicks into predictable, high-ROAS revenue with full-funnel Google Ads, Meta Ads, Technical SEO & Conversion Optimization.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LPDigitalMarketingPage() {
  return <DigitalMarketingLandingPage />;
}
