import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText } from "lucide-react";

const housingSpecs = [
  { parameter: "Material of Construction", value: "SS 316L / SS 316 / SS 304" },
  { parameter: "Design Pressure", value: "Up to 10 Bar (150 PSI)" },
  { parameter: "Operating Temperature", value: "0°C to 150°C" },
  { parameter: "Surface Finish", value: "Ra < 0.4 µm (Electropolished)" },
  { parameter: "Connection Types", value: "TC End, Flanged, NPT/BSP" },
  { parameter: "Sealing Material", value: "Silicone, EPDM, Viton (FDA)" },
  { parameter: "Compliance", value: "ASME BPE / GMP Standards" }
];

export default function SpecsTable() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-[10px] mb-3">
            <FileText size={14} /> Technical Documentation
          </div>
          <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter leading-none">
            Technical <span className="text-slate-400 italic">Data Sheet.</span>
          </h3>
        </div>
        <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
          Standard configurations for SPF high-purity filtration housings and skid systems.
        </p>
      </div>

      {/* Modern Grid Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {housingSpecs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                {spec.parameter}
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-sm font-bold text-slate-900 bg-white md:bg-transparent px-3 py-1 md:p-0 rounded-lg shadow-sm md:shadow-none border md:border-none border-slate-200">
                {spec.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Footer */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {['FDA Approved', 'ASME Certified', 'GMP Compliant', 'ISO 9001'].map((tag) => (
          <span key={tag} className="px-4 py-2 bg-slate-100 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 rounded-full border border-slate-200/50">
            • {tag}
          </span>
        ))}
      </div>
    </div>
  );
}