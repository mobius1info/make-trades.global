import { ArrowRight, Clock, X } from 'lucide-react';
import { useState } from 'react';
import { articles, type Article } from '@/data/articles';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.16 5-1 5-1" />
      <path d="M12 15v5s3.03-.55 4-2c1.16-1.62 1-5 1-5" />
    </svg>
  ),
  Scale: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
  ClipboardList: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M12 7h4" />
    </svg>
  ),
  Layers: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  Bitcoin: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 5h5a2.5 2.5 0 0 1 0 5h-5z" />
      <path d="M9.5 10h6a2.5 2.5 0 0 1 0 5h-6z" />
      <path d="M9.5 15h5a2.5 2.5 0 0 1 0 5h-5z" />
      <path d="M11 3v2M11 19v2M13 3v2M13 19v2" />
    </svg>
  ),
  Users: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function Articles() {
  const [selected, setSelected] = useState<Article | null>(null);

  return (
    <section id="articles" className="relative py-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-accent-400 text-sm font-semibold mb-3 tracking-wide uppercase">
            База знаний
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Полезные статьи
          </h2>
          <p className="text-ink-300 text-lg">
            Подробные руководства по запуску брокерского бизнеса, выбору юрисдикции,
            White Label технологиям и автоматизации работы с клиентами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => {
            const Icon = iconMap[article.icon] ?? iconMap.Rocket;
            return (
              <article
                key={article.id}
                className="group glass-card rounded-xl overflow-hidden hover:border-accent-500/40 transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelected(article)}
              >
                <div className="h-36 bg-gradient-to-br from-ink-800/60 to-ink-900/60 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <Icon className="w-12 h-12 text-accent-400/70 group-hover:scale-110 group-hover:text-accent-400 transition-all duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ink-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-accent-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-accent-400 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Читать статью
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} onSelect={setSelected} />}
    </section>
  );
}

function ArticleModal({
  article,
  onClose,
  onSelect,
}: {
  article: Article;
  onClose: () => void;
  onSelect: (a: Article) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 bg-ink-950/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-2xl max-w-3xl w-full my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-ink-900/90 backdrop-blur-lg border-b border-ink-800/60 z-10">
          <span className="text-xs font-medium text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-full">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="text-ink-400 hover:text-white p-1 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 sm:px-10 py-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
            {article.title}
          </h2>
          <div className="flex items-center gap-3 text-sm text-ink-400 mb-8">
            <span>MakeTrades Team</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="prose-content space-y-4">
            {article.content.map((block, i) => {
              if (block.type === 'heading') {
                return (
                  <h3 key={i} className="font-display text-xl font-semibold text-white mt-8 mb-2">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={i} className="text-ink-300 leading-relaxed">
                    {block.content.map((seg, j) => {
                      if (seg.type === 'text') return <span key={j}>{seg.text}</span>;
                      return (
                        <button
                          key={j}
                          className="text-accent-400 hover:text-accent-300 underline decoration-accent-500/40 underline-offset-2 transition-colors"
                          onClick={() => {
                            const a = articles.find((x) => x.id === seg.articleId);
                            if (a) {
                              onSelect(a);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                        >
                          {seg.text}
                        </button>
                      );
                    })}
                  </p>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-ink-300 leading-relaxed">
                        <span className="text-accent-400 mt-1.5 shrink-0">•</span>
                        <span>
                          {item.map((seg, k) => {
                            if (seg.type === 'text') return <span key={k}>{seg.text}</span>;
                            return (
                              <button
                                key={k}
                                className="text-accent-400 hover:text-accent-300 underline decoration-accent-500/40 underline-offset-2 transition-colors"
                                onClick={() => {
                                  const a = articles.find((x) => x.id === seg.articleId);
                                  if (a) {
                                    onSelect(a);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }
                                }}
                              >
                                {seg.text}
                              </button>
                            );
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-10 pt-6 border-t border-ink-800/60">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maketrades.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Перейти на MakeTrades
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center border border-ink-700 hover:border-ink-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
