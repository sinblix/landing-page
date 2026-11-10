import type { Metadata } from "next";
import { SiteNav } from "../components/home/SiteNav";
import { SiteFooter } from "../components/home/SiteFooter";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";
const pageUrl = `${baseUrl}/terminos-de-servicio`;

export const metadata: Metadata = {
  title: "Términos de Servicio | SINBLIX",
  description:
    "Términos y condiciones de uso de los servicios de SINBLIX: automatización de procesos, software a medida e inteligencia artificial.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Términos de Servicio | SINBLIX",
    description:
      "Lee los términos y condiciones que rigen el uso de los servicios y plataformas de SINBLIX.",
    url: pageUrl,
    siteName: "SINBLIX",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos de Servicio | SINBLIX",
    description:
      "Lee los términos y condiciones que rigen el uso de los servicios y plataformas de SINBLIX.",
  },
};

export default function TerminosDeServicioPage() {
  return (
    <>
      <SiteNav onHome={false} />
      <main id="main" className="legal">
      <div className="wrap"><div className="legal__body">
        <h1>
          Términos de Servicio
        </h1>
        <p>
          Fecha de entrada en vigencia: 16 de marzo de 2026
        </p>

        <div>
          <section>
            <h2>
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder o utilizar el sitio web{" "}
              <a
                href="https://www.sinblix.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.sinblix.com
              </a>{" "}
              y cualquier servicio ofrecido por <strong>SINBLIX</strong>,
              aceptas quedar vinculado por estos Términos de Servicio. Si no
              estás de acuerdo con alguno de los términos aquí descritos, te
              pedimos que no utilices nuestros servicios.
            </p>
          </section>

          <section>
            <h2>
              2. Descripción de los servicios
            </h2>
            <p>
              SINBLIX es una empresa de tecnología especializada en:
            </p>
            <ul>
              <li>
                <strong>Automatización de procesos:</strong> diseño e
                implementación de flujos de trabajo automatizados con
                herramientas como n8n, Make y otras plataformas.
              </li>
              <li>
                <strong>Software a medida:</strong> desarrollo de aplicaciones
                web, paneles de control y sistemas personalizados adaptados a
                las necesidades del cliente.
              </li>
              <li>
                <strong>Inteligencia Artificial aplicada:</strong> soluciones de
                gestión de leads, asistentes conversacionales y análisis de
                datos con IA.
              </li>
              <li>
                <strong>Consultoría tecnológica:</strong> asesoramiento
                estratégico para la transformación digital de empresas y
                negocios.
              </li>
            </ul>
            <p>
              Los servicios específicos, alcances y condiciones de entrega se
              detallan en propuestas comerciales o contratos individuales
              firmados entre SINBLIX y el cliente.
            </p>
          </section>

          <section>
            <h2>
              3. Uso aceptable del sitio web
            </h2>
            <p>
              Al utilizar nuestro sitio web, te comprometes a:
            </p>
            <ul>
              <li>
                No realizar ninguna actividad ilegal, fraudulenta o que viole
                los derechos de terceros.
              </li>
              <li>
                No intentar acceder sin autorización a sistemas, servidores o
                datos de SINBLIX.
              </li>
              <li>
                No distribuir malware, spam ni contenido dañino a través de
                nuestros canales de contacto.
              </li>
              <li>
                No reproducir, copiar o redistribuir contenidos protegidos por
                derechos de autor sin autorización expresa.
              </li>
            </ul>
            <p>
              SINBLIX se reserva el derecho de bloquear o restringir el acceso
              a cualquier usuario que incumpla estas condiciones.
            </p>
          </section>

          <section>
            <h2>
              4. Propiedad intelectual
            </h2>
            <p>
              Todo el contenido publicado en este sitio web —incluyendo textos,
              imágenes, logotipos, código, diseños y materiales multimedia— es
              propiedad exclusiva de SINBLIX o de sus respectivos titulares, y
              está protegido por las leyes de propiedad intelectual aplicables.
            </p>
            <p>
              Queda prohibida la reproducción total o parcial de cualquier
              contenido sin el consentimiento previo y por escrito de SINBLIX.
              El acceso al sitio no otorga ninguna licencia ni derecho sobre
              dichos contenidos.
            </p>
            <p>
              El software, flujos de automatización y desarrollos creados por
              SINBLIX para sus clientes se rigen por los términos de propiedad
              intelectual acordados en el contrato de servicio correspondiente.
            </p>
          </section>

          <section>
            <h2>
              5. Confidencialidad y protección de datos
            </h2>
            <p>
              SINBLIX se compromete a tratar con la máxima confidencialidad toda
              la información que los clientes compartan en el marco de la
              prestación de servicios. Esta información no será divulgada a
              terceros sin el consentimiento del cliente, salvo obligación legal.
            </p>
            <p>
              El tratamiento de datos personales se rige por nuestra{" "}
              <a
                href="/politica-privacidad"
              >
                Política de Privacidad
              </a>
              , que forma parte integral de estos Términos de Servicio.
            </p>
          </section>

          <section>
            <h2>
              6. Limitación de responsabilidad
            </h2>
            <p>
              SINBLIX pone el máximo esfuerzo en la calidad y disponibilidad de
              sus servicios, pero no garantiza que el sitio web esté libre de
              errores o interrupciones en todo momento.
            </p>
            <p>
              En la máxima medida permitida por la ley, SINBLIX no será
              responsable por:
            </p>
            <ul>
              <li>
                Daños directos, indirectos o consecuentes derivados del uso o
                imposibilidad de uso del sitio web.
              </li>
              <li>
                Interrupciones del servicio causadas por factores externos,
                como fallos de infraestructura de terceros o eventos de fuerza
                mayor.
              </li>
              <li>
                Pérdidas derivadas de decisiones tomadas con base en la
                información publicada en el sitio.
              </li>
            </ul>
          </section>

          <section>
            <h2>
              7. Contratación de servicios
            </h2>
            <p>
              Los servicios de SINBLIX se contratan mediante acuerdo comercial
              formalizado entre las partes. El inicio de cualquier proyecto
              requiere la aprobación de una propuesta y, cuando corresponda, la
              firma de un contrato de servicios que establece:
            </p>
            <ul>
              <li>Alcance y entregables del proyecto.</li>
              <li>Plazos y cronograma de entrega.</li>
              <li>Condiciones de pago.</li>
              <li>Propiedad intelectual sobre los desarrollos.</li>
              <li>Cláusulas de soporte y mantenimiento post-entrega.</li>
            </ul>
            <p>
              La información publicada en este sitio web tiene carácter
              informativo y no constituye una oferta vinculante.
            </p>
          </section>

          <section>
            <h2>
              8. Tarifas y pagos
            </h2>
            <p>
              Las tarifas por los servicios de SINBLIX se acuerdan de forma
              individualizada en cada propuesta comercial. SINBLIX podrá
              actualizar sus precios en cualquier momento; no obstante, los
              proyectos ya contratados se regirán por las condiciones
              económicas pactadas en el contrato vigente.
            </p>
            <p>
              Los pagos deben realizarse en los plazos y condiciones establecidos
              en cada contrato. El incumplimiento de pagos podrá derivar en la
              suspensión del servicio o la terminación del contrato.
            </p>
          </section>

          <section>
            <h2>
              9. Modificaciones de los términos
            </h2>
            <p>
              SINBLIX se reserva el derecho de actualizar estos Términos de
              Servicio en cualquier momento para reflejar cambios en la
              legislación aplicable, en la oferta de servicios o en las prácticas
              operativas de la empresa. La fecha de entrada en vigencia
              publicada al inicio del documento indica la versión en uso. El
              uso continuado del sitio web o de los servicios después de
              publicarse las modificaciones implica la aceptación de los nuevos
              términos.
            </p>
          </section>

          <section>
            <h2>
              10. Ley aplicable y resolución de disputas
            </h2>
            <p>
              Estos Términos de Servicio se rigen por la legislación vigente en
              la jurisdicción aplicable al domicilio de SINBLIX. Cualquier
              controversia derivada del uso de los servicios o de la
              interpretación de estos términos se resolverá, en primera
              instancia, mediante negociación directa entre las partes. De no
              alcanzarse un acuerdo, las partes se someterán a la jurisdicción
              de los tribunales competentes.
            </p>
          </section>

          <section>
            <h2>11. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos Términos de Servicio o deseas
              solicitar información adicional, puedes contactarnos por WhatsApp
              en{" "}
              <a
                href="https://wa.me/584121785954"
                target="_blank"
                rel="noopener noreferrer"
              >
                +58 412 178 5954
              </a>{" "}
              o a través del formulario de contacto disponible en nuestro sitio
              web.
            </p>
          </section>
        </div>
      </div></div>
      </main>
      <SiteFooter />
    </>
  );
}
