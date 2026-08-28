import type { Metadata } from "next";
import { ThankYouContent } from "@/components/digital-marketing-lp/ThankYouContent";

export const metadata: Metadata = {
  title: "Growth Audit Requested | ClickLab Marketing",
  description:
    "Thank you for requesting your Free Digital Marketing & ROAS Growth Audit with ClickLab Marketing. A senior strategist is preparing your review.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DigitalMarketingThankYouPage() {
  return <ThankYouContent />;
}
