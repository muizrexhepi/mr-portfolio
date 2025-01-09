import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Muiz Rexhepi - Frontend Developer and React Specialist",
  description:
    "Frontend Developer specializing in React, Next.js, and modern web technologies. Building performant and accessible web applications.",
  metadataBase: new URL("https://muizrexhepi.com"),
  alternates: {
    canonical: "https://muizrexhepi.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muiz Rexhepi - Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://muizrexhepi.com",
    siteName: "Muiz Rexhepi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muiz Rexhepi - Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 p-6 sm:p-12">
        <div className="flex flex-col sm:flex-row">
          <Navbar />
          <main className="flex-1 py-6 sm:py-0 sm:px-12 border-t sm:border-t-0 sm:border-l border-neutral-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
