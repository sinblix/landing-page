import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurar el directorio raíz para evitar warnings de lockfiles múltiples
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
