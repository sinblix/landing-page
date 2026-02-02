import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
