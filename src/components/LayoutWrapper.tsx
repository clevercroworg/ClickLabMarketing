"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
  whatsapp?: React.ReactNode;
}

export function LayoutWrapper({
  children,
  navbar,
  footer,
}: LayoutWrapperProps) {
  const pathname = usePathname();
  // Hide ClickLab shell for any standalone landing page (/lp or /rehab-digital-marketing)
  const isLp =
    pathname?.startsWith("/lp") ||
    pathname?.includes("rehab-digital-marketing");

  if (isLp) {
    return <>{children}</>;
  }

  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
