import { ArrowRight, Check } from 'lucide-react';

const stats = [
  { value: '400+', label: 'торговых инструментов' },
  { value: '200+', label: 'компаний используют' },
  { value: '$1000', label: 'от / в месяц' },
];

const tickerItems = [
  'EUR/USD 1.0842',
  'GBP/USD 1.2673',
  'BTC/USD 67,240',
  'ETH/USD 3,580',
  'XAU/USD 2,340',
  'USD/JPY 151.82',
  'AUD/USD 0.6534',
  'US500 5,240',
  'US100 18,420',
  'WTI 78.34',
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 radial-glow" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-xs font-medium mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-slow" />
            White Label решение для брокерского бизнеса
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Лучшее решение для{' '}
            <span className="gradient-text">создания брокера</span>
          </h1>

          <p className="text-lg text-ink-300 leading-relaxed max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Создание брокеров, криптобирж и дилинговых центров под ключ.
            Торговые терминалы, CRM, мобильные приложения и 400+ инструментов —
            всё в одной платформе.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
              href="#articles"
              className="inline-flex items-center justify-center gap-2 border border-ink-700 hover:border-accent-500/50 text-white font-medium px-7 py-3.5 rounded-lg transition-colors"
            >
              Читать статьи
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-ink-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl overflow-hidden glow-border">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-800/60 bg-ink-900/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="text-xs text-ink-400 font-mono ml-2">maketrades — trading terminal</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'EUR/USD', value: '1.0842', change: '+0.12%', up: true },
                  { label: 'BTC/USD', value: '67,240', change: '+2.34%', up: true },
                  { label: 'XAU/USD', value: '2,340', change: '-0.45%', up: false },
                  { label: 'US500', value: '5,240', change: '+0.78%', up: true },
                ].map((item) => (
                  <div key={item.label} className="bg-ink-800/40 rounded-lg p-3 border border-ink-700/40">
                    <div className="text-xs text-ink-400 font-mono mb-1">{item.label}</div>
                    <div className="font-mono font-semibold text-white text-sm">{item.value}</div>
                    <div className={`text-xs font-mono ${item.up ? 'text-accent-400' : 'text-red-400'}`}>
                      {item.change}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-32 sm:h-40 bg-ink-800/30 rounded-lg border border-ink-700/30 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00e6b8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00e6b8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,70 L40,60 L80,65 L120,40 L160,50 L200,30 L240,35 L280,20 L320,25 L360,10 L400,15 L400,100 L0,100 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M0,70 L40,60 L80,65 L120,40 L160,50 L200,30 L240,35 L280,20 L320,25 L360,10 L400,15"
                    fill="none"
                    stroke="#00e6b8"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden border-y border-ink-800/40 py-3 -mx-5 sm:-mx-8">
          <div className="flex gap-8 animate-ticker whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="text-sm font-mono text-ink-400 flex items-center gap-8">
                {item}
                <span className="text-ink-700">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
