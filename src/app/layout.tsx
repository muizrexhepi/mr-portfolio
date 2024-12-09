import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muiz Rexhepi - Portfolio",
  description: "Personal portfolio of Muiz Rexhepi, Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-zinc-900 text-zinc-100 min-h-screen`}
      >
        <div className="max-w-3xl mx-auto px-6">
          <header className="py-8">
            <nav className="flex justify-end space-x-6 text-sm">
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="py-8 mt-12 border-t border-zinc-800 text-sm text-zinc-400">
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <Link
                  href="https://linkedin.com/in/muiz-rexhepi"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
                ·
                <Link
                  href="https://github.com/muizrexhepi"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </div>
              <Link
                href="mailto:muiz.rexhepi1@gmail.com"
                className="hover:text-white transition-colors"
              >
                muiz.rexhepi1@gmail.com
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
