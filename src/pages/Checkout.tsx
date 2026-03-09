import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, Lock, CheckCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal } = useShop();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="w-40 h-40 bg-white/5 border border-primary/30 rounded-[3rem] flex items-center justify-center mx-auto mb-12 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <CheckCircle size={80} className="text-primary relative z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tighter">MANIFEST SECURED</h1>
            <p className="text-xl text-text-muted mb-12 max-w-lg mx-auto font-medium italic opacity-80">
              “Your order #VEXO-{Math.floor(Math.random() * 1000000)} has been integrated into our neural shipping grid. Prepare for arrival.”
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/dashboard" 
                className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                TRACK TRANSMISSION
              </Link>
              <Link 
                to="/shop" 
                className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95"
              >
                RETURN TO VAULT
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-background min-h-screen pt-48 pb-24 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10">
            <Lock size={40} className="text-gray-700" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-6 tracking-tight">MANIFEST EMPTY</h1>
          <p className="text-text-muted mb-12 max-w-sm mx-auto font-medium">Your neural cart requires items before a secure checkout can be initiated.</p>
          <Link to="/shop" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-primary active:scale-95">
            INITIATE PROCUREMENT
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Secure Terminal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">FINAL CALIBRATION</h1>
          <p className="text-text-muted max-w-2xl font-medium leading-relaxed italic opacity-80">
            Authorize your procurement with the highest level of neural encryption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:col-span-8 space-y-16">
            <form onSubmit={handleCheckout} className="space-y-12">
              {/* Contact Info */}
              <section className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={120} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xs font-black border border-primary/20">01</span>
                  IDENTIFICATION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subject First Name</label>
                    <input required type="text" placeholder="ELARA" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subject Last Name</label>
                    <input required type="text" placeholder="VOX" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Neural Email Address</label>
                    <input required type="email" placeholder="elara.vox@neural.link" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                </div>
              </section>

              {/* Shipping Info */}
              <section className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Truck size={120} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xs font-black border border-secondary/20">02</span>
                  LOGISTICS HUB
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Destination Coordinate (Street)</label>
                    <input required type="text" placeholder="72 ALPHA SECTOR, NEURAL CITY" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Megacity</label>
                    <input required type="text" placeholder="TOKYO_NEO" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Sector Code (ZIP)</label>
                    <input required type="text" placeholder="100-8901" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-bold" />
                  </div>
                </div>
              </section>

              {/* Payment Info */}
              <section className="glass-card p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Lock size={120} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xs font-black border border-primary/20">03</span>
                  AUTHORIZATION
                </h2>
                
                <div className="space-y-10 relative z-10">
                  {/* Payment Method Selector */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: 'stripe', label: 'Stripe', icon: '💳' },
                      { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                      { id: 'razorpay', label: 'Razorpay', icon: '🚀' }
                    ].map((method) => (
                      <label key={method.id} className="relative cursor-pointer group">
                        <input type="radio" name="paymentMethod" value={method.id} className="peer sr-only" defaultChecked={method.id === 'stripe'} />
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3 transition-all peer-checked:border-primary peer-checked:bg-primary/5 group-hover:bg-white/10">
                          <span className="text-2xl">{method.icon}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 peer-checked:text-white">{method.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Encrypted Card Sequence</label>
                      <div className="relative">
                        <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-mono font-bold tracking-widest" />
                        <CreditCard size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-primary opacity-50" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Deactivation (Expiry)</label>
                        <input required type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-mono font-bold" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Cipher (CVC)</label>
                        <input required type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-all font-mono font-bold" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-4 ${
                  isProcessing 
                    ? 'bg-primary/20 text-primary/40 cursor-not-allowed' 
                    : 'bg-white hover:bg-primary text-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] active:scale-[0.98]'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                    SYNCHRONIZING SECURE LINK...
                  </>
                ) : (
                  <>
                    <Lock size={18} /> AUTHORIZE PROCUREMENT: ${cartTotal.toFixed(0)}.99
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="glass-card p-10 rounded-[3rem] border-white/5 sticky top-32 space-y-10">
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-bold tracking-tight">MANIFEST</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Summary of Procurement</p>
              </div>
              
              <div className="space-y-8 max-h-[40vh] overflow-y-auto pr-4 scrollbar-hide py-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-primary/30 transition-all">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-bold text-white line-clamp-1 text-sm group-hover:text-primary transition-colors">{item.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[10px] font-black text-gray-600 uppercase">QTY: {item.quantity}</span>
                        <span className="text-sm font-display font-black text-white">${(item.price * item.quantity).toFixed(0)}<span className="text-[10px] opacity-40">.99</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Gross Manifest</span>
                  <span className="text-sm font-bold">${cartTotal.toFixed(0)}.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Logistics (Global)</span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">Complimentary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Encryption Fees</span>
                  <span className="text-sm font-bold text-gray-500">$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-white/10">
                  <span className="text-lg font-display font-black uppercase tracking-tighter">TOTAL TRANSMISSION</span>
                  <span className="text-3xl font-display font-black text-primary">${cartTotal.toFixed(0)}<span className="text-lg opacity-40">.99</span></span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck size={20} className="text-primary opacity-60" />
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest">Secure 256-bit neural encryption active.</p>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                  <Truck size={20} className="text-primary opacity-60" />
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest">Satellite-tracked express delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
