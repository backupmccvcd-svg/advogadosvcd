import ServiceCard from "./ServiceCard";
import { toast } from "@/hooks/use-toast";

const Services = () => {
  const handleCTAClick = (service: string) => {
    toast({
      title: "Interesse registrado!",
      description: `Você demonstrou interesse em: ${service}. Nossa equipe entrará em contato.`,
    });
  };

  const services = [
    {
      title: "Tráfego por WhatsApp para Advogados",
      oldPrice: "R$ 1.750",
      newPrice: "R$ 1.500",
      features: [
        "Campanhas segmentadas para advogados",
        "Lead direto no WhatsApp",
        "Gestão completa de anúncios",
        "Relatórios semanais de performance",
        "Otimização contínua de campanhas"
      ],
      ctaText: "Quero essa solução"
    },
    {
      title: "Site One-Page + Tráfego Google",
      oldPrice: "R$ 5.250",
      newPrice: "R$ 752,50/mês + 2x",
      features: [
        "Site profissional otimizado",
        "Campanhas no Google Ads",
        "Landing page de alta conversão",
        "Integração com WhatsApp",
        "Dashboard de acompanhamento",
        "Suporte técnico incluso"
      ],
      ctaText: "Quero essa solução",
      highlight: true
    },
    {
      title: "Site + Google Ads + Funil Completo",
      oldPrice: "R$ 4.750",
      newPrice: "R$ 4.000",
      features: [
        "Site completo responsivo",
        "Funil de vendas automatizado",
        "E-mail marketing integrado",
        "Google Ads + Facebook Ads",
        "CRM básico incluso",
        "Consultoria estratégica mensal"
      ],
      ctaText: "Quero essa solução"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Nossas{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              Soluções
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha a solução ideal para impulsionar seus resultados digitais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              oldPrice={service.oldPrice}
              newPrice={service.newPrice}
              features={service.features}
              ctaText={service.ctaText}
              highlight={service.highlight}
              onCTAClick={() => handleCTAClick(service.title)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Agência parceira oficial Google e Meta
          </p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <span className="text-2xl font-bold">Google Partner</span>
            <span className="text-2xl font-bold">Meta Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;