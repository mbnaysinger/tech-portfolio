"use client";

import React from "react";
import Button from "../atoms/Button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('[aria-label="Seção sobre mim"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-bg text-text-light overflow-hidden"
      aria-label="Seção de introdução do portfólio"
    >
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.webp"
        aria-hidden="true"
      />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-overlay z-10" />
      {/* Conteúdo */}
      <div className="relative z-20 w-full px-4 sm:px-8 flex flex-col items-center justify-center text-center"
        style={{ gridColumn: '1 / -1' }}
      >
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-text-light mb-6" style={{ fontFamily: 'var(--font-inter), var(--font-geist-sans), system-ui, sans-serif' }}>
          Olá, me chamo <span className="text-accent">Maike</span>, Arquiteto e Desenvolvedor Full-Stack.
        </h1>
        <Button
          href="/cv.pdf"
          download
          variant="primary"
          size="lg"
          aria-label="Baixar currículo em PDF"
        >
          Baixar CV
        </Button>
      </div>

      {/* Flecha pulsante para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 text-accent hover:text-accent/80 transition-colors duration-300"
          aria-label="Rolar para a próxima seção"
        >
          <span className="text-sm font-medium opacity-80">Ver mais</span>
          <div className="relative">
            <ChevronDown 
              size={24} 
              className="animate-bounce group-hover:animate-none transition-all duration-300 group-hover:scale-110" 
            />
            {/* Efeito de pulso */}
            <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping group-hover:animate-none" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 