import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Ticker from "@/components/Ticker";
import Talk from "@/components/Talk";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Skills />
        <Works />
        <div className="cta-small">Got a project?</div>
        <Ticker />
        <Talk />
        <About />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
