import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";
const pageUrl = `${baseUrl}/politica-privacidad`;

export const metadata: Metadata = {
  title: "Política de Privacidad | SINBLIX",
  description:
    "Política de privacidad de SINBLIX: cómo recopilamos, usamos y protegemos datos personales en nuestro sitio web y canales de contacto.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Política de Privacidad | SINBLIX",
    description:
      "Conoce cómo SINBLIX gestiona tus datos personales y protege tu información.",
    url: pageUrl,
    siteName: "SINBLIX",
    type: "article",
    images: [
      {
        url: `${baseUrl}/logos/mango.svg`,
        width: 1200,
        height: 630,
        alt: "SINBLIX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | SINBLIX",
    description:
      "Conoce cómo SINBLIX gestiona tus datos personales y protege tu información.",
    images: [`${baseUrl}/logos/mango.svg`],
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-4 text-gray-600">
          Fecha de entrada en vigencia: 10 de marzo de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-2xl font-semibold">1. Responsable</h2>
            <p className="mt-2">
              SINBLIX es responsable del tratamiento de los datos personales
              recopilados mediante este sitio y sus canales oficiales de
              contacto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Datos que recopilamos</h2>
            <p className="mt-2">
              Podemos recopilar datos de contacto como nombre, correo,
              teléfono, empresa y el contenido de tu mensaje cuando solicitas
              una consulta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Finalidad del uso</h2>
            <p className="mt-2">
              Usamos tus datos para responder solicitudes, enviar propuestas,
              prestar servicios, mejorar el sitio y medir desempeño comercial y
              de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Base legal y conservación
            </h2>
            <p className="mt-2">
              Tratamos datos por consentimiento del usuario y por interés
              legítimo de negocio. Conservamos la información durante el tiempo
              necesario para cumplir las finalidades descritas o requisitos
              legales aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Cookies y analítica</h2>
            <p className="mt-2">
              Este sitio puede usar tecnologías de medición y seguimiento para
              analizar uso, mejorar experiencia y optimizar campañas. Puedes
              configurar tu navegador para bloquear cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Compartición de datos</h2>
            <p className="mt-2">
              No vendemos datos personales. Podemos compartir información con
              proveedores tecnológicos que nos ayudan a operar el sitio o
              entregar servicios, bajo acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Tus derechos</h2>
            <p className="mt-2">
              Puedes solicitar acceso, rectificación, actualización o supresión
              de tus datos escribiendo a nuestro canal de contacto oficial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Contacto</h2>
            <p className="mt-2">
              Para cualquier consulta sobre privacidad puedes contactarnos por
              WhatsApp en{" "}
              <a
                className="text-orange-600 hover:text-orange-700"
                href="https://wa.me/584121785954"
                target="_blank"
                rel="noopener noreferrer"
              >
                +58 412 178 5954
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
