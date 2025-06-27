"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  description,
  technologies,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10 shadow-glass hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      {/* Linha do tempo */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/30 md:left-6" />
      
      {/* Ano */}
      <div className="flex-shrink-0 w-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
          {year}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-text-light mb-1">{title}</h3>
        <p className="text-accent font-semibold mb-2">{company}</p>
        <p className="text-text-light/80 mb-4 leading-relaxed">{description}</p>
        
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem; 