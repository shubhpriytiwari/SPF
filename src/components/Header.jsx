import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Turnkey Projects", path: "/turnkey" },
    { name: "Products", path: "/products" },
    { name: "Testing", path: "/filter-integrity" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappLink = "https://wa.me/919662574799?text=Hello%20SPF%20Technologies,%20I%20would%20like%20a%20quote.";

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "py-2 bg-white shadow-xl" : "py-4 bg-white/90 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo & Name Reverted */}
        <Link to="/" className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
            <img src="/SPF/images/SPF LOGO.png" className="w-[85%] h-[85%] object-contain" alt="SPF Logo" />
          </div>
          <h1 className="text-xl md:text-2xl font-black text-red-600 tracking-tighter">
            SPF <span className="text-slate-900">Technologies</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${location.pathname === link.path ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="ml-4 px-6 py-3 bg-red-600 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-slate-900 transition-all shadow-lg shadow-red-200">
            Get Quote
          </a>
        </nav>

        <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 text-slate-900"><Menu size={28} /></button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-slate-950 z-[200] p-8 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <span className="text-white font-black text-xl">SPF Technologies</span>
              <button onClick={() => setIsOpen(false)} className="text-white"><X size={35}/></button>
            </div>
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-4xl font-black text-white uppercase tracking-tighter hover:text-red-600 transition-colors">
                  {link.name}
                </Link>
              ))}
              <a href={whatsappLink} className="mt-4 text-center py-5 bg-red-600 text-white font-black uppercase rounded-2xl">Get Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}