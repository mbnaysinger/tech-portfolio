"use client";

import React from "react";
import Heading from "../atoms/Heading";
import SafeHtml from "../atoms/SafeHtml";
import { useI18n } from "../i18n/context";

const AboutSection = () => {
  const { t } = useI18n();
  
  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção sobre mim"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título e descrição - largura total */}
        <div className="space-y-6 mb-16">
          <Heading level={2} aria-label="Título da seção sobre mim">
            {t('about.title')} <span className="text-accent">{t('about.highlight')}</span>
          </Heading>
          
          <div className="space-y-4 text-text-light/80 leading-relaxed text-justify">
            <SafeHtml html={t('about.description')} />
            
            <p>
              <SafeHtml html={t('about.paragraph1')} />
            </p>
            
            <p>
              <SafeHtml html={t('about.paragraph2')} />
            </p>

            <p>
              <SafeHtml html={t('about.paragraph3')} />
            </p>

            <p>
              <SafeHtml html={t('about.paragraph4')} />
            </p>

            <p>
              <SafeHtml html={t('about.paragraph5')} />
            </p>
          </div>
        </div>

        {/* Estatísticas e informações pessoais - abaixo do texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Estatísticas */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-text-light mb-6">
              Estatísticas
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="text-text-light/70">{t('about.stats.experience')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">9+</div>
                <div className="text-text-light/70">{t('about.stats.projects')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-text-light/70">{t('about.stats.technologies')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-light/70">{t('about.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Informações pessoais */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-text-light mb-6">
              {t('about.personalInfo.title')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <span className="text-accent font-semibold min-w-[80px]">{t('about.personalInfo.name')}</span>
                <span className="text-text-light/80">Maike Naysinger Borges</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <span className="text-accent font-semibold min-w-[80px]">{t('about.personalInfo.email')}</span>
                <span className="text-text-light/80">maikenborges@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <span className="text-accent font-semibold min-w-[80px]">{t('about.personalInfo.location')}</span>
                <span className="text-text-light/80">Gravataí, RS - Brasil</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <span className="text-accent font-semibold min-w-[80px]">{t('about.personalInfo.availability')}</span>
                <span className="text-text-light/80"><strong>Atuando</strong> sob regime CLT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 