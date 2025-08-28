import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, User, Send, Shield, Clock, Award } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Obrigado pelo seu interesse!",
      description: "Em breve nossa equipe entrará em contato para uma consultoria gratuita.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    { icon: Shield, text: "100% Seguro e Confidencial" },
    { icon: Clock, text: "Resposta em até 2h" },
    { icon: Award, text: "Consultoria Gratuita" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      
      {/* Form */}
      <Card className="p-8 shadow-hover hover:shadow-brand transition-all duration-500 bg-gradient-card">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-brand">
            <Send className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-3xl font-black mb-3">Cadastre-se Agora</h3>
          <p className="text-muted-foreground text-lg">
            Descubra como turbinar suas conversões com nossa consultoria gratuita
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              className="pl-12 h-12 bg-white/50 border-2 focus:border-primary transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              name="email"
              type="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleChange}
              className="pl-12 h-12 bg-white/50 border-2 focus:border-primary transition-colors"
              required
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              name="phone"
              placeholder="WhatsApp (11) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
              className="pl-12 h-12 bg-white/50 border-2 focus:border-primary transition-colors"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            variant="cta" 
            size="lg" 
            className="w-full h-14 text-lg shadow-hover group"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </div>
            ) : (
              <>
                Quero Minha Consultoria Gratuita
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs text-muted-foreground font-semibold leading-tight">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Benefits */}
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <h3 className="text-3xl font-black mb-6 leading-tight">
            Por que escolher a{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              Você Digital?
            </span>
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Resultados Garantidos</h4>
                <p className="text-muted-foreground">
                  Aumento médio de 300% em leads qualificados nos primeiros 90 dias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Parceiros Oficiais</h4>
                <p className="text-muted-foreground">
                  Certificados Google e Meta com acesso às melhores ferramentas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-hover transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Suporte 24/7</h4>
                <p className="text-muted-foreground">
                  Acompanhamento contínuo e suporte especializado quando precisar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-hero p-6 rounded-2xl text-black">
          <h4 className="font-black text-xl mb-3">🎁 Bônus Exclusivo</h4>
          <p className="font-semibold">
            Auditoria gratuita do seu negócio + Estratégia personalizada de tráfego
          </p>
          <p className="text-sm opacity-80 mt-2">
            Valor: R$ 1.500 - Totalmente grátis para os primeiros 50 cadastros
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;