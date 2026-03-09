import { motion, useScroll } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Shield, Zap, Headphones, ChevronRight, Share2, Award } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import AuraVisualizer from '../components/AuraVisualizer';
import FoundrySection from '../components/FoundrySection';
import GlobalNodeMap from '../components/GlobalNodeMap';
import TechSpec from '../components/TechSpec';
import Testimonials from '../components/Testimonials';

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Video & Precise Overlays */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-black/40 z-0" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.9) contrast(1.1)' }}
          >
            <source src="/Futuristic_Luxury_Headphone_Video_Generation.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full glass border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary neon-glow" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Engineering the Future</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-7xl md:text-[13rem] font-display font-black leading-[0.8] tracking-[ -0.05em] uppercase italic">
                PURE AUDIO <br />
                <span className="text-white/10">EXPERIENCE.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium italic">
                Redefine your reality with zero-latency precision. Immersive soundscapes engineered for the bold.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <Link 
                to="/shop" 
                className="group relative bg-white text-black px-12 py-6 rounded-full font-black transition-all hover:bg-primary hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] flex items-center gap-4 active:scale-95"
              >
                <span className="text-[11px] uppercase tracking-[0.3em]">Shop Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="group px-12 py-6 rounded-full font-black border border-white/20 hover:bg-white hover:text-black transition-all flex items-center gap-4 backdrop-blur-xl">
                 <span className="text-[11px] uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors">Explore Features</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Parallax Product Tease */}
        <motion.div
          style={{ y: useScroll().scrollYProgress }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] aspect-square opacity-20 pointer-events-none blur-sm grayscale"
        >
          <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200" alt="Headphone Tease" className="w-full h-full object-contain rotate-12" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Technology Section - The Science of Sound */}
      <TechSpec />

      {/* Immersive Audio Showcase */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="glass-card overflow-hidden rounded-[4rem] border-white/5 bg-white/[0.01]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                 <div className="p-20 space-y-10 flex flex-col justify-center">
                    <h2 className="text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">
                       IMMERSE <br /><span className="text-primary italic">YOURSELF.</span>
                    </h2>
                    <p className="text-xl text-text-muted font-medium italic">
                       “Custom-calibrated 45mm drivers and an aerospace-grade acoustic chamber create a soundstage so wide, you’ll forget the world exists.”
                    </p>
                    <div className="flex gap-4">
                       <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">Dolby Atmos™</span>
                       <span className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">Hi-Res Audio</span>
                    </div>
                 </div>
                 <div className="relative h-[600px] lg:h-auto overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-[2s]" 
                      alt="Headphone Detail" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent hidden lg:block" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Aura Tech Demo Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Acoustic Engineering</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.9]">
                NEURAL <br /><span className="text-white/10 uppercase italic">RESONANCE.</span>
              </h2>
              <p className="text-xl text-text-muted font-medium leading-relaxed italic">
                “Behold the signal journey. Every decibel is sculpted by our proprietary neural lattice, ensuring 0.0001% harmonic distortion.”
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <div className="text-2xl font-display font-black text-white italic">24-BIT</div>
                  <div className="text-[9px] uppercase tracking-widest text-silver/40">Signal Processing</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-black text-white italic">ZERO</div>
                  <div className="text-[9px] uppercase tracking-widest text-silver/40">Phase Jitter</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <AuraVisualizer />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-40 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Latest Drops</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter">
                FEATURED <span className="text-white/10 uppercase">VAULT</span>
              </h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-all pb-3 border-b border-white/10 hover:border-primary">
              Access Full Catalog <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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

      {/* Foundry Assembly Experience */}
      <FoundrySection />

      {/* Global Node Network */}
      <GlobalNodeMap />

      {/* Social Proof */}
      <Testimonials />

      {/* Final CTA section with gradient glow background */}
      <section className="py-60 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-primary/10 blur-[250px] rounded-full rotate-12" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto space-y-20"
          >
            <div className="space-y-6">
              <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase italic leading-none">
                SOUND WITHOUT <br /> <span className="text-white/10 italic">LIMITS.</span>
              </h2>
              <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto font-medium italic">
                Experience the vanguard of acoustic engineering. Limited availability. Unlimited potential.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
               <Link 
                to="/shop" 
                className="bg-white text-black px-16 py-8 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-primary shadow-premium active:scale-95"
              >
                Initialize Order
              </Link>
              <button className="bg-white/5 border border-white/10 text-white px-16 py-8 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all hover:bg-white/10 active:scale-95">
                Join Network
              </button>
            </div>
            
            <div className="pt-20">
               <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20">VEXO | NEURAL GRID ASSET v4.2</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
