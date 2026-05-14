import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";

import "@/styles/Home.scss";

export default function HomePage() {
  return (
    <main className="home-page">
      <Header />

      <Hero />

      <About />

      <Services />
    </main>
  );
}