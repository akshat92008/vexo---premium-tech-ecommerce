import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, ShoppingBag, Globe, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-32 pb-20 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/2 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          {/* Brand */}
          <div className="space-y-10">
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white text-black flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:rotate-[360deg] shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <ShoppingBag size={20} />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter text-white uppercase italic">
                VEXO<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs font-medium italic opacity-60">
              “Engineering the infinite. VEXO represents the pinnacle of human-hardware integration. Designed in Neo-Tokyo. Fabricated for the brave.”
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-primary/5 transition-all duration-500 border border-white/5 hover:border-primary/20">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white/40 font-display font-black mb-10 tracking-[0.4em] uppercase text-[9px]">Inventory</h4>
            <ul className="space-y-6">
              {['Headphones', 'Earbuds', 'Smartphones', 'Laptops'].map((item) => (
                <li key={item}>
                  <Link to={`/shop?category=${item}`} className="text-text-muted hover:text-primary transition-all text-[11px] font-black uppercase tracking-[0.2em] flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-4 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white/40 font-display font-black mb-10 tracking-[0.4em] uppercase text-[9px]">The Protocol</h4>
            <ul className="space-y-6">
              {['Neural Support', 'Global Logistics', 'Hardware Warranty', 'Order Manifest'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-text-muted hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.2em] flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary mr-4 transition-all duration-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusive Status */}
          <div className="glass-card p-10 relative overflow-hidden bg-white/[0.02] border-white/5 flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-primary animate-pulse" />
                <h4 className="text-white font-display font-black tracking-tight text-xl uppercase italic">FOUNDER PRIVILEGE</h4>
              </div>
              <p className="text-text-muted text-[11px] leading-relaxed font-medium">Gain access to the experimental VEXO Labs and 1/1 limited prototype drops.</p>
            </div>
            
            <button className="relative z-10 group bg-primary/5 hover:bg-primary py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-700 mt-8 group-hover:shadow-glow-cyan/20">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-black">Request Invite</span>
               <ArrowRight size={14} className="text-primary group-hover:text-black group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <p className="text-text-muted text-[10px] font-black uppercase tracking-[0.4em] italic opacity-40">
            &copy; {new Date().getFullYear()} VEXO CORP. NEURAL LINK COMPLIANT.
          </p>
          
          <div className="flex items-center justify-center gap-8">
             <div className="flex items-center gap-3">
                <Globe size={12} className="text-primary opacity-40" />
                <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Global Logistics: Stable</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Latency: 0.1ms</span>
          </div>

          <div className="flex justify-end space-x-10">
            {['Privacy', 'Legal', 'Encryption'].map(item => (
               <Link key={item} to="#" className="text-text-muted hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
