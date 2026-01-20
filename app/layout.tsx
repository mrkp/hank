import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hank Willis Thomas | Conceptual Artist",
  description:
    "Hank Willis Thomas is a conceptual artist working primarily with themes related to perspective, identity, commodity, media, and popular culture.",
  keywords: [
    "Hank Willis Thomas",
    "conceptual art",
    "contemporary art",
    "photography",
    "sculpture",
    "public art",
  ],
  openGraph: {
    title: "Hank Willis Thomas | Conceptual Artist",
    description:
      "Exploring perspective, identity, commodity, media, and popular culture through art.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-border py-16 px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">
                Studio
              </p>
              <p className="text-sm">Brooklyn, New York</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted mb-4">
                Representation
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.jackshainman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block link-underline hover:text-muted transition-colors"
                >
                  Jack Shainman Gallery, New York
                </a>
                <a
                  href="https://www.pacegallery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block link-underline hover:text-muted transition-colors"
                >
                  Pace Gallery, London
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-xs tracking-widest uppercase text-muted mb-4">
                Inquiries
              </p>
              <p className="text-sm text-muted">
                For press and exhibition inquiries,
                <br />
                please contact gallery representation.
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} Hank Willis Thomas Studio. All rights reserved.
            </p>
            <p className="text-xs text-muted">
              Site managed with Claude
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
