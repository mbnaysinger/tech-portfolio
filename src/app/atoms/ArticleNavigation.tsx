import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

interface ArticleNavigationProps {
  showBackToArticles?: boolean;
}

const ArticleNavigation = ({ showBackToArticles = false }: ArticleNavigationProps) => {
  return (
    <div className="absolute top-6 left-6 z-50 flex gap-3">
      <Link
        href="/"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 text-accent hover:border-accent/50 hover:scale-110 transition-all duration-300"
        aria-label="Ir para a página inicial"
      >
        <Home size={20} />
      </Link>
      
      {showBackToArticles && (
        <Link
          href="/articles"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-glass border border-white/10 text-accent hover:border-accent/50 hover:scale-110 transition-all duration-300"
          aria-label="Voltar para lista de artigos"
        >
          <ArrowLeft size={20} />
        </Link>
      )}
    </div>
  );
};

export default ArticleNavigation; 