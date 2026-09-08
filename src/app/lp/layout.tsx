import type { Metadata } from "next";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-5ZCMQ5VH" />
      {children}
    </>
  );
}
