import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Users, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    dates: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    console.log("Dados do formulário:", formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 2 horas. Obrigado pelo interesse!",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "",
      service: "",
      dates: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone & WhatsApp",
      content: "(11) 99999-9999",
      description: "Disponível 24h para emergências"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "contato@futuruscare.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atendimento",
      content: "Segunda a Domingo",
      description: "Das 7h às 22h (emergências 24h)"
    }
  ];

  const faqs = [
    {
      question: "Qual é a área de atendimento?",
      answer: "Atendemos toda a Grande São Paulo, com foco nas zonas Sul, Oeste e Centro. Para regiões mais distantes, aplicamos taxa de deslocamento."
    },
    {
      question: "Posso conhecer o cuidador antes?",
      answer: "Claro! Oferecemos uma consulta gratuita onde você conhece o cuidador e discutimos todas as necessidades do seu pet."
    },
    {
      question: "E se meu pet tem necessidades especiais?",
      answer: "Temos experiência com pets idosos, medicados e com necessidades especiais. Nossa equipe inclui profissionais com formação veterinária."
    },
    {
      question: "Como funciona a comunicação?",
      answer: "Enviamos updates diários com fotos e vídeos via WhatsApp, além de relatórios detalhados das atividades do seu pet."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Entre em{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contato
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vamos conversar sobre as necessidades do seu pet e criar um plano 
              de cuidados personalizado. Consulta inicial gratuita!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <div className="text-lg font-medium text-primary mb-2">
                    {info.content}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solicite seu Orçamento Gratuito
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e entraremos em contato em até 2 horas
            </p>
          </div>
          
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="petName">Nome do Pet *</Label>
                    <Input
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Nome do seu pet"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Tipo de Pet *</Label>
                    <Select onValueChange={(value) => handleSelectChange('petType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cao">Cão</SelectItem>
                        <SelectItem value="gato">Gato</SelectItem>
                        <SelectItem value="passaro">Pássaro</SelectItem>
                        <SelectItem value="roedor">Roedor</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Serviço Desejado *</Label>
                    <Select onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petsitting">Pet Sitting Diário</SelectItem>
                        <SelectItem value="hospedagem">Hospedagem em Casa</SelectItem>
                        <SelectItem value="passeios">Passeios</SelectItem>
                        <SelectItem value="especiais">Cuidados Especiais</SelectItem>
                        <SelectItem value="emergencia">Emergências</SelectItem>
                        <SelectItem value="higienizacao">Higienização</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="dates">Datas Previstas</Label>
                  <Input
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Ex: 15/01 a 20/01 ou todos os dias úteis"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Informações Adicionais</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 min-h-[120px]"
                    placeholder="Conte-nos sobre as necessidades especiais do seu pet, rotina, medicamentos, etc."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="gradient-bg text-white hover:opacity-90 text-lg px-12 py-4"
                  >
                    Enviar Solicitação
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    * Campos obrigatórios | Resposta em até 2 horas
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos suas principais dúvidas
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Emergências 24 Horas
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Para situações urgentes, entre em contato conosco a qualquer hora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              (11) 99999-9999
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Mais de 500 pets já confiaram em nós
          </h2>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se às famílias que escolheram a Futurus Care para cuidar de seus companheiros
          </p>
          <Button 
            asChild 
            size="lg" 
            className="gradient-bg text-white hover:opacity-90 text-lg px-12 py-4"
          >
            <a href="#contact-form">
              Solicitar Orçamento Agora
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
