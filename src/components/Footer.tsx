import { Instagram, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-3">
                <span className="text-black font-black text-lg">VD</span>
              </div>
              <div>
                <h3 className="font-black text-xl">Voz Digital</h3>
                <p className="text-sm text-gray-400">Propaganda</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Agência especializada em tráfego digital e conversão. 
              Parceira oficial Google e Meta, focada em resultados reais para seu negócio.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Cases de Sucesso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>vocedigitalpropaganda.com.br</p>
              <p>contato@vocedigital.com.br</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Voz Digital Propaganda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;