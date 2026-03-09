import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useShop();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-surface z-[70] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-noise -z-20" />
            
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary neon-glow" />
                  <h2 className="text-xl font-display font-black tracking-tighter text-white">PROCUREMENT</h2>
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-bold">Secure Session Active</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all" />
                    <ShoppingBag size={40} className="text-gray-600 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-bold tracking-tight text-white">CART IS EMPTY</h3>
                    <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">
                      Your high-performance journey starts here.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-primary hover:shadow-neon active:scale-95"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-surface-light border border-white/5 flex-shrink-0 group-hover:border-primary/40 transition-all duration-700">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-md font-display font-bold text-white group-hover:text-primary transition-colors">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-600 hover:text-accent transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">{item.category}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-display font-black text-white">
                          ${item.price.toLocaleString()}
                        </span>
                        
                        <div className="flex items-center gap-3 bg-surface-light rounded-xl px-3 py-1.5 border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-white transition-colors font-bold disabled:opacity-20"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-[11px] font-bold w-4 text-center text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-white transition-colors font-bold"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-surface-light">
                <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Transaction Subtotal</span>
                  </div>
                  <span className="text-3xl font-display font-black text-white">
                    ${cartTotal.toLocaleString()}
                  </span>
                </div>
                
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-between bg-primary text-black px-8 py-5 rounded-2xl font-black transition-all hover:shadow-neon group"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em]">Initialize Checkout</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors text-center"
                >
                  Continue Procurement
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
