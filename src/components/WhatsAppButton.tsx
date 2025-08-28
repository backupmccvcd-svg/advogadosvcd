import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phone = "5511999999999", 
  message = "Olá! Gostaria de saber mais sobre as soluções de tráfego digital.",
  className = "" 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className={`fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse ${className}`}
      onClick={() => window.open(whatsappUrl, '_blank')}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;