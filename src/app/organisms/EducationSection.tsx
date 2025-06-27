"use client";

import React from "react";
import Heading from "../atoms/Heading";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useI18n } from "../i18n/context";

const EducationSection = () => {
  const { t } = useI18n();

  const education = [
    {
      degree: "Bacharelado em Engenharia Química",
      institution: "Universidade Luterana do Brasil",
      period: "2013 - 2019",
      location: "Canoas, RS",
      description: "Formação completa em arquitetura com foco em design sustentável, planejamento urbano e tecnologias de construção.",
      highlights: ["Projeto de TCC premiado", "Participação em concursos de arquitetura", "Estágio em escritório renomado"]
    },
    {
      degree: "CST em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Cruzeiro do Sul",
      period: "2019 - 2021",
      location: "Gravataí, RS",
      description: "Formação técnica em programação, redes e sistemas de informação.",
      highlights: ["Desenvolvimento de projetos práticos", "Participação em feiras de tecnologia", "Estágio em empresa de TI"]
    },
    {
      degree: "MIT em Arquitetura de Software",
      institution: "Instituto Infnet",
      period: "2024 - 2025",
      location: "Remoto Ao Vivo",
      description: "Especialização em desenvolvimento web moderno com React, Node.js e TypeScript.",
      highlights: ["Projetos práticos completos", "Mentoria com profissionais", "Certificação em tecnologias modernas"]
    },
    {
      degree: "MBA em Gestão de Projetos e Metodologias Ágeis",
      institution: "PUC RS",
      period: "2025",
      location: "Online",
      description: "Especialização em design de interfaces e experiência do usuário.",
      highlights: ["Design thinking", "Prototipagem avançada", "Pesquisa com usuários"]
    }
  ];

  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção de formações acadêmicas"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <Heading level={2} aria-label="Título da seção de formações">
            {t('education.title')} <span className="text-accent">{t('education.highlight')}</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        {/* Grid de formações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              {/* Ícone */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-light">
                    {item.degree}
                  </h3>
                  <p className="text-accent font-medium">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Informações */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-text-light/70">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center text-text-light/70">
                  <MapPin size={16} className="mr-2" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-text-light/80 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Destaques */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-accent">{t('education.highlights')}</h4>
                <ul className="space-y-1">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="text-sm text-text-light/70 flex items-start"
                    >
                      <span className="text-accent mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Efeito de hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA para certificações */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-text-light/70">
            <span>{t('education.certificationsCTA')}</span>
            <a
              href="#contact"
              className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
            >
              {t('education.contactCTA')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 