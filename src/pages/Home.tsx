import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Shield, Zap, Headphones, ChevronRight, Share2, Award, Hexagon } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import BlueprintSection from '../components/BlueprintSection';

export default function Home() {
  const { products } = useShop();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 blur-[180px] rounded-full mix-blend-screen animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/20 blur-[180px] rounded-full mix-blend-screen animate-pulse [animation-delay:2s]" />
          <div className="absolute inset-0 bg-grain opacity-5" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col items-center text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-white/5 group cursor-default shadow-glow-cyan/10">
              <Hexagon size={14} className="text-primary fill-primary/20 animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-silver/80">Allocation Phase: Limited 01</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-[10vw] lg:text-[13rem] font-display font-black leading-[0.75] tracking-tighter uppercase italic">
                AURAL. <br />
                <span className="text-gradient-primary">ZENITH.</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium italic opacity-80">
                “Architecture of the infinite. VEXO isn’t audio gear—it’s a neurological gateway to pure acoustic clarity.”
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
              <Link 
                to="/shop" 
                className="group relative bg-white text-black px-16 py-6 rounded-2xl font-black transition-all hover:bg-primary hover:text-black hover:shadow-glow-cyan flex items-center gap-4 active:scale-95"
              >
                <span className="text-[12px] uppercase tracking-[0.3em]">Acquire Units</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="group px-14 py-6 rounded-2xl font-bold border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-6 backdrop-blur-3xl">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="text-[12px] uppercase tracking-[0.3em] text-white">The Film</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-16 pt-16 border-t border-white/5 w-full max-w-4xl">
              {[
                { label: 'Latency', val: '0.1MS' },
                { label: 'Scarcity', val: '1/500' },
                { label: 'Materials', val: 'TI-09' },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-4xl font-display font-black text-white group-hover:text-primary transition-all tracking-tight italic">{stat.val}</div>
                  <div className="text-[9px] uppercase tracking-[0.4em] text-silver/40 font-black">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 z-20"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary/60 to-transparent" />
          <span className="text-[9px] font-black uppercase tracking-[0.8em] text-silver/30 [writing-mode:vertical-lr] scale-y-[-1]">Engage</span>
        </motion.div>
      </section>

      {/* Blueprint Section (Luxury Addition) */}
      <BlueprintSection />

      {/* Philosophy Section */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-tight">
              HARNESSING THE <br /> <span className="text-white/20">QUANTUM WAVE.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
              We don't just build electronics; we architect gateways to immersive dimensions. Every component is meticulously machined to bridge the gap between human and machine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} />, title: 'Hyper-Resistant', desc: 'Space-grade alloys for zero-gravity endurance.' },
              { icon: <Zap size={32} />, title: 'Neural Response', desc: 'Latency under 1ms. Sync with your reflexes.' },
              { icon: <Headphones size={32} />, title: 'Spatial Rift', desc: 'Soundscapes that defy physical boundaries.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 space-y-6 hover-lift text-left"
              >
                <div className="text-primary">{feature.icon}</div>
                <h3 className="text-2xl font-display font-black">{feature.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/2 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Neural Inventory</span>
              </div>
              <h2 className="text-6xl md:text-[7rem] font-display font-black tracking-tighter leading-[0.8]">
                FEATURED <br /><span className="text-white/10 uppercase italic">VAULT.</span>
              </h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-primary transition-all pb-4 border-b border-white/5 hover:border-primary">
              Access All Hardware <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-40">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 glass-card overflow-hidden group relative"
              >
                <img 
                   src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600" 
                   alt="Tech Lab" 
                   className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[3s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                 <div className="absolute bottom-12 left-12 max-w-xl space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Research & Development</span>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white italic leading-[0.9]">LAB-GRADE <br /> PRECISION.</h3>
                    <p className="text-text-muted font-medium">Every Aura series device undergoes 2,000 hours of acoustic calibration in our subterranean silent-labs.</p>
                    <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white hover:text-primary transition-all">
                       Learn About Calibration <ArrowRight size={14} />
                    </button>
                 </div>
              </motion.div>
              
              <div className="md:col-span-4 grid grid-rows-2 gap-8">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="glass-card p-12 flex flex-col justify-between hover:border-accent/40 group"
                 >
                    <Share2 className="text-accent group-hover:scale-110 transition-transform" size={40} />
                    <div className="space-y-4">
                       <h4 className="text-3xl font-display font-black">ECOSYSTEM SYNC.</h4>
                       <p className="text-sm text-text-muted font-medium leading-relaxed">Instantly bridge across all Vexo devices with unified neural control.</p>
                    </div>
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="glass-card p-12 flex flex-col justify-between hover:border-secondary/40 group"
                 >
                    <Award className="text-secondary group-hover:scale-110 transition-transform" size={40} />
                    <div className="space-y-4">
                       <h4 className="text-3xl font-display font-black">ELITE STATUS.</h4>
                       <p className="text-sm text-text-muted font-medium leading-relaxed">Lifetime warranty and priority procurement for Vexo Founders.</p>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-secondary/10 blur-[200px] rounded-full rotate-12" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none">
              JOIN THE <br /> <span className="text-gradient-primary">PROTOCAL.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-xl mx-auto font-medium">
              Access the vanguard. Regular updates on limited edition drops and experimental hardware.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Secure Email Address" 
                className="flex-1 bg-white/5 border border-white/5 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-primary transition-all font-medium"
              />
              <button 
                type="submit" 
                className="bg-white hover:bg-primary text-black px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all hover:shadow-neon active:scale-95"
              >
                Initialize Access
              </button>
            </form>
            <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-600">Encrypted. Secure. Zero-Spam Guarantee.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
