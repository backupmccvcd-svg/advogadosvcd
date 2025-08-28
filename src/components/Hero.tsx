import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Aumento médio em leads" },
    { icon: Users, value: "500+", label: "Advogados atendidos" },
    { icon: Target, value: "89%", label: "Taxa de conversão" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-hero rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-hero rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-left animate-slide-up">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-hero text-black rounded-full text-sm font-bold mb-6 animate-pulse-slow">
                🚀 Agência Parceira Google & Meta
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
              Soluções de{" "}
              <span className="text-transparent bg-gradient-hero bg-clip-text animate-pulse">
                Tráfego
              </span>{" "}
              que{" "}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Convertem
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Impulsione advogados, Google Ads e funil completo com{" "}
              <span className="text-brand-yellow font-bold">ROI real</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <stat.icon className="w-8 h-8 text-brand-yellow mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-4 group"
                onClick={scrollToServices}
              >
                Ver Soluções
                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 text-white border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300"
                onClick={scrollToContact}
              >
                Falar com Especialista
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-hover">
                <div className="aspect-video bg-black/40 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-500"
                     onClick={() => window.open('https://www.youtube.com/watch?v=VM8pdky4x8I', '_blank')}>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-hover">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Video Placeholder Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-yellow/10 to-transparent"></div>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-white text-lg font-bold mb-1">Como Revolucionamos o Tráfego Digital</p>
                    <p className="text-gray-300 text-sm">Descubra nossa metodologia exclusiva</p>
                  </div>
                </div>
                
                {/* Video Description */}
                <div className="mt-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Assista Nossa Apresentação</h3>
                  <p className="text-gray-300 text-sm">Veja como aumentamos leads em 300% para advogados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Role para ver mais</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;