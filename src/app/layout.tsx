import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home · MarketSync",
  description:
    "MarketSync centralizes Amazon, Flipkart, Meesho and more into one clean console for listings, variants and orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <div className="main-shell">
          <header className="app-header">
            <div className="app-header-inner">
              <Link href="/" className="brand">
                <div className="brand-mark">MS</div>
                <div className="brand-text">
                  <span className="brand-name">MarketSync</span>
                  <span className="brand-sub">Multi-channel listings</span>
                </div>
              </Link>
              <nav className="nav-links">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/products">Products</Link>
                <Link href="/listings">Listings</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/connect">Connections</Link>
                <Link href="/settings">Settings</Link>
              </nav>
              <div className="header-cta">
                <Link href="/login" className="btn btn-outline">
                  Log in
                </Link>
                <Link href="/login" className="btn btn-primary">
                  Open Console
                </Link>
              </div>
            </div>
          </header>
          {children}
          <footer className="app-footer">
            © 2025 MarketSync · Multi-channel product & order sync
          </footer>
        </div>
      </body>
    </html>
  );
}
