
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Phone, Instagram, MessageCircle, CreditCard, QrCode, Shield, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

// Mock data - em um app real viria de uma API
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
    whatsapp: "(11) 99999-1234"
  },
  // ... outros cuidadores (mantendo apenas um para exemplo)
];

const PetSitterContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | null>(null);
  const [serviceDetails, setServiceDetails] = useState({
    hours: 1,
    date: "",
    time: "",
    petDetails: ""
  });

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
                      <Label htmlFor="date">Data</Label>
                      <Input
                        id="date"
                        type="date"
                        value={serviceDetails.date}
                        onChange={(e) => setServiceDetails({...serviceDetails, date: e.target.value})}
                      />
                    </div>
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
                  disabled={!paymentMethod || !serviceDetails.date || !serviceDetails.time}
                  size="lg"
                >
                  Pagar R$ {totalAmount} via {paymentMethod === "pix" ? "PIX" : "Cartão"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PetSitterContact;
