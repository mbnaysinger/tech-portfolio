import React from "react";
import Link from "next/link";
import { articles } from "./config";

import ArticleNavigation from "../atoms/ArticleNavigation";

export default function ArticlesPage() {
  return (
    <main className="bg-bg text-text-light min-h-screen relative">
      <ArticleNavigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-accent mb-8">📚 Artigos Técnicos</h1>
        
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-bold text-accent mb-2">{article.title}</h2>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 