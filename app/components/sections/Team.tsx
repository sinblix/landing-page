"use client";

import { Section } from "../Section";
import { useTranslation } from "@/app/i18n/hooks";
import Image from "next/image";
import { useState } from "react";

function TeamMember({
  member,
}: {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
  };
}) {
  const [imageError, setImageError] = useState(false);
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="rounded-2xl p-8 border border-slate-700 bg-slate-900/80 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 overflow-hidden">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
      <p className="text-orange-400 font-medium mb-4">{member.role}</p>
      <p className="text-gray-300 leading-relaxed mb-4">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  );
}

export function Team() {
  const t = useTranslation();

  return (
    <Section variant="dark" id="equipo">
      <div className="text-center mb-16">
        <h2 className="sinblix-section-title text-white mb-4">
          {t.team.title}
        </h2>
        <p className="text-lg text-gray-300/95 max-w-2xl mx-auto leading-relaxed">
          {t.team.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {t.team.items.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </Section>
  );
}
