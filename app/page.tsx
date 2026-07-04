import Navbar from "@/components/ui/Navbar";
import MouseFollower from "@/components/ui/MouseFollower";
import Loader from "@/components/ui/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Loader />
      <MouseFollower />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}