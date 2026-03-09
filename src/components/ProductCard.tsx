import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, ArrowRight, Activity, Cpu } from 'lucide-react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative glass-card rounded-[2.5rem] overflow-hidden border-white/5 hover:border-primary/40 transition-all duration-1000"
    >
      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
        <div className="absolute inset-0 bg-primary/[0.02] mix-blend-overlay" />
      </div>

      {/* Badges */}
      <div className="absolute top-8 left-8 z-20 flex flex-col gap-3">
        {product.isFeatured && (
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-3xl px-4 py-2 rounded-xl border border-primary/30 shadow-glow-cyan/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Vault Selected</span>
          </div>
        )}
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-3xl px-3 py-1.5 rounded-lg border border-white/5">
          <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Neural Link v4.2</span>
        </div>
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className="absolute top-8 right-8 z-20 p-3 rounded-2xl bg-black/40 backdrop-blur-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 group/wish"
      >
        <Heart 
          size={18} 
          className={`transition-all duration-700 ${isWishlisted ? 'fill-primary text-primary scale-110' : 'text-white/60 group-hover/wish:text-primary group-hover/wish:scale-110'}`} 
        />
      </button>

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-background">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
          loading="lazy"
        />
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-grain opacity-5" />

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-8 bottom-8 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22, 1, 0.36, 1]">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-black py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-premium hover:bg-primary transition-all active:scale-95"
          >
            <ShoppingBag size={16} /> Procure Unit
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-10 space-y-8 relative z-20 bg-background/40 backdrop-blur-sm">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-primary italic">
              Hardware Series: 01
            </span>
            <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
               <Cpu size={12} className="text-primary" />
               <span className="text-[8px] font-black text-white uppercase tracking-widest">Titanium Core</span>
            </div>
          </div>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="text-3xl font-display font-black text-white tracking-tighter line-clamp-1 group-hover:text-primary transition-colors duration-500 uppercase italic">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Tech Specs (Luxury Metadata) */}
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5 opacity-40 group-hover:opacity-80 transition-opacity">
           <div className="flex items-center gap-3">
              <Activity size={12} className="text-primary" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">2Hz - 48kHz</span>
           </div>
           <div className="flex items-center gap-3">
              <Star size={12} className="text-primary" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">99.9% Purity</span>
           </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-black text-primary/40 uppercase tracking-[0.4em] leading-none">Price Manifest</span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-display font-black text-white italic">
                ${product.price.toFixed(0)}<span className="text-sm font-bold opacity-30">.99</span>
              </span>
            </div>
          </div>
          
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-glow-cyan/0 group-hover:shadow-glow-cyan/20">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
