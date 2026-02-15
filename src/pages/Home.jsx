import React from "react";
import Hero from "../components/Hero";
import BannerSlider from "../components/BannerSlider";
import About from "../components/About";
import Products from "../components/Products";
import Turnkey from "../components/Turnkey";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";
import ClientMarquee from "../components/ClientMarquee";
import PharmaDetails from "../components/PharmaDetails";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="relative"
    >
      <Hero />
      
      {/* 1. THE LOGOS: This shows the 50+ companies immediately for trust */}
      <ClientMarquee />

      {/* 2. THE VISUALS: Your 3-image Banner Slider */}
      <div className="relative z-10 -mt-20">
        <BannerSlider />
      </div>

      <About />

      {/* 3. THE STATS: Highlighting your 250+ Global Clients */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12">
          {[
            { label: "Founded", val: "2002" },
            { label: "Global Clients", val: "250+" }, // This matches your 50+ leaders claim
            { label: "Standard", val: "ISO 9001" },
            { label: "Precision", val: "0.1μm" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-red-600 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. THE PROOF: PharmaDetails explains WHY those 50+ companies trust you */}
      <PharmaDetails />

      <Products />
      <Turnkey />
      <WhatsAppButton />
    </motion.div>
  );
}