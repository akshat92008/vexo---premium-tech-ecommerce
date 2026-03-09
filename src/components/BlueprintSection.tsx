import { motion } from 'motion/react';

export default function BlueprintSection() {
  return (
    <section className="py-40 relative bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-5" />
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Technical Anatomy</span>
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                ENGINEERED <br /> <span className="text-white/20 italic">PRECISION.</span>
              </h2>
            </div>
            <p className="text-xl text-text-muted leading-relaxed font-medium max-w-xl">
              Every curve of the VEXO Aethera One is derived from mathematical perfection. Our proprietary titanium-alloy frame reduces vibration to near-zero, while the graphene diaphragm handles frequencies beyond human perception.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Diaphragm</span>
                <p className="text-lg font-bold text-white uppercase italic">Nano-Graphene</p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Processing</span>
                <p className="text-lg font-bold text-white uppercase italic">Quantum Audio X1</p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Resonance</span>
                <p className="text-lg font-bold text-white uppercase italic">0.001% THD</p>
              </div>
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-silver/40">Fabrication</span>
                <p className="text-lg font-bold text-white uppercase italic">CNC Titanium</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative glass p-2 rounded-[3rem] border-white/10 overflow-hidden group">
               <img 
                 src="/blueprint.png" 
                 alt="VEXO Technical Blueprint" 
                 className="w-full h-auto grayscale brightness-75 group-hover:brightness-100 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Annotation Overlay - Floating technical dots */}
            <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-primary rounded-full animate-ping" />
            <div className="absolute top-[45%] right-[25%] w-2 h-2 bg-primary rounded-full animate-ping [animation-delay:1s]" />
            <div className="absolute bottom-[30%] left-[40%] w-2 h-2 bg-primary rounded-full animate-ping [animation-delay:2s]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
