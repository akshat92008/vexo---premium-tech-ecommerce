import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-24 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Have a question or need assistance? Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">Email Us</h3>
              <p className="text-text-muted mb-2">For general inquiries and support.</p>
              <a href="mailto:support@vexo.com" className="text-primary hover:text-primary-dark font-medium text-lg transition-colors">support@vexo.com</a>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Phone size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">Call Us</h3>
              <p className="text-text-muted mb-2">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+18001234567" className="text-primary hover:text-primary-dark font-medium text-lg transition-colors">+1 (800) 123-4567</a>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-2">Visit Us</h3>
              <p className="text-text-muted mb-2">123 Innovation Drive, Tech City, CA 94105</p>
              <a href="#" className="text-primary hover:text-primary-dark font-medium text-lg transition-colors">Get Directions</a>
            </div>
          </div>
        </div>

        <div className="bg-surface-light p-10 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-display font-semibold mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-text-muted">First Name</label>
                <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-text-muted">Last Name</label>
                <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-text-muted">Email Address</label>
              <input type="email" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-text-muted">Message</label>
              <textarea rows={5} className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-black py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
