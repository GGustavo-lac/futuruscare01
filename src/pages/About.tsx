
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Star, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const team = [
    {
      name: "Derik Batinga",
      role: "Fundador & CEO",
      description: "Especialista em gestão de serviços para pets com visão inovadora para o futuro do cuidado animal.",
      image: "👨‍💼"
    },
    {
      name: "David Pedreira",
      role: "Veterinário Chefe",
      description: "Formado em Medicina Veterinária com expertise em cuidados especializados e emergências.",
      image: "👨‍⚕️"
    },
    {
      name: "Isaac Dantas",
      role: "Coordenador de Operações",
      description: "Responsável pela coordenação e qualidade de todos os serviços da Futurus Care.",
      image: "👨‍🎓"
    },
    {
      name: "Enzo Caldeira",
      role: "Especialista em Comportamento Animal",
      description: "Expert em comportamento animal e técnicas de socialização para pets.",
      image: "👨‍🔬"
    },
    {
      name: "Gustavo Lacerda",
      role: "Gerente de Atendimento",
      description: "Garante a excelência no atendimento e satisfação de todos os nossos clientes.",
      image: "👨‍💻"
    }
  ];

  const values = [
    {
      icon: "❤️",
      title: "Amor pelos Animais",
      description: "Cada pet é tratado com o mesmo carinho que damos aos nossos próprios"
    },
    {
      icon: "🔒",
      title: "Confiança e Segurança",
      description: "Protocolos rigorosos para garantir a segurança do seu pet e da sua casa"
    },
    {
      icon: "📱",
      title: "Transparência",
      description: "Comunicação constante com updates, fotos e relatórios diários"
    },
    {
      icon: "⚡",
      title: "Disponibilidade",
      description: "Atendimento 24/7 para emergências e necessidades especiais"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nossa{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                História
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nascemos do amor incondicional pelos animais e da vontade de proporcionar 
              tranquilidade para as famílias que precisam se ausentar.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como tudo começou
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A Futurus Care nasceu em 2019, quando nossa equipe percebeu 
                  que muitos tutores enfrentavam dificuldades para encontrar cuidadores 
                  confiáveis para seus pets durante viagens ou períodos de ausência.
                </p>
                <p>
                  Como profissionais apaixonados por animais, decidimos criar um serviço 
                  que combinasse expertise profissional com o carinho de uma família. 
                  Hoje, já cuidamos de mais de 500 pets em São Paulo e região.
                </p>
                <p>
                  Nossa missão é simples: garantir que seu pet receba todo o amor, 
                  cuidado e atenção que merece, para que você tenha total tranquilidade 
                  sabendo que ele está em boas mãos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 gradient-bg rounded-2xl flex items-center justify-center text-8xl animate-float">
                🐕‍🦺
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-3xl">
                🐱
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam cada ação da nossa equipe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais dedicados e apaixonados por cuidar do seu pet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Recognition */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Reconhecimento e Conquistas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Famílias Atendidas</div>
            </div>
            <div>
              <Star className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-lg opacity-90">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-3xl font-bold mb-2">2023</div>
              <div className="text-lg opacity-90">Melhor Pet Sitting SP</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer fazer parte da nossa família?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Venha conhecer nossos serviços e descubra por que somos a escolha de centenas de famílias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4"
            >
              <Link to="/contato">
                <Phone className="w-5 h-5 mr-2" />
                Entre em Contato
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link to="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
