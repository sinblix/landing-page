"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Círculos brillantes simples que pulsan */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/18 blur-3xl"
            style={{
              width: `${450 + i * 200}px`,
              height: `${450 + i * 200}px`,
              left: `${10 + i * 30}%`,
              top: `${15 + i * 25}%`,
              animation: `pulse ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Partículas pequeñas que brillan */}
      <div className="absolute inset-0">
        {Array.from({ length: 70 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: "3px",
              height: "3px",
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.1) % 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
