import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, Phone, Instagram, MessageCircle, CreditCard, QrCode, Shield, Clock, CheckCircle, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Layout from "@/components/Layout";
import PaymentModal from "@/components/PaymentModal";

// Mock data - todos os cuidadores com informações de contato
const people = [
  {
    id: 1,
    name: "Ana Silva",
    location: "São Paulo, SP",
    avatar: "👩‍⚕️",
    skills: ["Cuidados Médicos", "Administração de Medicamentos", "Pets Idosos", "Emergências"],
    hourlyRate: 85,
    rating: 4.9,
    availability: "disponivel",
    experience: "8 anos",
    description: "Veterinária especializada em cuidados domiciliares para pets com necessidades especiais e idosos.",
    phone: "(11) 99999-1234",
    instagram: "@ana_petsitter",
    whatsapp: "(11) 99999-1234",
    busyDates: ["2025-06-05", "2025-06-10", "2025-06-15", "2025-06-20"]
  },
  {
    id: 2,
    name: "Carlos Santos",
    location: "Rio de Janeiro, RJ",
    avatar: "👨‍🦲",
    skills: ["Passeios", "Exercícios", "Cães Grandes", "Treinamento Básico"],
    hourlyRate: 35,
    rating: 4.7,
    availability: "parcial",
    experience: "3 anos",
    description: "Especialista em exercícios e passeios para cães de grande porte. Adora atividades ao ar livre.",
    phone: "(21) 99888-5678",
    instagram: "@carlos_dogwalker",
    whatsapp: "(21) 99888-5678",
    busyDates: ["2025-06-03", "2025-06-08", "2025-06-12", "2025-06-18", "2025-06-25"]
  },
  {
    id: 3,
    name: "Maria Oliveira",
    location: "Belo Horizonte, MG",
    avatar: "👩‍🦰",
    skills: ["Gatos", "Felinos Especiais", "Comportamento Felino", "Cuidados Noturnos"],
    hourlyRate: 50,
    rating: 4.8,
    availability: "disponivel",
    experience: "6 anos",
    description: "Apaixonada por felinos, especializada no cuidado de gatos com comportamentos específicos e raças exóticas.",
    phone: "(31) 99777-9012",
    instagram: "@maria_catcare",
    whatsapp: "(31) 99777-9012",
    busyDates: ["2025-06-07", "2025-06-14", "2025-06-21"]
  },
  {
    id: 4,
    name: "João Costa",
    location: "Porto Alegre, RS",
    avatar: "👨‍🦱",
    skills: ["Pets Pequenos", "Aves", "Roedores", "Cuidados Delicados"],
    hourlyRate: 40,
    rating: 4.9,
    availability: "disponivel",
    experience: "4 anos",
    description: "Especialista em pets de pequeno porte, aves e roedores. Muito cuidadoso e atencioso com animais delicados.",
    phone: "(51) 99666-3456",
    instagram: "@joao_smallpets",
    whatsapp: "(51) 99666-3456",
    busyDates: ["2025-06-04", "2025-06-11", "2025-06-16", "2025-06-23"]
  },
  {
    id: 5,
    name: "Fernanda Lima",
    location: "Curitiba, PR",
    avatar: "👩‍🦳",
    skills: ["Hospedagem", "Cuidados 24h", "Multiple Pets", "Casa Ampla"],
    hourlyRate: 25,
    rating: 4.6,
    availability: "disponivel",
    experience: "5 anos",
    description: "Oferece hospedagem em casa com quintal amplo. Especialista em cuidar de múltiplos pets simultaneamente.",
    phone: "(41) 99555-7890",
    instagram: "@fernanda_petshotel",
    whatsapp: "(41) 99555-7890",
    busyDates: ["2025-06-06", "2025-06-13", "2025-06-19", "2025-06-26"]
  },
  {
    id: 6,
    name: "Pedro Alves",
    location: "Salvador, BA",
    avatar: "👨‍🦰",
    skills: ["Grooming", "Banho e Tosa", "Cuidados Estéticos", "Unhas"],
    hourlyRate: 60,
    rating: 4.8,
    availability: "parcial",
    experience: "7 anos",
    description: "Pet groomer profissional que oferece serviços de beleza e higiene para pets em domicílio.",
    phone: "(71) 99444-2345",
    instagram: "@pedro_petgrooming",
    whatsapp: "(71) 99444-2345",
    busyDates: ["2025-06-02", "2025-06-09", "2025-06-17", "2025-06-24"]
  },
  {
    id: 7,
    name: "Juliana Ferreira",
    location: "Fortaleza, CE",
    avatar: "👩‍🦱",
    skills: ["Filhotes", "Socialização", "Primeiros Cuidados", "Vacinas"],
    hourlyRate: 45,
    rating: 4.7,
    availability: "disponivel",
    experience: "4 anos",
    description: "Especializada no cuidado de filhotes e socialização. Ajuda na adaptação de pets recém-adotados.",
    phone: "(85) 99333-6789",
    instagram: "@ju_puppycare",
    whatsapp: "(85) 99333-6789",
    busyDates: ["2025-06-01", "2025-06-08", "2025-06-15", "2025-06-22"]
  },
  {
    id: 8,
    name: "Roberto Dias",
    location: "Brasília, DF",
    avatar: "👨‍🦲",
    skills: ["Transporte Pet", "Viagens", "Aeroporto", "Mudanças"],
    hourlyRate: 55,
    rating: 4.5,
    availability: "disponivel",
    experience: "6 anos",
    description: "Especialista em transporte seguro de pets. Oferece serviços para viagens, mudanças e ida ao veterinário.",
    phone: "(61) 99222-4567",
    instagram: "@roberto_pettransport",
    whatsapp: "(61) 99222-4567",
    busyDates: ["2025-06-03", "2025-06-10", "2025-06-18", "2025-06-25"]
  },
  {
    id: 9,
    name: "Camila Torres",
    location: "Recife, PE",
    avatar: "👩‍🦰",
    skills: ["Pet Therapy", "Pets Ansiosos", "Comportamento", "Relaxamento"],
    hourlyRate: 70,
    rating: 4.9,
    availability: "parcial",
    experience: "5 anos",
    description: "Terapeuta comportamental para pets. Especializada em tratar ansiedade e problemas comportamentais.",
    phone: "(81) 99111-8901",
    instagram: "@camila_pettherapy",
    whatsapp: "(81) 99111-8901",
    busyDates: ["2025-06-05", "2025-06-12", "2025-06-20", "2025-06-27"]
  },
  {
    id: 10,
    name: "Lucas Mendes",
    location: "Goiânia, GO",
    avatar: "👨‍🦱",
    skills: ["Pets Exóticos", "Répteis", "Anfíbios", "Cuidados Especiais"],
    hourlyRate: 90,
    rating: 4.8,
    availability: "disponivel",
    experience: "9 anos",
    description: "Biólogo especializado em pets exóticos como répteis, anfíbios e outros animais não convencionais.",
    phone: "(62) 99000-2345",
    instagram: "@lucas_exoticpets",
    whatsapp: "(62) 99000-2345",
    busyDates: ["2025-06-04", "2025-06-11", "2025-06-16", "2025-06-23"]
  },
  {
    id: 11,
    name: "Amanda Costa",
    location: "Florianópolis, SC",
    avatar: "👩‍💼",
    skills: ["Emergências", "Primeiros Socorros", "Plantão", "Cuidados Intensivos"],
    hourlyRate: 95,
    rating: 5.0,
    availability: "ocupado",
    experience: "10 anos",
    description: "Enfermeira veterinária com especialização em emergências. Disponível para plantões e cuidados intensivos.",
    phone: "(48) 98999-6789",
    instagram: "@amanda_petemergency",
    whatsapp: "(48) 98999-6789",
    busyDates: ["2025-06-01", "2025-06-02", "2025-06-03", "2025-06-04", "2025-06-05", "2025-06-06", "2025-06-07", "2025-06-08", "2025-06-09", "2025-06-10"]
  },
  {
    id: 12,
    name: "Diego Silva",
    location: "Campinas, SP",
    avatar: "👨‍🔧",
    skills: ["Pets Grandes", "Cães de Guarda", "Exercícios Intensos", "Adestramento"],
    hourlyRate: 65,
    rating: 4.6,
    availability: "disponivel",
    experience: "8 anos",
    description: "Ex-adestrador profissional especializado em cães grandes e de guarda. Oferece exercícios e cuidados específicos.",
    phone: "(19) 98888-1234",
    instagram: "@diego_bigdogs",
    whatsapp: "(19) 98888-1234",
    busyDates: ["2025-06-07", "2025-06-14", "2025-06-21", "2025-06-28"]
  },
  {
    id: 13,
    name: "Isabela Rocha",
    location: "Vitória, ES",
    avatar: "👩‍🎓",
    skills: ["Pets Idosos", "Fisioterapia", "Mobilidade", "Cuidados Geriátricos"],
    hourlyRate: 75,
    rating: 4.9,
    availability: "disponivel",
    experience: "6 anos",
    description: "Fisioterapeuta animal especializada em pets idosos. Oferece exercícios de mobilidade e cuidados geriátricos.",
    phone: "(27) 98777-5678",
    instagram: "@isabela_seniordogs",
    whatsapp: "(27) 98777-5678",
    busyDates: ["2025-06-02", "2025-06-09", "2025-06-17", "2025-06-24"]
  },
  {
    id: 14,
    name: "Rafael Lima",
    location: "João Pessoa, PB",
    avatar: "👨‍🎨",
    skills: ["Brincadeiras", "Entretenimento", "Atividades Lúdicas", "Pets Jovens"],
    hourlyRate: 30,
    rating: 4.4,
    availability: "disponivel",
    experience: "2 anos",
    description: "Recreador especializado em manter pets jovens entretidos com brincadeiras e atividades educativas.",
    phone: "(83) 98666-9012",
    instagram: "@rafael_petfun",
    whatsapp: "(83) 98666-9012",
    busyDates: ["2025-06-06", "2025-06-13", "2025-06-19", "2025-06-26"]
  },
  {
    id: 15,
    name: "Patrícia Almeida",
    location: "Maceió, AL",
    avatar: "👩‍⚕️",
    skills: ["Nutrição Pet", "Dietas Especiais", "Alimentação", "Suplementação"],
    hourlyRate: 80,
    rating: 4.7,
    availability: "parcial",
    experience: "7 anos",
    description: "Nutricionista animal que oferece consultoria e cuidados relacionados à alimentação e dietas especiais.",
    phone: "(82) 98555-3456",
    instagram: "@patricia_petnutrition",
    whatsapp: "(82) 98555-3456",
    busyDates: ["2025-06-01", "2025-06-08", "2025-06-15", "2025-06-22", "2025-06-29"]
  }
];

const PetSitterContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [serviceDetails, setServiceDetails] = useState({
    hours: 1,
    time: "",
    petDetails: ""
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const petSitter = people.find(p => p.id === parseInt(id || "0"));

  if (!petSitter) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Cuidador não encontrado</h1>
            <Button onClick={() => navigate("/contratar")}>Voltar para lista</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const totalAmount = petSitter.hourlyRate * serviceDetails.hours;

  // Converte as datas ocupadas para objetos Date
  const busyDates = petSitter.busyDates.map(date => new Date(date));

  // Função para verificar se uma data está ocupada
  const isDateBusy = (date: Date) => {
    return busyDates.some(busyDate => 
      date.toDateString() === busyDate.toDateString()
    );
  };

  // Função para desabilitar datas passadas e ocupadas
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || isDateBusy(date);
  };

  const handlePayment = () => {
    if (paymentMethod) {
      setShowPaymentModal(true);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate("/contratar")}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para lista
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{petSitter.avatar}</div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{petSitter.name}</h1>
                <p className="text-gray-600">{petSitter.location}</p>
                <p className="text-sm text-gray-500">{petSitter.experience} de experiência</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {petSitter.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Telefone/WhatsApp</p>
                    <p className="text-gray-600">{petSitter.whatsapp}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-gray-600">{petSitter.instagram}</p>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Dica de Segurança:</strong> Converse com o cuidador antes de confirmar o serviço. 
                    Verifique referências e combine todos os detalhes do cuidado.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Detalhes do Serviço e Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle>Contratar Serviço</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Detalhes do Serviço */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Detalhes do Serviço</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hours">Horas de Serviço</Label>
                      <Input
                        id="hours"
                        type="number"
                        min="1"
                        value={serviceDetails.hours}
                        onChange={(e) => setServiceDetails({...serviceDetails, hours: parseInt(e.target.value) || 1})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Horário</Label>
                      <Input
                        id="time"
                        type="time"
                        value={serviceDetails.time}
                        onChange={(e) => setServiceDetails({...serviceDetails, time: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Calendário de Disponibilidade */}
                  <div>
                    <Label>Data do Serviço</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={isDateDisabled}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                          modifiers={{
                            busy: busyDates
                          }}
                          modifiersStyles={{
                            busy: { backgroundColor: '#fee2e2', color: '#dc2626' }
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <p className="text-sm text-gray-500 mt-1">
                      * Datas em vermelho estão ocupadas
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="petDetails">Detalhes sobre seu Pet</Label>
                    <Input
                      id="petDetails"
                      placeholder="Ex: Cão de pequeno porte, 3 anos, precisa de medicação..."
                      value={serviceDetails.petDetails}
                      onChange={(e) => setServiceDetails({...serviceDetails, petDetails: e.target.value})}
                    />
                  </div>
                </div>

                {/* Resumo do Valor */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>Valor por hora:</span>
                    <span>R$ {petSitter.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Quantidade de horas:</span>
                    <span>{serviceDetails.hours}h</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total:</span>
                    <span>R$ {totalAmount}</span>
                  </div>
                </div>

                {/* Método de Pagamento */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Método de Pagamento</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={paymentMethod === "pix" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("pix")}
                      className="h-16 flex-col"
                    >
                      <QrCode className="w-6 h-6 mb-1" />
                      PIX
                    </Button>
                    <Button
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("card")}
                      className="h-16 flex-col"
                    >
                      <CreditCard className="w-6 h-6 mb-1" />
                      Cartão
                    </Button>
                  </div>
                </div>

                {/* Avisos Importantes */}
                <div className="space-y-3">
                  <Alert>
                    <Clock className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Pagamento Seguro:</strong> O valor será retido pela plataforma e só será 
                      liberado para o cuidador após a confirmação de que o serviço foi realizado.
                    </AlertDescription>
                  </Alert>
                  
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Garantia:</strong> Você terá 24h após o serviço para confirmar sua 
                      satisfação. Caso contrário, o valor será devolvido.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Botão de Pagamento */}
                <Button 
                  className="w-full gradient-bg text-white hover:opacity-90"
                  disabled={!paymentMethod || !selectedDate || !serviceDetails.time}
                  size="lg"
                  onClick={handlePayment}
                >
                  Pagar R$ {totalAmount} via {paymentMethod === "pix" ? "PIX" : "Cartão"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        paymentMethod={paymentMethod!}
        amount={totalAmount}
      />
    </Layout>
  );
};

export default PetSitterContact;
