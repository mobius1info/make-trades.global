import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/articles';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-accent-400 text-sm font-semibold mb-3 tracking-wide uppercase">
            FAQ
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left"
              >
                <span className="font-display font-medium text-white text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-ink-400 shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-accent-400' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 text-ink-400 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
