"use client";

import React from "react";
import Image from "next/image";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import { GithubIcon, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Microsserviço de Votação",
      description: "Solução desenvolvida para votação de pautas, dividida por sessões. Regras aplicadas para fechamento de sessões, validação de CPF e facilidade de auditoria de dados",
      image: "/voting-solution.png",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "K6", "Testcontainers", "Clean Architecture", "Gradle"],
      demoUrl: null,
      githubUrl: "https://github.com/mbnaysinger/voting-solution",
      featured: true,
    },
    {
      title: "Allocation Team",
      description: "Aplicação de gerenciamento de tarefas semanal com drag-and-drop, com gestão de demandas de projetos, melhorias e sustentações.",
      image: "/allocation-team.png",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Docker", "Monolito", "Scrum", "Desacoplamento servidor-cliente"],
      demoUrl: "https://allocation-team.vercel.app/",
      githubUrl: "https://github.com/mbnaysinger/allocation-team",
      featured: true,
    },
    // {
    //   title: "Portfolio Website",
    //   description: "Site portfólio responsivo com animações, SEO otimizado e performance de alta qualidade.",
    //   image: "/project.jpg",
    //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    //   demoUrl: "/",
    //   githubUrl: "/",
    //   featured: false,
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Dashboard meteorológico com dados em tempo real, gráficos interativos e previsões detalhadas.",
    //   image: "/project.jpg",
    //   technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vite", "Netlify"],
    //   demoUrl: "/",
    //   githubUrl: "/",
    //   featured: false,
    // },
    // {
    //   title: "Social Media Clone",
    //   description: "Clone de rede social com feed, posts, comentários, likes e sistema de seguidores.",
    //   image: "/project.jpg",
    //   technologies: ["React Native", "Firebase", "Redux", "Expo", "Google Auth"],
    //   demoUrl: "/",
    //   githubUrl: "/",
    //   featured: false,
    // },
    // {
    //   title: "AI Chat Assistant",
    //   description: "Assistente de chat com IA integrada, processamento de linguagem natural e interface conversacional.",
    //   image: "/project.jpg",
    //   technologies: ["React", "OpenAI API", "Node.js", "WebSocket", "Docker"],
    //   demoUrl: "/",
    //   githubUrl: "/",
    //   featured: false,
    // },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção de projetos desenvolvidos"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <Heading level={2} aria-label="Título da seção de projetos">
            Meus <span className="text-accent">Projetos</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando habilidades técnicas 
            e criatividade na solução de problemas.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-glass border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-105 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Imagem do projeto */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-text-light/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de ação */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    variant="primary"
                    size="sm"
                    aria-label={`Ver demo do projeto ${project.title}`}
                    className="flex-1"
                  >
                    <Play size={16} className="mr-2" />
                    Demo
                  </Button>
                  )}
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                    className="flex-1"
                  >
                    <GithubIcon size={16} className="mr-2" />
                    Código
                  </Button>
                </div>
              </div>

              {/* Badge de destaque */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-bg text-xs font-semibold">
                    Destaque
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA para mais projetos */}
        <div className="text-center mt-16">
          <Button
            href="https://github.com/mbnaysinger"
            variant="outline"
            size="lg"
            aria-label="Ver mais projetos no GitHub"
          >
            <GithubIcon size={20} className="mr-2" />
            Ver Mais Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 