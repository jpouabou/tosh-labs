import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toshlabs.co"),
  title: "Tosh Labs | Product Engineering Partner for Startups",
  description:
    "Tosh Labs helps startups and teams turn ideas into scalable products — from rapid prototypes to production-ready systems and ongoing technical leadership.",
  openGraph: {
    title: "Tosh Labs | From Idea to Scalable Product",
    description:
      "We partner with startups and teams to validate, build, and scale software — without costly rebuilds. Products: Pulsr and Pausr.",
    url: "https://toshlabs.co",
    siteName: "Tosh Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tosh Labs | Product Engineering Partner",
    description:
      "We help you build the right product — and scale it properly. Prototype, product build, and fractional CTO support.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
