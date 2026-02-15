import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png"
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden pt-24 bg-slate-50">
      <div className="relative w-full h-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </AnimatePresence>

        {/* Navigation Dots (Optional) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <div 
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-red-600 w-6" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}