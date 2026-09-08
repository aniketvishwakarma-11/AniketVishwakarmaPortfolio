import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      {/* Global Effects */}
      <CustomCursor />
      <FloatingOrbs />

      {/* Main Layout */}
      <div className="min-h-screen relative">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
