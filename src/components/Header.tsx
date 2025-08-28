import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mr-3 shadow-brand">
              <span className="text-black font-black text-lg">VD</span>
            </div>
            <div>
              <h1 className="font-black text-xl">Você Digital</h1>
              <p className="text-xs text-muted-foreground font-semibold">Propaganda</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            onClick={scrollToContact}
            className="hidden sm:inline-flex shadow-brand"
          >
            Falar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;