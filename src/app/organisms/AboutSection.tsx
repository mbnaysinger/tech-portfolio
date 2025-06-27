import React from "react";
import Heading from "../atoms/Heading";

const AboutSection = () => {
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
              Sobre <span className="text-accent">Mim</span>
            </Heading>
            
            <div className="space-y-4 text-text-light/80 leading-relaxed text-justify">
              <p>
                Sou um desenvolvedor full-stack apaixonado por criar soluções digitais 
                inovadoras e experiências de usuário excepcionais. Com experiência em 
                tecnologias modernas, busco sempre aprender e evoluir.
              </p>
              
              <p>
                Trabalho com React, Node.js, TypeScript e outras tecnologias para 
                construir aplicações web escaláveis e performáticas. Acredito que 
                código limpo e bem estruturado é fundamental para o sucesso de 
                qualquer projeto.
              </p>
              
              <p>
                Quando não estou codificando, gosto de contribuir para a comunidade 
                open-source, participar de hackathons e compartilhar conhecimento 
                através de artigos e palestras.
              </p>
            </div>
          </div>

          {/* Coluna 7-12: Estatísticas e informações */}
          <div className="md:col-span-6 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-text-light/70">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-text-light/70">Projetos Concluídos</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-text-light/70">Tecnologias Dominadas</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-text-light/70">Satisfação do Cliente</div>
              </div>
            </div>

            {/* Informações pessoais */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-light mb-4">
                Informações Pessoais
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">Nome:</span>
                  <span className="text-text-light/80">Seu Nome Completo</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">Email:</span>
                  <span className="text-text-light/80">seu@email.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">Localização:</span>
                  <span className="text-text-light/80">Sua Cidade, Estado</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-accent font-semibold">Disponibilidade:</span>
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