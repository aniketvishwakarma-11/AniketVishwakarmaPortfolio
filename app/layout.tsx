import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter is a variable font covering weights 100-900 in a single compact file
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
  description:
    "Full-stack developer & ML engineer with 2+ years of experience building secure, scalable, real-time web applications. MERN Stack, WebRTC, AI/ML specialist.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "WebRTC",
    "Machine Learning",
    "AI",
    "Portfolio",
    "Aniket Vishwakarma",
    "Node.js",
    "TypeScript",
  ],
  authors: [
    {
      name: "Aniket Vishwakarma",
      url: "https://github.com/aniketvishwakarma-11",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aniketvishwakarmaportfolio.vercel.app",
    siteName: "Aniket Vishwakarma",
    title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
    description:
      "Full-stack developer & ML engineer. Building real-time, AI-powered apps that scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
    description:
      "Full-stack developer & ML engineer. Building real-time, AI-powered apps that scale.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
