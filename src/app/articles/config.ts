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
    slug: "rag",
    title: "🔍 Desmistificando o RAG",
    description: "Usando LLMs para criar sistemas de IA especializados",
    date: "29-08-2025",
    tags: ["rag", "desenvolvimento", "ia", "llm", "retrieval-augmented-generation"],
    featured: true
  },
  {
    slug: "kafka",
    title: "🛵 Apache Kafka" ,
    description: `Construindo o "iFood dos dados" com Docker e Java`,
    date: "23-07-2025",
    tags: ["kafka", "docker", "java", "spring-boot", "gradle", "desenvolvimento"],
    featured: true
  },
  {
    slug: "cloudflare",
    title: "🐳 Docker + ☁️ Cloudflare Tunnel",
    description: "Exponha Qualquer App Local em 30 Segundos",
    date: "14-07-2025",
    tags: ["cloudflare", "docker", "desenvolvimento", "segurança", "devops"],
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