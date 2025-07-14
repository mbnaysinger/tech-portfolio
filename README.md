# 🚀 Portfólio Full-Stack Developer - Maike Naysinger Borges

Uma landing page single-page responsiva e moderna para portfólio de desenvolvedor full-stack, construída com React, Next.js 15 e TypeScript, seguindo os princípios do Atomic Design.

## 🎯 Características Principais

### 🎨 Design & UX
- **Design Responsivo**: Mobile-first com grid de 12 colunas fluidas
- **Arquitetura Atomic Design**: Componentes organizados hierarquicamente (atoms → molecules → organisms → templates)
- **Animações Avançadas**: GSAP para animações complexas e Framer Motion para micro-interações
- **Glassmorphism**: Cards com efeito glassmorphism 3D e backdrop blur
- **Acessibilidade WCAG 2.2 AA**: Navegação por teclado, ARIA labels, contraste adequado
- **Performance Otimizada**: Imagens WebP, lazy loading, Core Web Vitals otimizados

### 🌐 Internacionalização
- **Sistema i18n Completo**: Suporte para português e inglês
- **Context API**: Gerenciamento de estado de idioma com React Context
- **Persistência Local**: Preferência de idioma salva no localStorage
- **Traduções Dinâmicas**: Sistema de chaves aninhadas para traduções flexíveis

### 📝 Sistema de Artigos
- **Blog Integrado**: Seção de artigos técnicos com roteamento dinâmico
- **Markdown Support**: Artigos escritos em Markdown com syntax highlighting
- **Sistema de Tags**: Categorização e filtros por tags
- **Artigos em Destaque**: Funcionalidade para destacar artigos importantes

## 🛠️ Stack Tecnológica

### Frontend
- **React 19** com TypeScript
- **Next.js 15** com App Router e Turbopack
- **Tailwind CSS 4** com design tokens customizados
- **GSAP 3.13** para animações complexas
- **Framer Motion 12.19** para micro-animações
- **Lucide React** para ícones vetoriais

### Ferramentas de Desenvolvimento
- **ESLint** com configuração Next.js
- **TypeScript 5** para type safety
- **PostCSS** com Tailwind CSS
- **Vercel Analytics** para métricas de performance

## 📁 Arquitetura do Projeto

```
src/app/
├── atoms/              # Componentes básicos (Button, Heading, CodeBlock)
├── molecules/          # Componentes compostos (SkillCard, TimelineItem)
├── organisms/          # Seções completas (AboutSection, SkillsSection, etc.)
├── templates/          # Templates de página (HeroSection)
├── articles/           # Sistema de artigos/blog
│   ├── cloudflare/     # Artigo específico
│   ├── config.ts       # Configuração de artigos
│   └── page.tsx        # Lista de artigos
├── i18n/               # Sistema de internacionalização
│   ├── context.tsx     # Context API para i18n
│   └── locales/        # Arquivos de tradução
│       ├── en.json     # Traduções em inglês
│       └── pt.json     # Traduções em português
├── globals.css         # Estilos globais e design tokens
├── layout.tsx          # Layout principal com providers
└── page.tsx            # Página inicial
```

## 🎨 Design System

### Cores (Paleta WCAG 2.2 AA)
```css
--bg: #0A192F          /* Fundo principal */
--accent: #64FFDA       /* Cor de destaque */
--text-light: #CCD6F6   /* Texto claro */
--overlay: #00000080    /* Overlay para modais */
```

### Tipografia
- **Fonte Principal**: Inter Variable Font
- **Fonte Secundária**: Geist Sans
- **Fonte Mono**: Geist Mono (para código)
- **Escala Modular**: 1.125 (golden ratio)

### Grid System
- **12 Colunas Fluidas**: Grid responsivo com breakpoints
- **Espaçamento Modular**: Baseado na escala 1.125
- **Container Fluido**: Adaptação automática ao viewport

## 🌐 Sistema de Internacionalização

### Estrutura de Traduções
```typescript
// Exemplo de uso
const { t, locale, changeLocale } = useI18n();
const title = t('hero.title');
```

### Funcionalidades
- **Mudança Dinâmica**: Troca de idioma em tempo real
- **Persistência**: Preferência salva no localStorage
- **Fallback**: Retorna a chave se tradução não encontrada
- **Chaves Aninhadas**: Suporte para `hero.title.subtitle`

## 📝 Sistema de Artigos

### Configuração
```typescript
interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
}
```

### Funcionalidades
- **Roteamento Dinâmico**: `/articles/[slug]`
- **Sistema de Tags**: Filtros por categoria
- **Artigos em Destaque**: Funcionalidade para destacar conteúdo
- **Markdown Support**: Renderização de conteúdo rico

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/tech-portfolio.git
cd tech-portfolio

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Execute em modo desenvolvimento com Turbopack
npm run dev

# Acesse: http://localhost:3000
```

### Produção
```bash
# Build para produção
npm run build

# Execute em produção
npm start
```

## 📝 Personalização

### 1. Conteúdo e Dados
- **Seções**: Edite os dados em cada organismo (AboutSection, SkillsSection, etc.)
- **Informações Pessoais**: Substitua "Maike Naysinger Borges" pelos seus dados
- **Redes Sociais**: Atualize links em `SocialLinks.tsx`
- **Contato**: Modifique informações em `ContactSection.tsx`

### 2. Traduções
- **Arquivos de Idioma**: Edite `src/app/i18n/locales/`
- **Novos Idiomas**: Adicione novos arquivos de tradução
- **Chaves**: Use sistema de chaves aninhadas para organização

### 3. Artigos
- **Novos Artigos**: Adicione em `src/app/articles/config.ts`
- **Conteúdo**: Crie pastas para cada artigo em `src/app/articles/`
- **Tags**: Organize com sistema de tags para categorização

### 4. Design Tokens
- **Cores**: Modifique variáveis CSS em `src/app/globals.css`
- **Tipografia**: Ajuste fontes em `tailwind.config.mjs`
- **Espaçamentos**: Configure escala modular no Tailwind

### 5. Animações
- **GSAP**: Ajuste animações nos componentes
- **Framer Motion**: Modifique micro-animações
- **Timing**: Configure durações e easing functions

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px (design mobile-first)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

### Grid Adaptativo
- **Mobile**: 1 coluna
- **Tablet**: 6 colunas
- **Desktop**: 12 colunas

## ♿ Acessibilidade

### Implementações
- **Navegação por Teclado**: Suporte completo
- **ARIA Labels**: Todos os elementos interativos
- **Contraste WCAG 2.2 AA**: Cores testadas e aprovadas
- **Foco Visível**: Indicadores de foco em todos os elementos
- **Semântica HTML**: Estrutura semântica adequada

### Testes Recomendados
- Teste com leitores de tela
- Verificação de contraste
- Navegação apenas com teclado
- Teste com diferentes tamanhos de fonte

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático com Vercel
vercel --prod
```

### Outras Plataformas
```bash
# Build estático
npm run build

# Servidor Node.js
npm start
```

## 📊 Performance

### Otimizações Implementadas
- **Turbopack**: Compilação mais rápida em desenvolvimento
- **Lazy Loading**: Imagens e componentes carregados sob demanda
- **Code Splitting**: Separação automática de chunks
- **Image Optimization**: Otimização automática de imagens
- **Analytics**: Métricas de performance com Vercel Analytics

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com Turbopack
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Contribuição
- Siga o Atomic Design para novos componentes
- Mantenha acessibilidade em mente
- Teste em diferentes dispositivos
- Documente mudanças significativas

---

## 🎯 Roadmap

### Próximas Funcionalidades
- [ ] Sistema de comentários nos artigos
- [ ] Dark/Light mode toggle
- [ ] Integração com CMS headless
- [ ] Sistema de busca nos artigos

---

Desenvolvido por Maike Naysinger Borges usando Next.js, TypeScript e Atomic Design
