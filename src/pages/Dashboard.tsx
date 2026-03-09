import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, Heart, Settings, LogOut, User, MapPin, CreditCard } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="glass-card p-10 rounded-[3rem] border-white/5 sticky top-32 space-y-12">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-white font-display font-black text-3xl border border-white/10 group-hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    JD
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    <Settings size={16} className="text-gray-500 group-hover:text-primary" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-display font-black tracking-tighter">JOHN DOE</h1>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mt-1">Prime Member</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">john.doe@neural.link</p>
                </div>
              </div>

              <nav className="space-y-1">
                <Link to="/dashboard" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 text-primary rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                  <span className="flex items-center gap-4"><Package size={16} /> Order Manifest</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,1)]" />
                </Link>
                <Link to="/wishlist" className="flex items-center gap-4 p-4 text-gray-500 hover:text-white hover:bg-white/5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all group">
                  <Heart size={16} className="group-hover:text-primary transition-colors" /> Wishlist Vault
                </Link>
                <a href="#" className="flex items-center gap-4 p-4 text-gray-500 hover:text-white hover:bg-white/5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all group">
                  <User size={16} className="group-hover:text-primary transition-colors" /> Bio-Profile
                </a>
                <a href="#" className="flex items-center gap-4 p-4 text-gray-500 hover:text-white hover:bg-white/5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all group">
                  <MapPin size={16} className="group-hover:text-primary transition-colors" /> Neural Nodes
                </a>
                <a href="#" className="flex items-center gap-4 p-4 text-gray-500 hover:text-white hover:bg-white/5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all group">
                  <CreditCard size={16} className="group-hover:text-primary transition-colors" /> Credit Credits
                </a>
              </nav>

              <div className="pt-8 border-t border-white/5">
                <Link to="/login" className="flex items-center gap-4 p-4 text-gray-700 hover:text-red-500 hover:bg-red-500/5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all group">
                  <LogOut size={16} /> De-Authorize
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <div className="flex items-end justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Secure Logs</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">ORDER HISTORY</h2>
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Total Procurement: <span className="text-white">$1,492.00</span></p>
              </div>
            </div>
            
            <div className="space-y-10">
              {[1, 2].map((order, idx) => (
                <motion.div 
                  key={order} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-card rounded-[3rem] border-white/5 overflow-hidden group hover:border-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {/* Order Meta */}
                    <div className="p-8 md:w-64 flex-shrink-0 space-y-6 bg-white/[0.02]">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Protocol ID</p>
                        <p className="font-mono text-xs font-bold text-white group-hover:text-primary transition-colors">VEXO-{829103 + order}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Init Date</p>
                        <p className="text-xs font-bold text-white">OCT {15 - order}, 2023</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</p>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          SUCCESS
                        </span>
                      </div>
                    </div>

                    {/* Order Body */}
                    <div className="flex-1 p-8 flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 rounded-2xl bg-background border border-white/5 overflow-hidden flex-shrink-0 group-hover:border-primary/30 transition-all duration-500">
                        <img 
                          src={order === 1 
                            ? "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" 
                            : "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400"
                          } 
                          alt="Product" 
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700" 
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left space-y-2">
                        <h4 className="text-xl font-display font-bold text-white tracking-tight">
                          {order === 1 ? "AURA SONIC PRO" : "VOX NEURAL ELITE"}
                        </h4>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <span className="text-[10px] font-black text-gray-600 uppercase">Quantity: 01</span>
                          <div className="w-1 h-1 rounded-full bg-white/10" />
                          <span className="text-lg font-display font-black text-primary">$349<span className="text-xs opacity-40">.00</span></span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 w-full md:w-auto">
                        <button className="px-8 py-4 bg-white/5 hover:bg-white text-gray-400 hover:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                          MANIFEST DETAILS
                        </button>
                        <button className="px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-primary/20">
                          LOG REVIEW
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
