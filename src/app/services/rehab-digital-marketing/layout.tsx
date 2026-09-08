import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";

export default function ServicesRehabLayout({
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
