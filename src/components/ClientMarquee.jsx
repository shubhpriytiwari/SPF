import React from "react";
import { motion } from "framer-motion";

const allPharma = [
  // --- INDIAN GIANTS (26) ---
  { name: "Sun Pharma", domain: "sunpharma.com" },
  { name: "Cipla", domain: "cipla.com" },
  { name: "Dr. Reddy's", domain: "drreddys.com" },
  { name: "Lupin", domain: "lupin.com" },
  { name: "Aurobindo", domain: "aurobindo.com" },
  { name: "Zydus", domain: "zyduslife.com" },
  { name: "Glenmark", domain: "glenmarkpharma.com" },
  { name: "Torrent", domain: "torrentpharma.com" },
  { name: "Biocon", domain: "biocon.com" },
  { name: "Alkem", domain: "alkemlabs.com" },
  { name: "Intas", domain: "intaspharma.com" },
  { name: "Mankind", domain: "mankindpharma.com" },
  { name: "Ajanta", domain: "ajantapharma.com" },
  { name: "Ipca", domain: "ipca.com" },
  { name: "Natco", domain: "natcopharma.co.in" },
  { name: "Emcure", domain: "emcure.com" },
  { name: "Alembic", domain: "alembicpharmaceuticals.com" },
  { name: "Wockhardt", domain: "wockhardt.com" },
  { name: "Strides", domain: "strides.com" },
  { name: "Jubilant", domain: "jubilantpharma.com" },
  { name: "Piramal", domain: "piramal.com" },
  { name: "La Renon", domain: "larenon.com" },
  { name: "Macleods", domain: "macleodspharma.com" },
  { name: "Divis", domain: "divislabs.com" },
  { name: "Unichem", domain: "unichemlabs.com" },
  { name: "Granules", domain: "granulesindia.com" },

  // --- GLOBAL GIANTS (26) ---
  { name: "Pfizer", domain: "pfizer.com" },
  { name: "Johnson & Johnson", domain: "jnj.com" },
  { name: "Roche", domain: "roche.com" },
  { name: "Novartis", domain: "novartis.com" },
  { name: "Merck", domain: "merck.com" },
  { name: "AbbVie", domain: "abbvie.com" },
  { name: "Sanofi", domain: "sanofi.com" },
  { name: "AstraZeneca", domain: "astrazeneca.com" },
  { name: "GSK", domain: "gsk.com" },
  { name: "Eli Lilly", domain: "lilly.com" },
  { name: "Bayer", domain: "bayer.com" },
  { name: "Novo Nordisk", domain: "novonordisk.com" },
  { name: "Amgen", domain: "amgen.com" },
  { name: "Takeda", domain: "takeda.com" },
  { name: "Gilead", domain: "gilead.com" },
  { name: "Boehringer", domain: "boehringer-ingelheim.com" },
  { name: "Viatris", domain: "viatris.com" },
  { name: "Teva", domain: "tevapharm.com" },
  { name: "Bristol Myers", domain: "bms.com" },
  { name: "Biogen", domain: "biogen.com" },
  { name: "Stryker", domain: "stryker.com" },
  { name: "Baxter", domain: "baxter.com" },
  { name: "Moderna", domain: "modernatx.com" },
  { name: "Regeneron", domain: "regeneron.com" },
  { name: "Vertex", domain: "vrtx.com" },
  { name: "Abbott", domain: "abbott.com" }
];

export default function ClientMarquee() {
  const row1 = allPharma.slice(0, 26);
  const row2 = allPharma.slice(26, 52);

  const MarqueeRow = ({ items, direction = "left", speed = 60 }) => (
    <div className="flex overflow-hidden py-4 border-b border-slate-50">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {/* Triple the items to ensure a massive, unbreakable loop */}
        {[...items, ...items, ...items].map((company, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-12 md:px-20 h-16 group"
          >
            <div className="relative">
              <img
                src={`https://logo.clearbit.com/${company.domain}?size=200`}
                alt={company.name}
                loading="lazy"
                className="h-8 md:h-10 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              {/* Fallback Text if Logo fails */}
              <span className="hidden font-bold text-slate-400 text-sm tracking-tighter italic uppercase">
                {company.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Trusted by <span className="text-red-600 italic">50+ Global Giants.</span>
            </h2>
            <p className="mt-4 text-slate-500 font-medium max-w-lg">
              Powering manufacturing lines for the world's most regulated pharmaceutical and biotech leaders.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-[2px] w-24 bg-red-600 mb-2"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
              Engineering Excellence
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <MarqueeRow items={row1} direction="left" speed={80} />
        <MarqueeRow items={row2} direction="right" speed={100} />
        
        {/* Soft edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}