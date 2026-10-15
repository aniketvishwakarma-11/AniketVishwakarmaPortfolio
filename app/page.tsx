import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FloatingOrbs from "@/components/FloatingOrbs";
import IntroSplash from "@/components/IntroSplash";
import MotionProvider from "@/components/MotionProvider";
import SectionSkeleton from "@/components/SectionSkeleton";
import MobileActionBar from "@/components/MobileActionBar";
import QuickView from "@/components/QuickView";
import Toast from "@/components/Toast";
import CommandPalette from "@/components/CommandPalette";

// Below-the-fold sections are split into their own chunks (still server-rendered for SEO)
const Experience = dynamic(() => import("@/components/Experience"), { loading: () => <SectionSkeleton /> });
const Skills = dynamic(() => import("@/components/Skills"), { loading: () => <SectionSkeleton /> });
const Projects = dynamic(() => import("@/components/Projects"), { loading: () => <SectionSkeleton /> });
const Contact = dynamic(() => import("@/components/Contact"), { loading: () => <SectionSkeleton /> });
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <MotionProvider>
      {/* Global Effects */}
      <IntroSplash />
      <FloatingOrbs />

      {/* Main Layout */}
      <div className="min-h-screen relative">
        <Navigation />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        {/* Spacer so the mobile action bar never covers the footer */}
        <div className="h-16 md:hidden" aria-hidden="true" />
        <MobileActionBar />
        <QuickView />
        <Toast />
        <CommandPalette />
      </div>
    </MotionProvider>
  );
}
