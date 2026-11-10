import { ImageResponse } from "next/og";

// The 1200x630 share card (PNG) behind opengraph-image and twitter-image: WhatsApp and Facebook do
// not render SVG. Drawn in the "Noche en movimiento" look: night ground, serif headline, orange.
export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Sinblix: sistema POS y bot de WhatsApp con IA para negocios en Venezuela y Colombia";

// Instrument Serif for the headline, fetched once at build time (the card is static). If the
// fetch fails the card still renders in the default font.
async function loadSerif(style: "normal" | "italic"): Promise<ArrayBuffer | null> {
  try {
    const family = style === "italic" ? "Instrument+Serif:ital@1" : "Instrument+Serif";
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export async function renderOgCard() {
  const [regular, italic] = await Promise.all([loadSerif("normal"), loadSerif("italic")]);
  const fonts = [
    ...(regular ? [{ name: "Instrument Serif", data: regular, style: "normal" as const, weight: 400 as const }] : []),
    ...(italic ? [{ name: "Instrument Serif", data: italic, style: "italic" as const, weight: 400 as const }] : []),
  ];
  const serif = fonts.length ? "Instrument Serif" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0c0c0e",
          backgroundImage:
            "radial-gradient(circle at 88% 78%, rgba(255,122,47,0.45), rgba(255,122,47,0) 45%), radial-gradient(circle at 70% 100%, rgba(255,181,71,0.22), rgba(255,181,71,0) 40%)",
          color: "#f3eee6",
        }}
      >
        <div style={{ display: "flex", fontSize: 48, fontFamily: serif, letterSpacing: -0.5 }}>
          <span>Sinblix</span>
          <span style={{ color: "#ff8a3d" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: serif,
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: -1.5,
              maxWidth: 1000,
            }}
          >
            <span>La caja cuadrada y el WhatsApp respondido,</span>
            <span style={{ color: "#ff8a3d", fontStyle: "italic" }}>aunque tú no estés.</span>
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "#c9c2b7", maxWidth: 940 }}>
            Sistema POS y asistente de WhatsApp con IA para negocios en Venezuela y Colombia. Prueba gratis 30 días.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24 }}>
          <span style={{ background: "#ff7a2f", color: "#160800", padding: "10px 20px", borderRadius: 12 }}>
            Sinblix POS
          </span>
          <span style={{ border: "1px solid #3a3a40", padding: "10px 20px", borderRadius: 12 }}>Aria</span>
          <span style={{ border: "1px solid #3a3a40", padding: "10px 20px", borderRadius: 12 }}>
            Desarrollo a la medida
          </span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
