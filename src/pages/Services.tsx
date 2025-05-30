
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Star } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Pet Sitting Diário",
      description: "Visitas diárias ao seu lar para alimentar, medicar e fazer companhia ao seu pet",
      features: ["Alimentação conforme rotina", "Administração de medicamentos", "Brincadeiras e carinho", "Limpeza básica"],
      price: "A partir de R$ 45/visita",
      duration: "Visitas de 1h cada",
      popular: false
    },
    {
      icon: "🛏️",
      title: "Hospedagem em Casa",
      description: "Seu pet fica na nossa casa com todo conforto e atenção 24 horas por dia",
      features: ["Ambiente seguro e higienizado", "Companhia constante", "Passeios diários", "Updates com fotos/vídeos"],
      price: "A partir de R$ 80/dia",
      duration: "Cuidado integral 24h",
      popular: true
    },
    {
      icon: "🚶",
      title: "Passeios Individuais",
      description: "Passeios personalizados para manter seu pet ativo e socializado",
      features: ["Passeios de 30-60 min", "Socialização controlada", "Exercícios adequados", "Relatório da atividade"],
      price: "A partir de R$ 25/passeio",
      duration: "30-60 minutos",
      popular: false
    },
    {
      icon: "💊",
      title: "Cuidados Especiais",
      description: "Atenção especializada para pets idosos, doentes ou com necessidades específicas",
      features: ["Administração de remédios", "Cuidados veterinários básicos", "Atenção redobrada", "Relatórios detalhados"],
      price: "A partir de R$ 65/visita",
      duration: "Conforme necessidade",
      popular: false
    },
    {
      icon: "🚨",
      title: "Emergências 24h",
      description: "Suporte de emergência para situações imprevistas com seu pet",
      features: ["Disponibilidade 24/7", "Transporte veterinário", "Primeiro socorro", "Comunicação imediata"],
      price: "A partir de R$ 150/atendimento",
      duration: "Conforme urgência",
      popular: false
    },
    {
      icon: "🧽",
      title: "Higienização",
      description: "Banho, tosa higiênica e cuidados estéticos básicos para seu pet",
      features: ["Banho com produtos adequados", "Tosa higiênica", "Corte de unhas", "Limpeza de ouvidos"],
      price: "A partir de R$ 55/sessão",
      duration: "1-2 horas",
      popular: false
    }
  ];

  const addOns = [
    { name: "Taxa de deslocamento (>10km)", price: "R$ 15" },
    { name: "Cuidado de múltiplos pets", price: "+R$ 20/pet adicional" },
    { name: "Feriados e fins de semana", price: "+20% do valor" },
    { name: "Limpeza completa da casa", price: "R$ 80" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nossos{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cuidado personalizado e profissional para cada necessidade do seu pet. 
              Escolha o serviço ideal para vocês.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-5xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.duration}
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      className={`w-full ${service.popular ? 'gradient-bg text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}
                      variant={service.popular ? 'default' : 'outline'}
                    >
                      <Link to="/contato">
                        Solicitar Orçamento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviços Adicionais
            </h2>
            <p className="text-xl text-gray-600">
              Personalize ainda mais o cuidado do seu pet
            </p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{addon.name}</span>
                    <span className="font-semibold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e transparente para cuidar do seu pet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Primeiro Contato",
                description: "Entre em contato conosco pelo WhatsApp ou formulário"
              },
              {
                step: "2", 
                title: "Consulta Gratuita",
                description: "Visitamos você e seu pet para conhecer as necessidades"
              },
              {
                step: "3",
                title: "Proposta Personalizada", 
                description: "Criamos um plano de cuidados sob medida"
              },
              {
                step: "4",
                title: "Cuidado com Amor",
                description: "Iniciamos os serviços com muito carinho e profissionalismo"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Nossa Garantia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="opacity-90">Seguro para pets e residência incluído</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Satisfação Garantida</h3>
              <p className="opacity-90">Reembolso integral se não ficar satisfeito</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Comunicação Diária</h3>
              <p className="opacity-90">Updates, fotos e vídeos todos os dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para agendar?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e receba um orçamento personalizado gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4"
            >
              <Link to="/contato">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link to="/depoimentos">
                <Star className="w-5 h-5 mr-2" />
                Ver Depoimentos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
