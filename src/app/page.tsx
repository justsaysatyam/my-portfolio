import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GSAPAnimations from "@/components/GSAPAnimations";

export default function Home() {
  return (
    <GSAPAnimations>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <div className="relative z-10 space-y-32 md:space-y-48 pb-24">
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </div>
    </GSAPAnimations>
  );
}
