import React from "react";
import Link from "next/link";
import { articles } from "./config";

import ArticleNavigation from "../atoms/ArticleNavigation";

export default function ArticlesPage() {
  return (
    <main className="bg-bg text-text-light min-h-screen relative">
      <ArticleNavigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 pt-24 md:pt-24 sm:pt-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-6 sm:mb-8">
        📚 Conteúdos Técnicos (ou não 🤪)
        </h1>
        
        <div className="grid gap-4 sm:gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-accent mb-2 leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {article.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-accent/20 text-accent text-xs sm:text-sm rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-xs sm:text-sm self-start sm:self-auto">
                  {article.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}