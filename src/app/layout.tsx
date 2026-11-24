
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://trigxus.com"
  ),
  title: {
    default: "TRIGXUS | From Vision to Value",
    template: "%s | TRIGXUS"
  },
  description:
    "TRIGXUS delivers fintech technology, forex brokerage solutions, AI automation, custom software, SaaS and enterprise digital solutions.",
  keywords: [
    "Fintech Software Development",
    "Forex Brokerage Technology",
    "Trading Platform Development",
    "AI Automation Services",
    "Custom Software Development",
    "CRM Development",
    "SaaS Development",
    "Web and Mobile App Development",
    "Enterprise Technology Solutions"
  ],
  openGraph: {
    title: "TRIGXUS | From Vision to Value",
    description:
      "Engineering Tomorrow's Digital Business.",
    siteName: "TRIGXUS",
    type: "website",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIGXUS | From Vision to Value",
    description: "Engineering Tomorrow's Digital Business."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
