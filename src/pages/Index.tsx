import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-hero opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-hero text-black rounded-full text-sm font-bold mb-6">
              🚀 Últimas vagas disponíveis
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-gradient-hero bg-clip-text">
                decolar
              </span>{" "}
              suas vendas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cadastre-se agora e descubra como nossa metodologia exclusiva pode 
              <span className="font-bold text-primary"> triplicar seus resultados</span> em apenas 90 dias
            </p>
          </div>
          
          <ContactForm />
          
          {/* Trust Elements */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 text-lg">
              Mais de 500 advogados já transformaram seus negócios conosco
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-black font-black text-sm">G</span>
                </div>
                <span className="text-xl font-bold">Google Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">M</span>
                </div>
                <span className="text-xl font-bold">Meta Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;