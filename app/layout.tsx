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
    "Portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer from Mumbai. Building scalable WebRTC, MERN, and AI-powered apps. GNA Hackathon 4.0 Domain Winner. SDE Intern at Chitralai.",
  keywords: [
    "Aniket Vishwakarma",
    "Aniket Vishwakarma Portfolio",
    "Aniket Vishwakarma Developer",
    "Aniket Vishwakarma PVPPCOE",
    "Aniket Vishwakarma Mumbai",
    "Aniket Vishwakarma MediVault",
    "Aniket Vishwakarma SwasthyaSetu",
    "Aniket Vishwakarma Chitralai",
    "Full-Stack Developer Mumbai",
    "SDE Intern Mumbai",
    "Machine Learning Engineer",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "WebRTC Specialist",
    "WebRTC Video Call App",
    "YOLOv8 Computer Vision",
    "Node.js",
    "TypeScript",
    "FastAPI Developer",
    "MediVault AI Healthcare",
    "GNA Hackathon 4.0 Winner",
    "Clean and Green Technology",
    "Mumbai Developer",
    "PVPPCOE Mumbai University",
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
      "Official portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer from Mumbai. Specializing in React, Next.js, WebRTC, and Python AI/ML pipelines. GNA Hackathon 4.0 Domain Winner.",
    images: [
      {
        url: "/og-image.png",
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
      "Official portfolio of Aniket Vishwakarma — Full-Stack Developer & ML Engineer from Mumbai. Next.js, WebRTC, AI/ML. GNA Hackathon 4.0 Winner.",
    images: ["/og-image.png"],
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
        "Aniket Vishwakarma PVPPCOE",
        "Aniket Vishwakarma Mumbai",
      ],
      jobTitle: "Full-Stack Developer & Machine Learning Engineer",
      description:
        "Full-stack developer & ML engineer from Mumbai specializing in MERN Stack, Next.js, WebRTC, and Python AI/ML pipelines. SDE Intern at Chitralai. Domain Winner at GNA Hackathon 4.0 in Clean & Green Technology. B.E. student at PVPPCOE, Mumbai University (2023–2027).",
      url: "https://aniketvishwakarma.me",
      image: "https://aniketvishwakarma.me/aniket.png",
      email: "aniketvis675@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "aniketvis675@gmail.com",
        contactType: "professional",
        availableLanguage: ["English", "Hindi"],
      },
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
        "Redux Toolkit",
        "Full-Stack Development",
        "ML Engineering",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "PVPPCOE, Mumbai University",
          url: "https://pvppcoe.ac.in",
        },
        {
          "@type": "EducationalOrganization",
          name: "D.G. Ruparel College of Arts, Science and Commerce",
          url: "https://ruparel.edu.in",
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
        "AI/ML Engineer",
        "React Developer",
        "Next.js Developer",
        "WebRTC Engineer",
        "SDE Internship",
        "Software Engineer Mumbai",
        "Full-Time SDE Role",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Chitralai",
        description: "Software company, Mumbai",
      },
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
        "Official portfolio and engineering profile of Aniket Vishwakarma — Full-Stack Developer & ML Engineer, Mumbai.",
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
          "@type": "SoftwareApplication",
          position: 1,
          name: "MediVault",
          description:
            "AI-powered medical records platform with NVIDIA NIM OCR, WebRTC telemedicine, PyTorch/TrOCR handwritten prescription parsing, blockchain-verified record integrity, and emergency paramedic QR access.",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
          url: "https://medi-vault-seven-lyart.vercel.app/",
          programmingLanguage: ["TypeScript", "Python", "Solidity"],
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "SwasthyaSetu",
          description:
            "Offline-first, closed-loop healthcare referral and clinical continuity platform for India's public health network. Features Dexie.js offline sync, ROUTINE/URGENT/EMERGENCY digital referrals, AI OCR (Gemini Flash + TrOCR), fuzzy patient identity reconciliation (RapidFuzz), EWS vitals scoring, and post-discharge follow-up tracking.",
          applicationCategory: "HealthApplication",
          operatingSystem: "Web",
          url: "https://swastyasetu-three.vercel.app/",
          programmingLanguage: ["TypeScript", "React", "Python", "Node.js"],
        },
        {
          "@type": "SoftwareSourceCode",
          position: 3,
          name: "Student Placement Prediction",
          description:
            "Full-Stack ML & AI application combining Scikit-learn machine learning and Google Gemini AI for predictive placement readiness and ATS scoring.",
          programmingLanguage: ["TypeScript", "Python", "JavaScript"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 4,
          name: "EcoVision Bharat",
          description:
            "AI-powered civic technology platform with YOLOv8 computer vision for waste severity detection. Domain Winner at GNA Hackathon 4.0 — Clean & Green Technology.",
          programmingLanguage: ["React", "FastAPI", "Python", "SQL"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 4,
          name: "Vishwakarma Video Call",
          description:
            "Peer-to-peer WebRTC video conferencing application with Socket.IO signaling, room management, and screen sharing.",
          programmingLanguage: ["JavaScript", "Node.js", "React"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 5,
          name: "Karma Connect",
          description:
            "Full-stack social engagement network built on Next.js 14, Redux Toolkit, MongoDB, and Cloudinary.",
          programmingLanguage: ["TypeScript", "Next.js", "Node.js"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 6,
          name: "FitTrack Pro",
          description:
            "AI-powered fitness tracking platform with personalized workout plans, nutrition analysis, and real-time progress monitoring.",
          programmingLanguage: ["React", "Node.js", "MongoDB"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 7,
          name: "DevCollab",
          description:
            "Real-time collaborative code editor with Socket.IO, syntax highlighting, room-based sessions, and live cursor tracking.",
          programmingLanguage: ["JavaScript", "Node.js", "Socket.IO"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
        {
          "@type": "SoftwareSourceCode",
          position: 8,
          name: "AgroSmart",
          description:
            "Smart agriculture platform with IoT sensor integration, crop disease detection using computer vision, and predictive yield analytics.",
          programmingLanguage: ["Python", "FastAPI", "React"],
          codeRepository: "https://github.com/aniketvishwakarma-11",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://aniketvishwakarma.me/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Aniket Vishwakarma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma is a Full-Stack Developer and Machine Learning Engineer based in Mumbai, India. He is a B.E. student at PVPPCOE, Mumbai University (2023–2027), currently interning as a Software Development Engineer at Chitralai. He is a GNA Hackathon 4.0 Domain Winner in Clean & Green Technology and has built 9+ production-grade web and AI applications.",
          },
        },
        {
          "@type": "Question",
          name: "What does Aniket Vishwakarma specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma specializes in Full-Stack Development (MERN, Next.js, TypeScript), real-time communication (WebRTC, Socket.IO), and AI/ML engineering (YOLOv8, PyTorch, NVIDIA NIM, Google Gemini AI, Scikit-learn, FastAPI). He also works with Web3/Polygon and Docker for containerized deployments.",
          },
        },
        {
          "@type": "Question",
          name: "What projects has Aniket Vishwakarma built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma has built 9+ production applications including: MediVault (AI healthcare PHR vault with NVIDIA NIM OCR and WebRTC telemedicine), SwasthyaSetu (offline-first healthcare referral platform with Dexie.js sync, AI OCR, and fuzzy identity reconciliation for India's public health network), EcoVision Bharat (YOLOv8 waste detection, GNA Hackathon Domain Winner), Student Placement Prediction (ML + Gemini AI), Vishwakarma Video Call (WebRTC conferencing), and Karma Connect (Next.js social network).",
          },
        },
        {
          "@type": "Question",
          name: "Where does Aniket Vishwakarma study?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma is pursuing a B.E. in Computer Engineering at PVPPCOE (Pirojshanagar Vidya Bhavan's Polytechnic and College of Engineering), Mumbai University, graduating in 2027. He previously completed his HSC (11th–12th) in Science with Bifocal Computer Science from D.G. Ruparel College, Mumbai (2021–2023).",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Aniket Vishwakarma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Aniket Vishwakarma via email at aniketvis675@gmail.com, through his LinkedIn profile at linkedin.com/in/aniket-vishwakarma-bb1b922b5, or via his GitHub at github.com/aniketvishwakarma-11. He is available for freelance projects, collaborations, and full-time opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "What tech stack does Aniket Vishwakarma use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma's core tech stack includes: React, Next.js, TypeScript, Node.js, Express.js, Python, FastAPI, MongoDB, PostgreSQL, WebRTC, Socket.IO, YOLOv8, PyTorch, NVIDIA NIM, Google Gemini AI, Supabase, Firebase, Tailwind CSS, Redux Toolkit, Docker, Polygon/Web3, MinIO S3, and Cloudinary.",
          },
        },
        {
          "@type": "Question",
          name: "Is Aniket Vishwakarma available for freelance work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Aniket Vishwakarma is available for freelance projects, technical collaborations, and full-time SDE opportunities. He responds within 24 hours. Contact him at aniketvis675@gmail.com or through his portfolio at aniketvishwakarma.me.",
          },
        },
        {
          "@type": "Question",
          name: "What hackathons has Aniket Vishwakarma won?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aniket Vishwakarma won the Domain Winner award in Clean & Green Technology at GNA Hackathon 4.0. His winning project, EcoVision Bharat, used YOLOv8 computer vision for automated waste severity detection and civic reporting.",
          },
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
        <meta name="author" content="Aniket Vishwakarma" />
        <link rel="canonical" href="https://aniketvishwakarma.me" />
        <link rel="me" href="https://github.com/aniketvishwakarma-11" />
        <link rel="me" href="https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5" />
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
