"use client";

import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import HomeNavigation from "../atoms/HomeNavigation";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/context";

const HeroSection = () => {
  const { t } = useI18n();
  
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
      <HomeNavigation />
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-overlay z-10" />
      {/* Conteúdo */}
      <div className="relative z-20 w-full px-4 sm:px-8 flex flex-col items-center justify-center text-center"
        style={{ gridColumn: '1 / -1' }}
      >
        {/* Foto circular */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 mb-16 flex items-center justify-center bg-white/10 backdrop-blur-sm overflow-hidden"
             style={{ borderColor: '#39a190' }}>
          <Image
            src="/perfil.jpeg"
            alt="Foto de perfil de Maike"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-text-light mb-14" style={{ fontFamily: 'var(--font-inter), var(--font-geist-sans), system-ui, sans-serif' }}>
          {t('hero.greeting')} <span className="text-accent">{t('hero.name')}</span>.
          <br />
          {t('hero.title')}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            href="/cv.pdf"
            download
            variant="primary"
            size="lg"
            aria-label="Baixar currículo em PDF"
          >
            {t('hero.downloadCV')}
          </Button>
          
          <Button
            href="/articles"
            variant="outline"
            size="lg"
            aria-label="Ver artigos técnicos"
            className="hover:bg-accent/30"
          >
            📚 Conteúdos
          </Button>
        </div>
      </div>

      {/* Flecha pulsante para baixo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-2 text-accent hover:text-accent/80 transition-colors duration-300"
          aria-label="Rolar para a próxima seção"
        >
          <span className="text-sm font-medium opacity-80">{t('hero.actionDown')}</span>
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