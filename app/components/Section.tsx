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
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${variantStyles[variant]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
