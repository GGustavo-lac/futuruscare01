
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0205fcbf-63d0-47c7-bcd5-d5b4fc137949.png" 
                alt="Futurus Care Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Futurus Care</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Cuidamos do seu pet com todo amor e carinho que ele merece. 
              Serviços profissionais de pet sitting em São Paulo e região.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contato@futuruscare.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pet Sitting Diário</li>
              <li>Hospedagem em Casa</li>
              <li>Passeios</li>
              <li>Cuidados Especiais</li>
              <li>Emergências</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Futurus Care. Todos os direitos reservados. 
            Feito com ❤️ para você e seu pet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
