import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

const NODES = [
  { city: 'TOKYO_SEC_01', coords: { top: '35%', left: '85%' }, status: 'ACTIVE' },
  { city: 'NEO_BERLIN', coords: { top: '30%', left: '48%' }, status: 'SYNCING' },
  { city: 'SILICON_VALLEY', coords: { top: '40%', left: '15%' }, status: 'ACTIVE' },
  { city: 'SINGAPORE_HUB', coords: { top: '65%', left: '78%' }, status: 'ACTIVE' },
  { city: 'SYDNEY_CORE', coords: { top: '80%', left: '88%' }, status: 'STANDBY' },
  { city: 'LONDON_NODE', coords: { top: '25%', left: '44%' }, status: 'ACTIVE' },
];

export default function GlobalNodeMap() {
  return (
    <section className="py-40 relative bg-black overflow-hidden">
      {/* Background Decorative Map (Stylized) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <svg viewBox="0 0 1000 500" className="w-full h-full text-primary/20 fill-current">
          {/* Simple world map path representation (stylized) */}
          <path d="M150,150 Q200,100 250,150 T350,150 T450,150 T550,150 T650,150 T750,150 T850,150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <path d="M100,250 Q200,200 300,250 T500,250 T700,250 T900,250" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
          <path d="M200,350 Q400,300 600,350 T800,350" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 8" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Global Distribution</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none uppercase italic">
              NEURAL <br /><span className="text-white/10 italic">NODES.</span>
            </h2>
            <p className="text-lg text-text-muted font-medium leading-relaxed italic border-l-2 border-white/5 pl-8">
              “VEXO operates a decentralized latency-free grid. Every unit is synchronized to the nearest regional core for instantaneous firmware updates and acoustic calibration.”
            </p>
            <div className="space-y-4 pt-10">
               <div className="flex justify-between items-center py-4 border-b border-white/5 group cursor-default">
                  <span className="text-[10px] font-black text-white/40 group-hover:text-primary transition-colors">ACTIVE NODES</span>
                  <span className="text-xl font-display font-black text-white">42</span>
               </div>
               <div className="flex justify-between items-center py-4 border-b border-white/5 group cursor-default">
                  <span className="text-[10px] font-black text-white/40 group-hover:text-primary transition-colors">GRID LATENCY</span>
                  <span className="text-xl font-display font-black text-primary">0.08ms</span>
               </div>
               <div className="flex justify-between items-center py-4 border-b border-white/5 group cursor-default">
                  <span className="text-[10px] font-black text-white/40 group-hover:text-primary transition-colors">ALLOCATION LOAD</span>
                  <span className="text-xl font-display font-black text-white">92%</span>
               </div>
            </div>
          </div>

          <div className="lg:w-2/3 relative h-[500px] w-full bg-white/[0.02] border border-white/5 rounded-[4rem] backdrop-blur-3xl overflow-hidden group shadow-premium">
             {/* Glowing Pulse */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full animate-pulse" />
             
             {/* Map Pins */}
             {NODES.map((node, i) => (
               <motion.div
                 key={node.city}
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 style={{ top: node.coords.top, left: node.coords.left }}
                 className="absolute z-10"
               >
                 <div className="relative group/pin">
                    {/* Ring */}
                    <motion.div 
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 w-8 h-8 -left-3 -top-3 rounded-full border ${node.status === 'ACTIVE' ? 'border-primary' : 'border-secondary'}`} 
                    />
                    {/* Dot */}
                    <div className={`w-2 h-2 rounded-full ${node.status === 'ACTIVE' ? 'bg-primary shadow-glow-cyan' : 'bg-secondary'} relative z-10`} />
                    
                    {/* Label */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none">
                       <div className="bg-black/80 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-xl whitespace-nowrap">
                          <p className="text-[8px] font-black tracking-widest text-primary mb-1">{node.status}</p>
                          <p className="text-[10px] font-display font-black text-white">{node.city}</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
             ))}

             {/* Connection Lines (Simulated with simple CSS/SVG) */}
             <svg className="absolute inset-0 w-full h-full opacity-10">
                <line x1="15%" y1="40%" x2="48%" y2="30%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="48%" y1="30%" x2="85%" y2="35%" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="85%" y1="35%" x2="78%" y2="65%" stroke="white" strokeWidth="0.5" />
                <line x1="78%" y1="65%" x2="88%" y2="80%" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
             </svg>

             {/* Corner Decoration */}
             <div className="absolute top-10 right-10 flex items-center gap-3">
                <Globe size={16} className="text-white/20" />
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Satellite Interface Active</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
