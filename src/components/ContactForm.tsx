import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Obrigado pelo seu interesse!",
      description: "Em breve nossa equipe entrará em contato.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="p-8 max-w-md mx-auto shadow-card">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Cadastre-se</h3>
        <p className="text-muted-foreground">
          Descubra como turbinar suas conversões
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          name="phone"
          placeholder="WhatsApp (11) 99999-9999"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <Button type="submit" variant="cta" size="lg" className="w-full">
          Quero saber mais
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;