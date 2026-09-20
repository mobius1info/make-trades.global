import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative glass-card rounded-2xl overflow-hidden p-8 sm:p-14 text-center">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0 radial-glow" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Готовы начать?
            </h2>
            <p className="text-ink-300 text-lg max-w-xl mx-auto mb-8">
              Получите демо-аккаунт и протестируйте все возможности платформы бесплатно.
              Мы не брокер — MakeTrades это технологическая платформа для запуска
              брокерского бизнеса.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://maketrades.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold px-7 py-3.5 rounded-lg transition-all hover:scale-[1.02] group"
              >
                Получить демо-аккаунт
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maketrades.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink-700 hover:border-accent-500/50 text-white font-medium px-7 py-3.5 rounded-lg transition-colors"
              >
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
