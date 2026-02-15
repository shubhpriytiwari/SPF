// Global WhatsApp Config
const CONTACT_NUMBER = "919662574799";
export const getWhatsAppUrl = (msg) => `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(msg)}`;

// Floating Button
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl("Hello SPF Technologies, I'd like to consult with an engineer.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
    >
      <MessageCircle size={30} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Engineering
      </span>
    </a>
  );
}