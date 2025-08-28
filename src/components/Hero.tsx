import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Soluções de{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              Tráfego
            </span>{" "}
            que Convertem
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Impulsione advogados, Google Ads e funil completo com ROI real
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={scrollToServices}
            >
              Ver Soluções
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-black"
              onClick={scrollToContact}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>

        {/* Video Section Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg">Vídeo de Introdução</p>
                <p className="text-gray-300 text-sm">Descubra como revolucionamos o tráfego digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;