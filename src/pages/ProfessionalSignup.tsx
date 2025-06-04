
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Phone, Mail, Star, Upload, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const ProfessionalSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    hourlyRate: "",
    description: "",
    avatar: "👨‍⚕️"
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSkills = [
    "Cuidados Médicos", "Administração de Medicamentos", "Pets Idosos", "Emergências",
    "Passeios", "Exercícios", "Cães Grandes", "Treinamento Básico",
    "Gatos", "Felinos Especiais", "Comportamento Felino", "Cuidados Noturnos",
    "Pets Pequenos", "Aves", "Roedores", "Cuidados Delicados",
    "Hospedagem", "Cuidados 24h", "Multiple Pets", "Casa Ampla",
    "Grooming", "Banho e Tosa", "Cuidados Estéticos", "Unhas",
    "Filhotes", "Socialização", "Primeiros Cuidados", "Vacinas",
    "Transporte Pet", "Viagens", "Aeroporto", "Mudanças",
    "Pet Therapy", "Pets Ansiosos", "Comportamento", "Relaxamento",
    "Pets Exóticos", "Répteis", "Anfíbios", "Cuidados Especiais",
    "Primeiros Socorros", "Plantão", "Cuidados Intensivos",
    "Adestramento", "Fisioterapia", "Mobilidade", "Cuidados Geriátricos",
    "Brincadeiras", "Entretenimento", "Atividades Lúdicas", "Pets Jovens",
    "Nutrição Pet", "Dietas Especiais", "Alimentação", "Suplementação"
  ];

  const avatarOptions = [
    "👨‍⚕️", "👩‍⚕️", "👨‍🦲", "👩‍🦰", "👨‍🦱", "👩‍🦳", 
    "👨‍🦰", "👩‍🦱", "👨‍🔧", "👩‍🎓", "👩‍💼", "👨‍🎨"
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio do formulário
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
          <Card className="max-w-lg">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cadastro Realizado com Sucesso!
              </h2>
              <p className="text-gray-600 mb-6">
                Seu perfil foi enviado para análise. Você receberá um e-mail de confirmação 
                em até 24 horas com as próximas etapas.
              </p>
              <Button asChild className="gradient-bg text-white hover:opacity-90">
                <a href="/">Voltar ao Início</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cadastre-se como Profissional Pet
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Junte-se à nossa plataforma e comece a ganhar dinheiro cuidando de pets
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informações Pessoais */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Informações Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      placeholder="Cidade, Estado"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="avatar">Escolha seu Avatar</Label>
                    <div className="grid grid-cols-6 gap-2 mt-2">
                      {avatarOptions.map((avatar) => (
                        <Button
                          key={avatar}
                          type="button"
                          variant={formData.avatar === avatar ? "default" : "outline"}
                          className="h-12 text-2xl"
                          onClick={() => setFormData({...formData, avatar})}
                        >
                          {avatar}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informações Profissionais */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Informações Profissionais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Anos de Experiência</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 ano</SelectItem>
                        <SelectItem value="2">2 anos</SelectItem>
                        <SelectItem value="3">3 anos</SelectItem>
                        <SelectItem value="4">4 anos</SelectItem>
                        <SelectItem value="5">5+ anos</SelectItem>
                        <SelectItem value="10">10+ anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate">Valor por Hora (R$)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      min="25"
                      placeholder="Ex: 50"
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Valor mínimo: R$ 25/hora</p>
                  </div>

                  <div>
                    <Label htmlFor="description">Descrição dos Serviços</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva sua experiência, especialidades e diferenciais..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Especialidades */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Especialidades</CardTitle>
                <p className="text-gray-600">Selecione suas áreas de especialização (mínimo 3)</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availableSkills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                      />
                      <Label htmlFor={skill} className="text-sm">
                        {skill}
                      </Label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Especialidades selecionadas:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentos */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Documentos (Opcional)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Certificados e Diplomas</Label>
                  <div className="mt-2 border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Clique para enviar documentos</p>
                    <p className="text-sm text-gray-400">PDF, JPG ou PNG (máx. 5MB)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botão de Envio */}
            <div className="mt-8 text-center">
              <Button 
                type="submit"
                size="lg"
                className="gradient-bg text-white hover:opacity-90 px-12"
                disabled={selectedSkills.length < 3 || !formData.name || !formData.email}
              >
                Cadastrar Perfil
              </Button>
              <p className="text-sm text-gray-500 mt-2">
                Ao se cadastrar, você concorda com nossos termos de uso
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProfessionalSignup;
