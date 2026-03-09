import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function FoundrySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const part1X = useTransform(scrollYProgress, [0, 0.4], [-200, 0]);
  const part1Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const part2X = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
  const part2Opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const coreScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const coreOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="py-60 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">Foundry Phase 02</span>
            <div className="w-12 h-px bg-primary/30" />
          </div>
          <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase italic leading-none">
            ATOMIC <br /><span className="text-gradient-primary">ASSEMBLY.</span>
          </h2>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Component 1: Left Housing */}
          <motion.div 
            style={{ x: part1X, opacity: part1Opacity }}
            className="absolute left-1/4 w-64 h-64 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 -rotate-90">Outer Shell [L]</div>
          </motion.div>

          {/* Component 2: Right Housing */}
          <motion.div 
            style={{ x: part2X, opacity: part2Opacity }}
            className="absolute right-1/4 w-64 h-64 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl flex items-center justify-center"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 rotate-90">Outer Shell [R]</div>
          </motion.div>

          {/* Component 3: The Core */}
          <motion.div 
            style={{ scale: coreScale, opacity: coreOpacity }}
            className="z-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-full backdrop-blur-3xl shadow-glow-cyan/20 flex flex-col items-center justify-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-glow-cyan">
               <div className="w-6 h-6 border-2 border-black rounded-full animate-ping" />
            </div>
            <div className="text-center">
              <div className="text-xs font-black uppercase tracking-[0.3em]">Aura Core</div>
              <div className="text-[8px] font-bold text-primary animate-pulse">Synchronizing...</div>
            </div>
          </motion.div>

          {/* Connectors/Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <motion.line 
               x1="25%" y1="50%" x2="50%" y2="50%" 
               stroke="currentColor" 
               strokeWidth="1" 
               strokeDasharray="4 4"
               className="text-primary"
             />
             <motion.line 
               x1="75%" y1="50%" x2="50%" y2="50%" 
               stroke="currentColor" 
               strokeWidth="1" 
               strokeDasharray="4 4"
               className="text-primary"
             />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-32">
           {[
             { title: 'Titanium Shell', desc: 'Aerospace grade alloy for zero resonance.' },
             { title: 'Neural Driver', status: 'Bio-mimetic diaphragm technology.' },
             { title: 'Spatial Lattice', status: 'Proprietary acoustic chamber matrix.' },
           ].map((item, i) => (
             <div key={i} className="space-y-4 pt-8 border-t border-white/5">
                <h4 className="text-lg font-display font-black uppercase italic tracking-wider text-primary">{item.title}</h4>
                <p className="text-sm text-text-muted font-medium">{item.desc || item.status}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
