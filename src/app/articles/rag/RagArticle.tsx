/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import ArticleNavigation from "../../atoms/ArticleNavigation";
import Image from "next/image";

const RagArticle = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Navegação */}
      <ArticleNavigation showBackToArticles={true} showHomeButton={false} />

      {/* Container principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-8 pt-24 md:pt-24 sm:pt-8">
        <div className="backdrop-blur-sm rounded-2xl shadow-2xl border border-accent/20 p-4 sm:p-8 relative" style={{ backgroundColor: 'rgba(5, 20, 42, 0.95)' }}>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8">
              RAG: Retrieval-Augmented Generation
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-8 mb-6 border-b-4 border-accent pb-6" >
              Usando LLMs para criar sistemas de IA especializados
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Imagine um assistente de IA que não apenas "sabe" coisas, mas também pode <strong className="text-accent">consultar uma biblioteca infinita</strong> em
              tempo real para dar respostas precisas e atualizadas. Isso é <strong className="text-accent">RAG</strong> - uma arquitetura que combina 
              o poder dos LLMs com a capacidade de buscar informações específicas, criando sistemas de IA mais inteligentes, 
              confiáveis e especializados.
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-accent/30 p-6 rounded-lg mb-8">
              <h4 className="text-accent font-semibold mb-3 flex items-center">
                <span className="mr-2">🧠</span> O Problema que RAG Resolve
              </h4>
              <p className="text-sm leading-relaxed">
                LLMs tradicionais são como <strong className="text-yellow-400">bibliotecários com memória fotográfica</strong>, mas que estudaram apenas até uma data específica. 
                RAG é como dar a esses bibliotecários <strong className="text-green-400">acesso instantâneo a todas as bibliotecas do mundo</strong>, 
                permitindo respostas baseadas em informações atualizadas e específicas do seu domínio.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🔍 O que é RAG: Anatomia de uma Revolução
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              <strong className="text-accent">Retrieval-Augmented Generation</strong> é uma arquitetura que combina dois componentes poderosos:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-3">🔎 Retrieval (Recuperação)</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">Busca Semântica:</strong> Encontra informações relevantes</li>
                  <li><strong className="text-purple-400">Base de Conhecimento:</strong> Documentos, PDFs, APIs</li>
                  <li><strong className="text-orange-400">Embeddings:</strong> Representações vetoriais</li>
                  <li><strong className="text-pink-400">Similarity Search:</strong> Cosine similarity, dot product</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-3">🤖 Generation (Geração)</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-blue-400">LLM Poderoso:</strong> GPT-4, Claude, Llama</li>
                  <li><strong className="text-purple-400">Contexto Enriquecido:</strong> Informações recuperadas</li>
                  <li><strong className="text-orange-400">Prompt Engineering:</strong> Instruções específicas</li>
                  <li><strong className="text-pink-400">Resposta Fundamentada:</strong> Baseada em fontes reais</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              ⚡ RAG vs Machine Learning Tradicional
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent text-bg">
                    <th className="border border-gray-600 p-3 text-left font-semibold">Aspecto</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Machine Learning Tradicional</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">RAG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Treinamento</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Requer datasets massivos e retreinamento</td>
                    <td className="border border-gray-600 p-3 text-left">Usa LLMs pré-treinados + base de conhecimento</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Atualização</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Retreinamento completo do modelo</td>
                    <td className="border border-gray-600 p-3 text-left">Simples atualização da base de conhecimento</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Interpretabilidade</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Caixa preta, difícil de explicar</td>
                    <td className="border border-gray-600 p-3 text-left">Fontes claras, rastreabilidade das respostas</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Custo</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Alto custo computacional para treinar</td>
                    <td className="border border-gray-600 p-3 text-left">Custo focado em inferência e armazenamento</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Especialização</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Modelo específico para cada domínio</td>
                    <td className="border border-gray-600 p-3 text-left">Mesmo LLM para múltiplos domínios</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Alucinações</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Predições incorretas</td>
                    <td className="border border-gray-600 p-3 text-left">Reduzidas através de fontes verificáveis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              Diagrama de Arquitetura RAG
            </h2>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent mb-8">
            <Image src="/fluxo-rag.svg" alt="Diagrama de Arquitetura RAG" width={1200} height={600} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🧮 Embeddings: A Matemática por Trás da Magia
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              <strong className="text-accent">Embeddings</strong> são o coração do RAG. Eles transformam texto em vetores numéricos que capturam o 
              <strong className="text-purple-400"> significado semântico</strong>, permitindo que computadores "entendam" similaridade entre conceitos.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent mb-8">
              <h4 className="text-accent font-semibold mb-3">🔢 Como Funcionam os Embeddings</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-green-400 font-medium mb-2">Texto Original:</h5>
                  <div className="bg-gray-900 p-3 rounded text-sm">
                    <p>"O gato subiu no telhado"</p>
                    <p>"O felino escalou a cobertura"</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-blue-400 font-medium mb-2">Representação Vetorial:</h5>
                  <div className="bg-gray-900 p-3 rounded text-sm">
                    <p>[0.2, -0.1, 0.8, 0.3, ...]</p>
                    <p>[0.3, -0.2, 0.7, 0.4, ...]</p>
                    <p className="text-green-400 mt-2">Similaridade: 0.89 (muito alta!)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🛠️ Principais Ferramentas do Ecossistema RAG
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-3">🧠 LLMs e APIs</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">OpenAI:</strong> GPT-4, GPT-3.5-turbo, Embeddings</li>
                  <li><strong className="text-blue-400">Anthropic:</strong> Claude 3 (Opus, Sonnet, Haiku)</li>
                  <li><strong className="text-orange-400">Google:</strong> Gemini Pro, PaLM 2</li>
                  <li><strong className="text-pink-400">Meta:</strong> Llama 2, Code Llama</li>
                  <li><strong className="text-yellow-400">Mistral:</strong> Mixtral 8x7B, Mistral 7B</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-3">🗃️ Vector Databases</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-purple-400">Pinecone:</strong> Managed, escalável, fácil de usar</li>
                  <li><strong className="text-blue-400">Weaviate:</strong> Open-source, GraphQL, multimodal</li>
                  <li><strong className="text-orange-400">ChromaDB:</strong> Simples, local, ótimo para prototipagem</li>
                  <li><strong className="text-pink-400">Qdrant:</strong> Rust-based, alta performance</li>
                  <li><strong className="text-yellow-400">Milvus:</strong> Distribuído, para grandes volumes</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-3">🔗 Frameworks RAG</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">LangChain:</strong> Mais popular, rico em features</li>
                  <li><strong className="text-purple-400">LlamaIndex:</strong> Focado em dados estruturados</li>
                  <li><strong className="text-orange-400">Haystack:</strong> Enterprise-ready, modular</li>
                  <li><strong className="text-pink-400">AutoGPT:</strong> Agentes autônomos</li>
                  <li><strong className="text-yellow-400">Semantic Kernel:</strong> Microsoft, multi-linguagem</li>
                </ul>
              </div>
              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-3">📊 Monitoramento</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">LangSmith:</strong> Debugging e observabilidade</li>
                  <li><strong className="text-purple-400">Weights & Biases:</strong> Experimentos e métricas</li>
                  <li><strong className="text-blue-400">Arize:</strong> ML observability</li>
                  <li><strong className="text-pink-400">Phoenix:</strong> Open-source, tracing</li>
                  <li><strong className="text-yellow-400">TruLens:</strong> Avaliação de sistemas RAG</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              ⚡ Benefícios Transformadores do RAG
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                  <span className="mr-2">🎯</span> Precisão
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Respostas baseadas em fontes verificáveis</li>
                  <li>• Redução drástica de alucinações</li>
                  <li>• Citação de fontes específicas</li>
                  <li>• Controle de qualidade das informações</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                  <span className="mr-2">🚀</span> Agilidade
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Atualização instantânea da base de conhecimento</li>
                  <li>• Sem necessidade de retreinamento</li>
                  <li>• Deploy rápido em novos domínios</li>
                  <li>• Iteração ágil de melhorias</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-3 flex items-center">
                  <span className="mr-2">💰</span> Custo-Benefício
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Reutilização de LLMs pré-treinados</li>
                  <li>• Menor custo computacional</li>
                  <li>• ROI mais rápido</li>
                  <li>• Escalabilidade eficiente</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🎯 Melhores Práticas para RAG de Produção
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-3">📝 Preparação de Dados</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-accent">Chunking Inteligente:</strong> Respeite contexto semântico, não apenas tamanho</li>
                  <li><strong className="text-accent">Metadados Ricos:</strong> Inclua fonte, data, autor, categoria</li>
                  <li><strong className="text-accent">Limpeza de Dados:</strong> Remove ruído, normaliza formato</li>
                  <li><strong className="text-accent">Versionamento:</strong> Controle de versão dos documentos</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-3">🔍 Otimização de Retrieval</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-accent">Hybrid Search:</strong> Combine busca semântica + keyword</li>
                  <li><strong className="text-accent">Reranking:</strong> Use modelos especializados para reordenar resultados</li>
                  <li><strong className="text-accent">Query Expansion:</strong> Expanda consultas com sinônimos</li>
                  <li><strong className="text-accent">Filtros Dinâmicos:</strong> Aplique filtros baseados em contexto</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-3">🎭 Prompt Engineering</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-accent">Instruções Claras:</strong> Defina comportamento esperado</li>
                  <li><strong className="text-accent">Few-Shot Examples:</strong> Inclua exemplos de respostas ideais</li>
                  <li><strong className="text-accent">Chain of Thought:</strong> Encoraje raciocínio passo a passo</li>
                  <li><strong className="text-accent">Guardrails:</strong> Defina limites e comportamentos proibidos</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-3">📊 Avaliação e Monitoramento</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-accent">Métricas de Retrieval:</strong> Precision@K, Recall@K, MRR</li>
                  <li><strong className="text-accent">Métricas de Geração:</strong> BLEU, ROUGE, BERTScore</li>
                  <li><strong className="text-accent">Feedback Humano:</strong> Coleta contínua de avaliações</li>
                  <li><strong className="text-accent">A/B Testing:</strong> Teste diferentes configurações</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🚀 Casos de Uso Transformadores
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-accent/30 p-6 rounded-lg">
                <h4 className="text-accent font-semibold mb-3">🏢 Empresarial</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">Knowledge Management:</strong> Base de conhecimento corporativo</li>
                  <li><strong className="text-blue-400">Customer Support:</strong> Chatbots especializados</li>
                  <li><strong className="text-purple-400">Legal Research:</strong> Análise de contratos e jurisprudência</li>
                  <li><strong className="text-orange-400">HR Assistant:</strong> Políticas e procedimentos</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-accent/30 p-6 rounded-lg">
                <h4 className="text-accent font-semibold mb-3">🎓 Educação & Pesquisa</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">Academic Research:</strong> Análise de papers científicos</li>
                  <li><strong className="text-blue-400">Tutoring Systems:</strong> Assistentes educacionais personalizados</li>
                  <li><strong className="text-purple-400">Literature Review:</strong> Síntese de grandes volumes de texto</li>
                  <li><strong className="text-orange-400">Code Documentation:</strong> Q&A sobre codebases</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🌟 O Futuro do RAG: Tendências e Inovações
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-accent/30 p-6 rounded-lg">
                <h4 className="text-accent font-semibold mb-3">🚀 Próximas Fronteiras</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">Multimodal RAG:</strong> Texto + imagens + áudio + vídeo</li>
                  <li><strong className="text-blue-400">Agentic RAG:</strong> Agentes que decidem quando e como buscar</li>
                  <li><strong className="text-purple-400">GraphRAG:</strong> Conhecimento estruturado em grafos</li>
                  <li><strong className="text-orange-400">Adaptive RAG:</strong> Sistemas que se adaptam automaticamente</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-accent/30 p-6 rounded-lg">
                <h4 className="text-accent font-semibold mb-3">🔬 Pesquisa Ativa</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-green-400">RAG-Fusion:</strong> Múltiplas estratégias de busca</li>
                  <li><strong className="text-blue-400">Self-RAG:</strong> Auto-reflexão e correção</li>
                  <li><strong className="text-purple-400">Corrective RAG:</strong> Correção automática de erros</li>
                  <li><strong className="text-orange-400">HyDE:</strong> Hypothetical Document Embeddings</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-accent/30 p-6 rounded-lg mb-8">
              <h4 className="text-accent font-semibold mb-3 flex items-center">
                <span className="mr-2">💡</span> Dica de Ouro para Desenvolvedores
              </h4>
              <p className="text-sm leading-relaxed mb-4">
                <strong className="text-yellow-400">Comece simples, evolua gradualmente:</strong> Implemente primeiro um RAG básico 
                com LangChain + ChromaDB. Depois adicione técnicas avançadas como hybrid search, reranking e avaliação automática. 
                A chave é <strong className="text-green-400">iterar rapidamente</strong> e <strong className="text-blue-400">medir constantemente</strong>.
              </p>
              <div className="bg-gray-800/50 p-4 rounded border-l-4 border-accent">
                <strong className="text-accent">Roadmap Sugerido:</strong>
                <ol className="list-decimal list-inside space-y-1 text-sm mt-2">
                  <li>RAG básico (1-2 semanas)</li>
                  <li>Otimização de chunking (1 semana)</li>
                  <li>Hybrid retrieval (1 semana)</li>
                  <li>Sistema de avaliação (1 semana)</li>
                  <li>Técnicas avançadas (2-3 semanas)</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🎯 Conclusão: RAG como Game Changer
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              <strong className="text-accent">RAG não é apenas uma técnica</strong> - é uma mudança de paradigma que democratiza 
              o acesso a sistemas de IA especializados. Enquanto treinar um LLM do zero custa milhões, implementar RAG custa centenas 
              de dólares e pode ser feito em dias.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-sm">Redução de alucinações</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">10x</div>
                <div className="text-sm">Mais rápido que retreinamento</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm">Rastreabilidade das fontes</div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8 mt-8">
              <strong className="text-yellow-400 text-lg">🚀 O Futuro é Agora!</strong> RAG está transformando como interagimos com informação. 
              De assistentes corporativos a pesquisa científica, de educação personalizada a análise legal - 
              <strong className="text-accent"> as possibilidades são infinitas</strong>. 
              A pergunta não é <em>se</em> você vai usar RAG, mas <em>quando</em> e <em>como</em> vai implementá-lo para revolucionar seus projetos! 🌟
            </div>

            <div className="text-center mt-8 pt-6 border-t border-accent/20">
              <div className="text-accent/60 text-sm font-medium">
                📝 Conteúdo criado por naysinger.tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagArticle;