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
  metadataBase: new URL("https://aniketvishwakarma.me"),
  title: {
    default: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
    template: "%s | Aniket Vishwakarma",
  },
  description:
    "Portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer. Building scalable WebRTC, MERN, and AI-powered apps. GNA Hackathon 4.0 Domain Winner.",
  keywords: [
    "Aniket Vishwakarma",
    "Aniket Vishwakarma Portfolio",
    "Aniket Vishwakarma Developer",
    "Aniket Vishwakarma LPU",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "WebRTC Specialist",
    "YOLOv8 Computer Vision",
    "Node.js",
    "TypeScript",
    "GNA Hackathon 4.0 Winner",
    "Clean and Green Technology",
    "Lovely Professional University",
  ],
  authors: [
    {
      name: "Aniket Vishwakarma",
      url: "https://aniketvishwakarma.me",
    },
  ],
  creator: "Aniket Vishwakarma",
  publisher: "Aniket Vishwakarma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://aniketvishwakarma.me",
    languages: {
      "en-US": "https://aniketvishwakarma.me",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Aniket",
    lastName: "Vishwakarma",
    username: "aniketvishwakarma-11",
    gender: "male",
    locale: "en_US",
    url: "https://aniketvishwakarma.me",
    siteName: "Aniket Vishwakarma Portfolio",
    title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
    description:
      "Official portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer specializing in React, Next.js, WebRTC, and Python AI/ML pipelines. GNA Hackathon 4.0 Domain Winner.",
    images: [
      {
        url: "/aniket.png",
        width: 1200,
        height: 630,
        alt: "Aniket Vishwakarma — Full-Stack Developer & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Vishwakarma | Full-Stack Developer & ML Engineer",
    description:
      "Official portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer specializing in Next.js, WebRTC, and AI/ML.",
    images: ["/aniket.png"],
    creator: "@aniketvishwakarma",
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
  verification: {
    google: [
      "SBqjBBgJY6yzBBvDjNxTUG5x50V1E1W0H__OSGH_Pgg",
      "uy1sq5WoTzGlX2PSa44Z4t-bUjmx2TiEWpePq4jRbaM",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aniketvishwakarma.me/#person",
      name: "Aniket Vishwakarma",
      alternateName: [
        "Aniket",
        "Aniket Vishwakarma Developer",
        "aniketvishwakarma-11",
      ],
      jobTitle: "Full-Stack Developer & Machine Learning Engineer",
      description:
        "Full-stack developer & ML engineer specializing in MERN Stack, Next.js, WebRTC, and Python AI/ML pipelines. Domain Winner at GNA Hackathon 4.0 in Clean & Green Technology.",
      url: "https://aniketvishwakarma.me",
      image: "https://aniketvishwakarma.me/aniket.png",
      sameAs: [
        "https://github.com/aniketvishwakarma-11",
        "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5",
        "https://aniket-vishwakarma-portfolio.vercel.app",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "Machine Learning",
        "Scikit-learn",
        "YOLOv8",
        "Computer Vision",
        "WebRTC",
        "Socket.IO",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Firebase",
        "Tailwind CSS",
        "REST APIs",
        "Cloudinary",
        "AWS S3",
        "MinIO S3",
        "NVIDIA NIM",
        "PyTorch",
        "Polygon / Web3",
        "Docker",
        "Google Gemini AI",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "PVPPCOE, Mumbai University",
        },
        {
          "@type": "EducationalOrganization",
          name: "D.G. Ruparel College of Arts, Science and Commerce",
        },
      ],
      award: [
        "Domain Winner — Clean & Green Technology (GNA Hackathon 4.0)",
      ],
      seeks: [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Machine Learning Engineer",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aniketvishwakarma.me/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aniketvishwakarma.me",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://aniketvishwakarma.me/#about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Experience",
          item: "https://aniketvishwakarma.me/#experience",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Skills",
          item: "https://aniketvishwakarma.me/#skills",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Projects",
          item: "https://aniketvishwakarma.me/#projects",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: "https://aniketvishwakarma.me/#contact",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aniketvishwakarma.me/#website",
      url: "https://aniketvishwakarma.me",
      name: "Aniket Vishwakarma Portfolio",
      description:
        "Official portfolio and engineering profile of Aniket Vishwakarma.",
      publisher: {
        "@id": "https://aniketvishwakarma.me/#person",
      },
      sameAs: ["https://aniket-vishwakarma-portfolio.vercel.app"],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://aniketvishwakarma.me/#profilepage",
      url: "https://aniketvishwakarma.me",
      name: "Aniket Vishwakarma — Portfolio & Engineering Showcase",
      mainEntity: {
        "@id": "https://aniketvishwakarma.me/#person",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://aniketvishwakarma.me/#projects",
      name: "Projects by Aniket Vishwakarma",
      itemListElement: [
        {
          "@type": "SoftwareSourceCode",
          position: 1,
          name: "Student Placement Prediction",
          description:
            "Full-Stack ML & AI application combining Scikit-learn machine learning and Google Gemini AI for predictive placement readiness and ATS scoring.",
          programmingLanguage: ["TypeScript", "Python", "JavaScript"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 2,
          name: "EcoVision Bharat",
          description:
            "AI-powered civic technology platform with YOLOv8 computer vision for waste severity detection. Domain Winner at GNA Hackathon 4.0.",
          programmingLanguage: ["React", "FastAPI", "Python", "SQL"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 3,
          name: "Vishwakarma Video Call",
          description:
            "Peer-to-peer WebRTC video conferencing application with Socket.IO signaling, room management, and screen sharing.",
          programmingLanguage: ["JavaScript", "Node.js", "React"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 4,
          name: "Karma Connect",
          description:
            "Full-stack social engagement network built on Next.js 14, Redux Toolkit, MongoDB, and Cloudinary.",
          programmingLanguage: ["TypeScript", "Next.js", "Node.js"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
      ],
    },
  ],
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
        <link rel="canonical" href="https://aniketvishwakarma.me" />
        <meta
          name="google-site-verification"
          content="SBqjBBgJY6yzBBvDjNxTUG5x50V1E1W0H__OSGH_Pgg"
        />
        <meta
          name="google-site-verification"
          content="uy1sq5WoTzGlX2PSa44Z4t-bUjmx2TiEWpePq4jRbaM"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
