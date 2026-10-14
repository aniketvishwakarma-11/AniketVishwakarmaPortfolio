import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FloatingOrbs from "@/components/FloatingOrbs";
import MobileActionBar from "@/components/MobileActionBar";
import QuickView from "@/components/QuickView";
import Toast from "@/components/Toast";
import CommandPalette from "@/components/CommandPalette";

// Below-the-fold sections are split into their own chunks (still server-rendered for SEO)
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      {/* Global Effects */}
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
    </>
  );
}
