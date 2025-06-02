import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Star, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";

interface Person {
  id: number;
  name: string;
  location: string;
  avatar: string;
  skills: string[];
  hourlyRate: number;
  rating: number;
  availability: "disponivel" | "ocupado" | "parcial";
  experience: string;
  description: string;
}

const people: Person[] = [
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
    description: "Veterinária especializada em cuidados domiciliares para pets com necessidades especiais e idosos."
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
    description: "Especialista em exercícios e passeios para cães de grande porte. Adora atividades ao ar livre."
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
    description: "Apaixonada por felinos, especializada no cuidado de gatos com comportamentos específicos e raças exóticas."
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
    description: "Especialista em pets de pequeno porte, aves e roedores. Muito cuidadoso e atencioso com animais delicados."
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
    description: "Oferece hospedagem em casa com quintal amplo. Especialista em cuidar de múltiplos pets simultaneamente."
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
    description: "Pet groomer profissional que oferece serviços de beleza e higiene para pets em domicílio."
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
    description: "Especializada no cuidado de filhotes e socialização. Ajuda na adaptação de pets recém-adotados."
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
    description: "Especialista em transporte seguro de pets. Oferece serviços para viagens, mudanças e ida ao veterinário."
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
    description: "Terapeuta comportamental para pets. Especializada em tratar ansiedade e problemas comportamentais."
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
    description: "Biólogo especializado em pets exóticos como répteis, anfíbios e outros animais não convencionais."
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
    description: "Enfermeira veterinária com especialização em emergências. Disponível para plantões e cuidados intensivos."
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
    description: "Ex-adestrador profissional especializado em cães grandes e de guarda. Oferece exercícios e cuidados específicos."
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
    experience: "6 years",
    description: "Fisioterapeuta animal especializada em pets idosos. Oferece exercícios de mobilidade e cuidados geriátricos."
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
    description: "Recreador especializado em manter pets jovens entretidos com brincadeiras e atividades educativas."
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
    description: "Nutricionista animal que oferece consultoria e cuidados relacionados à alimentação e dietas especiais."
  }
];

const allSkills = [...new Set(people.flatMap(person => person.skills))].sort();

const Hiring = () => {
  const [skillFilter, setSkillFilter] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPeople = useMemo(() => {
    return people.filter(person => {
      const matchesSkill = !skillFilter || skillFilter === "all" || person.skills.includes(skillFilter);
      const matchesPrice = !maxPrice || person.hourlyRate <= parseInt(maxPrice);
      const matchesAvailability = !availabilityFilter || availabilityFilter === "all" || person.availability === availabilityFilter;
      const matchesSearch = !searchTerm || 
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesSkill && matchesPrice && matchesAvailability && matchesSearch;
    });
  }, [skillFilter, maxPrice, availabilityFilter, searchTerm]);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "disponivel": return "bg-green-100 text-green-800";
      case "parcial": return "bg-yellow-100 text-yellow-800";
      case "ocupado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case "disponivel": return "Disponível";
      case "parcial": return "Parcialmente disponível";
      case "ocupado": return "Ocupado";
      default: return availability;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contrate Cuidadores Pet Especializados
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre os melhores cuidadores para seu pet com diferentes especialidades e preços
            </p>
          </div>

          {/* Filtros */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="search">Buscar</Label>
                  <Input
                    id="search"
                    placeholder="Nome ou especialidade..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="skill">Especialidade</Label>
                  <Select value={skillFilter} onValueChange={setSkillFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas as especialidades" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as especialidades</SelectItem>
                      {allSkills.map(skill => (
                        <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">Preço máximo/hora</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="R$ 100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="availability">Disponibilidade</Label>
                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="disponivel">Disponível</SelectItem>
                      <SelectItem value="parcial">Parcialmente disponível</SelectItem>
                      <SelectItem value="ocupado">Ocupado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSkillFilter("");
                      setMaxPrice("");
                      setAvailabilityFilter("");
                      setSearchTerm("");
                    }}
                    className="w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resultados */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredPeople.length} cuidadores encontrados
            </p>
          </div>

          {/* Lista de Cuidadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPeople.map((person) => (
              <Card key={person.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{person.avatar}</div>
                      <div>
                        <CardTitle className="text-xl">{person.name}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {person.location}
                        </div>
                      </div>
                    </div>
                    <Badge className={getAvailabilityColor(person.availability)}>
                      {getAvailabilityText(person.availability)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{person.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{person.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{person.experience}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Especialidades:</h4>
                      <div className="flex flex-wrap gap-1">
                        {person.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-bold text-primary">
                          R$ {person.hourlyRate}
                        </span>
                        <span className="text-gray-600">/hora</span>
                      </div>
                      <Button 
                        className="gradient-bg text-white hover:opacity-90"
                        disabled={person.availability === "ocupado"}
                      >
                        {person.availability === "ocupado" ? "Indisponível" : "Contratar"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPeople.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum cuidador encontrado com os filtros selecionados.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSkillFilter("");
                  setMaxPrice("");
                  setAvailabilityFilter("");
                  setSearchTerm("");
                }}
                className="mt-4"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Hiring;
