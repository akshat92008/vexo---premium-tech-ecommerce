export default function About() {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-24 min-h-[70vh]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-6">About <span className="text-primary">Vexo</span></h1>
        <p className="text-xl text-text-muted leading-relaxed">
          We are pioneers in personal audio, dedicated to creating the most immersive and high-fidelity sound experiences on the planet.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden aspect-video bg-surface-light border border-white/5">
          <img src="https://images.unsplash.com/photo-1516280440503-a50f8e74921b?auto=format&fit=crop&q=80&w=1000" alt="About Vexo" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-display font-bold">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            Founded in 2023, Vexo was born from a simple idea: sound should be felt, not just heard. We combine aerospace-grade materials with cutting-edge acoustic engineering to craft audio products that redefine industry standards.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every product we design is a testament to our commitment to quality, sustainability, and the pure joy of music.
          </p>
        </div>
      </div>
    </div>
  );
}
