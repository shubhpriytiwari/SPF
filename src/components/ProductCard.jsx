// components/ProductCard.jsx
export function ProductCard({ product }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-square rounded-[1.5rem] bg-slate-50 flex items-center justify-center overflow-hidden relative">
        <img 
          src={product.img} 
          className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110" 
          alt={product.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold uppercase text-slate-500">
            {product.type}
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          High-integrity stainless steel construction designed for {product.type} applications in sterile environments.
        </p>
        <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:bg-red-600">
          Technical Datasheet <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}