import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  { img: "/images/banner1.jpg", title: "Advanced", subtitle: "Separation Systems" },
  { img: "/images/banner2.jpg", title: "Precision", subtitle: "Engineering Hub" },
  { img: "/images/banner3.jpg", title: "Global", subtitle: "Compliance Standards" }
];

export default function SexySlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        if (prev === slides.length - 1) {
          setDirection(-1); // Start going back
          return prev - 1;
        } else if (prev === 0 && direction === -1) {
          setDirection(1); // Start going forward
          return prev + 1;
        }
        return prev + direction;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [direction]);

  return (
    <div className="relative h-[75vh] w-full overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Ken Burns Zoom Effect */}
          <motion.img
            src={slides[index].img}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="w-full h-full object-cover opacity-60"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Engineering Excellence Since 2002
              </span>
              <h2 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                {slides[index].title} <br />
                <span className="text-slate-400 italic font-light">{slides[index].subtitle}</span>
              </h2>
              <button className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white hover:text-red-600 transition-all flex items-center gap-3 mx-auto">
                Discover Solutions <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Sexy Visual Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              width: i === index ? 40 : 10,
              backgroundColor: i === index ? "#ef4444" : "rgba(255,255,255,0.3)" 
            }}
            className="h-1 rounded-full"
          />
        ))}
      </div>

      {/* Bottom Fade-to-White */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}