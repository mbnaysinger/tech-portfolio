"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  proficiency: number; // 0-100
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  proficiency,
  color = "#39a190",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && progressRef.current) {
      // Animação de entrada do card
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Animação da barra de progresso
      gsap.fromTo(
        progressRef.current,
        {
          width: 0,
        },
        {
          width: `${proficiency}%`,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [proficiency]);

  return (
    <div
      ref={cardRef}
      className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Ícone */}
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-accent">
        {icon}
      </div>

      {/* Nome da skill */}
      <h3 className="text-lg font-semibold text-text-light mb-3">{name}</h3>

      {/* Barra de progresso */}
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full rounded-full transition-all duration-300"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>

      {/* Porcentagem */}
      <p className="text-sm text-text-light/70 mt-2">{proficiency}%</p>

      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default SkillCard; 