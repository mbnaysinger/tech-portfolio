/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import ArticleNavigation from "../../atoms/ArticleNavigation";
import { TerminalCodeBlock } from "../../atoms/CodeBlock";

const KafkaDeliveryArticle = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Navegação */}
      <ArticleNavigation showBackToArticles={true} showHomeButton={false} />

      {/* Container principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 md:px-8 py-8 pt-24 md:pt-24 sm:pt-8">
        <div className="backdrop-blur-sm rounded-2xl shadow-2xl border border-accent/20 p-4 sm:p-8 relative" style={{ backgroundColor: 'rgba(5, 20, 42, 0.95)' }}>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-8">
              Apache Kafka:
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-8 mb-6 border-b-4 border-accent pb-6" >
              Construindo o iFood dos Dados com Docker e Java
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Imagine que você precisa gerenciar milhares de pedidos de comida simultaneamente, com diferentes restaurantes,
              entregadores e clientes. Como garantir que nenhum pedido se perca e que tudo chegue no destino certo?
              O <strong className="text-accent">Apache Kafka</strong> resolve exatamente isso no contexto de <strong className="text-accent">dados</strong> e
              vamos construir nosso próprio "iFood" para entender na prática!
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-8 mb-6">
              🚚 A Analogia: Kafka como Central de Delivery
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              Antes de colocar a mão no código, vamos entender os conceitos do Kafka através de uma analogia que todos conhecem:
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-accent mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-accent font-semibold mb-3">🏢 Sistema de Delivery</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-green-400">Central iFood:</strong> Coordena tudo</li>
                    <li><strong className="text-blue-400">Restaurantes:</strong> Produzem pedidos</li>
                    <li><strong className="text-purple-400">Categorias:</strong> Pizza, Burger, Sushi</li>
                    <li><strong className="text-orange-400">Entregadores:</strong> Consomem pedidos</li>
                    <li><strong className="text-pink-400">Equipes:</strong> Grupos por região</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-accent font-semibold mb-3">⚙️ Apache Kafka</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong className="text-green-400">Kafka Cluster:</strong> Infraestrutura</li>
                    <li><strong className="text-blue-400">Producers:</strong> Enviam mensagens</li>
                    <li><strong className="text-purple-400">Topics:</strong> Categorias de dados</li>
                    <li><strong className="text-orange-400">Consumers:</strong> Processam mensagens</li>
                    <li><strong className="text-pink-400">Consumer Groups:</strong> Processamento paralelo</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🐳 Setup do Ambiente: Nossa Central de Delivery
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              Vamos criar nosso ambiente Kafka usando Docker. Primeiro, o <code className="bg-gray-800 px-2 py-1 rounded text-accent">docker-compose.yml</code>
              que será nossa "infraestrutura de delivery":
            </p>

            <TerminalCodeBlock title="docker-compose.yml">
              <span className="text-purple-300">version: '3.8'</span>{'\n'}
              <span className="text-purple-300">services:</span>{'\n'}
              {'  '}<span className="text-purple-300">zookeeper:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">confluentinc/cp-zookeeper:7.9.1</span>{'\n'}
              {'    '}<span className="text-pink-300">hostname</span>: <span className="text-purple-400">zookeeper</span>{'\n'}
              {'    '}<span className="text-pink-300">container_name</span>: <span className="text-purple-400">zookeeper</span>{'\n'}
              {'    '}<span className="text-pink-300">ports</span>:{'\n'}
              {'      '}- <span className="text-purple-400">"2181:2181"</span>{'\n'}
              {'    '}<span className="text-pink-300">environment</span>:{'\n'}
              {'      '}<span className="text-pink-300">ZOOKEEPER_CLIENT_PORT</span>: <span className="text-purple-400">2181</span>{'\n'}
              {'      '}<span className="text-pink-300">ZOOKEEPER_TICK_TIME</span>: <span className="text-purple-400">2000</span>{'\n\n'}

              {'  '}<span className="text-purple-300">kafka:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">confluentinc/cp-kafka:7.9.1</span>{'\n'}
              {'    '}<span className="text-pink-300">hostname</span>: <span className="text-purple-400">kafka</span>{'\n'}
              {'    '}<span className="text-pink-300">container_name</span>: <span className="text-purple-400">kafka</span>{'\n'}
              {'    '}<span className="text-pink-300">depends_on</span>:{'\n'}
              {'      '}- <span className="text-purple-400">zookeeper</span>{'\n'}
              {'    '}<span className="text-pink-300">ports</span>:{'\n'}
              {'      '}- <span className="text-purple-400">"9092:9092"</span>{'\n'}
              {'    '}<span className="text-pink-300">environment</span>:{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_BROKER_ID</span>: <span className="text-purple-400">1</span>{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_ZOOKEEPER_CONNECT</span>: <span className="text-purple-400">'zookeeper:2181'</span>{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_LISTENER_SECURITY_PROTOCOL_MAP</span>: <span className="text-purple-400">PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT</span>{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_ADVERTISED_LISTENERS</span>: <span className="text-purple-400">PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092</span>{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR</span>: <span className="text-purple-400">1</span>{'\n\n'}

              {'  '}<span className="text-purple-300">kafka-ui:</span>{'\n'}
              {'    '}<span className="text-pink-300">image</span>: <span className="text-purple-400">provectuslabs/kafka-ui:latest</span>{'\n'}
              {'    '}<span className="text-pink-300">container_name</span>: <span className="text-purple-400">kafka-ui</span>{'\n'}
              {'    '}<span className="text-pink-300">depends_on</span>:{'\n'}
              {'      '}- <span className="text-purple-400">kafka</span>{'\n'}
              {'    '}<span className="text-pink-300">ports</span>:{'\n'}
              {'      '}- <span className="text-purple-400">"8080:8080"</span>{'\n'}
              {'    '}<span className="text-pink-300">environment</span>:{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_CLUSTERS_0_NAME</span>: <span className="text-purple-400">local</span>{'\n'}
              {'      '}<span className="text-pink-300">KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS</span>: <span className="text-purple-400">kafka:29092</span>
            </TerminalCodeBlock>

            <TerminalCodeBlock title="Terminal - Subindo a Infraestrutura">
              <span className="text-green-400"># Clone ou crie o projeto</span>{'\n'}
              <span className="text-white">mkdir kafka-delivery && cd kafka-delivery</span>{'\n\n'}

              <span className="text-green-400"># Suba os serviços</span>{'\n'}
              <span className="text-white">docker-compose up -d</span>{'\n\n'}

              <span className="text-green-400"># Verifique se tudo está rodando</span>{'\n'}
              <span className="text-white">docker-compose ps</span>{'\n\n'}

              <span className="text-green-400"># Acesse a UI do Kafka em http://localhost:8080</span>
            </TerminalCodeBlock>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🍕 Criando o Restaurante: Producer em Java
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Agora vamos criar nosso "restaurante" - um Producer que enviará pedidos para o Kafka.
              Primeiro, a estrutura do projeto Spring Boot com <strong className="text-accent">Gradle</strong>:
            </p>

            <TerminalCodeBlock title="build.gradle - Dependências">
              <span className="text-purple-300">plugins {'{'}</span>{'\n'}
              {'    '}<span className="text-pink-300">id</span> <span className="text-purple-400">'org.springframework.boot'</span> version <span className="text-green-300">'3.1.5'</span>{'\n'}
              {'    '}<span className="text-pink-300">id</span> <span className="text-purple-400">'io.spring.dependency-management'</span> version <span className="text-green-300">'1.1.3'</span>{'\n'}
              {'    '}<span className="text-pink-300">id</span> <span className="text-purple-400">'java'</span>{'\n'}
              <span className="text-purple-300">{'}'}</span>{'\n\n'}

              <span className="text-purple-300">group =</span> <span className="text-green-300">'com.delivery'</span>{'\n'}
              <span className="text-purple-300">version =</span> <span className="text-green-300">'0.0.1-SNAPSHOT'</span>{'\n'}
              <span className="text-purple-300">java.sourceCompatibility =</span> <span className="text-green-300">JavaVersion.VERSION_17</span>{'\n\n'}

              <span className="text-purple-300">repositories {'{'}</span>{'\n'}
              {'    '}<span className="text-pink-300">mavenCentral()</span>{'\n'}
              <span className="text-purple-300">{'}'}</span>{'\n\n'}

              <span className="text-purple-300">dependencies {'{'}</span>{'\n'}
              {'    '}<span className="text-pink-300">implementation</span> <span className="text-green-300">'org.springframework.boot:spring-boot-starter-web'</span>{'\n'}
              {'    '}<span className="text-pink-300">implementation</span> <span className="text-green-300">'org.springframework.kafka:spring-kafka'</span>{'\n'}
              {'    '}<span className="text-pink-300">implementation</span> <span className="text-green-300">'com.fasterxml.jackson.core:jackson-databind'</span>{'\n'}
              {'    '}<span className="text-pink-300">testImplementation</span> <span className="text-green-300">'org.springframework.boot:spring-boot-starter-test'</span>{'\n'}
              {'    '}<span className="text-pink-3000">testImplementation</span> <span className="text-green-300">'org.springframework.kafka:spring-kafka-test'</span>{'\n'}
              <span className="text-purple-300">{'}'}</span>{'\n\n'}

              <span className="text-purple-300">tasks.named('test') {'{'}</span>{'\n'}
              {'    '}<span className="text-pink-300">useJUnitPlatform()</span>{'\n'}
              <span className="text-purple-300">{'}'}</span>
            </TerminalCodeBlock>

            <TerminalCodeBlock title="src/main/resources/application.yml">
              <span className="text-purple-300">spring:</span>{'\n'}
              {'  '}<span className="text-purple-300">kafka:</span>{'\n'}
              {'    '}<span className="text-purple-300">bootstrap-servers:</span> <span className="text-green-300">localhost:9092</span>{'\n'}
              {'    '}<span className="text-purple-300">producer:</span>{'\n'}
              {'      '}<span className="text-pink-300">key-serializer:</span> <span className="text-green-300">org.apache.kafka.common.serialization.StringSerializer</span>{'\n'}
              {'      '}<span className="text-pink-300">value-serializer:</span> <span className="text-green-300">org.springframework.kafka.support.serializer.JsonSerializer</span>{'\n'}
              {'      '}<span className="text-pink-300">properties:</span>{'\n'}
              {'        '}<span className="text-pink-300">spring.json.type.mapping:</span> <span className="text-green-300">pedido:com.delivery.model.Pedido</span>{'\n'}
              {'    '}<span className="text-purple-300">consumer:</span>{'\n'}
              {'      '}<span className="text-pink-300">key-deserializer:</span> <span className="text-green-300">org.apache.kafka.common.serialization.StringDeserializer</span>{'\n'}
              {'      '}<span className="text-pink-300">value-deserializer:</span> <span className="text-green-300">org.springframework.kafka.support.serializer.JsonDeserializer</span>{'\n'}
              {'      '}<span className="text-pink-300">properties:</span>{'\n'}
              {'        '}<span className="text-pink-300">spring.json.type.mapping:</span> <span className="text-green-300">pedido:com.delivery.model.Pedido</span>{'\n'}
              {'        '}<span className="text-pink-300">spring.json.trusted.packages:</span> <span className="text-green-300">"com.delivery.model"</span>{'\n\n'}

              <span className="text-purple-300">server:</span>{'\n'}
              {'  '}<span className="text-pink-300">port:</span> <span className="text-green-300">8080</span>{'\n\n'}

              <span className="text-purple-300">logging:</span>{'\n'}
              {'  '}<span className="text-purple-300">level:</span>{'\n'}
              {'    '}<span className="text-pink-300">com.delivery:</span> <span className="text-green-300">DEBUG</span>{'\n'}
              {'    '}<span className="text-pink-300">org.springframework.kafka:</span> <span className="text-green-300">INFO</span>
            </TerminalCodeBlock>

            <TerminalCodeBlock title="src/main/java/model/Pedido.java">
              <span className="text-blue-300">package</span> <span className="text-white">com.delivery.model</span>;<span className="text-white"></span>{'\n\n'}

              <span className="text-blue-300">import</span> <span className="text-white">com.fasterxml.jackson.annotation.JsonFormat</span>;<span className="text-white"></span>{'\n'}
              <span className="text-blue-300">import</span> <span className="text-white">java.time.LocalDateTime</span>;<span className="text-white"></span>{'\n'}
              <span className="text-blue-300">import</span> <span className="text-white">java.util.UUID</span>;<span className="text-white"></span>{'\n\n'}

              <span className="text-blue-300">public class</span> <span className="text-yellow-300">Pedido</span> <span className="text-white">{'{'}</span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String id</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String restaurante</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String cliente</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String item</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">Double preco</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String status</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-purple-300">@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")</span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">LocalDateTime timestamp</span>;<span className="text-white"></span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Construtor padrão</span>{'\n'}
              {'    '}<span className="text-blue-300">public</span> <span className="text-yellow-300">Pedido</span>() <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-blue-300">this</span>.id = UUID.randomUUID().toString();<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-300">this</span>.timestamp = LocalDateTime.now();<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-300">this</span>.status = <span className="text-green-300">"CRIADO"</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Getters e Setters...</span>{'\n'}
              <span className="text-white">{'}'}</span>
            </TerminalCodeBlock>

            <TerminalCodeBlock title="Terminal - Executando com Gradle">
              <span className="text-green-400"># 1. Certifique-se que o Kafka está rodando</span>{'\n'}
              <span className="text-white">docker-compose ps</span>{'\n\n'}

              <span className="text-green-400"># 2. Execute a aplicação Spring Boot com Gradle</span>{'\n'}
              <span className="text-white">./gradlew bootRun</span>{'\n\n'}

              <span className="text-green-400"># Ou para Windows:</span>{'\n'}
              <span className="text-white">gradlew.bat bootRun</span>{'\n\n'}

              <span className="text-green-400"># 3. Para buildar o projeto:</span>{'\n'}
              <span className="text-white">./gradlew build</span>{'\n\n'}

              <span className="text-green-400"># 4. Para executar os testes:</span>{'\n'}
              <span className="text-white">./gradlew test</span>
            </TerminalCodeBlock>

            <TerminalCodeBlock title="src/main/java/service/RestauranteService.java">
              <span className="text-purple-300">@Service</span>{'\n'}
              <span className="text-blue-300">public class</span> <span className="text-yellow-300">RestauranteService</span> <span className="text-white">{'{'}</span>{'\n\n'}

              {'    '}<span className="text-purple-300">@Autowired</span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">KafkaTemplate&lt;String, Object&gt; kafkaTemplate</span>;<span className="text-white"></span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Nosso "cardápio" de restaurantes</span>{'\n'}
              {'    '}<span className="text-blue-300">private final</span> <span className="text-white">List&lt;String&gt; restaurantes = Arrays.asList(</span>{'\n'}
              {'        '}<span className="text-green-300">"Pizza Express"</span>, <span className="text-green-300">"Burger King"</span>, <span className="text-green-300">"Sushi House"</span>, <span className="text-green-300">"Taco Bell"</span>{'\n'}
              {'    '});<span className="text-white"></span>{'\n\n'}

              {'    '}<span className="text-blue-300">public void</span> <span className="text-yellow-300">criarPedido</span>(String restaurante, String cliente, String item, Double preco) <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-white">Pedido pedido = </span><span className="text-blue-300">new</span> <span className="text-white">Pedido()</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">pedido.setRestaurante(restaurante)</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">pedido.setCliente(cliente)</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">pedido.setItem(item)</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">pedido.setPreco(preco)</span>;<span className="text-white"></span>{'\n\n'}

              {'        '}<span className="text-gray-400">// Determina o "tipo de comida" (topic) baseado no restaurante</span>{'\n'}
              {'        '}<span className="text-white">String topicName = determinarTopic(restaurante)</span>;<span className="text-white"></span>{'\n\n'}

              {'        '}<span className="text-gray-400">// Envia o pedido para a "central de delivery" (Kafka)</span>{'\n'}
              {'        '}<span className="text-white">kafkaTemplate.send(topicName, pedido.getId(), pedido)</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">System.out.println(</span><span className="text-green-300">"Pedido enviado: "</span> + pedido.getId() + <span className="text-green-300">" para topic: "</span> + topicName);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-blue-300">private</span> <span className="text-white">String determinarTopic(String restaurante) </span><span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-blue-300">if</span> (restaurante.toLowerCase().contains(<span className="text-green-300">"pizza"</span>)) <span className="text-blue-300">return</span> <span className="text-green-300">"pedidos-pizza"</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-300">if</span> (restaurante.toLowerCase().contains(<span className="text-green-300">"burger"</span>)) <span className="text-blue-300">return</span> <span className="text-green-300">"pedidos-burger"</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-300">if</span> (restaurante.toLowerCase().contains(<span className="text-green-300">"sushi"</span>)) <span className="text-blue-300">return</span> <span className="text-green-300">"pedidos-sushi"</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-300">return</span> <span className="text-green-300">"pedidos-diversos"</span>;<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n'}
              <span className="text-white">{'}'}</span>
            </TerminalCodeBlock>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🚚 Criando os Entregadores: Consumers
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Agora vamos criar nossos "entregadores" - os Consumers que processarão os pedidos de cada categoria:
            </p>

            <TerminalCodeBlock title="src/main/java/service/EntregadorService.java">
              <span className="text-purple-300">@Service</span>{'\n'}
              <span className="text-blue-300">public class</span> <span className="text-yellow-300">EntregadorService</span> <span className="text-white">{'{'}</span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Entregadores especializados em Pizza</span>{'\n'}
              {'    '}<span className="text-purple-300">@KafkaListener(topics = "pedidos-pizza", groupId = "entregadores-pizza")</span>{'\n'}
              {'    '}<span className="text-blue-300">public void</span> <span className="text-yellow-300">processarPedidoPizza</span>(Pedido pedido) <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-white">System.out.println(</span><span className="text-green-300">"Entregador de Pizza pegou pedido: "</span> + pedido.getId());<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">simularEntrega(pedido, </span><span className="text-green-300">"Pizza"</span>);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Entregadores especializados em Burger</span>{'\n'}
              {'    '}<span className="text-purple-300">@KafkaListener(topics = "pedidos-burger", groupId = "entregadores-burger")</span>{'\n'}
              {'    '}<span className="text-blue-300">public void</span> <span className="text-yellow-300">processarPedidoBurger</span>(Pedido pedido) <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-white">System.out.println(</span><span className="text-green-300">"Entregador de Burger pegou pedido: "</span> + pedido.getId());<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">simularEntrega(pedido, </span><span className="text-green-300">"Burger"</span>);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-gray-400">// Entregadores especializados em Sushi</span>{'\n'}
              {'    '}<span className="text-purple-300">@KafkaListener(topics = "pedidos-sushi", groupId = "entregadores-sushi")</span>{'\n'}
              {'    '}<span className="text-blue-300">public void</span> <span className="text-yellow-300">processarPedidoSushi</span>(Pedido pedido) <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-white">System.out.println(</span><span className="text-green-300">"Entregador de Sushi pegou pedido: "</span> + pedido.getId());<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">simularEntrega(pedido, </span><span className="text-green-300">"Sushi"</span>);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-blue-300">private void</span> <span className="text-yellow-3000">simularEntrega</span>(Pedido pedido, String tipo) <span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-blue-3000">try</span> <span className="text-white">{'{'}</span>{'\n'}
              {'            '}<span className="text-gray-400">// Simula tempo de entrega (diferentes para cada tipo)</span>{'\n'}
              {'            '}<span className="text-white">int tempoEntrega = tipo.equals(</span><span className="text-green-300">"Sushi"</span>) ? 3000 : 2000;<span className="text-white"></span>{'\n'}
              {'            '}<span className="text-white">Thread.sleep(tempoEntrega)</span>;<span className="text-white"></span>{'\n\n'}

              {'            '}<span className="text-white">System.out.println(</span><span className="text-green-300">"Pedido "</span> + pedido.getId() + <span className="text-green-300">" de "</span> + tipo + <span className="text-green-300">" entregue para "</span> + pedido.getCliente());<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">{'}'} </span><span className="text-blue-3000">catch</span> (InterruptedException e) <span className="text-white">{'{'}</span>{'\n'}
              {'            '}<span className="text-white">Thread.currentThread().interrupt()</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">{'}'}</span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n'}
              <span className="text-white">{'}'}</span>
            </TerminalCodeBlock>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🎮 API para Simular Pedidos
            </h2>

            <TerminalCodeBlock title="src/main/java/controller/DeliveryController.java">
              <span className="text-purple-300">@RestController</span>{'\n'}
              <span className="text-purple-300">@RequestMapping("/api/delivery")</span>{'\n'}
              <span className="text-blue-300">public class</span> <span className="text-yellow-300">DeliveryController</span> <span className="text-white">{'{'}</span>{'\n\n'}

              {'    '}<span className="text-purple-300">@Autowired</span>{'\n'}
              {'    '}<span className="text-blue-300">private</span> <span className="text-white">RestauranteService restauranteService</span>;<span className="text-white"></span>{'\n\n'}

              {'    '}<span className="text-purple-300">@PostMapping("/pedido")</span>{'\n'}
              {'    '}<span className="text-blue-300">public</span> <span className="text-white">ResponseEntity&lt;String&gt; criarPedido(</span>{'\n'}
              {'            '}<span className="text-purple-300">@RequestParam</span> <span className="text-white">String restaurante,</span>{'\n'}
              {'            '}<span className="text-purple-300">@RequestParam</span> <span className="text-white">String cliente,</span>{'\n'}
              {'            '}<span className="text-purple-300">@RequestParam</span> <span className="text-white">String item,</span>{'\n'}
              {'            '}<span className="text-purple-300">@RequestParam</span> <span className="text-white">Double preco) </span><span className="text-white">{'{'}</span>{'\n\n'}

              {'        '}<span className="text-white">restauranteService.criarPedido(restaurante, cliente, item, preco)</span>;<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-blue-3000">return</span> <span className="text-white">ResponseEntity.ok(</span><span className="text-green-300">"Pedido criado com sucesso!"</span>);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'    '}<span className="text-purple-300">@PostMapping("/pedidos-massa")</span>{'\n'}
              {'    '}<span className="text-blue-300">public</span> <span className="text-white">ResponseEntity&lt;String&gt; criarPedidosEmMassa() </span><span className="text-white">{'{'}</span>{'\n'}
              {'        '}<span className="text-gray-400">// Simula rush hour!</span>{'\n'}
              {'        '}<span className="text-white">List&lt;String&gt; clientes = Arrays.asList(</span><span className="text-green-300">"João"</span>, <span className="text-green-300">"Maria"</span>, <span className="text-green-300">"Pedro"</span>, <span className="text-green-300">"Ana"</span>);<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">Random random = </span><span className="text-blue-3000">new</span> <span className="text-white">Random()</span>;<span className="text-white"></span>{'\n\n'}

              {'        '}<span className="text-blue-3000">for</span> (<span className="text-white">int i = 0; i &lt; 10; i++</span>) <span className="text-white">{'{'}</span>{'\n'}
              {'            '}<span className="text-white">String cliente = clientes.get(random.nextInt(clientes.size()))</span>;<span className="text-white"></span>{'\n'}
              {'            '}<span className="text-white">restauranteService.criarPedido(</span><span className="text-green-300">"Pizza Express"</span>, cliente, <span className="text-green-300">"Pizza Margherita"</span>, 25.90);<span className="text-white"></span>{'\n'}
              {'            '}<span className="text-white">restauranteService.criarPedido(</span><span className="text-green-300">"Burger King"</span>, cliente, <span className="text-green-300">"Whopper"</span>, 18.50);<span className="text-white"></span>{'\n'}
              {'            '}<span className="text-white">restauranteService.criarPedido(</span><span className="text-green-300">"Sushi House"</span>, cliente, <span className="text-green-300">"Combo Salmão"</span>, 45.00);<span className="text-white"></span>{'\n'}
              {'        '}<span className="text-white">{'}'}</span>{'\n\n'}

              {'        '}<span className="text-blue-3000">return</span> <span className="text-white">ResponseEntity.ok(</span><span className="text-green-300">"30 pedidos criados para simular rush hour!"</span>);<span className="text-white"></span>{'\n'}
              {'    '}<span className="text-white">{'}'}</span>{'\n'}
              <span className="text-white">{'}'}</span>
            </TerminalCodeBlock>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🚀 Testando Nossa Central de Delivery
            </h2>

            <TerminalCodeBlock title="Terminal - Executando o Projeto">
              <span className="text-green-400"># 1. Certifique-se que o Kafka está rodando</span>{'\n'}
              <span className="text-white">docker-compose ps</span>{'\n\n'}

              <span className="text-green-400"># 2. Execute a aplicação Spring Boot</span>{'\n'}
              <span className="text-white">./mvnw spring-boot:run</span>{'\n\n'}

              <span className="text-green-400"># 3. Teste um pedido individual</span>{'\n'}
              <span className="text-white">curl -X POST "http://localhost:8080/api/delivery/pedido" \</span>{'\n'}
              <span className="text-white">  -d "restaurante=Pizza Express&cliente=João&item=Pizza Margherita&preco=25.90"</span>{'\n\n'}

              <span className="text-green-400"># 4. Simule rush hour (30 pedidos!)</span>{'\n'}
              <span className="text-white">curl -X POST "http://localhost:8080/api/delivery/pedidos-massa"</span>
            </TerminalCodeBlock>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h4 className="text-blue-400 font-semibold mb-2">🎯 O que você verá acontecendo:</h4>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-green-400">Logs do Producer:</strong> Restaurantes enviando pedidos para topics específicos</li>
                <li><strong className="text-orange-400">Logs dos Consumers:</strong> Entregadores especializados pegando pedidos</li>
                <li><strong className="text-purple-400">Processamento Paralelo:</strong> Múltiplos pedidos sendo entregues simultaneamente</li>
                <li><strong className="text-pink-400">Kafka UI:</strong> Visualização em tempo real no http://localhost:8080</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              📊 Monitoramento: Acompanhando as Entregas
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Acesse o <strong className="text-accent">Kafka UI</strong> em <code className="bg-gray-800 px-2 py-1 rounded text-accent">http://localhost:8080</code>
              para ver em tempo real:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">📈 Métricas que você verá:</h4>
                <ul className="space-y-1 text-sm text-left">
                  <li>• <strong>Topics:</strong> pedidos-pizza, pedidos-burger, pedidos-sushi</li>
                  <li>• <strong>Partitions:</strong> Como os pedidos são distribuídos</li>
                  <li>• <strong>Consumer Groups:</strong> Equipes de entregadores</li>
                  <li>• <strong>Lag:</strong> Pedidos pendentes vs processados</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">🔍 Insights importantes:</h4>
                <ul className="space-y-1 text-sm text-left">
                  <li>• <strong>Throughput:</strong> Quantos pedidos/segundo</li>
                  <li>• <strong>Latência:</strong> Tempo entre criação e entrega</li>
                  <li>• <strong>Balanceamento:</strong> Distribuição entre entregadores</li>
                  <li>• <strong>Resiliência:</strong> Como o sistema lida com falhas</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              🎯 Conceitos Kafka na Prática
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-accent text-bg">
                    <th className="border border-gray-600 p-3 text-left font-semibold">Conceito Kafka</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">Analogia Delivery</th>
                    <th className="border border-gray-600 p-3 text-left font-semibold">No Código</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Producer</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Restaurante criando pedidos</td>
                    <td className="border border-gray-600 p-3 text-left">RestauranteService.criarPedido()</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Topic</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Categoria de comida (Pizza, Burger)</td>
                    <td className="border border-gray-600 p-3 text-left">pedidos-pizza, pedidos-burger</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Consumer</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Entregador especializado</td>
                    <td className="border border-gray-600 p-3 text-left">@KafkaListener methods</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-700/30">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Consumer Group</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Equipe de entregadores por região</td>
                    <td className="border border-gray-600 p-3 text-left">groupId = "entregadores-pizza"</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-600 p-3 text-left"><strong className="text-accent">Partition</strong></td>
                    <td className="border border-gray-600 p-3 text-left">Diferentes cozinhas do mesmo restaurante</td>
                    <td className="border border-gray-600 p-3 text-left">Distribuição automática pelo Kafka</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-6">
              💡 Próximos Passos: Evoluindo o Sistema
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">🚀 Funcionalidades Avançadas:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Dead Letter Queue:</strong> Para pedidos com problemas</li>
                  <li>• <strong>Retry Mechanism:</strong> Tentativas automáticas de entrega</li>
                  <li>• <strong>Schema Registry:</strong> Versionamento de mensagens</li>
                  <li>• <strong>Kafka Streams:</strong> Processamento em tempo real</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">📊 Monitoramento Avançado:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Prometheus + Grafana:</strong> Métricas customizadas</li>
                  <li>• <strong>Jaeger:</strong> Tracing distribuído</li>
                  <li>• <strong>ELK Stack:</strong> Logs centralizados</li>
                  <li>• <strong>Alertas:</strong> Notificações de problemas</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded-lg">
                <h4 className="text-orange-400 font-semibold mb-2">🏗️ Arquitetura Empresarial:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Multi-cluster:</strong> Diferentes ambientes</li>
                  <li>• <strong>Security:</strong> SSL/SASL authentication</li>
                  <li>• <strong>Backup/Recovery:</strong> Estratégias de disaster recovery</li>
                  <li>• <strong>Performance Tuning:</strong> Otimizações para produção</li>
                </ul>
              </div>
            </div> */}

            <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-8 mt-8">
              <strong className="text-yellow-400 text-lg">🎉 Parabéns!</strong> Você acabou de construir uma "central de delivery" completa usando Kafka!
              Agora você entende como sistemas distribuídos modernos processam milhões de eventos por segundo -
              do pedido à entrega, tudo orquestrado de forma resiliente e escalável! 🚀
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

export default KafkaDeliveryArticle;