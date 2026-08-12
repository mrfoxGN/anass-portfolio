import type { Metadata } from "next";

import {
  Roboto_Mono,
  Roboto_Slab,
} from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";

const headingFont = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const monoFont = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Anass Guendaoui | Software Engineer",

  description:
    "Portfolio of Anass Guendaoui, Software Engineer and Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${monoFont.variable}`}
    >
      <body>
        {/* Sidebar is OUTSIDE all page animations */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}