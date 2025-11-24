import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Q-DAS Global | Government ICT Solutions",
  description:
    "Q-DAS Global provides innovative ICT solutions for government agencies in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <nav className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">Q</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Q-DAS Global
              </span>
            </div>
            <ul className="hidden gap-8 md:flex">
              <li>
                <a
                  href="#"
                  className="font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-700 transition-colors hover:text-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="mt-auto bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-lg font-bold">Q</span>
                  </div>
                  <span className="text-xl font-bold">Q-DAS Global</span>
                </div>
                <p className="mb-4 max-w-md text-gray-400">
                  Empowering businesses with innovative technology solutions.
                  Your trusted partner for digital transformation.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="transition-colors hover:text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="transition-colors hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>info@qdasglobal.com</li>
                  <li>+234 800 000 0000</li>
                  <li>Lagos, Nigeria</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Q-DAS Global. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
