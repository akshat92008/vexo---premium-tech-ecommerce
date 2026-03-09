import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const { products } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const dealsParam = searchParams.get('deals') === 'true';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [showDeals, setShowDeals] = useState(dealsParam);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam);
    setShowDeals(dealsParam);
  }, [categoryParam, dealsParam]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchParams(prev => {
      if (category === 'All') prev.delete('category');
      else prev.set('category', category);
      return prev;
    });
  };

  const handleDealsToggle = () => {
    setShowDeals(!showDeals);
    setSearchParams(prev => {
      if (!showDeals) prev.set('deals', 'true');
      else prev.delete('deals');
      return prev;
    });
  };

  // Filter products
  let filteredProducts = products.filter(p => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (showDeals && !p.originalPrice) return false;
    return true;
  });

  // Sort products
  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    // Default: featured
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Precision Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            {activeCategory === 'All' ? 'ALL ARCHITECTURES' : activeCategory.toUpperCase()}
          </h1>
          <p className="text-text-muted max-w-2xl font-medium leading-relaxed italic opacity-80">
            A curated convergence of sound and soul. Each piece is an uncompromising expression of acoustic mastery and futuristic design.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filters */}
          <aside className={`lg:w-72 flex-shrink-0 ${isFilterOpen ? 'fixed inset-0 z-50 bg-background/95 backdrop-blur-xl p-8 lg:relative lg:inset-auto lg:p-0' : 'hidden lg:block'}`}>
            <div className="sticky top-32 space-y-12">
              <div className="flex justify-between items-center lg:hidden mb-8">
                <h2 className="text-2xl font-display font-bold">FILTERS</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 border border-white/10 rounded-xl">✕</button>
              </div>

              {/* Categories */}
              <div className="glass-card p-8 rounded-[2rem] border-white/5 space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Classifications</h3>
                <ul className="space-y-4">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`flex items-center justify-between w-full text-left transition-all duration-300 group ${
                          activeCategory === category ? 'text-primary' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className={`text-sm font-bold tracking-tight ${activeCategory === category ? 'translate-x-2' : 'group-hover:translate-x-1'}`}>
                          {category}
                        </span>
                        {activeCategory === category && (
                          <motion.div layoutId="category-indicator" className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,1)]" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special Filters */}
              <div className="glass-card p-8 rounded-[2rem] border-white/5 space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Tier Status</h3>
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className={`text-sm font-bold transition-all ${showDeals ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    Elite Deals
                  </span>
                  <div 
                    onClick={handleDealsToggle}
                    className={`w-12 h-6 rounded-full transition-all duration-500 relative ${
                      showDeals ? 'bg-primary' : 'bg-white/10'
                    }`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 ${
                      showDeals ? 'left-7 bg-black' : 'left-1'
                    }`} />
                  </div>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-8 pb-8 border-b border-white/5">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-center gap-3 text-white bg-white/5 px-6 py-4 rounded-2xl border border-white/10 font-bold"
              >
                <Filter size={18} className="text-primary" /> Filter Matrix
              </button>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
                  Found <span className="text-white">{filteredProducts.length}</span> Masterpieces
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 pl-6 pr-2 py-1.5 rounded-2xl border border-white/10 w-full sm:w-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Order by</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-white text-xs font-bold rounded-lg pr-8 py-2 focus:outline-none cursor-pointer appearance-none min-w-[140px]"
                  >
                    <option value="featured">High Caliber</option>
                    <option value="newest">Next Gen</option>
                    <option value="price-low">Value Gradient ↑</option>
                    <option value="price-high">Value Gradient ↓</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 glass-card rounded-[3rem] border-white/5"
              >
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
                  <Filter size={40} className="text-gray-600" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">NO MATCHES FOUND</h3>
                <p className="text-text-muted max-w-sm mx-auto font-medium">Our neural system couldn't locate products matching your current specifications.</p>
                <button 
                  onClick={() => {
                    handleCategoryChange('All');
                    if (showDeals) handleDealsToggle();
                  }}
                  className="mt-10 bg-white text-black px-10 py-4 rounded-2xl font-black transition-all hover:bg-primary active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  RESET SPECIFICATIONS
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center">
              <div className="flex items-center gap-3 p-2 bg-white/5 rounded-2xl border border-white/10">
                {[1, 2, 3].map(n => (
                  <button key={n} className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${n === 1 ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'hover:bg-white/10 text-gray-400'}`}>
                    0{n}
                  </button>
                ))}
                <span className="text-gray-600 mx-2">...</span>
                <button className="w-10 h-10 rounded-xl font-bold text-xs hover:bg-white/10 text-gray-400">08</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
