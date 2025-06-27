"use client";

import React, { useState } from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Formulário enviado:", formData);
    // Reset do formulário
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "seu@email.com",
      href: "mailto:seu@email.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: <MapPin size={24} />,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/seu-perfil",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/seu-usuario",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/seu-usuario",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-8 bg-bg"
      aria-label="Seção de contato"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <Heading level={2} aria-label="Título da seção de contato">
            Entre em <span className="text-accent">Contato</span>
          </Heading>
          <p className="text-text-light/80 mt-4 max-w-2xl mx-auto">
            Vamos trabalhar juntos! Entre em contato para discutir projetos, 
            oportunidades ou apenas para bater um papo sobre tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-light mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-glass border border-white/10 hover:border-accent/50 transition-all duration-300 group"
                    aria-label={`${info.label}: ${info.value}`}
                  >
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-text-light">{info.label}</p>
                      <p className="text-text-light/80">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links sociais */}
            <div>
              <h3 className="text-2xl font-bold text-text-light mb-6">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 text-accent hover:border-accent/50 hover:scale-110 transition-all duration-300"
                    aria-label={`Visitar ${social.label}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-light">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-light mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-glass border border-white/10 text-text-light placeholder-text-light/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                    aria-describedby="name-error"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-light mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-glass border border-white/10 text-text-light placeholder-text-light/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="seu@email.com"
                    aria-describedby="email-error"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-light mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-glass border border-white/10 text-text-light placeholder-text-light/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder="Assunto da mensagem"
                  aria-describedby="subject-error"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-glass border border-white/10 text-text-light placeholder-text-light/50 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="Digite sua mensagem aqui..."
                  aria-describedby="message-error"
                />
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                aria-label="Enviar mensagem"
                className="w-full"
              >
                <Send size={20} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 