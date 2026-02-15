import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 bg-white overflow-hidden">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      {/* Subtle Accent Shape */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 skew-x-12 translate-x-20 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-red-100 shadow-sm">
            <ShieldCheck size={14} strokeWidth={3} /> ISO 9001:2015 Certified
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter text-slate-950">
            Precision <br />
            <span className="text-red-600 italic">Filtration.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            SPF Technologies delivers high-performance separation solutions for 
            <span className="text-slate-900 font-bold"> Biotech, Pharma, and Chemical </span> industries globally.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            {/* FIXED REDIRECT: Changed button to 'a' tag with href="#products" */}
            <a 
              href="#products"
              className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-950 hover:-translate-y-1 transition-all shadow-2xl shadow-red-200 flex items-center gap-3 no-underline cursor-pointer"
            >
              Explore Products <ArrowRight size={20} />
            </a>
            
            <div className="flex items-center gap-5 px-8 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
               <div className="text-slate-950">
                  <p className="text-2xl font-black leading-none tracking-tighter">250+</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Global Clients</p>
               </div>
               <div className="w-px h-10 bg-slate-200" />
               <div className="text-slate-950">
                  <p className="text-2xl font-black leading-none tracking-tighter">21+</p>
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Exp Years</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Refined Logo Presentation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Animated Background Rings */}
          <div className="absolute w-[120%] h-[120%] border border-slate-100 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[140%] h-[140%] border border-slate-50 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* Main Logo Container */}
          <div className="relative z-10 w-full max-w-[450px] aspect-square bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex items-center justify-center p-16 border-[16px] border-slate-50">
            <img 
              src="/SPF/images/SPF LOGO.png" 
              alt="SPF Technologies Logo" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
            />
            
            {/* Trust Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-slate-950 text-white p-6 rounded-3xl shadow-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Established</p>
              <p className="text-2xl font-black tracking-tighter">EST. 2002</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}