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
  title: "Aniket Vishwakarma | Software Development Engineer Intern @ Chitralai",
  description: "Software Development Engineer Intern building secure, scalable full-stack applications using React, Next.js, Node.js, AWS, and modern web technologies.",
  keywords: [
    "Software Development Engineer Intern",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AWS Developer",
    "MERN Stack",
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
    title: "Aniket Vishwakarma | Software Development Engineer Intern",
    description: "Software Development Engineer Intern building secure, scalable full-stack applications using React, Next.js, Node.js, AWS, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Vishwakarma | Software Development Engineer Intern",
    description: "Software Development Engineer Intern building secure, scalable full-stack applications using React, Next.js, Node.js, AWS, and modern web technologies.",
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
