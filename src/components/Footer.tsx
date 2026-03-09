import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-40 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 child-animation">
          <div className="lg:col-span-5 space-y-12">
             <Link to="/" className="text-4xl font-display font-black tracking-tighter text-white uppercase italic">
                VEXO<span className="text-primary italic">.</span>
             </Link>
             <p className="text-xl text-text-muted leading-relaxed font-medium italic max-w-sm">
                “Architecture for the ears. We blend aerospace engineering with acoustic science to redefine personal hardware.”
             </p>
             <div className="flex gap-8">
                {['Instagram', 'Twitter', 'YouTube'].map(social => (
                  <a key={social} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-colors">{social}</a>
                ))}
             </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Protocol</h4>
                <ul className="space-y-4">
                   {['Headphones', 'Earbuds', 'Spatial Audio', 'Limited Drops'].map(item => (
                     <li key={item}><Link to="/shop" className="text-sm font-bold text-text-muted hover:text-white transition-colors uppercase tracking-widest">{item}</Link></li>
                   ))}
                </ul>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Support</h4>
                <ul className="space-y-4">
                   {['Help Center', 'Warranty', 'Secure Portal', 'Contact'].map(item => (
                     <li key={item}><Link to="#" className="text-sm font-bold text-text-muted hover:text-white transition-colors uppercase tracking-widest">{item}</Link></li>
                   ))}
                </ul>
             </div>
             <div className="col-span-2 md:col-span-1 space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Terminal</h4>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest leading-relaxed">
                   Global Node Map <br />
                   Latency: 0.08ms <br />
                   Status: Optimal
                </p>
             </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <span className="text-[9px] font-black uppercase tracking-[0.8em] text-white/10">© 2026 VEXO TECHNOLOGIES CO.</span>
           <div className="flex gap-10">
              {['Privacy', 'Legal', 'Terms'].map(link => (
                <a key={link} href="#" className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">{link}</a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
}
