/*
  Sinblix home: "Noche en movimiento" (the approved design, Movimiento.dc.html).
  Sections: #nosotros (first, id "top"), hero (3D liquid + POS window), marquee, #servicios, #pos, #aria, #vender-aqui, #precios, #desarrollo,
  #preguntas, closing. Styles and motion live in app/globals.css.
*/
import { SiteNav } from "./components/home/SiteNav";
import { Hero } from "./components/home/Hero";
import { Marquee } from "./components/home/Marquee";
import { Nosotros } from "./components/home/Nosotros";
import { Servicios } from "./components/home/Servicios";
import { PosSection } from "./components/home/PosSection";
import { AriaSection } from "./components/home/AriaSection";
import { VenderAqui } from "./components/home/VenderAqui";
import { Precios } from "./components/home/Precios";
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
        <Nosotros />
        <Hero />
        <Marquee />
        <Servicios />
        <PosSection />
        <AriaSection />
        <VenderAqui />
        <Precios />
        <Desarrollo />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
