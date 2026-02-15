import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Zap, FileText, Microscope } from "lucide-react";

export default function FilterIntegrity() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Technical Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            <Microscope size={14} /> Quality Assurance & Validation
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Filter <br /><span className="text-slate-300 italic">Integrity Testing.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Restored and Protected */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 bg-slate-100"
          >
            <img 
              src="images/bpt.jpeg" 
              alt="Filter Integrity Testing Equipment" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              Certified Testing
            </div>
          </motion.div>

          {/* Technical Requirements */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Zero-Defect Validation</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We utilize advanced automated integrity testers to ensure every membrane filter 
              meets the stringent non-destructive testing requirements of the pharmaceutical industry.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Bubble Point", icon: <Zap size={20}/> },
                { title: "Diffusion Flow", icon: <CheckCircle2 size={20}/> },
                { title: "Water Intrusion", icon: <ShieldCheck size={20}/> },
                { title: "Pressure Hold", icon: <FileText size={20}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-colors">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-black uppercase text-[11px] tracking-widest text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Regulatory Compliance</p>
              <div className="flex gap-8 items-center">
                <span className="text-2xl font-black text-slate-900">FDA <span className="text-red-600">21 CFR</span></span>
                <div className="w-px h-8 bg-slate-200" />
                <span className="text-2xl font-black text-slate-900">GMP <span className="text-red-600">EU</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}