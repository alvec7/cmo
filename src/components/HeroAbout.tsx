import { STAT_CARDS, CONTACTS } from "../data/resumeData";

export function HeroAbout() {
  return (
    <section id="about" className="flex flex-col gap-6 md:grid md:gap-8 md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] md:items-start">
      {/* Main bio — second on mobile, first on desktop */}
      <div className="order-2 md:order-1 space-y-6 rounded-none border border-neutral-900/40 bg-[#fff7e5] p-5 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-700">
          Маркетинговый стратег для амбициозных бизнесов
        </p>
        <div>
          <h1 className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Привет! Я Саша Вечерский — директор по маркетингу в IT и digital-продуктах.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
            Нахожу точки прорывного роста через эксперименты и аналитику, превращаю рекламный шум
            в запоминающиеся бренд-истории.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-800">
            18+ лет в маркетинге, PR и продуктовом менеджменте. Создаю и масштабирую IT-бренды,
            собираю команды, которые приносят результаты, выстраиваю целеполагание и аналитику,
            открываю новые рынки.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-neutral-800">
            Помогаю цифровым продуктам расти за счёт управляемого маркетинга: от стратегии и
            юнит-экономики к операционной реализации. Выстраиваю коммерческие функции с нуля,
            совмещая маркетинг, продажи и продуктовый подход. Опыт в travel-tech, B2B SaaS,
            IaaS / cloud, mobile apps, media и telecom.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 text-[13px] md:grid-cols-3">
          {STAT_CARDS.map((card) => (
            <div
              key={card.label}
              className={`border border-dashed border-neutral-700/50 px-3 py-2 ${card.bg}`}
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                {card.label}
              </div>
              <div className="mt-1 font-semibold">{card.value}</div>
              <div className="text-xs text-neutral-700">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Open to */}
        <div className="flex flex-wrap items-center gap-3 border-t border-dotted border-neutral-600/40 pt-3 text-xs">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-700">
            Открыт к предложениям на позиции CMO, Head of Marketing, Marketing Team Lead
          </div>
        </div>
      </div>

      {/* Photo + contacts teaser — first on mobile, second on desktop */}
      <aside className="order-1 md:order-2 space-y-4">
        <div className="border border-neutral-900/40 bg-[#fff7e5] p-3 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 border border-dashed border-neutral-700/60 bg-[#e9e3d7] p-2 text-center text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-600">
              <div className="mb-2 aspect-[3/4] w-full max-h-[320px] border border-neutral-700/60 bg-neutral-200/60 sm:h-44 sm:max-h-none sm:aspect-auto">
                <img
                  src="https://2514247f-2831-4c5c-9ab6-3757161868db.selstorage.ru/Photo_me_HH.jpg"
                  alt="Александр Вечерский"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              Саша Вечерский
            </div>
            <div className="flex-1 space-y-3 text-xs">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600">
                  Локация
                </div>
                <div className="font-semibold">Санкт-Петербург</div>
                <div className="text-neutral-700">Готов к командировкам</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600">
                  Основной фокус
                </div>
                <div className="font-semibold">IT / digital‑продукты</div>
                <div className="text-neutral-700">Cloud, SaaS / IaaS, AI, Media</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600">
                  Языки
                </div>
                <div className="text-neutral-800">Русский (родной), English B2, Deutsch A2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick contact */}
        <div className="border border-neutral-900/40 bg-[#141414] p-3 text-xs text-neutral-100 shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                Быстрый контакт
              </div>
              <div className="mt-1 font-semibold">{CONTACTS.email}</div>
            </div>
            <a
              href="#contacts"
              className="touch-target inline-flex items-center border border-neutral-100 bg-[#fdf7ec] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-neutral-900 shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)]"
            >
              Оставить запрос
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}