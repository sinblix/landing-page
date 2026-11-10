/*
  Sinblix home: "Noche en movimiento" (the approved design, Movimiento.dc.html).
  Sections: hero (3D liquid + POS window), marquee, #pos, #aria, #vender-aqui, #desarrollo,
  #preguntas, closing. Styles and motion live in app/globals.css.
*/
import { SiteNav } from "./components/home/SiteNav";
import { Hero } from "./components/home/Hero";
import { Marquee } from "./components/home/Marquee";
import { PosSection } from "./components/home/PosSection";
import { AriaSection } from "./components/home/AriaSection";
import { VenderAqui } from "./components/home/VenderAqui";
import { Desarrollo } from "./components/home/Desarrollo";
import { Faq } from "./components/home/Faq";
import { Closing } from "./components/home/Closing";
import { SiteFooter } from "./components/home/SiteFooter";

export default function Home() {
  return (
    <>
      <div className="progress sx-progress" aria-hidden="true" />
      <SiteNav />
      <main id="main">
        <Hero />
        <Marquee />
        <PosSection />
        <AriaSection />
        <VenderAqui />
        <Desarrollo />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
