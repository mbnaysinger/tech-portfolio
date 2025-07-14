"use client";

import React from "react";
import Heading from "../atoms/Heading";
import TimelineItem from "../molecules/TimelineItem";
import { useI18n } from "../i18n/context";

const ExperienceSection = () => {
  const { t } = useI18n();
  
  const experiences = [
    {
      year: "2025",
      title: "Arquiteto de Soluções",
      company: "FIERGS",
      description: "Liderança técnica em projetos de grande escala, arquitetura de soluções, mentoria de desenvolvedores juniores e implementação de boas práticas de desenvolvimento com ferramentas de IA.",
      technologies: ["IA Solutions", "Java", "Spring", "TypeScript", "NestJS", "PHP Laravel", "Next.js", "MySQL", "MongoDB", "Oracle", "Azure", "Docker", "Kubernetes", "Jenkins", "Scrum Master", "C4 Model", "Togaf", "Product Owner"],
    },
    {
      year: "2023",
      title: "Analista de TI Sênior",
      company: "FIERGS",
      description: "Desenvolvimento de aplicações web, integração com APIs, otimização de performance e implementação de testes automatizados. Mentoria de desenvolvedores juniores e implementação de boas práticas de desenvolvimento com ferramentas de IA.",
      technologies: ["IA Solutions", "Java", "Spring", "PHP Laravel", "MySQL", "MongoDB", "Oracle", "Azure", "Docker", "Jenkins", "Scrum Master", "Product Owner"],
    },
    {
      year: "2022",
      title: "Analista de TI Pleno",
      company: "FIERGS",
      description: "Desenvolvimento de APIs Restful, integração com APIs de terceiros, otimização de performance e implementação de testes automatizados.",
      technologies: ["Java", "Spring", "Oracle", "Angular", "Webflux", "WebMVC", "Comunicação", "Análise de Requisitos"],
    },
    {
      year: "2021",
      title: "Analista de TI Júnior",
      company: "FIERGS",
      description: "Sustentação e desenvolvimento de melhoras em portal legado de serviços de comércio exterior da organização. Foco em manter operacionalidade nas emissões de Certificado de Origem.",
      technologies: ["Java 6, 7 e 8", "Hibernate", "Primefaces", "Oracle", "Velocity Template", "SVN", "WebLogic"],
    },
    {
      year: "2020",
      title: "Analista de TI Autônomo",
      company: "2M2B",
      description: "Desenvolvimento de aplicações web utilizando PHP Laravel com Vue.js e/ou Express.js com Angular.",
      technologies: ["PHP Laravel", "Vue.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    },
    {
      year: "2013",
      title: "Técnico em Química Sênior",
      company: "PPG Industries",
      description: "7 anos de experiência em desenvolvimento de tintas arquitetônicas base água e solvente, com foco em redução de custo, melhoria de qualidade e redução de impacto ambiental.",
      technologies: ["Química", "Formulação", "Engenharia de Procesoss", "Tintas Arquitetônicas", "Base Água", "Base Solvente"],
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
            {t('experience.title')} <span className="text-accent">{t('experience.highlight')}</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            {t('experience.subtitle')}
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
                className="flex-shrink-0 w-full md:w-96 snap-start text-left"
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