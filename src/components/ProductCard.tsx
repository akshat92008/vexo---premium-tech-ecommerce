import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';
import { useShop } from '../context/ShopContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isWishlisted = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass-card rounded-[2rem] overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Badges */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-primary text-black text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-secondary text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(112,0,255,0.4)]">
            Elite
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all group/wish"
      >
        <Heart 
          size={16} 
          className={`transition-all duration-500 ${isWishlisted ? 'fill-primary text-primary scale-110' : 'text-white group-hover/wish:text-primary'}`} 
        />
      </button>

      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-surface-light to-background">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 filter grayscale-[20%] group-hover:grayscale-0 contrast-110"
          loading="lazy"
        />
        
        {/* Decorative Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-6 bottom-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-primary hover:text-black transition-all active:scale-95"
          >
            <ShoppingBag size={18} /> Quick Add
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/60">
            {product.category}
          </span>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/5">
            <Star size={10} className="fill-primary text-primary" />
            <span className="text-[10px] font-bold text-gray-300">{product.rating}</span>
          </div>
        </div>
        
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-display font-bold text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-text-muted line-clamp-1 font-medium italic opacity-60">High-fidelity acoustic architecture</p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-display font-black text-white">
              ${product.price.toFixed(0)}<span className="text-sm font-bold opacity-40">.99</span>
            </span>
            {product.originalPrice && (
              <span className="text-sm text-text-muted line-through decoration-primary/40 font-bold opacity-50">
                ${product.originalPrice.toFixed(0)}
              </span>
            )}
          </div>
          
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all outline outline-0 group-hover:outline-4 outline-primary/10">
            <ArrowRight size={14} className="text-gray-500 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
