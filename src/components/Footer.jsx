import React from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const whatsappLink = "https://wa.me/919662574799?text=Hello%20SPF%20Technologies...";
  const emailLink = "mailto:spftechnologies2002@gmail.com";

  return (
    <footer className="bg-[#0a0f1a] text-white py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* 1. Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex-shrink-0">
              <img src="./images/SPF LOGO.png" alt="SPF Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tighter leading-none">SPF</h2>
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-red-600">Technologies</p>
            </div>
          </div>

          {/* 2. Contact Links - Simple Icons + Text */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-red-600" /> +91 96625 74799
            </a>
            <a href={emailLink} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-red-600" /> spftechnologies2002@gmail.com
            </a>
            <div className="hidden md:flex items-center gap-2 cursor-default">
              <MapPin size={14} className="text-red-600" /> Indore, India
            </div>
          </div>

          {/* 3. Socials & Action */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2 border-r border-slate-800 pr-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-green-500 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href={emailLink} className="text-slate-500 hover:text-red-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600 hover:text-white transition-colors flex items-center gap-2"
            >
              Get Quote <ArrowRight size={12} />
            </a>
          </div>

        </div>

        {/* 4. Bottom Copyright Line */}
        <div className="mt-6 pt-4 border-t border-slate-900/50 flex justify-between items-center text-[8px] font-bold uppercase tracking-[0.3em] text-slate-600">
          <p>© 2026 SPF TECHNOLOGIES</p>
          <p className="hidden sm:block">ISO 9001:2015 Certified Engineering</p>
        </div>
      </div>
    </footer>
  );
}