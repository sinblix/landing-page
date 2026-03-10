import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "dark" | "gradient";
  id?: string;
  className?: string;
}

export function Section({
  children,
  variant = "light",
  id,
  className = "",
}: SectionProps) {
  const variantStyles = {
    light: "bg-white",
    dark: "bg-slate-950 text-white",
    gradient: "bg-gradient-to-b from-orange-50 via-white to-orange-50/50",
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-24 lg:py-28 ${variantStyles[variant]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
