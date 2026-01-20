import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-overlay`}
      >
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-white/10 py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} Hank Willis Thomas Studio
            </p>
            <div className="flex gap-6 text-sm text-muted">
              <a
                href="https://www.jackshainman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground transition-colors"
              >
                Jack Shainman Gallery
              </a>
              <a
                href="https://www.pacegallery.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground transition-colors"
              >
                Pace Gallery
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
