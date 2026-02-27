import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "8801XXXXXXXXX";
  const message = encodeURIComponent("আমি আপনাদের কোর্স সম্পর্কে জানতে চাই।");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp Chat"
    >
      <MessageCircle className="h-7 w-7 text-success-foreground" />
    </a>
  );
};

export default WhatsAppButton;
