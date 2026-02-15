import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const productList = [
  { name: "Filter Strainers", img: "./images/SinteredFilter.jpg", type: "Ultra-Wide", tag: "Heavy Duty" },
  { name: "Process Vessels", img: "./images/process vessels.png", type: "Vertical", tag: "ASME Std" },
  { name: "Catalyst Recovery", img: "./images/catalyst recovery.png", type: "Horizontal", tag: "High Yield" },
  { name: "Filtration Skids", img: "./images/filter sked.png", type: "Horizontal", tag: "Turnkey" },
  { name: "Single Use System", img: "./images/single use.png", type: "Horizontal", tag: "Sterile" },
  { name: "Nutsche Filters", img: "./images/nustuch filter.png", type: "Square", tag: "Precise" },
  { name: "Turnkey Projects", img: "./images/stainless-steel-turnkey-project.jpg", type: "General", tag: "End-to-End" },
  { name: "PTFE Filter Cartridge", img: "./images/filter catridge.png", type: "Vertical", tag: "Chemical Res." },
  { name: "Capsule Filters", img: "./images/capsule.png", type: "Vertical", tag: "Fast Flow" },
];

export default function Products() {
  return (
    /* FIXED: Added id="products" to match your Hero section's "Explore Products" link */
    <section id="products" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
            >
              <Zap size={14} fill="currentColor" /> Engineered for Performance
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.85]">
              Core <br /> <span className="text-red-600 italic">Solutions.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs border-l-2 border-slate-200 pl-6 py-2">
            Industrial Excellence <br /> Since 2002
          </p>
        </div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {productList.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[3rem] border border-slate-100 p-4 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]"
            >
              {/* Image Container with Glow */}
              <div className="aspect-[4/5] bg-slate-50 rounded-[2.5rem] flex items-center justify-center p-12 relative overflow-hidden transition-colors group-hover:bg-red-50/50">
                
                {/* Product Tag */}
                <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 flex items-center gap-2 shadow-sm">
                  <ShieldCheck size={14} className="text-red-600" />
                  <span className="text-[9px] font-black uppercase text-slate-900 tracking-widest">{p.tag}</span>
                </div>

                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 z-10" 
                />
                
                {/* Background Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{p.type}</p>
                    <h3 className="text-2xl font-black text-slate-950 leading-none uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                      {p.name}
                    </h3>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-4 group/link">
                   <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-white group-hover/link:bg-red-600 transition-all duration-300">
                      <ArrowUpRight size={20} className="group-hover/link:rotate-45 transition-transform" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Request Quote</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}