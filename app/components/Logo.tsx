import Image from "next/image";
import { brandConfig } from "@/app/config/brand";

type LogoVariant = "default" | "white" | "text" | "background";
type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const sizeMap: Record<LogoSize, number> = {
  sm: 120,
  md: 180,
  lg: 240,
};

export function Logo({ variant = "default", size = "md", className = "" }: LogoProps) {
  const logoPath = brandConfig.assets.logos[variant];
  const logoHeight = sizeMap[size];

  return (
    <Image
      src={logoPath}
      alt="SINBLIX Logo"
      width={logoHeight}
      height={logoHeight}
      className={className}
      priority
    />
  );
}
