# Portfólio Full-Stack Developer

Uma landing page single-page responsiva e moderna para portfólio de desenvolvedor full-stack, construída com React, Next.js e TypeScript.

## 🚀 Características

- **Design Responsivo**: Mobile-first com grid de 12 colunas
- **Arquitetura Atomic Design**: Componentes organizados em atoms, molecules, organisms e templates
- **Animações GSAP**: Barras de progresso animadas e scroll-triggered animations
- **Glassmorphism**: Cards com efeito glassmorphism 3D
- **Acessibilidade**: ARIA labels, navegação por teclado, foco visível
- **Performance**: Imagens WebP, lazy loading, Core Web Vitals otimizados
- **Tipografia**: Fonte Inter com escala modular 1.125
- **Paleta WCAG 2.2 AA**: Cores acessíveis e contrastantes

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **Next.js 15** com App Router
- **Tailwind CSS** com design tokens customizados
- **GSAP** para animações
- **Lucide React** para ícones
- **Framer Motion** para micro-animações

## 📁 Estrutura do Projeto

```
src/app/
├── atoms/           # Componentes básicos (Button, Heading)
├── molecules/       # Componentes compostos (SkillCard, TimelineItem)
├── organisms/       # Seções completas (AboutSection, SkillsSection, etc.)
├── templates/       # Templates de página (HeroSection)
├── globals.css      # Estilos globais e design tokens
├── layout.tsx       # Layout principal
└── page.tsx         # Página inicial
```

## 🎨 Design Tokens

- **Cores**: `#0A192F` (bg), `#64FFDA` (accent), `#CCD6F6` (text light)
- **Tipografia**: Inter Variable Font
- **Grid**: 12 colunas fluidas
- **Espaçamento**: Escala modular 1.125

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar**: http://localhost:3000

## 📝 Personalização

### 1. Conteúdo
- Edite os dados em cada seção (AboutSection, SkillsSection, etc.)
- Substitua "Seu Nome" pelo seu nome real
- Atualize links de redes sociais e contato

### 2. Mídia
- Substitua `/public/hero-bg.mp4` por um vídeo de fundo
- Adicione `/public/cv.pdf` com seu currículo
- Substitua imagens de projetos em `/public/project*.webp`

### 3. Cores
- Edite as variáveis CSS em `src/app/globals.css`
- Modifique os design tokens em `tailwind.config.mjs`

### 4. Animações
- Ajuste as animações GSAP nos componentes
- Modifique as durações e easing functions

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Navegação por teclado
- ARIA labels em todos os elementos interativos
- Contraste WCAG 2.2 AA
- Foco visível em todos os elementos

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

```bash
npm run build
npm start
```

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

Desenvolvido com ❤️ usando Next.js e TypeScript
