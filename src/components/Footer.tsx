import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-2 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <ShoppingBag className="text-black w-full h-full" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                VEXO<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Pioneering the future of personal audio and premium electronics. We blend cutting-edge technology with minimalist design to create the ultimate sensory experience.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-white/5 hover:border-primary/30">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-display font-bold mb-8 tracking-widest uppercase text-xs">Categories</h4>
            <ul className="space-y-4">
              {['Headphones', 'Earbuds', 'Smartphones', 'Laptops'].map((item) => (
                <li key={item}>
                  <Link to={`/shop?category=${item}`} className="text-text-muted hover:text-primary transition-all text-sm flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/shop?deals=true" className="text-primary hover:text-cyan-300 transition-colors text-sm font-semibold flex items-center group">
                  <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-300 mr-0 group-hover:mr-2 transition-all duration-300" />
                  Exclusive Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-display font-bold mb-8 tracking-widest uppercase text-xs">Assistance</h4>
            <ul className="space-y-4">
              {['Help Center', 'Our Studio', 'Shipping Policy', 'Warranty', 'Order Tracking'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-text-muted hover:text-white transition-all text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-2 rounded-full bg-white/20 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="glass-card p-8 relative overflow-hidden border-white/5">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl -z-10" />
            <h4 className="text-white font-display font-bold mb-4 tracking-tight text-lg">Vexo Insider</h4>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">Join our elite community for early access to product drops and secret deals.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background/80 border border-white/10 text-white text-sm rounded-xl px-4 py-3.5 w-full focus:outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-black w-full py-3.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 group"
              >
                Sign Up <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-xs font-medium">
            &copy; {new Date().getFullYear()} VEXO ELECTRONICS. ENGINEERED FOR THE BOLD.
          </p>
          <div className="flex space-x-8">
            <Link to="#" className="text-text-muted hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Privacy</Link>
            <Link to="#" className="text-text-muted hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Terms</Link>
            <Link to="#" className="text-text-muted hover:text-white transition-colors text-xs font-medium uppercase tracking-widest">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
