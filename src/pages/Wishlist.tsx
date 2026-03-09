import { motion } from 'motion/react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist } = useShop();

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Neural Vault</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">CURATED COLLECTION</h1>
              <p className="text-text-muted max-w-2xl font-medium leading-relaxed italic opacity-80">
                “A repository of potentiality. Your future procurement, secured.”
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
              <Heart size={20} className="text-primary fill-primary" />
              <span className="text-lg font-display font-black text-white">{wishlist.length}</span>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Saved Elements</span>
            </div>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32 glass-card rounded-[4rem] border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="w-40 h-40 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 blur-2xl group-hover:animate-pulse" />
              <Heart size={64} className="text-gray-800 relative z-10" />
            </div>
            
            <div className="space-y-4 mb-12 relative z-10">
              <h2 className="text-4xl font-display font-black tracking-tight uppercase">VAULT IS EMPTY</h2>
              <p className="text-gray-500 max-w-md mx-auto font-medium italic">
                “The void of unselected artifacts remains waiting.”
              </p>
            </div>
            
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 relative z-10 group/btn"
            >
              <ShoppingBag size={18} /> INITIALIZE PROCUREMENT <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {wishlist.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group space-y-4">
                  <ProductCard product={product} />
                  <div className="px-4">
                    <button className="w-full py-3 bg-white/5 hover:bg-white text-gray-500 hover:text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 hover:border-white">
                      MOVE TO MANIFEST
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
