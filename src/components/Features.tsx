import {
  Monitor,
  Smartphone,
  Coins,
  Sliders,
  TrendingUp,
  Store,
  Bitcoin,
  Code,
  Building2,
  UserCog,
  Briefcase,
  Bot,
} from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Все торговые терминалы',
    description: 'Виджеты, сервер, котировки, CRM, кабинет трейдера — всё включено в одну платформу.',
  },
  {
    icon: Smartphone,
    title: 'Приложения в сторах',
    description: 'Регистрация приложения с вашим логотипом в Apple Store и Google Play.',
  },
  {
    icon: Coins,
    title: '500+ инструментов',
    description: 'Котировки forex, криптовалют, акций и индексов в реальном времени.',
  },
  {
    icon: Sliders,
    title: 'Гибкие настройки',
    description: 'Настраиваемые спреды, комиссии и параметры для каждого инструмента.',
  },
  {
    icon: TrendingUp,
    title: 'Инвестиции и копирование',
    description: 'Самый функциональный терминал с инвестициями и копированием сделок.',
  },
  {
    icon: Bot,
    title: 'Prop-trading и опционы',
    description: 'Возможность интеграции prop-trading и бинарных опционов.',
  },
  {
    icon: Store,
    title: 'Store ботов и индикаторов',
    description: 'Магазин ботов и индикаторов с поддержкой JavaScript разработки.',
  },
  {
    icon: Bitcoin,
    title: 'Криптовалютный процессинг',
    description: 'Встроенный процессинг для приёма и вывода криптовалюты.',
  },
  {
    icon: Code,
    title: 'API интеграции',
    description: 'API для интеграции платёжных систем и сторонних сервисов.',
  },
  {
    icon: Building2,
    title: '200+ компаний',
    description: 'Более 200 компаний по всему миру используют нашу платформу.',
  },
  {
    icon: UserCog,
    title: 'Полнофункциональная CRM',
    description: 'CRM с разделением ролей, управлением лидами и автоматизацией.',
  },
  {
    icon: Briefcase,
    title: 'Партнёрская программа',
    description: 'Автоматическое распределение бонусов и партнёрских комиссий, IB-кабинет.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-accent-400 text-sm font-semibold mb-3 tracking-wide uppercase">
            Возможности
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Полный функционал для вашего брокера
          </h2>
          <p className="text-ink-300 text-lg">
            Всё, что нужно для запуска и развития брокерского бизнеса —
            в единой платформе. От торгового ядра до мобильных приложений.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group glass-card rounded-xl p-6 hover:border-accent-500/40 hover:bg-ink-800/50 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:bg-accent-500/20 group-hover:scale-105 transition-all">
                <feature.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
