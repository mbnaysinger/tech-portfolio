import React from 'react';

interface SafeHtmlProps {
  html: string;
  className?: string;
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ html, className = '' }) => {
  // Função para sanitizar HTML (remover scripts e outros elementos perigosos)
  const sanitizeHtml = (htmlString: string): string => {
    // Remove scripts e outros elementos perigosos
    return htmlString
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  };

  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
    />
  );
};

export default SafeHtml; 