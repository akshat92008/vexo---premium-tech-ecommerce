import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Globe, Cpu, Zap, ShieldCheck } from 'lucide-react';

const STATUS_MESSAGES = [
  { icon: <Cpu size={12} />, label: 'Neural Core Fabrication', status: 'In Progress: 88%' },
  { icon: <Globe size={12} />, label: 'Logistics Router', status: 'Latency: 0.12ms' },
  { icon: <Zap size={12} />, label: 'Aura Driver Sync', status: 'Stable' },
  { icon: <ShieldCheck size={12} />, label: 'Allocation Protocol', status: 'Verified' },
];

export default function SupplyChainFeed() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] h-10 border-t border-white/5 bg-background/80 backdrop-blur-3xl overflow-hidden hidden lg:block">
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-12 h-full">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Live Asset Manifest</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-white/40"
            >
              <div className="text-primary">{STATUS_MESSAGES[index].icon}</div>
              <span className="text-[8px] font-bold uppercase tracking-widest">{STATUS_MESSAGES[index].label}:</span>
              <span className="text-[8px] font-black text-white uppercase tracking-widest italic">{STATUS_MESSAGES[index].status}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-8">
           <div className="flex items-center gap-2">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Hash:</span>
              <span className="text-[8px] font-mono text-primary/60">0xVEXO_{Math.random().toString(16).slice(2, 8).toUpperCase()}</span>
           </div>
           <div className="w-px h-3 bg-white/10" />
           <div className="flex items-center gap-2">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Foundary Pool:</span>
              <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">8.2 TH/s</span>
           </div>
        </div>
      </div>
    </div>
  );
}
