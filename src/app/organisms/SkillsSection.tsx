"use client";

import React from "react";
import Heading from "../atoms/Heading";
import SkillCard from "../molecules/SkillCard";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Zap,
  GitBranch,
  Shield,
  Cloud,
  Cpu
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "React/Next.js",
      icon: <Code2 size={24} />,
      proficiency: 95,
      color: "#61DAFB",
    },
    {
      name: "Node.js/Express",
      icon: <Database size={24} />,
      proficiency: 90,
      color: "#339933",
    },
    {
      name: "TypeScript",
      icon: <Code2 size={24} />,
      proficiency: 88,
      color: "#3178C6",
    },
    {
      name: "HTML/CSS",
      icon: <Globe size={24} />,
      proficiency: 92,
      color: "#E34F26",
    },
    {
      name: "React Native",
      icon: <Smartphone size={24} />,
      proficiency: 85,
      color: "#00D8FF",
    },
    {
      name: "UI/UX Design",
      icon: <Palette size={24} />,
      proficiency: 80,
      color: "#FF6B6B",
    },
    {
      name: "Performance",
      icon: <Zap size={24} />,
      proficiency: 87,
      color: "#FFD700",
    },
    {
      name: "Git/GitHub",
      icon: <GitBranch size={24} />,
      proficiency: 93,
      color: "#F05032",
    },
    {
      name: "Security",
      icon: <Shield size={24} />,
      proficiency: 82,
      color: "#4CAF50",
    },
    {
      name: "Cloud/AWS",
      icon: <Cloud size={24} />,
      proficiency: 78,
      color: "#FF9900",
    },
    {
      name: "Testing",
      icon: <Cpu size={24} />,
      proficiency: 85,
      color: "#9C27B0",
    },
    {
      name: "DevOps",
      icon: <Database size={24} />,
      proficiency: 75,
      color: "#2196F3",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção de habilidades técnicas"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <Heading level={2} aria-label="Título da seção de habilidades">
            Minhas <span className="text-accent">Habilidades</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            O que utilizo para criar soluções digitais 
            inovadoras e de alta qualidade.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              proficiency={skill.proficiency}
              color={skill.color}
            />
          ))}
        </div>

        {/* Estatísticas adicionais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-4xl font-bold text-accent mb-2">12</div>
            <div className="text-text-light/70">Tecnologias Principais</div>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <div className="text-text-light/70">Média de Proficiência</div>
          </div>
          
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-text-light/70">Disponibilidade para Aprendizado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 