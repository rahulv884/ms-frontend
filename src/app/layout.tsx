import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MarketSync | Multi-marketplace console",
  description:
    "MarketSync centralizes Amazon, Flipkart, Meesho and more into one clean console for listings, variants and orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-soft-gray text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 border-b border-white/60 bg-soft-gray/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white text-xl font-semibold shadow-subtle">
                  MS
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">MarketSync</p>
                  <p className="text-sm text-slate-500">
                    Multi-channel listings
                  </p>
                </div>
              </div>
              <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
                <Link href="#product" className="hover:text-navy">
                  Product
                </Link>
                <Link href="#how-it-works" className="hover:text-navy">
                  How it works
                </Link>
                <Link href="#pricing" className="hover:text-navy">
                  Pricing
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-navy transition hover:border-navy/60"
                >
                  Log in
                </Link>
                <Link
                  href="/app/dashboard"
                  className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-teal/90"
                >
                  Open console
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/70 bg-white/80">
            <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-slate-500">
              © 2025 MarketSync · Multi-channel product & order sync platform
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
