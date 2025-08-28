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
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Vamos{" "}
              <span className="text-transparent bg-gradient-hero bg-clip-text">
                conversar?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cadastre-se agora e descubra como podemos turbinar suas conversões
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;