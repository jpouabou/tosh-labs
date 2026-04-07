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
  title: "Tosh Labs | SaaS & Custom Software for Businesses",
  description:
    "Vancouver-based tech company building SaaS products and custom web & mobile applications for ambitious businesses. Portfolio: Pulsr and Pausr.",
  openGraph: {
    title: "Tosh Labs",
    description:
      "We build SaaS products and custom software — web and mobile apps for businesses that need software as serious as the work it powers.",
    url: "https://toshlabs.co",
    siteName: "Tosh Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tosh Labs",
    description:
      "Premium software corporation. SaaS portfolio: Pulsr & Pausr. Custom applications and enterprise delivery.",
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
