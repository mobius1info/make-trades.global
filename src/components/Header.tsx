import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Статьи', href: '#articles' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-lg border-b border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center group-hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">
            Make<span className="text-accent-400">Trades</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-300 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://maketrades.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-200 hover:text-white px-4 py-2 transition-colors"
          >
            Войти
          </a>
          <a
            href="https://maketrades.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-accent-500 hover:bg-accent-400 text-ink-950 px-5 py-2.5 rounded-lg transition-colors"
          >
            Получить демо
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-lg border-b border-ink-800/60">
          <div className="px-5 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-ink-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://maketrades.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-accent-500 text-ink-950 px-5 py-2.5 rounded-lg text-center mt-2"
            >
              Получить демо
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
