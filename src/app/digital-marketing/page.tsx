import type { Metadata } from "next";
import { DigitalMarketingLandingPage } from "@/components/digital-marketing-lp/DigitalMarketingLandingPage";

export const metadata: Metadata = {
  title: "Performance Digital Marketing Agency | ClickLab Marketing",
  description:
    "We engineer predictable, high-ROAS growth systems that turn clicks into revenue. Full-funnel Google Ads, Meta Ads, Technical SEO & Conversion Optimization.",
  keywords: [
    "Digital Marketing Agency",
    "Performance Marketing Agency",
    "Google Ads Management",
    "Meta Ads Agency",
    "ROAS Growth Agency",
    "Conversion Rate Optimization",
    "B2B SaaS Growth Marketing",
    "E-Commerce Paid Ads",
  ],
  openGraph: {
    title: "Performance Digital Marketing Agency | ClickLab Marketing",
    description:
      "Scale high-ROAS revenue with full-funnel Google Ads, Meta Ads, Technical SEO & Conversion Optimization.",
    url: "https://clicklabmarketing.com/digital-marketing",
    siteName: "ClickLab Marketing",
    locale: "en_US",
    type: "website",
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingLandingPage />;
}
