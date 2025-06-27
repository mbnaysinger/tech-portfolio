"use client";

import React from "react";
import Heading from "../atoms/Heading";
import { useI18n } from "../i18n/context";

const AboutSection = () => {
  const { t } = useI18n();
  
  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção sobre mim"
    >
      <div className="max-w-7xl mx-auto">
        {/* Grid de 12 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Coluna 1-6: Título e descrição */}
          <div className="md:col-span-6 space-y-6">
            <Heading level={2} aria-label="Título da seção sobre mim">
              {t('about.title')} <span className="text-accent">{t('about.highlight')}</span>
            </Heading>
            
            <div className="space-y-4 text-text-light/80 leading-relaxed text-justify">
              <p>
                {t('about.description')}
              </p>
              
              <p>
                {t('about.paragraph1')}
              </p>
              
              <p>
                {t('about.paragraph2')}
              </p>
            </div>
          </div>

          {/* Coluna 7-12: Estatísticas e informações */}
          <div className="md:col-span-6 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-text-light/70">{t('about.stats.experience')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-text-light/70">{t('about.stats.projects')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-text-light/70">{t('about.stats.technologies')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-light/70">{t('about.stats.satisfaction')}</div>
              </div>
            </div>

            {/* Informações pessoais */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-light mb-4">
                {t('about.personalInfo.title')}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">{t('about.personalInfo.name')}</span>
                  <span className="text-text-light/80">Seu Nome Completo</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">{t('about.personalInfo.email')}</span>
                  <span className="text-text-light/80">seu@email.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">{t('about.personalInfo.location')}</span>
                  <span className="text-text-light/80">Sua Cidade, Estado</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">{t('about.personalInfo.availability')}</span>
                  <span className="text-text-light/80">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 