import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Zap, Settings, Microscope, Award } from "lucide-react";

export default function PharmaDetails() {
  const advantages = [
    {
      title: "GMP & FDA Compliance",
      desc: "All systems engineered to exceed global Annex 1 and FDA sterile manufacturing guidelines.",
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Surface Finish Excellence",
      desc: "Standard Ra < 0.4 µm with electro-polishing for zero-contamination risk.",
      icon: <Settings className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Zero-Hold Up Design",
      desc: "Maximum product recovery with dead-leg free engineering in all piping manifolds.",
      icon: <Zap className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Advanced Validation",
      desc: "Comprehensive DQ, IQ, OQ, and PQ documentation provided as standard.",
      icon: <Microscope className="w-6 h-6 text-red-600" />,
    },
  ];

  const specTable = [
    { feature: "MOC (Material of Construction)", value: "SS 316L / Hastelloy C-276" },
    { feature: "Filtration Rating", value: "0.2 Microns to 100 Microns" },
    { feature: "Operating Pressure", value: "Up to 10 Bar (Customizable)" },
    { feature: "Seal Material", value: "Platinum Cured Silicone / EPDM (FDA Grade)" },
    { feature: "Standard Compliance", value: "ASME BPE / CE / PED / ATEX" },
    { feature: "Sterilization", value: "SIP (Steam In Place) Compatible" },
  ];

  return (
    <div className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: WHY CHOOSE US */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">Engineering Advantages</h3>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Precision Engineering for <br />
              <span className="text-slate-400 italic font-light">Critical Filtration.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {advantages.map((item, i) => (
                <div key={i} className="group">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
             <div className="flex items-center gap-4 mb-8">
                <div className="bg-red-50 p-3 rounded-lg">
                   <Award className="w-8 h-8 text-red-600" />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900">Industry Certifications</h4>
                   <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Certified Excellence</p>
                </div>
             </div>
             <p className="text-slate-600 text-sm italic mb-6">
                "SPF Technologies systems are built to ensure that no batch is lost due to equipment failure. We prioritize the safety of the patient through the precision of the machine."
             </p>
             <div className="flex gap-4">
                <div className="px-4 py-2 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">ISO 9001:2015</div>
                <div className="px-4 py-2 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">ASME BPE</div>
                <div className="px-4 py-2 bg-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">FDA GMP</div>
             </div>
          </div>
        </div>

        {/* SECTION 2: TECHNICAL SPECIFICATIONS TABLE */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <div className="bg-slate-900 px-8 py-6 flex justify-between items-center">
             <h3 className="text-white font-bold tracking-tight uppercase">Technical Specifications Overview</h3>
             <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">Doc-Ref: SPF-FIL-2026</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 bg-slate-50/50">Feature/Parameter</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-900 bg-slate-50/50">Standard Specification</th>
                </tr>
              </thead>
              <tbody>
                {specTable.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
                    <td className="px-8 py-4 text-sm font-semibold text-slate-600">{row.feature}</td>
                    <td className="px-8 py-4 text-sm font-medium text-slate-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}