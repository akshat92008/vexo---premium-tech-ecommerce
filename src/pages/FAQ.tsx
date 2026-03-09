import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee on all our products. If you are not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund, provided the item is in its original condition and packaging.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary depending on the destination. You can view the estimated shipping cost during checkout before completing your purchase.'
    },
    {
      question: 'How long does the battery last on the Aura Sonic Pro?',
      answer: 'The Aura Sonic Pro features an industry-leading battery life of up to 40 hours with Active Noise Cancellation turned on, and up to 50 hours with ANC turned off. A quick 10-minute charge provides up to 5 hours of playback.'
    },
    {
      question: 'Is there a warranty on Vexo products?',
      answer: 'All Vexo products come with a standard 2-year limited warranty that covers manufacturing defects. We also offer an optional extended warranty program that provides coverage for accidental damage.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order has shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can also view your order status by logging into your Vexo account dashboard.'
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-3xl py-24 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-text-muted">
          Find answers to common questions about our products, shipping, and returns.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-surface-light rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-white/10"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className="text-lg font-display font-semibold pr-8">{faq.question}</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                openIndex === index ? 'bg-primary text-black' : 'bg-white/5 text-white'
              }`}>
                {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-surface-light p-10 rounded-3xl border border-white/5">
        <h2 className="text-2xl font-display font-semibold mb-4">Still have questions?</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <button className="bg-primary hover:bg-primary-dark text-black px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
          Contact Support
        </button>
      </div>
    </div>
  );
}
