import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sinblix.com";
const pageUrl = `${baseUrl}/politica-privacidad`;

export const metadata: Metadata = {
  title: "Política de Privacidad | SINBLIX",
  description:
    "Política de privacidad de SINBLIX sobre privacidad de datos en software, seguridad en automatización y uso responsable de información personal.",
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
            <h2 className="text-2xl font-semibold">
              1. Introducción - SINBLIX y compromiso con la privacidad
            </h2>
            <p className="mt-2">
              En SINBLIX (https://www.sinblix.com/) desarrollamos soluciones de
              automatización de procesos, software a medida y gestión de leads
              con inteligencia artificial. Esta Política de Privacidad explica
              cómo tratamos tus datos personales conforme a principios de
              transparencia, seguridad y responsabilidad digital, alineados con
              buenas prácticas de GDPR y LSSI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              2. Datos recolectados y privacidad de datos en software
            </h2>
            <h3 className="mt-4 text-xl font-semibold">Datos de contacto</h3>
            <p className="mt-2">
              Cuando nos contactas, podemos recopilar nombre, correo
              electrónico, teléfono, empresa y detalles de tu solicitud para
              poder responderte y ofrecer una propuesta adecuada.
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Cookies y tecnologías de seguimiento
            </h3>
            <p className="mt-2">
              Utilizamos cookies y tecnologías similares para analizar tráfico,
              mejorar funcionalidades del sitio y medir rendimiento de campañas.
              Puedes gestionar o desactivar cookies desde tu navegador.
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              Redes sociales (Instagram y TikTok)
            </h3>
            <p className="mt-2">
              Si interactúas con nuestros perfiles o contenidos en Instagram o
              TikTok, podríamos recibir datos públicos de interacción conforme a
              la configuración de privacidad de cada plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. Finalidad del tratamiento para servicios de automatización e IA
            </h2>
            <p className="mt-2">
              Tratamos los datos para: (a) responder solicitudes comerciales, (b)
              ofrecer y ejecutar servicios de software, automatización y
              consultoría tecnológica, (c) mejorar la experiencia de usuario y
              (d) fortalecer la calidad y seguridad de nuestras soluciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Base legal, conservación y Seguridad en automatización
            </h2>
            <p className="mt-2">
              La base jurídica principal es tu consentimiento, la ejecución de
              medidas precontractuales y, cuando corresponda, nuestro interés
              legítimo. Conservamos la información solo durante el tiempo
              necesario para cumplir estas finalidades y obligaciones legales.
              Aplicamos medidas técnicas y organizativas razonables para
              proteger los datos contra acceso no autorizado, pérdida o uso
              indebido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Derechos del usuario (ARCO)
            </h2>
            <p className="mt-2">
              Puedes ejercer tus derechos ARCO:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Acceso:</strong> conocer qué datos personales tratamos.
              </li>
              <li>
                <strong>Rectificación:</strong> corregir datos inexactos o
                incompletos.
              </li>
              <li>
                <strong>Cancelación:</strong> solicitar eliminación cuando sea
                procedente.
              </li>
              <li>
                <strong>Oposición:</strong> limitar o oponerte a determinados
                tratamientos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              6. Uso de cookies, terceros e integraciones seguras
            </h2>
            <p className="mt-2">
              No vendemos tus datos personales. Podemos compartir información
              estrictamente necesaria con proveedores tecnológicos de hosting,
              analítica, automatización y comunicación, siempre bajo criterios
              de seguridad y confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              7. SINBLIX y Privacidad de datos en software
            </h2>
            <p className="mt-2">
              Trabajamos continuamente para reforzar la privacidad de datos en
              software y la seguridad en automatización en cada etapa de diseño,
              desarrollo y operación de nuestras soluciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Contacto</h2>
            <p className="mt-2">
              Para ejercer tus derechos ARCO o realizar consultas sobre esta
              política, contáctanos por WhatsApp en{" "}
              <a
                className="text-orange-600 hover:text-orange-700"
                href="https://wa.me/584121785954"
                target="_blank"
                rel="noopener noreferrer"
              >
                +58 412 178 5954
              </a>
              . Esta política puede actualizarse para reflejar cambios legales o
              mejoras en nuestros servicios.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
