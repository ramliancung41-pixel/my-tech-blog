import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
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
  metadataBase: new URL("https://codeandbuild.tech"),
  title: {
    default: "CodeAndBuild | Programming & Tech Guides",
    template: "%s | CodeAndBuild",
  },
  description:
    "Learn web development, Next.js, software engineering, and modern tech tutorials step-by-step.",
  keywords: [
    "Programming",
    "Next.js",
    "React",
    "Web Development",
    "Tech Blog",
    "Software Engineering",
  ],
  authors: [{ name: "Ram Lian Cung", url: "https://codeandbuild.tech" }],
  creator: "Ram Lian Cung",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "CodeAndBuild | Programming & Tech Guides",
    description:
      "Learn web development, Next.js, software engineering, and modern tech tutorials step-by-step.",
    url: "https://codeandbuild.tech",
    siteName: "CodeAndBuild",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 221,
        height: 184,
        alt: "CodeAndBuild",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  verification: {
    google: "5QlGQG1PtSVByxl4uhnxf4czNl3BMhIpPiSD33xbvHk",
  },
  other: {
    "google-adsense-account": "ca-pub-1013229164425062",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#07080c" },
    { media: "(prefers-color-scheme: dark)", color: "#07080c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main id="content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1013229164425062"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
