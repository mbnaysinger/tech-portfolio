/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import ArticleNavigation from "../../atoms/ArticleNavigation";
import { TerminalCodeBlock } from "../../atoms/CodeBlock";

const CloudflareArticle = () => {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* Navegação */}
      <ArticleNavigation showBackToArticles={true} />

      {/* Container principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 md:px-8 py-8 pt-24 md:pt-24 sm:pt-8">
        <div className="backdrop-blur-sm rounded-2xl shadow-2xl border border-accent/20 p-4 sm:p-8 relative" style={{ backgroundColor: 'rgba(5, 20, 42, 0.95)' }}>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8">
              Docker + Cloudflare Tunnel:
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-8 mb-6 border-b-4 border-accent pb-6" >
              Exponha Qualquer App Local em 30 Segundos
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Cansou de configurar Ngrok toda vez que precisa mostrar sua aplicação para um colega? Ou de lidar com URLs aleatórias 
              e limitações do plano gratuito? O <strong className="text-accent">Cloudflare Tunnel</strong> com Docker pode ser 
              a solução que você estava procurando - e é <strong className="text-accent">mais simples do que imagina</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-8 mb-6">
              🚀 Teste Agora: 30 Segundos para Expor sua App
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              Antes de entrarmos na teoria, que tal ver como é <strong className="text-accent">absurdamente simples</strong> expor 
              uma aplicação local usando Docker? Literalmente 3 comandos:
            </p>

            <TerminalCodeBlock title="Terminal - Teste Rápido">
              <span className="text-green-400"># 1. Rode sua aplicação (exemplo: servidor web simples)</span>{'\n'}
              <span className="text-white">python -m http.server 8000</span>{'\n\n'}
              
              <span className="text-green-400"># 2. Em outro terminal, rode o cloudflared</span>{'\n'}
              <span className="text-white">docker run --rm -it --network host cloudflare/cloudflared:latest tunnel --url http://localhost:8000</span>{'\n\n'}
              
              <span className="text-green-400"># 3. Pronto! Copie a URL que apareceu e compartilhe 🎉</span>
            </TerminalCodeBlock>

            <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <strong className="text-green-400 text-lg">É isso mesmo!</strong> Em menos de 30 segundos você tem uma URL pública e segura apontando para sua aplicação local. Sem configuração, sem cadastro, sem complicação.
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🐳 Exemplos Práticos com Docker Compose
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Para projetos mais complexos, integrar o cloudflared ao seu <code className="bg-gray-800 px-2 py-1 rounded text-accent">docker-compose.yml</code> torna 
              tudo ainda mais elegante. Veja alguns exemplos práticos:
            </p>

            <h3 className="text-xl font-bold text-accent mt-8 mb-4">
             🔥 Cenário 1: App Rodando Localmente (Fora do Docker)
            </h3>

            <p className="text-lg mb-4 leading-relaxed">
              Sua aplicação já está rodando na sua máquina (ex: <code className="bg-gray-800 px-2 py-1 rounded text-accent">npm run dev</code> na porta 3000). 
              Você só quer expor ela rapidamente:
            </p>

            <TerminalCodeBlock title="docker-compose.yml">
              <span className="text-purple-300">version: '3.8'</span>{'\n'}
              <span className="text-purple-300">services:</span>{'\n'}
              {'  '}<span className="text-purple-300">cloudflared:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">cloudflare/cloudflared:latest</span>{'\n'}
              {'    '}<span className="text-pink-300">command</span>: <span className="text-purple-400">tunnel --url http://localhost:3000</span>{'\n'}
              {'    '}<span className="text-pink-300">network_mode</span>: <span className="text-purple-400">host</span>{'\n'}
              {'    '}<span className="text-pink-300">restart</span>: <span className="text-purple-400">unless-stopped</span>
            </TerminalCodeBlock>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <h4 className="text-blue-400 font-semibold mb-2">🔍 Por que usar network_mode: host aqui?</h4>
              <p className="mb-2">Com <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">network_mode: host</code>, o container compartilha a rede do host. Isso significa:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>localhost funciona:</strong> O container pode acessar <code className="bg-gray-800 px-1 rounded text-blue-300">localhost:3000</code> diretamente</li>
                <li><strong>Sem configuração extra:</strong> Não precisa expor portas ou configurar redes customizadas</li>
                <li><strong>Ideal para apps já rodando:</strong> Perfeito quando sua aplicação já está executando fora do Docker</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-accent mt-8 mb-4">
              💻 Exemplo 2: Aplicação React/Next.js
            </h3>

            <TerminalCodeBlock title="docker-compose.yml">
              <span className="text-purple-300">version: '3.8'</span>{'\n'}
              <span className="text-purple-300">services:</span>{'\n'}
              {'  '}<span className="text-purple-300">app:</span>{'\n'}
              {'    '}<span className="text-pink-300">build</span>: <span className="text-purple-400">.</span>{'\n'}
              {'    '}<span className="text-pink-300">ports</span>:{'\n'}
              {'      '}- <span className="text-purple-400">"3000:3000"</span>{'\n'}
              {'    '}<span className="text-pink-300">volumes</span>:{'\n'}
              {'      '}- <span className="text-purple-400">./src:/app/src</span> <span className="text-gray-400"># Hot reload</span>{'\n\n'}
              
              {'  '}<span className="text-purple-300">cloudflared:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">cloudflare/cloudflared:latest</span>{'\n'}
              {'    '}<span className="text-pink-300">command</span>: <span className="text-purple-400">tunnel --url http://app:3000</span>{'\n'}
              {'    '}<span className="text-pink-300">depends_on</span>:{'\n'}
              {'      '}- <span className="text-purple-400">app</span>{'\n'}
              {'    '}<span className="text-pink-300">restart</span>: <span className="text-purple-400">unless-stopped</span>
            </TerminalCodeBlock>

            <h3 className="text-xl font-bold text-accent mt-8 mb-4">
              🗄️ Exemplo 3: API + Banco de Dados
            </h3>

            <TerminalCodeBlock title="docker-compose.yml">
              <span className="text-purple-300">version: '3.8'</span>{'\n'}
              <span className="text-purple-300">services:</span>{'\n'}
              {'  '}<span className="text-purple-300">api:</span>{'\n'}
              {'    '}<span className="text-pink-300">build</span>: <span className="text-purple-400">./api</span>{'\n'}
              {'    '}<span className="text-pink-300">environment</span>:{'\n'}
              {'      '}- <span className="text-purple-400">DATABASE_URL=postgresql://user:pass@db:5432/myapp</span>{'\n'}
              {'    '}<span className="text-pink-300">depends_on</span>:{'\n'}
              {'      '}- <span className="text-purple-400">db</span>{'\n\n'}
              
              {'  '}<span className="text-purple-300">db:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">postgres:15</span>{'\n'}
              {'    '}<span className="text-pink-300">environment</span>:{'\n'}
              {'      '}- <span className="text-purple-400">POSTGRES_DB=myapp</span>{'\n'}
              {'      '}- <span className="text-purple-400">POSTGRES_USER=user</span>{'\n'}
              {'      '}- <span className="text-purple-400">POSTGRES_PASSWORD=pass</span>{'\n\n'}
              
              {'  '}<span className="text-purple-300">cloudflared:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">cloudflare/cloudflared:latest</span>{'\n'}
              {'    '}<span className="text-pink-300">command</span>: <span className="text-purple-400">tunnel --url http://api:3000</span>{'\n'}
              {'    '}<span className="text-pink-300">depends_on</span>:{'\n'}
              {'      '}- <span className="text-purple-400">api</span>
            </TerminalCodeBlock>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              💡 Dicas Práticas para o Dia a Dia
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">🚀 Para Demos e Apresentações:</h4>
                <p className="mb-3">Para URLs profissionais fixas, você precisa configurar um túnel nomeado no painel da Cloudflare primeiro, depois usar no Docker:</p>
                
                <div className="bg-gray-800/50 p-3 rounded text-sm mb-2">
                  <span className="text-gray-400"># 1. Primeiro, crie um túnel no painel Cloudflare</span><br/>
                  <span className="text-gray-400"># 2. Depois use o token no Docker:</span><br/>
                  <span className="text-green-300">TUNNEL_TOKEN=seu_token_aqui</span>
                </div>
                
                <p className="text-sm text-green-300">
                  <strong>Modo rápido (URL aleatória):</strong> Use <code className="bg-gray-800 px-1 rounded">tunnel --url</code> como nos exemplos acima - funciona imediatamente!
                </p>
              </div>

              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">🐛 Para Testes de Webhook:</h4>
                <p>Perfeito para testar integrações com APIs externas que precisam fazer callbacks para sua aplicação.</p>
              </div>

              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-2">👥 Para Colaboração:</h4>
                <p>Compartilhe sua aplicação em desenvolvimento com colegas sem configurar VPN ou port forwarding.</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🔧 Como Funciona por Baixo dos Panos?
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              O Cloudflare Tunnel funciona de forma inteligente: ele estabelece uma conexão de <strong className="text-accent">saída</strong> (outbound)
              da sua máquina para os servidores da Cloudflare. Quando alguém acessa sua URL, a requisição vai primeiro 
              para a Cloudflare e depois é roteada pelo túnel seguro até sua aplicação local.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent mb-8">
              <ol className="space-y-3 text-lg">
                <li><strong className="text-accent">1.</strong> Sua aplicação roda localmente (ex: localhost:3000)</li>
                <li><strong className="text-accent">2.</strong> Cloudflared cria um túnel seguro para a Cloudflare</li>
                <li><strong className="text-accent">3.</strong> Cloudflare gera uma URL pública para você</li>
                <li><strong className="text-accent">4.</strong> Requisições chegam na Cloudflare e são roteadas pelo túnel</li>
                <li><strong className="text-accent">5.</strong> Sua aplicação recebe e responde normalmente</li>
              </ol>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              ⚖️ Cloudflare Tunnel vs. Ngrok
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent text-bg">
                    <th className="border border-gray-600 p-3 text-left font-semibold">Característica</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Cloudflare Tunnel</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Ngrok</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Setup</strong></td>
                    <td className="border border-gray-600 p-3">1 comando Docker</td>
                    <td className="border border-gray-600 p-3">Download + configuração</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Segurança</strong></td>
                    <td className="border border-gray-600 p-3">WAF + DDoS Protection + Zero Trust integrados + TLS automático</td>
                    <td className="border border-gray-600 p-3">TLS fornecido, mas menos camadas de segurança</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Limitações (free)</strong></td>
                    <td className="border border-gray-600 p-3">Nenhuma no uso básico</td>
                    <td className="border border-gray-600 p-3">Rate limits + sessões limitadas</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Persistência</strong></td>
                    <td className="border border-gray-600 p-3">Projetado para ser persistente (via serviço)</td>
                    <td className="border border-gray-600 p-3">Sessões limitadas no free tier</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Custo</strong></td>
                    <td className="border border-gray-600 p-3">Gratuito para uso básico (requer domínio Cloudflare)</td>
                    <td className="border border-gray-600 p-3">Gratuito com limitações, pago para recursos avançados</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🔒 E a Segurança?
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              Uma das maiores vantagens do Cloudflare Tunnel é a segurança nativa:
            </p>

            <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-lg">
                <li><strong className="text-green-400">✅ Sem portas abertas:</strong> Nenhuma porta do seu firewall precisa ser aberta</li>
                <li><strong className="text-green-400">✅ Criptografia end-to-end:</strong> Todo tráfego é criptografado</li>
                <li><strong className="text-green-400">✅ DDoS Protection:</strong> Proteção automática contra ataques</li>
                <li><strong className="text-green-400">✅ WAF integrado:</strong> Web Application Firewall da Cloudflare</li>
                <li><strong className="text-green-400">✅ Zero Trust:</strong> Controle de acesso baseado em identidade</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8 mt-8">
              <strong className="text-yellow-400 text-lg">O Cloudflare Tunnel + Docker</strong> é uma combinação poderosa que simplifica o processo de exposição de aplicações locais. Sem configurações complexas, sem limitações frustrantes - apenas funciona! 🚀
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-accent/20">
              <div className="text-accent/60 text-sm font-medium">
                📝 Conteúdo criado por naysinger.tech (Colaboração de <a href="https://www.linkedin.com/in/walievi/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">William Alievi</a>)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudflareArticle;