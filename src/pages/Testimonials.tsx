
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Phone } from "lucide-react";
import Layout from "@/components/Layout";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      pet: "Luna (Golden Retriever)",
      rating: 5,
      text: "A PetCare+ salvou minha viagem de trabalho! A Luna ficou super bem cuidada e eu recebi fotos dela todos os dias. A Ana Clara é um amor de pessoa e trata os pets como se fossem da própria família. Recomendo de olhos fechados!",
      service: "Hospedagem em Casa",
      date: "Dezembro 2023"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      pet: "Pipoca e Amendoim (Gatos SRD)",
      rating: 5,
      text: "Precisei viajar a trabalho por 10 dias e estava preocupado em deixar meus dois gatos. O serviço foi impecável! Recebdi vídeos diários e voltei para casa encontrando eles tranquilos e bem cuidados. Super profissionais!",
      service: "Pet Sitting Diário",
      date: "Novembro 2023"
    },
    {
      id: 3,
      name: "Amanda Costa",
      pet: "Thor (Pastor Alemão)",
      rating: 5,
      text: "O Thor é um cão grande e enérgico, e eu estava receosa de deixá-lo com alguém. Mas a equipe da PetCare+ demonstrou total conhecimento sobre o comportamento dele. Os passeios diários foram fundamentais. Excelente trabalho!",
      service: "Passeios Individuais",
      date: "Janeiro 2024"
    },
    {
      id: 4,
      name: "Roberto Fernandes",
      pet: "Mel (Poodle)",
      rating: 5,
      text: "Minha Mel é idosinha e precisa de medicação diária. Fiquei muito impressionado com o cuidado e atenção que ela recebeu. A comunicação foi perfeita e os relatórios muito detalhados. Voltaremos a usar com certeza!",
      service: "Cuidados Especiais",
      date: "Outubro 2023"
    },
    {
      id: 5,
      name: "Juliana Reis",
      pet: "Simba (Gato Persa)",
      rating: 5,
      text: "Primeira vez que deixo meu Simba com pet sitters e foi uma experiência incrível. Ele é muito medroso com estranhos, mas criou um vínculo muito legal com a cuidadora. O ambiente da hospedagem é acolhedor e super limpo.",
      service: "Hospedagem em Casa",
      date: "Setembro 2023"
    },
    {
      id: 6,
      name: "Pedro Santos",
      pet: "Bela (Labrador)",
      rating: 5,
      text: "Serviço de emergência salvou a vida da minha Bela! No meio da madrugada ela passou mal e a equipe foi super rápida em nos auxiliar e levar ela ao veterinário. Profissionalismo e amor pelos animais em primeiro lugar.",
      service: "Emergências 24h",
      date: "Agosto 2023"
    }
  ];

  const stats = [
    { number: "500+", label: "Pets Atendidos" },
    { number: "98%", label: "Clientes Satisfeitos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "200+", label: "Famílias Atendidas" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Depoimentos
              </span>{" "}
              Reais
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Veja o que nossos clientes dizem sobre o cuidado que oferecemos 
              para seus pets queridos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Histórias de Amor e Confiança
            </h2>
          </div>
          
          <div className="relative">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <div className="text-xl font-bold text-primary mb-2">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-2">
                    Tutor(a) de {testimonials[currentTestimonial].pet}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].service} • {testimonials[currentTestimonial].date}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button 
                onClick={prevTestimonial}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                ← Anterior
              </Button>
              <Button 
                onClick={nextTestimonial}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Próximo →
              </Button>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todos os Depoimentos
            </h2>
            <p className="text-xl text-gray-600">
              Mais histórias de sucesso e satisfação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.text.length > 150 
                      ? testimonial.text.substring(0, 150) + "..." 
                      : testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {testimonial.pet}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Números que Falam por Si
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Avaliações em Outras Plataformas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-gray-600">Google Reviews</div>
                <div className="text-sm text-gray-500 mt-2">127 avaliações</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-gray-600">PetLove</div>
                <div className="text-sm text-gray-500 mt-2">89 avaliações</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <div className="text-2xl font-bold text-primary mb-2">5.0/5</div>
                <div className="text-gray-600">Facebook</div>
                <div className="text-sm text-gray-500 mt-2">156 avaliações</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Quer ser nosso próximo depoimento?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experimente nossos serviços e descubra por que somos tão amados por pets e tutores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-4"
            >
              <Link to="/contato">
                <Phone className="w-5 h-5 mr-2" />
                Agende uma Consulta
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

export default Testimonials;
