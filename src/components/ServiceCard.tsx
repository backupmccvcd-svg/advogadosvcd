import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

interface ServiceCardProps {
  title: string;
  oldPrice: string;
  newPrice: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  onCTAClick: () => void;
}

const ServiceCard = ({ 
  title, 
  oldPrice, 
  newPrice, 
  features, 
  ctaText, 
  highlight = false,
  onCTAClick 
}: ServiceCardProps) => {
  return (
    <Card className={`relative p-8 h-full transition-all duration-500 hover:shadow-hover group transform hover:scale-105 ${
      highlight 
        ? 'border-primary border-2 shadow-brand bg-gradient-to-br from-white to-yellow-50' 
        : 'hover:border-primary bg-gradient-card'
    }`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-hero text-brand-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-brand">
            <Star className="w-4 h-4 fill-current" />
            MAIS POPULAR
          </span>
        </div>
      )}
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-brand">
          <Zap className="w-8 h-8 text-black" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">{title}</h3>
        
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-lg line-through text-muted-foreground bg-red-100 px-3 py-1 rounded-full">
              {oldPrice}
            </span>
            <span className="text-red-500 font-bold text-sm">-30%</span>
          </div>
          <div className="text-4xl font-black text-primary bg-gradient-hero bg-clip-text text-transparent">
            {newPrice}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-primary" />
          Incluído no Plano:
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button 
        variant="cta" 
        size="lg" 
        className={`w-full group ${highlight ? 'shadow-hover' : ''}`}
        onClick={onCTAClick}
      >
        {ctaText}
        <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
      </Button>

      {/* Trust Badge */}
      <div className="mt-4 text-center">
        <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
          ✅ Suporte Especializado Incluso
        </span>
      </div>
    </Card>
  );
};

export default ServiceCard;