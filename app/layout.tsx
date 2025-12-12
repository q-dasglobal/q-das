import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserratBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteDescription =
  "Empowering organizations across Nigeria and Africa with ICT solutions, software development, and managed IT services since 2011.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://qdasglobal.com",
  ),
  title: {
    default: "Q-DAS Global | ICT Solutions & Digital Transformation",
    template: "%s | Q-DAS Global",
  },
  description: siteDescription,
  keywords: [
    "ICT solutions Nigeria",
    "software development Africa",
    "managed IT services",
    "digital transformation",
    "cloud computing",
    "AI solutions",
    "IT infrastructure",
    "Q-DAS Global",
  ],
  openGraph: {
    title: "Q-DAS Global",
    description: siteDescription,
    type: "website",
    siteName: "Q-DAS Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Q-DAS Global",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body
        className={`${montserrat.variable} ${montserratBody.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
