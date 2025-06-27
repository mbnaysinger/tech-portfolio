"use client";

import React from "react";
import Heading from "../atoms/Heading";
import TimelineItem from "../molecules/TimelineItem";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2023",
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Liderança técnica em projetos de grande escala, arquitetura de sistemas, mentoria de desenvolvedores juniores e implementação de boas práticas de desenvolvimento.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Innovations",
      description: "Desenvolvimento de aplicações web e mobile, integração com APIs, otimização de performance e implementação de testes automatizados.",
      technologies: ["React", "React Native", "Express", "MongoDB", "Jest"],
    },
    {
      year: "2021",
      title: "Frontend Developer",
      company: "Web Studio",
      description: "Criação de interfaces responsivas, implementação de designs, otimização de UX/UI e colaboração com equipes de design e backend.",
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Figma"],
    },
    {
      year: "2020",
      title: "Junior Developer",
      company: "StartupXYZ",
      description: "Desenvolvimento de features, manutenção de código, debugging e aprendizado de tecnologias modernas de desenvolvimento web.",
      technologies: ["JavaScript", "HTML", "CSS", "Git", "Agile"],
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção de experiências profissionais"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <Heading level={2} aria-label="Título da seção de experiências">
            Minha <span className="text-accent">Experiência</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            Jornada profissional e conquistas ao longo dos anos de desenvolvimento.
          </p>
        </div>

        {/* Timeline horizontal com scroll-snap */}
        <div className="relative">
          {/* Linha horizontal central */}
          {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-accent/30 transform -translate-y-1/2 z-0" /> */}
          
          {/* Container com scroll horizontal */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-hide">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-96 snap-start"
              >
                <TimelineItem
                  year={experience.year}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                  technologies={experience.technologies}
                />
              </div>
            ))}
          </div>

          {/* Indicadores de scroll */}
          <div className="flex justify-center mt-8 space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-accent/30 hover:bg-accent/60 transition-colors duration-200"
                aria-label={`Ir para experiência ${index + 1}`}
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container) {
                    container.scrollTo({
                      left: index * 384, // 96 * 4 (w-96)
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Estatísticas de carreira */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">4</div>
            <div className="text-text-light/70">Empresas</div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-text-light/70">Projetos</div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-text-light/70">Tecnologias</div>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-text-light/70">Satisfação</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExperienceSection; 