import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

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
    <Card className={`relative p-8 h-full transition-all duration-300 hover:shadow-brand ${
      highlight ? 'border-primary border-2 shadow-brand' : 'hover:border-primary'
    }`}>
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-hero text-brand-black px-6 py-2 rounded-full text-sm font-bold">
            MAIS POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <div className="mb-4">
          <span className="text-lg line-through text-muted-foreground mr-2">{oldPrice}</span>
          <span className="text-3xl font-bold text-primary">{newPrice}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant="cta" 
        size="lg" 
        className="w-full"
        onClick={onCTAClick}
      >
        {ctaText}
      </Button>
    </Card>
  );
};

export default ServiceCard;