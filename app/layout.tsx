import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

export const metadata: Metadata = {
  title: "Q-DAS Global",
  description:
    "Q-DAS Global provides innovative ICT solutions for government agencies in Nigeria.",
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
        <Header />
        {/* Main content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
