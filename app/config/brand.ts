// Configuración de marca - Solo colores y assets
// Los textos ahora se manejan a través del sistema de i18n
export const brandConfig = {
  colors: {
    primary: "#FF8C42", // Naranja mango maduro
    secondary: "#9ACD32", // Verde mango
    accent: "#FF6B35", // Naranja intenso
    background: "#FFF8F0", // Fondo cálido crema
    text: "#1A1A1A",
    textLight: "#6B7280",
  },
  assets: {
    logos: {
      default: "/logos/logo.svg",
      white: "/logos/logo-white.svg",
      text: "/logos/logo-text.svg",
      background: "/logos/logo-background.svg",
    },
  },
} as const;
