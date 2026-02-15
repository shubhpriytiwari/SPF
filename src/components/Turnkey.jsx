import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, 
  Settings, 
  Zap, 
  ShieldCheck, 
  ClipboardCheck 
} from "lucide-react";

const steps = [
  {
    title: "Engineering & 3D Design",
    desc: "Custom CAD modeling and CFD (Computational Fluid Dynamics) to optimize flow rates and ensure zero 'dead-legs' in the system.",
    icon: <PenTool className="w-8 h-8" />,
    features: ["SolidWorks 3D Design", "Material Selection", "Pressure Calculations"]
  },
  {
    title: "Precision Fabrication",
    desc: "In-house manufacturing using high-grade SS316L. Our master welders ensure Ra < 0.4μm surface finishes for sterile applications.",
    icon: <Settings className="w-8 h-8" />,
    features: ["Orbital Welding", "Electropolishing", "ASME Standards"]
  },
  {
    title: "Automation & Control",
    desc: "Integration of PLC/SCADA systems for real-time monitoring of pressure, temperature, and filtration integrity cycles.",
    icon: <Zap className="w-8 h-8" />,
    features: ["HMI Integration", "Pneumatic Controls", "Data Logging"]
  },
  {
    title: "Validation & QA",
    desc: "Complete DQ/IQ/OQ documentation support to meet strict FDA/GMP regulatory requirements for pharmaceutical production.",
    icon: <ClipboardCheck className="w-8 h-8" />,
    features: ["Integrity Testing", "FAT/SAT Support", "Validation Dossier"]
  }
];

export default function Turnkey() {
  const whatsappLink = "https://wa.me/919662574799?text=I%20am%20interested%20in%20a%20Turnkey%20Project%20consultation.";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6"
          >
            <ShieldCheck size={16} /> End-to-End Solutions
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase">
            Technical <br /><span className="text-slate-300 italic uppercase">Turnkey.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            With 21+ years of experience, we manage the entire project lifecycle—from initial 
            conceptual design to final site commissioning and validation.
          </p>
        </div>

        {/* Technical Process Timeline - NO RESPONSIVE ALTERNATION */}
        <div className="relative">
          {/* Vertical Line Fixed to the Left */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-slate-100" />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-start pl-24"
              >
                {/* LARGE GHOST NUMBER - Fixed Background Position */}
                <span 
                  className="absolute left-32 -top-12 font-black select-none opacity-[0.08] text-[10rem] leading-none z-0"
                  style={{ 
                    WebkitTextStroke: '2px #0f172a', 
                    color: 'transparent'
                  }}
                >
                  0{i+1}
                </span>

                {/* RED ICON NODE - Centered on the line */}
                <div className="absolute left-0 z-20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-red-600 text-white flex items-center justify-center shadow-xl border-[6px] border-white">
                    {step.icon}
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Features with fixed styling */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-40 p-20 rounded-[3rem] bg-slate-950 text-white text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Discuss Your Project</h2>
          <a 
            href={whatsappLink} 
            className="inline-flex px-12 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
          >
            Start Consultation
          </a>
        </div>
      </div>
    </div>
  );
}