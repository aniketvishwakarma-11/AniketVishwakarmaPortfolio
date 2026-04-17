import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
  description: "Full-stack developer with 2+ years of experience in MERN stack, WebRTC, and AI/ML. Specialized in building scalable and secure web applications.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "WebRTC",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Aniket Vishwakarma", url: "https://github.com/aniketvishwakarma-11" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aniketvishwakarmaportfolio.vercel.app",
    siteName: "Aniket Vishwakarma",
    title: "Aniket Vishwakarma | Full-Stack Developer",
    description: "Full-stack developer with 2+ years of experience in MERN stack, WebRTC, and AI/ML.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Vishwakarma | Full-Stack Developer",
    description: "Full-stack developer with 2+ years of experience in MERN stack, WebRTC, and AI/ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06b6d4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
