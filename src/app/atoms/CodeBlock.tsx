import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  title?: string;
  showTerminalButtons?: boolean;
  className?: string;
}

interface TerminalCodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  className?: string;
}

interface SimpleCodeBlockProps {
  children: React.ReactNode;
  language?: string;
  title?: string;
  className?: string;
}

// Componente para blocos de código estilo terminal (com botões coloridos)
export const TerminalCodeBlock: React.FC<TerminalCodeBlockProps> = ({
  children,
  title,
  className = ""
}) => {
  return (
    <div className={`bg-gray-900 rounded-xl shadow-xl mb-8 overflow-hidden border border-gray-700 ${className}`}>
      <div className="flex items-center gap-2 p-3 bg-gray-800 border-b border-gray-700">
        <span className="w-3 h-3 bg-red-500 rounded-full border border-red-400"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full border border-yellow-400"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full border border-green-400"></span>
        {title && (
          <span className="text-gray-400 text-sm ml-2">{title}</span>
        )}
      </div>
      <pre className="p-4 text-sm md:text-base overflow-x-auto">
        <code className="text-purple-200 font-mono">
          {children}
        </code>
      </pre>
    </div>
  );
};

// Componente para blocos de código simples (sem botões de terminal)
export const SimpleCodeBlock: React.FC<SimpleCodeBlockProps> = ({
  children,
  title,
  className = ""
}) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 mb-8 overflow-x-auto ${className}`}>
      {title && (
        <div className="text-gray-400 text-sm mb-2 font-medium">{title}</div>
      )}
      <pre className="text-sm md:text-base text-gray-200 font-mono">
        <code>
          {children}
        </code>
      </pre>
    </div>
  );
};

// Componente genérico que decide qual tipo usar baseado nas props
export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  title,
  showTerminalButtons = false,
  className = ""
}) => {
  if (showTerminalButtons) {
    return (
      <TerminalCodeBlock title={title} className={className}>
        {children}
      </TerminalCodeBlock>
    );
  }

  return (
    <SimpleCodeBlock title={title} className={className}>
      {children}
    </SimpleCodeBlock>
  );
};

export default CodeBlock; 