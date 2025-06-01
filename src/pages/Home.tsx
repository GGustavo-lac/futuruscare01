
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedPet3D from "@/components/3d/AnimatedPet3D";
import FloatingCard3D from "@/components/3d/FloatingCard3D";
import AnimatedStats3D from "@/components/3d/AnimatedStats3D";

const Home = () => {
  const features = [
    {
      icon: "🏠",
      title: "Cuidado em Casa",
      description: "Seu pet fica no conforto do lar enquanto você viaja",
      color: "#8A2BE2"
    },
    {
      icon: "⏰",
      title: "Disponível 24/7",
      description: "Atendemos emergências a qualquer hora do dia",
      color: "#ADD8E6"
    },
    {
      icon: "❤️",
      title: "Amor Garantido",
      description: "Tratamos seu pet como se fosse da nossa família",
      color: "#8A2BE2"
    },
    {
      icon: "📱",
      title: "Updates Diários",
      description: "Receba fotos e vídeos do seu pet todos os dias",
      color: "#ADD8E6"
    }
  ];

  const stats = [
    { number: "500+", label: "Pets Felizes" },
    { number: "200+", label: "Famílias Atendidas" },
    { number: "5", label: "Anos de Experiência" },
    { number: "4.9", label: "Avaliação Média" }
  ];

  return (
    <Layout>
      {/* Hero Section with 3D Animation */}
      <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Cuidamos do seu{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pet
                </span>{" "}
                com Amor
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Serviços profissionais de pet sitting em São Paulo. 
                Deixe seu companheiro em mãos seguras e carinhosas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4"
                >
                  <Link to="/contato">Agende Agora</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link to="/servicos">Ver Serviços</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <AnimatedPet3D />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Futurus Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos o melhor cuidado para seu pet com profissionalismo e muito carinho
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-32">
                    <FloatingCard3D icon={feature.icon} color={feature.color} />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Animation */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats3D stats={stats} />
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            O que nossos clientes dizem
          </h2>
          
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "A Futurus Care salvou minha viagem! Minha Luna ficou super bem cuidada 
                e eu recebi fotos dela todos os dias. Recomendo de olhos fechados!"
              </blockquote>
              <div className="text-primary font-semibold">— Maria Silva</div>
              <div className="text-gray-500">Tutora da Luna</div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/depoimentos">Ver Todos os Depoimentos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para cuidar do seu pet?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato conosco e agende uma consulta gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4"
            >
              <Link to="/contato">
                <Phone className="w-5 h-5 mr-2" />
                Fale Conosco
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
