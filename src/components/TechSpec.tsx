import { motion } from 'motion/react';
import { Shield, Zap, Headphones, Battery, Wind, Music } from 'lucide-react';

const specs = [
  {
    icon: <Wind size={32} />,
    title: 'Active Noise Cancellation',
    subtitle: 'Adaptive Pro',
    desc: 'Block out up to 45dB of ambient noise with our hybrid multi-mic array.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Neural Processing',
    subtitle: 'Aura H1 Chip',
    desc: 'Real-time acoustic tuning at 48,000 times per second for perfect balance.'
  },
  {
    icon: <Battery size={32} />,
    title: 'Extreme Endurance',
    subtitle: '40 Hour Battery',
    desc: 'Power for the longest flights. Fast charge 5 minutes for 3 hours of playback.'
  },
  {
    icon: <Headphones size={32} />,
    title: 'Spatial Audio',
    subtitle: 'Dynamic Tracking',
    desc: 'Theater-quality sound that surrounds you, calibrated to your unique ear shape.'
  }
];

export default function TechSpec() {
  return (
    <section className="py-40 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-primary"
          >
            Engineering Excellence
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase italic">
            THE SCIENCE OF <span className="text-white/20">SOUND.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 space-y-8 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-white/5">
                {spec.icon}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{spec.subtitle}</h4>
                  <h3 className="text-2xl font-display font-black text-white">{spec.title}</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  {spec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
