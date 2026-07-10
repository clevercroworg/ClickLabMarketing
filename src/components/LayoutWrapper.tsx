"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
  whatsapp: React.ReactNode;
}

export function LayoutWrapper({
  children,
  navbar,
  footer,
  whatsapp,
}: LayoutWrapperProps) {
  const pathname = usePathname();
  // Hide ClickLab shell for any landing page path starting with "/lp"
  const isLp = pathname?.startsWith("/lp");

  if (isLp) {
    return <>{children}</>;
  }

  return (
    <>
      {navbar}
      <main className="flex-1">{children}</main>
      {footer}
      {whatsapp}
    </>
  );
}
