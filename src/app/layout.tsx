// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your domain
  title: {
    default: "IronRoot RockCraft | Let's Rock!",
    template: "%s | IronRoot Rockcraft",
  },
  description:
    "IronRoot RockCraft producing high quality hand crafted ultra-realistic artificial rocks and rockfaces.",
  openGraph: {
    title: "IronRoot RockCraft | Let's Rock!",
    description:
      "A modern blog platform powered by Next.js and GitHub Markdown",
    url: "/",
    siteName: "IronRoot RockCraft",
    images: [
      {
        url: "https://twelfDVYM.github.io/host/IronRootLogoWEB.jpg", // Add your own OG image
        width: 1200,
        height: 630,
        alt: "IronRoot RockCraft Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronRoot RockCraft",
    description: "IronRoot RockCraft | Producer of articial rocks",
    images: ["/images/twitter-image.jpg"], // Add your own Twitter card image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Analytics />
      </head>
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
