import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Roberto Silva",
      role: "Advogado Criminalista",
      content: "Em 3 meses com a Voz Digital, triplicamos nossos leads qualificados no WhatsApp. O ROI foi excepcional!",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Escritório de Advocacia Empresarial",
      content: "O funil completo desenvolvido pela equipe converteu 40% mais clientes. Recomendo totalmente!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Advogado Trabalhista",
      content: "Site profissional + tráfego Google = mais de 200% de aumento em consultas agendadas.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            O que nossos{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              clientes
            </span>{" "}
            dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de profissionais que confiaram em nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 relative hover:shadow-card transition-all duration-300">
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div>
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-foreground font-semibold">Agência Parceira Google e Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;