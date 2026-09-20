import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/60 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-ink-950" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white">
                Make<span className="text-accent-400">Trades</span>
              </span>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              Технологическая платформа для создания форекс брокеров,
              криптобирж и дилинговых центров под ключ.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wide">
              Разделы
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="text-ink-400 hover:text-accent-400 text-sm transition-colors">Возможности</a></li>
              <li><a href="#articles" className="text-ink-400 hover:text-accent-400 text-sm transition-colors">Статьи</a></li>
              <li><a href="#faq" className="text-ink-400 hover:text-accent-400 text-sm transition-colors">Вопросы</a></li>
              <li><a href="#contact" className="text-ink-400 hover:text-accent-400 text-sm transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-800/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-ink-500 text-xs">
            © 2025 MakeTrades. Все права защищены.
          </p>
          <p className="text-ink-500 text-xs">
            Мы не брокер. MakeTrades — технологическая платформа.
          </p>
        </div>
      </div>
    </footer>
  );
}
