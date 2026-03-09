import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus Chen',
    role: 'Principal Architect',
    text: '“The build quality is unlike anything I’ve handled. It feels like a piece of aerospace equipment that happens to play music.”',
    rating: 5
  },
  {
    name: 'Elena Vance',
    role: 'Sound Designer',
    text: '“Zero latency isn’t a marketing buzzword here. It’s a reality. The spatial rift technology is a game changer for my workflow.”',
    rating: 5
  },
  {
    name: 'Julian Arasaka',
    role: 'Tech Enthusiast',
    text: '“VEXO doesn’t just sell headphones. They sell a glimpse into the future of personal hardware. Pure, unfiltered excellence.”',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-40 relative bg-surface overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic">
            OPERATOR <span className="text-white/10 uppercase">FEEDBACK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] relative space-y-8 group hover:border-primary/20 transition-all"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-white font-medium italic leading-relaxed">
                {review.text}
              </p>
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-sm font-black uppercase tracking-widest text-white">{review.name}</h4>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mt-1">{review.role}</p>
              </div>
              
              <div className="absolute top-8 right-12 text-6xl font-display font-black text-white/[0.03] pointer-events-none group-hover:text-primary/5 transition-colors">
                “
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
