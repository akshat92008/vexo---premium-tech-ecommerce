import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function AuraVisualizer() {
  const [points, setPoints] = useState<number[]>([]);
  const pointCount = 40;

  useEffect(() => {
    setPoints(Array.from({ length: pointCount }, () => Math.random() * 50 + 25));
    
    const interval = setInterval(() => {
      setPoints(prev => prev.map(p => {
        const change = (Math.random() - 0.5) * 10;
        return Math.min(Math.max(p + change, 10), 90);
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 flex items-center justify-center relative group overflow-hidden bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-premium">
      {/* Decorative Grids */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="absolute top-8 left-10 flex flex-col gap-1">
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Acoustic Signal v.04</span>
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20 italic">Processing Neural Stream...</span>
      </div>

      <div className="flex items-end gap-[3px] h-32 px-12 transition-all duration-700 group-hover:gap-1">
        {points.map((p, i) => (
          <motion.div
            key={i}
            animate={{ height: `${p}%` }}
            transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
            className={`w-[3px] rounded-full ${i % 3 === 0 ? 'bg-primary shadow-glow-cyan/40' : 'bg-white/20'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-10 flex items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-white italic">0.1ms Latency</span>
          <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Signal Integrity 99.9%</span>
        </div>
        <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center bg-white/[0.02]">
           <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
        </div>
      </div>
    </div>
  );
}
