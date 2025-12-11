import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { NavLinks } from "../components/NavLinks";
import { brand, headerCtas, theme } from "../design/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home — MarketSync",
  description:
    "MarketSync centralizes Amazon, Flipkart, Meesho and more into one clean console for listings, variants and orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeVars: CSSProperties = {
    "--color-navy": theme.colors.navy,
    "--color-soft-gray": theme.colors.softGray,
    "--color-mid-gray": theme.colors.midGray,
    "--color-teal": theme.colors.teal,
    "--color-white": theme.colors.white,
    "--color-text": theme.colors.text,
    "--radius-lg": theme.radii.lg,
    "--radius-md": theme.radii.md,
    "--shadow-soft": theme.shadows.soft,
    "--shadow-subtle": theme.shadows.subtle,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} style={themeVars}>
        <div className="main-shell">
          <header className="app-header">
            <div className="app-header-inner">
              <Link href="/" className="brand">
                <div className="brand-mark">{brand.mark}</div>
                <div className="brand-text">
                  <span className="brand-name">{brand.name}</span>
                  <span className="brand-sub">{brand.tagline}</span>
                </div>
              </Link>
              <NavLinks />
              <div className="header-cta">
                <Link href={headerCtas.loginHref} className="btn btn-outline">
                  Log in
                </Link>
                <Link href={headerCtas.primaryHref} className="btn btn-primary">
                  {headerCtas.primaryLabel}
                </Link>
              </div>
            </div>
          </header>
          {children}
          <footer className="app-footer">{brand.footer}</footer>
        </div>
      </body>
    </html>
  );
}
