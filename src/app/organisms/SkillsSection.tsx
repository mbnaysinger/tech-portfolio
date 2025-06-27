"use client";

import React from "react";
import Heading from "../atoms/Heading";
import SkillCard from "../molecules/SkillCard";
import { 
  Code2, 
  Database, 
  GitBranch,
  Cloud,
  Brain,
  PhoneIncoming,
  ChartNoAxesCombined
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Comunicação",
      icon: <PhoneIncoming size={24} />,
      proficiency: 90,
      color: "#9C27B0",
    },
    {
      name: "Soluções de IA",
      icon: <Brain size={24} />,
      proficiency: 70,
      color: "#FFD700",
    },
    {
      name: "Java/Spring",
      icon: <Code2 size={24} />,
      proficiency: 85,
      color: "#61DAFB",
    },
    {
      name: "Node.js/Nest",
      icon: <Code2 size={24} />,
      proficiency: 60,
      color: "#339933",
    },
    {
      name: "PHP/Laravl",
      icon: <Code2 size={24} />,
      proficiency: 40,
      color: "#3178C6",
    },
    {
      name: "Next.js",
      icon: <Code2 size={24} />,
      proficiency: 30,
      color: "#E34F26",
    },
    {
      name: "Oracle, Postgre, MySQL",
      icon: <Database size={24} />,
      proficiency: 85,
      color: "#FF6B6B",
    },
    {
      name: "Mongo, CosmosDB",
      icon: <Database size={24} />,
      proficiency: 70,
      color: "#FFD700",
    },
    {
      name: "Git (GitHub/Bitbucket)",
      icon: <GitBranch size={24} />,
      proficiency: 83,
      color: "#61DAFB",
    },
    {
      name: "Cloud/Azure",
      icon: <Cloud size={24} />,
      proficiency: 50,
      color: "#FF9900",
    },
    {
      name: "Gestão de Projetos",
      icon: <ChartNoAxesCombined size={24} />,
      proficiency: 80,
      color: "#4CAF50",
    },
    // {
    //   name: "Testes Unitários e Manuais",
    //   icon: <Cpu size={24} />,
    //   proficiency: 60,
    //   color: "#9C27B0",
    // },
    {
      name: "DevOps",
      icon: <Database size={24} />,
      proficiency: 45,
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
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection; 