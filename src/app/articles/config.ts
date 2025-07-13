export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "cloudflare-tunnel",
    title: "🚀 Cloudflare Tunnel: O Fim do Ngrok?",
    description: "Expondo aplicações locais com segurança e controle usando Cloudflare Tunnel",
    date: "2024-01-15",
    tags: ["cloudflare", "docker", "desenvolvimento", "segurança"],
    featured: true
  }
  // Futuros artigos serão adicionados aqui
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(article => article.tags.includes(tag));
} 