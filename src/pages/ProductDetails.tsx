import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Star, Shield, Truck, RotateCcw, Heart, ShoppingBag, Check, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="container mx-auto px-6 max-w-7xl py-32 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Product Not Found</h1>
        <p className="text-text-muted mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
          Return to Shop <ChevronRight size={16} />
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Origins</Link>
          <ChevronRight size={12} className="text-gray-700" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <ChevronRight size={12} className="text-gray-700" />
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-b from-surface-light to-background border border-white/5 relative group cursor-crosshair"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
              {product.isNew && (
                <span className="absolute top-8 left-8 z-20 bg-primary text-black text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  Prototype Phaze
                </span>
              )}
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
                onMouseMove={(e) => {
                  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - left) / width;
                  const y = (e.clientY - top) / height;
                  e.currentTarget.style.transformOrigin = `${x * 100}% ${y * 100}%`;
                }}
              >
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={product.gallery[activeImage] || product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover filter contrast-110 brightness-90"
                />
              </motion.div>
            </motion.div>
            
            {product.gallery.length > 1 && (
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-28 h-28 rounded-2xl overflow-hidden border-2 transition-all duration-500 flex-shrink-0 p-1 ${
                      activeImage === idx ? 'border-primary bg-primary/5' : 'border-white/5 opacity-40 hover:opacity-100 bg-white/5'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={i < 4 ? "fill-primary text-primary" : "text-gray-700"} />
                  ))}
                  <span className="text-[10px] font-black text-white ml-2">4.9</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{product.reviews} DATA POINTS</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter leading-none">
                {product.name.split(' ').map((word, i) => (
                  <span key={i} className={i === word.length - 1 ? 'text-gradient-primary' : ''}>{word} </span>
                ))}
              </h1>
              
              <div className="flex items-baseline gap-6 mb-10">
                <span className="text-4xl font-display font-black text-white">${product.price.toFixed(0)}<span className="text-xl opacity-40">.99</span></span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-600 line-through decoration-primary/30 font-bold opacity-50">${product.originalPrice.toFixed(0)}</span>
                )}
              </div>

              <p className="text-text-muted text-xl leading-relaxed mb-12 font-medium italic opacity-80">
                “{product.description.split('.')[0]}.”
              </p>

              {/* Specs Grid Quick View */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {product.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all">
                      <Check size={18} />
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-4 sm:w-40 backdrop-blur-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-primary transition-colors font-black text-xl"
                  >
                    −
                  </button>
                  <span className="font-black text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-primary transition-colors font-black text-xl"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-white hover:bg-primary text-black px-12 py-5 rounded-2xl font-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-3 active:scale-95"
                >
                  <ShoppingBag size={22} /> INITIATE PURCHASE
                </button>
                
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`p-5 rounded-2xl border transition-all duration-500 flex items-center justify-center hover:scale-105 ${
                    isWishlisted 
                      ? 'bg-primary/10 border-primary shadow-[0_0_20px_rgba(0,240,255,0.2)]' 
                      : 'border-white/10 hover:border-primary/50 bg-white/5'
                  }`}
                >
                  <Heart size={24} className={`transition-all duration-500 ${isWishlisted ? 'fill-primary text-primary scale-110' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Logistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 glass-card rounded-3xl border-white/5">
                <div className="flex flex-col items-center text-center gap-3">
                  <Truck size={24} className="text-primary opacity-60" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Global Logistics</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <Shield size={24} className="text-secondary opacity-60" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Elite Guarantee</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <RotateCcw size={24} className="text-primary opacity-60" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Reversal Policy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Intelligence */}
        <div className="mb-32">
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 p-2 rounded-[2rem] border border-white/10 flex gap-2">
              {['intelligence', 'architecture', 'transmissions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 relative ${
                    (tab === 'intelligence' && activeTab === 'description') || 
                    (tab === 'architecture' && activeTab === 'specifications') ||
                    (tab === 'transmissions' && activeTab === 'reviews') ||
                    activeTab === tab
                      ? 'bg-white text-black shadow-xl scale-105' 
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px] glass-card p-12 md:p-20 rounded-[4rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <AnimatePresence mode="wait">
              {(activeTab === 'description' || activeTab === 'intelligence') && (
                <motion.div
                  key="intelligence"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                  <div className="space-y-8">
                    <h3 className="text-4xl font-display font-bold tracking-tight">THE GENESIS OF <span className="text-primary">SOUND</span></h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                      {product.description} Beyond traditional audio hardware, this is a neural interface for your auditory cortex. 
                      Every wave is sculpted by proprietary AI to match your specific biomechanics.
                    </p>
                    <div className="space-y-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-bold text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 border border-white/10">
                    <img src={product.image} className="w-full h-full object-cover scale-125" alt="Hardware Detail" />
                  </div>
                </motion.div>
              )}

              {(activeTab === 'specifications' || activeTab === 'architecture') && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8"
                >
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={idx} className="flex justify-between items-center py-6 border-b border-white/5 group">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-primary transition-colors">{key}</span>
                      <span className="font-display font-bold text-white group-hover:translate-x-[-10px] transition-transform">{value}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {(activeTab === 'reviews' || activeTab === 'transmissions') && (
                <motion.div
                  key="transmissions"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="text-center py-20"
                >
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-[2.5rem] bg-white/5 mb-10 border border-white/10 relative">
                    <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full animate-pulse" />
                    <Star size={48} className="text-primary fill-primary z-10" />
                  </div>
                  <h3 className="text-6xl font-display font-black mb-4 tracking-tighter">{product.rating}</h3>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-12">Universal Satisfaction Index</p>
                  <button className="bg-white text-black px-12 py-5 rounded-2xl font-black transition-all hover:bg-primary shadow-2xl active:scale-95">
                    SIGNAL FEEDBACK
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Neural Links (Related) */}
        {relatedProducts.length > 0 && (
          <section className="pb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Neural Links</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">SIMILAR <span className="text-gray-600">ARCHITECTURES</span></h2>
              </div>
              <Link to={`/shop?category=${product.category}`} className="group flex items-center gap-3 text-white font-bold hover:text-primary transition-all pb-2 border-b-2 border-white/10 hover:border-primary">
                View Full Category <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
