import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  ShieldCheck, 
  FileCheck, 
  Award, 
  Building2 
} from "lucide-react";

const credentials = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System Certified",
    icon: <ShieldCheck size={28} />,
    tag: "Certified"
  },
  {
    title: "Import Export (IEC)",
    desc: "Licensed for Global Trade & Logistics",
    icon: <Globe size={28} />,
    tag: "Global"
  },
  {
    title: "Udyam Registered",
    desc: "MSME Government of India Verified",
    icon: <Building2 size={28} />,
    tag: "Govt Reg"
  },
  {
    title: "IGST & GST Compliance",
    desc: "Fully Regulated Tax & Trade Ready",
    icon: <FileCheck size={28} />,
    tag: "Compliant"
  }
];

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Story & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-red-600 mb-6">
              <div className="w-12 h-[2px] bg-red-600" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Legacy of 21+ Years</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8 uppercase">
              Beyond <br /> <span className="text-slate-300 italic">Manufacturing.</span>
            </h2>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Founded in 2002, SPF Technologies has evolved from a local filtration supplier into 
              a globally recognized engineering partner. We specialize in high-purity systems 
              that meet the rigorous demands of the Biotech and Pharmaceutical sectors.
            </p>

            <div className="space-y-4 mb-10">
               <div className="flex items-center gap-4 text-slate-900 font-bold">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px]">✓</div>
                  Custom Engineering to ASME Standards
               </div>
               <div className="flex items-center gap-4 text-slate-900 font-bold">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px]">✓</div>
                  Sterile Grade Fabrication (SS316L)
               </div>
            </div>

            {/* Updated Button Text */}
            <Link to="/contact">
              <button className="px-8 py-4 bg-slate-950 text-white rounded-xl font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl">
                Contact Us For More Information
              </button>
            </Link>
          </motion.div>

          {/* Right Side: Credentials Grid with Fixed Hover Logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10" />
            
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-red-600 transition-all duration-300 group cursor-default"
              >
                {/* Icon Container: Turns White on Hover */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-red-600 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-2 block group-hover:text-white/80 transition-colors">
                  {item.tag}
                </span>
                
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-400 font-medium leading-snug group-hover:text-red-50 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Central Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-950 rounded-full border-[8px] border-white shadow-2xl items-center justify-center text-white text-center flex-col">
              <Award size={30} className="text-red-500" />
              <span className="text-[8px] font-black leading-none mt-1">ESTD. 2002</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}