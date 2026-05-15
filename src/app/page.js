import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Destinations from "@/components/Destinations/Destinations";
import Journey from "@/components/Journey/Journey";
import Mindset from "@/components/Mindset/Mindset";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

import "@/styles/Home.scss";

export default function HomePage() {
  return (
    <main className="home-page">
      <Header />

      <section
        id="about"
        className="fade-section"
      >
        <Hero />
      </section>

      <section
        id="agency"
        className="fade-section"
      >
        <About />
      </section>

      <section
        id="services"
        className="fade-section"
      >
        <Services />
      </section>

      <section
        id="destinations"
        className="fade-section"
      >
        <Destinations />
      </section>

      <section
        id="journey"
        className="fade-section"
      >
        <Journey />
      </section>

      <section
        id="mindset"
        className="fade-section"
      >
        <Mindset />
      </section>

      <section
        id="contact"
        className="fade-section"
      >
        <Contact />
      </section>

      <Footer />
    </main>
  );
}