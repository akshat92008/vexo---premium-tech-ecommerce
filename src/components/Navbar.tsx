import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Search, User, Menu, X, ChevronDown, ArrowRight, Zap, Headphones, Smartphone, Laptop, Watch } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'Audio',
      path: '/shop?category=Headphones',
      categories: [
        { name: 'Headphones', icon: <Headphones size={16} />, desc: 'Over-ear & On-ear' },
        { name: 'Earbuds', icon: <Zap size={16} />, desc: 'True wireless' },
        { name: 'Speakers', icon: <Watch size={16} />, desc: 'Spatial audio' },
      ],
      featured: {
        name: 'Aura Sonic Pro',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400',
        path: '/product/h1'
      }
    },
    {
      name: 'Devices',
      path: '/shop?category=Smartphones',
      categories: [
        { name: 'Smartphones', icon: <Smartphone size={16} />, desc: 'Next-gen mobile' },
        { name: 'Laptops', icon: <Laptop size={16} />, desc: 'Pro workstations' },
        { name: 'Smartwatches', icon: <Watch size={16} />, desc: 'Health & Link' },
      ],
      featured: {
        name: 'Nexus Echo',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
        path: '/product/h2'
      }
    },
    { name: 'Accessories', path: '/shop?category=Accessories' },
    { name: 'Support', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'backdrop-blur-3xl bg-black/40 py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center p-2 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <ShoppingBag className="text-black w-full h-full" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            VEXO<span className="text-primary group-hover:animate-pulse">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMegaMenu(item.name)}
            >
              <Link 
                to={item.path}
                className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors group"
              >
                {item.name}
                {item.categories && <ChevronDown size={12} className={`transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`} />}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeMegaMenu === item.name ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hidden sm:block"
          >
            <Search size={18} />
          </button>
          <Link to="/wishlist" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hidden sm:block">
            <Heart size={18} />
          </Link>
          <Link to="/dashboard" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 hidden sm:block">
            <User size={18} />
          </Link>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110 relative"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-black text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center ring-2 ring-background ring-offset-0">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMegaMenu && menuItems.find(i => i.name === activeMegaMenu)?.categories && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/5 shadow-2xl overflow-hidden py-12"
          >
            <div className="container mx-auto px-6 max-w-7xl grid grid-cols-12 gap-12">
              <div className="col-span-8 grid grid-cols-3 gap-8">
                {menuItems.find(i => i.name === activeMegaMenu)?.categories?.map((cat) => (
                  <Link 
                    key={cat.name}
                    to={`/shop?category=${cat.name}`}
                    className="group"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        {cat.icon}
                      </div>
                      <h4 className="font-display font-bold text-lg">{cat.name}</h4>
                    </div>
                    <p className="text-xs text-text-muted opacity-60 group-hover:opacity-100 transition-opacity">
                      {cat.desc}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="col-span-4 pl-12 border-l border-white/5">
                <div className="relative group rounded-3xl overflow-hidden aspect-video mb-4">
                  <img 
                    src={menuItems.find(i => i.name === activeMegaMenu)?.featured?.image} 
                    alt="Featured" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[8px] font-black uppercase tracking-widest text-primary mb-1 block">Staff Pick</span>
                    <h5 className="font-display font-bold text-white text-lg">{menuItems.find(i => i.name === activeMegaMenu)?.featured?.name}</h5>
                  </div>
                </div>
                <Link 
                  to={menuItems.find(i => i.name === activeMegaMenu)?.featured?.path || '/'}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group"
                  onClick={() => setActiveMegaMenu(null)}
                >
                  Shop Featured <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden p-8 flex flex-col pt-32"
          >
            <div className="absolute top-8 right-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold tracking-tighter hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-white/5 grid grid-cols-2 gap-4">
              <Link to="/login" className="flex items-center justify-center gap-3 bg-white/5 py-4 rounded-2xl text-xs font-bold uppercase">
                <User size={18} /> Account
              </Link>
              <Link to="/wishlist" className="flex items-center justify-center gap-3 bg-white/5 py-4 rounded-2xl text-xs font-bold uppercase">
                <Heart size={18} /> Wishlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-12 right-12 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-4xl text-center space-y-12">
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter opacity-20">SEARCH VEXO</h2>
              <div className="relative group">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent border-b-2 border-white/10 text-4xl md:text-6xl font-display py-8 px-4 focus:outline-none focus:border-primary transition-colors placeholder:opacity-30"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/shop?q=${(e.target as HTMLInputElement).value}`);
                      setIsSearchOpen(false);
                    }
                  }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={40} className="text-primary" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mr-4">Trending:</span>
                {['Aura Pro', 'Nexus', 'Spatial', 'Wireless'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => {
                      navigate(`/shop?q=${tag}`);
                      setIsSearchOpen(false);
                    }}
                    className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold uppercase tracking-widest hover:border-primary/50 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
