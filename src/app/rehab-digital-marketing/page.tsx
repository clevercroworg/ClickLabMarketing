import type { Metadata } from "next";
import { RehabLandingPage } from "@/components/rehab-lp/RehabLandingPage";

export const metadata: Metadata = {
  title: "Addiction Rehab Marketing Agency | ClickLab Marketing",
  description:
    "Generate more qualified calls, higher admissions, and sustainable growth for treatment centers and healthcare providers with ClickLab Marketing.",
  keywords: [
    "Healthcare Marketing",
    "Addiction Treatment Center Marketing",
    "Rehab Lead Generation",
    "Medical SEO",
    "Google Ads for Rehab",
    "Patient Admissions Growth",
  ],
};

export default function RehabPage() {
  return <RehabLandingPage />;
}
