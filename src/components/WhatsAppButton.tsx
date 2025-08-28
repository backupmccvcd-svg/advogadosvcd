import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phone = "5511991077836", 
  message = "Olá, vim do site e gostaria de saber mais informações",
  className = "" 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce hidden lg:block">
        <p className="text-sm font-semibold whitespace-nowrap">💬 Precisa de ajuda? Fale conosco!</p>
        <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-green-500 transform translate-y-full"></div>
      </div>
      
      {/* WhatsApp Button */}
      <Button
        variant="whatsapp"
        size="lg"
        className={`rounded-full w-16 h-16 shadow-hover hover:shadow-brand group relative overflow-hidden ${className}`}
        onClick={() => window.open(whatsappUrl, '_blank')}
        aria-label="Falar no WhatsApp"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Call Button */}
      <Button
        variant="outline"
        size="lg"
        className="rounded-full w-14 h-14 border-2 border-gray-300 bg-white hover:bg-gray-50 shadow-card group"
        onClick={() => window.open('tel:+5511991077836', '_self')}
        aria-label="Ligar agora"
      >
        <Phone className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;