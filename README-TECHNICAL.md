# 📋 README Técnico - Contexto para IA

## 🏗️ Arquitetura do Projeto

### Stack Principal
- **Framework**: Next.js 15.3.4 (App Router)
- **Runtime**: React 19.0.0 + TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animations**: GSAP 3.13
- **Icons**: Lucide React 0.523.0
- **Analytics**: Vercel Analytics 1.5.0

### Estrutura de Pastas (Atomic Design)
```
src/app/
├── atoms/              # Componentes básicos reutilizáveis
│   ├── Button.tsx      # Botão com variantes (primary, secondary, ghost)
│   ├── Heading.tsx     # Títulos h1-h6 com animações
│   ├── CodeBlock.tsx   # Blocos de código com syntax highlighting
│   ├── SafeHtml.tsx    # Renderização segura de HTML
│   ├── SocialLinks.tsx # Links de redes sociais
│   ├── LanguageSelector.tsx # Seletor de idioma
│   ├── ArticleNavigation.tsx # Navegação entre artigos
│   └── HomeNavigation.tsx   # Navegação principal
├── molecules/          # Componentes compostos
│   ├── SkillCard.tsx   # Card de habilidade com progresso
│   └── TimelineItem.tsx # Item de timeline com animações
├── organisms/          # Seções completas da página
│   ├── AboutSection.tsx    # Seção sobre
│   ├── SkillsSection.tsx   # Seção de habilidades
│   ├── ExperienceSection.tsx # Seção de experiência
│   ├── EducationSection.tsx # Seção de educação
│   ├── ProjectsSection.tsx # Seção de projetos (comentada)
│   └── ContactSection.tsx  # Seção de contato
├── templates/          # Templates de página
│   └── HeroSection.tsx # Seção hero principal
├── articles/           # Sistema de blog
│   ├── config.ts       # Configuração de artigos
│   ├── page.tsx        # Lista de artigos
│   └── cloudflare/     # Artigo específico
├── i18n/               # Sistema de internacionalização
│   ├── context.tsx     # Context API para i18n
│   └── locales/        # Arquivos de tradução
│       ├── en.json     # Inglês
│       └── pt.json     # Português
├── globals.css         # Estilos globais e design tokens
├── layout.tsx          # Layout principal com providers
└── page.tsx            # Página inicial
```

## 🎨 Design System

### Cores (CSS Variables)
```css
--bg: #0A192F          /* Fundo principal */
--accent: #64FFDA       /* Cor de destaque */
--text-light: #CCD6F6   /* Texto claro */
--overlay: #00000080    /* Overlay para modais */
```

### Tipografia (Google Fonts)
```typescript
// layout.tsx
const inter = Inter({ variable: "--font-inter" })
const geistSans = Geist({ variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ variable: "--font-geist-mono" })
```

### Tailwind Config
```javascript
// tailwind.config.mjs
fontSize: {
  base: 'clamp(1rem, 1.125vw, 1.125rem)',
  lg: 'clamp(1.125rem, 1.25vw, 1.25rem)',
  xl: 'clamp(1.25rem, 2vw, 2rem)',
  '2xl': 'clamp(2rem, 3vw, 3rem)',
  '4xl': 'clamp(2.5rem, 5vw, 4rem)',
}
```

## 🌐 Sistema de Internacionalização

### Context API Structure
```typescript
// i18n/context.tsx
interface I18nContextType {
  locale: 'en' | 'pt';
  t: (key: string) => string;
  changeLocale: (newLocale: Locale) => void;
}
```

### Uso nos Componentes
```typescript
const { t, locale, changeLocale } = useI18n();
const title = t('hero.title');
```

### Estrutura de Traduções
```json
// locales/pt.json
{
  "hero": {
    "title": "Maike Naysinger Borges",
    "subtitle": "Full-Stack Developer"
  }
}
```

## 📝 Sistema de Artigos

### Interface de Artigo
```typescript
// articles/config.ts
interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
}
```

### Roteamento
- `/articles` - Lista de artigos
- `/articles/[slug]` - Artigo específico
- `/articles/cloudflare` - Artigo Cloudflare

## 🎭 Sistema de Animações

### GSAP (Animações Complexas)
```typescript
// Usado em: HeroSection, SkillCard, TimelineItem
gsap.fromTo(element, {
  opacity: 0,
  y: 50
}, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out"
});
```

### CSS Transitions (Micro-animações)
```css
/* Usado em: Button, SocialLinks */
.hover\:scale-105:hover { transform: scale(1.05); }
.hover\:scale-110:hover { transform: scale(1.1); }
.transition-all { transition: all 0.3s ease; }
```

## 📱 Responsividade

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px)  /* Tablet */
@media (min-width: 1024px) /* Desktop */
@media (min-width: 1440px) /* Large Desktop */
```

### Grid System
```css
/* 12 colunas fluidas */
grid-template-columns: repeat(12, minmax(0, 1fr));
```

## ♿ Acessibilidade

### Implementações
- `aria-label` em todos os elementos interativos
- `role` attributes em componentes customizados
- `tabIndex` para navegação por teclado
- `focus-visible` para indicadores de foco
- Contraste WCAG 2.2 AA

### Exemplo de Componente Acessível
```typescript
// Button.tsx
<button
  aria-label={ariaLabel}
  role="button"
  tabIndex={0}
  onKeyDown={handleKeyDown}
  className="focus:outline-none focus:ring-2 focus:ring-accent"
>
```

## 🔧 Configurações Técnicas

### Next.js Config
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  // Configurações padrão
};
```

### TypeScript Config
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### ESLint Config
```javascript
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { ... }
});
```

## 📊 Performance

### Otimizações Implementadas
- **Turbopack**: Compilação mais rápida em desenvolvimento
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automático com Next.js
- **Lazy Loading**: Componentes e imagens
- **Analytics**: Vercel Analytics para métricas

### Core Web Vitals Targets
- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

## 🚨 Problemas Conhecidos

### Issues Identificados
1. **ProjectsSection**: Comentada no page.tsx - precisa implementação
2. **PWA**: Não implementado - roadmap futuro
3. **Tests**: Sem testes unitários/E2E
4. **CMS**: Sem integração com CMS headless
5. **Search**: Sem sistema de busca nos artigos

### Dependências Desatualizadas
- Todas as dependências estão atualizadas (verificado em package.json)

## 🔄 Padrões de Desenvolvimento

### Nomenclatura
- **Componentes**: PascalCase (ex: `HeroSection.tsx`)
- **Arquivos**: kebab-case (ex: `globals.css`)
- **Variáveis**: camelCase (ex: `useI18n`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_ARTICLES`)

### Estrutura de Componentes
```typescript
// Padrão para todos os componentes
interface ComponentProps {
  // Props tipadas
}

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks
  // Lógica
  // JSX
}
```

### Imports
```typescript
// Padrão de imports
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useI18n } from '@/app/i18n/context';
```

## 🎯 Pontos de Melhoria

### Performance
- Implementar React.memo() em componentes pesados
- Otimizar animações GSAP com ScrollTrigger
- Implementar virtualização para listas longas

### Acessibilidade
- Adicionar skip links
- Implementar live regions
- Melhorar navegação por teclado

### SEO
- Implementar meta tags dinâmicas
- Adicionar structured data
- Otimizar para Core Web Vitals

### Funcionalidades
- Sistema de comentários nos artigos
- Dark/Light mode toggle
- Sistema de busca
- Newsletter signup
- Integração com GitHub API

## 📋 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com Turbopack
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🔍 Locais Críticos para Manutenção

### Arquivos Principais
- `src/app/layout.tsx` - Providers e configuração global
- `src/app/i18n/context.tsx` - Sistema de internacionalização
- `src/app/articles/config.ts` - Configuração de artigos
- `tailwind.config.mjs` - Design tokens
- `src/app/globals.css` - Estilos globais

### Componentes Críticos
- `src/app/templates/HeroSection.tsx` - Seção principal
- `src/app/organisms/SkillsSection.tsx` - Animações GSAP
- `src/app/atoms/Button.tsx` - Componente mais reutilizado
- `src/app/molecules/SkillCard.tsx` - Animações complexas

---

**Última Atualização**: Janeiro 2025  
**Versão**: 0.1.0  
**Status**: Em desenvolvimento ativo 