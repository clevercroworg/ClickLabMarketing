import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clicklabmarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Click Lab Marketing | Premium Digital Agency",
    template: "%s | Click Lab Marketing",
  },
  description:
    "Data-driven digital marketing agency specializing in high-ROAS Meta & Google Ads, SEO, landing page design, and custom web development for scaling businesses.",
  keywords: [
    "Digital Marketing Agency",
    "Meta Ads Agency",
    "Facebook Ads Marketing",
    "Google Ads Management",
    "SEO Agency",
    "Web Development Agency",
    "Landing Page Design",
    "ROAS Optimization",
  ],
  authors: [{ name: "Click Lab Marketing" }],
  creator: "Click Lab Marketing",
  publisher: "Click Lab Marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logos/clicklab-icon.png", type: "image/png" },
      { url: "/logos/clicklab-icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logos/clicklab-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Click Lab Marketing | Premium Digital Agency",
    description:
      "Data-driven digital marketing agency specializing in high-ROAS Meta & Google Ads, SEO, landing page design, and custom web development.",
    siteName: "Click Lab Marketing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Click Lab Marketing - Premium Digital Agency & Revenue Growth",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Click Lab Marketing | Premium Digital Agency",
    description:
      "Data-driven digital marketing agency specializing in high-ROAS Meta & Google Ads, SEO, landing page design, and web development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNT2VWH4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Structured Data / JSON-LD for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Click Lab Marketing",
              "url": siteUrl,
              "logo": `${siteUrl}/logos/clicklab-logo.png`,
              "image": `${siteUrl}/og-image.png`,
              "description": "High-end digital marketing agency specializing in SEO, Meta Ads, Google Ads, Landing Page Design, and Web Development.",
              "sameAs": [
                "https://www.facebook.com/clicklabmarketing",
                "https://www.instagram.com/clicklabmarketing",
                "https://www.linkedin.com/company/clicklabmarketing"
              ],
              "priceRange": "$$"
            }),
          }}
        />
        
        <LayoutWrapper
          navbar={<Navbar />}
          footer={<Footer />}
        >
          {children}
        </LayoutWrapper>

        {/* Google Tag Manager — loaded after page becomes interactive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNT2VWH4');`,
          }}
        />
      </body>
    </html>
  );
}
