"use client";

import React from "react";
import SocialLinks from "../atoms/SocialLinks";

const CloudflareArticle = () => {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* Ícones de redes sociais */}
      <div className="absolute top-6 left-6 z-50">
        <SocialLinks iconSize={20} />
      </div>

      {/* Marca d'água de fundo */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="text-6xl md:text-8xl font-bold text-accent/5 rotate-[-45deg] whitespace-nowrap">
          naysinger.tech
        </div>
      </div>

      {/* Container principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 md:px-8 py-8 pt-24 md:pt-24 sm:pt-8">
        <div className="backdrop-blur-sm rounded-2xl shadow-2xl border border-accent/20 p-4 sm:p-8 relative" style={{ backgroundColor: 'rgba(5, 20, 42, 0.95)' }}>
          {/* Marca d'água adicional no container */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div className="text-4xl md:text-6xl font-bold text-accent/3 rotate-[-45deg] whitespace-nowrap">
              naysinger.tech
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8 pb-4 border-b-4 border-accent">
              🚀 Cloudflare Tunnel: O Fim do Ngrok? Expondo Aplicações Locais com Segurança e Controle!
            </h1>

            {/* Bloco de código estilo terminal */}
            <div className="bg-gray-900 rounded-xl shadow-xl mb-8 overflow-hidden border border-gray-700">
              <div className="flex items-center gap-2 p-3 bg-gray-800 border-b border-gray-700">
                <span className="w-3 h-3 bg-red-500 rounded-full border border-red-400"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full border border-yellow-400"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full border border-green-400"></span>
              </div>
              <pre className="p-4 text-sm md:text-base overflow-x-auto">
                <code className="text-purple-200 font-mono">
                  <span className="text-purple-300 text-sm">version: '3.8'</span>{'\n'}
                  <span className="text-purple-300 text-sm">services:</span>{'\n'}
                  {'  '}<span className="text-purple-300 text-sm">cloudflared:</span>{'\n'}
                  {'    '}<span className="text-pink-300 text-sm">image</span>: <span className="text-purple-400 text-sm">cloudflare/cloudflared:latest</span>{'\n'}
                  {'    '}<span className="text-pink-300 text-sm">command</span>: <span className="text-purple-400 text-sm">tunnel --url http://localhost:3000</span> <span className="text-white italic text-sm"># Agora você pode usar localhost!</span>{'\n'}
                  {'    '}<span className="text-pink-300 text-sm">network_mode</span>: <span className="text-purple-400 text-sm">host</span> <span className="text-white italic text-sm"># &lt;-- ADICIONE ESTA LINHA!</span>{'\n'}
                  {'    '}<span className="text-pink-300 text-sm">restart</span>: <span className="text-purple-400 text-sm">unless-stopped</span>
                </code>
              </pre>
            </div>

            <p className="text-lg mb-6 leading-relaxed">
              Já se pegaram na situação de precisar expor uma aplicação local para um colega, para testes de webhook ou para uma demonstração rápida, mas se depararam com as barreiras do firewall, IPs dinâmicos ou a complexidade de VPNs? Por muito tempo, ferramentas como <strong className="text-accent">Ngrok</strong> foram a solução de facto para isso.
            </p>

            <p className="text-lg mb-8 leading-relaxed">
              Mas o cenário mudou. O <strong className="text-accent">Cloudflare Tunnel</strong>, executado pelo cliente <code className="bg-gray-800 px-2 py-1 rounded text-accent">cloudflared</code>, emerge como uma alternativa poderosa e, ouso dizer, <strong className="text-accent">superior</strong> para muitas dessas necessidades, especialmente quando se busca segurança, customização e integração profunda com a rede Cloudflare.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🔧 Como o Cloudflare Tunnel Funciona na Prática?
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              A lógica por trás do Cloudflare Tunnel é elegante e focada em segurança: ele estabelece uma conexão de saída (outbound) persistente e segura da sua máquina local para a rede da Cloudflare. Pense nisso como uma "ponte" que você constrói da sua casa para a rua, sem precisar abrir sua porta para estranhos.
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent mb-8">
              <ol className="space-y-4 text-lg">
                <li><strong className="text-accent">Conexão Outbound:</strong> Seu cloudflared local inicia uma conexão criptografada com os servidores da Cloudflare. É como se ele estivesse sempre "ligando" para a Cloudflare.</li>
                <li><strong className="text-accent">DNS para Cloudflare:</strong> No painel da Cloudflare, você configura seu domínio (ex: dev.meuprojeto.com) para apontar para a Cloudflare.</li>
                <li><strong className="text-accent">Requisição do Usuário:</strong> Quando alguém acessa dev.meuprojeto.com, a requisição primeiro atinge a rede global da Cloudflare.</li>
                <li><strong className="text-accent">Encaminhamento Seguro:</strong> A Cloudflare, então, roteia essa requisição pelo túnel de saída já estabelecido, diretamente para o seu cloudflared local.</li>
                <li><strong className="text-accent">Acesso à Aplicação:</strong> O cloudflared recebe a requisição e a encaminha para o endereço e porta da sua aplicação local (ex: http://localhost:3000 ou http://meu-servico-docker:3000).</li>
                <li><strong className="text-accent">Resposta:</strong> A resposta da sua aplicação viaja de volta pelo mesmo túnel seguro para a Cloudflare e, de lá, para o usuário.</li>
              </ol>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
              <strong className="text-yellow-400 text-lg">O grande benefício?</strong> Você não precisa abrir nenhuma porta no seu firewall ou configurar NAT/port forwarding. O tráfego só flui através de uma conexão que você iniciou e controla.
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              ⚖️ Cloudflare Tunnel vs. Ngrok e Outras Soluções
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent text-bg">
                    <th className="border border-gray-600 p-3 text-left font-semibold">Característica</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Cloudflare Tunnel (cloudflared)</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Ngrok</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Soluções de Servidor (Nest/Next)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Tipo de Exposição</strong></td>
                    <td className="border border-gray-600 p-3">Túnel Outbound Seguro para a internet</td>
                    <td className="border border-gray-600 p-3">Túnel Outbound Simples para a internet</td>
                    <td className="border border-gray-600 p-3">Serviço Local (não expõe por padrão)</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Domínio/URL</strong></td>
                    <td className="border border-gray-600 p-3">Customizado (ex: dev.seusite.com) com seu próprio DNS</td>
                    <td className="border border-gray-600 p-3">Aleatório (free tier), customizado (pago)</td>
                    <td className="border border-gray-600 p-3">localhost:porta</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Segurança Inerente</strong></td>
                    <td className="border border-gray-600 p-3">Integração total com WAF, DDoS Protection, Cloudflare Access (Zero Trust), TLS automático</td>
                    <td className="border border-gray-600 p-3">TLS fornecido, mas menos camadas de segurança além do túnel</td>
                    <td className="border border-gray-600 p-3">Depende da infra local (firewall, IP público, etc.)</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Controle</strong></td>
                    <td className="border border-gray-600 p-3">Total controle de tráfego, logs e configurações via Cloudflare</td>
                    <td className="border border-gray-600 p-3">Menos controle sobre a rede e otimizações</td>
                    <td className="border border-gray-600 p-3">Nenhum controle para exposição externa</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Rate Limits (free)</strong></td>
                    <td className="border border-gray-600 p-3">Não se aplica ao túnel, pode ter limites de plano Cloudflare</td>
                    <td className="border border-gray-600 p-3">Sim (free tier)</td>
                    <td className="border border-gray-600 p-3">Não se aplica</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Persistência</strong></td>
                    <td className="border border-gray-600 p-3">Projetado para ser persistente (via serviço)</td>
                    <td className="border border-gray-600 p-3">Sessões limitadas no free tier</td>
                    <td className="border border-gray-600 p-3">N/A</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3"><strong className="text-accent">Custo</strong></td>
                    <td className="border border-gray-600 p-3">Gratuito para uso básico (requer domínio Cloudflare)</td>
                    <td className="border border-gray-600 p-3">Gratuito com limitações, pago para recursos avançados</td>
                    <td className="border border-gray-600 p-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
              <strong className="text-yellow-400 text-lg">Sobre Soluções de Servidor (Nest/Next.js):</strong> É crucial entender que frameworks como Nest.js ou Next.js são excelentes para servir sua aplicação localmente. Eles não são, por natureza, ferramentas de tunelamento. Expor uma aplicação diretamente usando-as exigiria um IP público, configuração de firewall e roteador – o que cloudflared e Ngrok vêm para simplificar e securitizar. Eles são ótimos para o "o quê" da aplicação, não o "como" da exposição segura para o mundo.
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🔒 Riscos de Dados Expostos?
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              A segurança é uma prioridade! O Cloudflare Tunnel é projetado com segurança em mente:
            </p>

            <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-lg">
                <li><strong className="text-green-400">Conexão Outbound:</strong> Não há portas abertas no seu firewall de entrada. Isso reduz significativamente a superfície de ataque.</li>
                <li><strong className="text-green-400">Criptografia:</strong> Todo o tráfego dentro do túnel é criptografado.</li>
                <li><strong className="text-green-400">Controle de Acesso:</strong> Com o Cloudflare Access, você pode implementar políticas de Zero Trust, garantindo que apenas usuários autenticados e autorizados (com base em identidade, dispositivo, etc.) possam acessar sua aplicação, mesmo que ela esteja rodando localmente.</li>
              </ul>
            </div>

            <p className="text-lg mb-8 leading-relaxed">
              O principal risco real não está no túnel em si, mas na segurança da sua própria aplicação. Se sua aplicação local possui vulnerabilidades (ex: injeção SQL, RCE, exposição de dados sensíveis), o túnel apenas a tornará acessível. A responsabilidade de construir uma aplicação segura continua sendo sua. No entanto, o Cloudflare Tunnel oferece camadas adicionais de proteção (DDoS, WAF, etc.) antes que o tráfego sequer chegue à sua aplicação.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🐳 Quer Testar? Veja como é simples no Docker Compose!
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              Se você, assim como eu, utiliza Docker para isolar e gerenciar suas aplicações, integrar o cloudflared ao seu <code className="bg-gray-800 px-2 py-1 rounded text-accent">docker-compose.yml</code> é incrivelmente fácil e poderoso. Ele pode se comunicar diretamente com outros serviços na mesma rede Docker.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Para expor uma aplicação rodando no seu container <code className="bg-gray-800 px-2 py-1 rounded text-accent">my-app</code> na porta 3000, por exemplo, o trecho seria similar a este:
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8 overflow-x-auto">
              <pre className="text-sm md:text-base text-gray-200 font-mono">
                <code>
                  <span className="text-gray-400"># Seu docker-compose.yml</span>{'\n'}
                  <span className="text-purple-400">version</span>: <span className="text-green-400">'3.8'</span>{'\n'}
                  <span className="text-purple-400">services</span>:{'\n'}
                  {'  '}<span className="text-purple-400">my-app</span>:{'\n'}
                  {'    '}<span className="text-gray-400"># ... configuração da sua aplicação (imagem, ports, etc.)</span>{'\n'}
                  {'    '}<span className="text-purple-400">image</span>: <span className="text-green-400">minha-aplicacao-dev:latest</span>{'\n'}
                  {'    '}<span className="text-purple-400">ports</span>:{'\n'}
                  {'      '}- <span className="text-green-400">"3000:3000"</span> <span className="text-gray-400"># Opcional se você só acessar via cloudflared</span>{'\n'}
                  {'    '}<span className="text-gray-400"># ...</span>{'\n'}
                  {''}{'\n'}
                  {'  '}<span className="text-purple-400">cloudflared</span>:{'\n'}
                  {'    '}<span className="text-purple-400">image</span>: <span className="text-green-400">cloudflare/cloudflared:latest</span>{'\n'}
                  {'    '}<span className="text-purple-400">command</span>: <span className="text-green-400">tunnel --config /etc/cloudflared/config.yml run seu-nome-do-tunel</span>{'\n'}
                  {'    '}<span className="text-purple-400">volumes</span>:{'\n'}
                  {'      '}<span className="text-gray-400"># Certifique-se de montar seu config.yml e as credenciais do túnel aqui!</span>{'\n'}
                  {'      '}- <span className="text-green-400">./config/config.yml:/etc/cloudflared/config.yml:ro</span>{'\n'}
                  {'      '}- <span className="text-green-400">~/.cloudflared/seuid_do_tunel.json:/etc/cloudflared/creds/seuid_do_tunel.json:ro</span>{'\n'}
                  {'    '}<span className="text-purple-400">restart</span>: <span className="text-green-400">unless-stopped</span>{'\n'}
                  {'    '}<span className="text-gray-400"># Se 'my-app' e 'cloudflared' estão no mesmo compose, 'my-app' será acessível por hostname</span>{'\n'}
                  {'    '}<span className="text-gray-400"># dentro da rede Docker.</span>
                </code>
              </pre>
            </div>

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
              <strong className="text-yellow-400 text-lg">O Cloudflare Tunnel é uma virada de jogo</strong> para quem busca uma forma robusta, segura e flexível de expor aplicações locais. Se você ainda não explorou, vale muito a pena dar uma chance! 🚀
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg mt-12">
              <div className="text-accent font-medium text-lg">
                #Cloudflare #CloudflareTunnel #DevOps #Backend #Frontend #Desenvolvimento #Segurança #Ngrok #Docker #Tech #Infraestrutura #ArquiteturaDeSoftware
              </div>
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

export default CloudflareArticle; 