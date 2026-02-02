import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Technologies } from "./components/sections/Technologies";
import { Portfolio } from "./components/sections/Portfolio";
import { Process } from "./components/sections/Process";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Team } from "./components/sections/Team";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Portfolio />
      <Process />
      <Stats />
      <Testimonials />
      <FAQ />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
