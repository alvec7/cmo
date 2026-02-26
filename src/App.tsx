const NAV_ITEMS = [
  { id: "about", label: "Обо мне" },
  { id: "experience", label: "Опыт" },
  { id: "highlights", label: "Достижения" },
  { id: "skills", label: "Навыки" },
  { id: "facts", label: "Факты" },
  { id: "contacts", label: "Контакты" },
];

export function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] font-sans text-neutral-900">
      {/* Fixed retro header */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/20 bg-[#fffdf8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-neutral-900 bg-[#f94e3f] font-mono text-lg font-bold text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)]">
              AV
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">
                Маркетинг / Продукт / Продажи
              </div>
              <div className="text-sm font-semibold">Александр Вечерский</div>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-700 sm:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="border-b-2 border-transparent px-1 pb-1 transition hover:border-neutral-900 hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contacts"
              className="hidden rounded-none border border-neutral-900 bg-[#f94e3f] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)] sm:inline-flex"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        {/* Hero / About */}
        <section id="about" className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] md:items-start">
          <div className="space-y-6 rounded-none border border-neutral-900/40 bg-[#fff7e5] p-5 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-700">
              Маркетинговый стратег для амбициозных бизнесов
            </p>
            <div>
              <h1 className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Привет! Я Саша Вечерский — директор по маркетингу в IT и digital-продуктах.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:text-[15px]">
                Нахожу точки прорывного роста через эксперименты и аналитику, превращаю рекламный шум
                в запоминающиеся бренд-истории.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:text-[15px]">
                18+ лет в маркетинге, PR и продуктовом менеджменте. Создаю и масштабирую IT-бренды,
                собираю команды, которые приносят результаты, выстраиваю целеполагание и аналитику,
                открываю новые рынки.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-800 sm:text-[15px]">
                Помогаю цифровым продуктам расти за счёт управляемого маркетинга: от стратегии и
                юнит-экономики к операционной реализации. Выстраиваю коммерческие функции с нуля,
                совмещая маркетинг, продажи и продуктовый подход. Опыт в travel-tech, B2B SaaS,
                IaaS / cloud, mobile apps, media и telecom.
              </p>
            </div>

            <div className="grid gap-4 text-[13px] md:grid-cols-3">
              <div className="border border-dashed border-neutral-700/50 bg-[#fff1c2] px-3 py-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                  Опыт
                </div>
                <div className="mt-1 font-semibold">18+ лет</div>
                <div className="text-xs text-neutral-700">Маркетинг, PR, продукт</div>
              </div>
              <div className="border border-dashed border-neutral-700/50 bg-[#ffe7b8] px-3 py-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                  Роли
                </div>
                <div className="mt-1 font-semibold">CMO / Brand & PR / Product Marketing</div>
                <div className="text-xs text-neutral-700">Стратегия, GTM и P&L</div>
              </div>
              <div className="border border-dashed border-neutral-700/50 bg-[#ffe0cf] px-3 py-2">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                  Формат
                </div>
                <div className="mt-1 font-semibold">Полная занятость</div>
                <div className="text-xs text-neutral-700">Офис / гибрид / remote</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-dotted border-neutral-600/40 pt-3 text-xs">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-700">
                Открыт к предложениям на позиции CMO, Head of Marketing, Marketing Team Lead
              </div>
            </div>
          </div>

          {/* Photo + contacts teaser */}
          <aside className="space-y-4">
            <div className="border border-neutral-900/40 bg-[#fff7e5] p-3 shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1 border border-dashed border-neutral-700/60 bg-[#e9e3d7] p-2 text-center text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-600">
                  <div className="mb-2 h-40 w-full border border-neutral-700/60 bg-neutral-200/60 sm:h-44">
                    <img
                      src="https://2514247f-2831-4c5c-9ab6-3757161868db.selstorage.ru/my_cover_photo.JPG"
                      alt="Александр Вечерский"
                      className="h-full w-full object-cover"
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
                    <div className="text-neutral-700">Travel‑tech, SaaS, AI, media</div>
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

            <div className="border border-neutral-900/40 bg-[#141414] p-3 text-xs text-neutral-100 shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    Быстрый контакт
                  </div>
                  <div className="mt-1 font-semibold">al.vechersky@gmail.com</div>
                </div>
                <a
                  href="#contacts"
                  className="inline-flex items-center border border-neutral-100 bg-[#fdf7ec] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-neutral-900 shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)]"
                >
                  Оставить запрос
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-5">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="border-l-4 border-[#f94e3f] bg-[#fff1c2] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
              Ключевой опыт
            </h2>
            <div className="hidden text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-600 sm:block">
              От стартапов до корпораций: ImSkipper, Selectel, Газпром, Tele2, Okko, YClients
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* ImSkipper */}
            <article className="flex flex-col gap-3 border border-neutral-900/50 bg-[#fff7e5] p-4 text-sm shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                    Директор по маркетингу и продажам / Сооснователь
                  </div>
                  <div className="font-semibold">ImSkipper</div>
                </div>
                <a
                  href="https://imskipper.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-0.5 transition-colors"
                >
                  imskipper.net
                </a>
                <div className="text-[11px] font-mono text-neutral-700">
                  2023 — наст. время · Международный онлайн-маркетплейс
                </div>
              </header>
              <p className="text-xs leading-relaxed text-neutral-800">
                Сооснователь и директор по маркетингу и продажам международного онлайн‑маркетплейса яхтенных
                туров. Отвечаю за всю коммерческую часть — от бизнес‑стратегии и финансовой модели до лидогенерации
                и закрытия заявок в бронирования.
              </p>
              <ul className="space-y-1 text-xs leading-relaxed text-neutral-900">
                <li>x8 рост GMV за 2 года; 650+ партнёров и 10 000 бортов в 30+ странах</li>
                <li>3000+ яхтенных туров в Европе, ЮВА и на Ближнем Востоке</li>
                <li>x5 рост трафика, PPC‑метрики на уровне лучших отраслевых бенчмарков</li>
                <li>20% повторных продаж через CRM‑воронки и сквозную аналитику</li>
                <li>AI‑агент продаж: +21% конверсия Lead → SQLead, −17% стоимость SQ‑лида</li>
                <li>Лучший travel‑tech проект MITT Travel Start 2025, NPS 9.8, 100% 5★ на Trustpilot</li>
              </ul>
            </article>

            {/* Gazprom ID */}
            <article className="flex flex-col gap-3 border border-neutral-900/50 bg-[#fff7e5] p-4 text-sm shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                    Директор по рекламе и PR
                  </div>
                  <div className="font-semibold">Газпром ID</div>
                </div>
                <a
                  href="https://gid.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-0.5 transition-colors"
                >
                  gid.ru
                </a>
                <div className="text-[11px] font-mono text-neutral-700">
                  2022 — 2024 · Корпоративная платформа и SSO-сервис
                </div>
              </header>
              <p className="text-xs leading-relaxed text-neutral-800">
                Руководил продвижением ГИД — корпоративной платформы и супераппа для ~500 000 сотрудников
                Газпрома. Ответственность за маркетинговую стратегию, бренд и коммуникации.
              </p>
              <ul className="space-y-1 text-xs leading-relaxed text-neutral-900">
                <li>&gt;70% проникновение приложения по Группе за 1,5 года</li>
                <li>Кратный рост MAU, частоты и времени пользовательских сессий</li>
                <li>Контент‑фабрика: 50+ видео, эксплейнеры, онбординг‑материалы</li>
                <li>Геймифицированные in‑app кампании и крупные ивенты (МГФ, проект «Россия»)</li>
                <li>Проект получил признание на уровне правления Газпрома</li>
              </ul>
            </article>

            {/* YClients / Altegio */}
            <article className="flex flex-col gap-3 border border-neutral-900/50 bg-[#fff7e5] p-4 text-sm shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                    PR‑директор
                  </div>
                  <div className="font-semibold">YClients → Altegio</div>
                </div>
                <a
                  href="https://yclients.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-0.5 transition-colors"
                >
                  yclients.com
                </a>
                <div className="text-[11px] font-mono text-neutral-700">
                  2021 — 2022 · Международный B2B SaaS
                </div>
              </header>
              <p className="text-xs leading-relaxed text-neutral-800">
                Провёл ребрендинг и миграцию иностранных клиентов YClients на международную платформу Altegio
                за 4 месяца.
              </p>
              <ul className="space-y-1 text-xs leading-relaxed text-neutral-900">
                <li>Нейминг, айдентика, бренд‑платформа и нарратив Altegio</li>
                <li>Система кризисных коммуникаций и управляемая миграция клиентов</li>
                <li>Переход без финансовых и репутационных потерь и утечек в медиа</li>
                <li>Заложена основа бренда, который масштабируется в LATAM</li>
              </ul>
            </article>

            {/* Selectel */}
            <article className="flex flex-col gap-3 border border-neutral-900/50 bg-[#fff7e5] p-4 text-sm shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                    PR‑директор / Product Marketing Lead
                  </div>
                  <div className="font-semibold">Selectel</div>
                </div>
                <a
                  href="https://selectel.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-0.5 transition-colors"
                >
                  selectel.ru
                </a>
                <div className="text-[11px] font-mono text-neutral-700">
                  2014 — 2021 · Облачная инфраструктура и дата-центры
                </div>
              </header>
              <p className="text-xs leading-relaxed text-neutral-800">
                Создал бренд №1 на рынке облачной инфраструктуры России и провёл компанию через период
                трансформации рынка и экспансии гиперскейлеров.
              </p>
              <ul className="space-y-1 text-xs leading-relaxed text-neutral-900">
                <li>&gt;50% рост выручки год к году на протяжении 7 лет</li>
                <li>Медиа-экосистема: 5000+ публикаций в медиа, PR Value &gt; $10M</li>
                <li>Топ‑позиции в рейтингах IDC, IKS, CNews и др.</li>
                <li>GTM‑стратегия ML‑платформы, выход в enterprise и на новые географические рынки CIS</li>
                <li>Сохранение доли рынка и лояльности в условиях давления гиперскейлеров</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Highlights */}
        <section id="highlights" className="space-y-5">
          <h2 className="border-l-4 border-[#008aa8] bg-[#d5f3ff] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
            Достижения
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">ImSkipper</div>
              <div className="text-sm font-semibold">Лучший travel‑tech стартап 2025</div>
              <p className="leading-relaxed text-neutral-800">
                Создал международный маркетплейс яхтенных туров. 650+ партнёров в 30 странах, 10 000 чартерных бортов, клиенты из СНГ,
                Европы, США. Рост GMV x8 за 2 года.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">Selectel</div>
              <div className="text-sm font-semibold">Бренд облачной инфраструктуры №1</div>
              <p className="leading-relaxed text-neutral-800">
                Провел Selectel от нуля до lovemark айтишников и бренда-лидера, отмеченного многочисленными наградами: Премия Рунета, IT HR Awards, DC Awards.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">Газпром ИД</div>
              <div className="text-sm font-semibold">Суперапп для 500 000 сотрудников</div>
              <p className="leading-relaxed text-neutral-800">
                Сделал эталонный запуск продукта: через 1,5 года — мастер-система международной корпорации и признание на уровне правления.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-5">
          <h2 className="border-l-4 border-[#2d7b46] bg-[#daf5dd] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
            Навыки и экспертиза
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
                Стратегия и лидерство
              </div>
              <ul className="space-y-1">
                <li>Маркетинговая стратегия</li>
                <li>Бренд‑менеджмент</li>
                <li>Go‑to‑Market</li>
                <li>P&L, юнит‑экономика</li>
                <li>Управление командой</li>
                <li>Бюджетирование</li>
                <li>OKR / KPI</li>
              </ul>
            </div>
            <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
                Маркетинг и коммуникации
              </div>
              <ul className="space-y-1">
                <li>Продуктовый маркетинг</li>
                <li>Digital‑маркетинг</li>
                <li>Лидогенерация</li>
                <li>Контент‑маркетинг и SMM</li>
                <li>CRM‑маркетинг</li>
                <li>Event‑маркетинг</li>
                <li>PR, Community & Influence</li>
              </ul>
            </div>
            <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
                Аналитика
              </div>
              <ul className="space-y-1">
                <li>Сквозная и веб‑аналитика</li>
                <li>HADI-циклы и A/B-тесты</li>
                <li>Маркетинговые и продуктовые метрики</li>
                <li>Data‑driven подход</li>
                <li>Анализ и визуализация данных</li>
              </ul>
            </div>
            <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
                Продажи и партнёрства
              </div>
              <ul className="space-y-1">
                <li>Управление продажами</li>
                <li>Партнёрский маркетинг</li>
                <li>Реферальные программы</li>
                <li>Программы лояльности</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section id="facts" className="space-y-5">
          <h2 className="border-l-4 border-[#b24c00] bg-[#ffe0cf] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
            Образование
          </h2>
          <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
              Специалитет, курсы, тренинги
            </div>
            <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
              <li>MBA Intensive · Marketing Management – City Business School, 2026</li>
              <li>Цифровой маркетинг – СПб Политех Петра Великого, 2019</li>
              <li>Генеративный AI для продакт-менеджеров – Go Practice, 2026</li>
              <li>Python для анализа данных – Нетология, 2023</li>
              <li>Управление продуктом на основе аналитики — Go Practice, 2021</li>
              <li>Growth Hacking – тренинг Юрия Дрогана, 2021</li>
              <li>Креатив в Digital – M‑A‑C‑S, 2020</li>
              <li>Акселерационная программа «Продукт‑менеджмент» – Product University, 2020</li>
            </ul>
          </div>
        </section>

        {/* Recommendations */}
        <section id="recommendations" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="border-l-4 border-[#3a3a3a] bg-[#e6e6e6] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
              Рекомендации
            </h2>
          </div>
          <div className="border border-neutral-900/40 bg-[#fffdf8] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
            <p className="max-w-3xl leading-relaxed text-neutral-800">
              Отзывы CMO, CPO и директоров компаний, с которыми я работал, доступны на LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/alexandr-vechersky-ba423318"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center border border-neutral-900 bg-[#d5f3ff] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-900 shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)]"
            >
              Открыть профиль в LinkedIn
            </a>
          </div>
        </section>

        {/* Contacts / CTA */}
        <section id="contacts" className="space-y-5">
          <h2 className="border-l-4 border-[#f94e3f] bg-[#ffe0cf] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
            Контакты и следующий шаг
          </h2>
          <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="space-y-4 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
              <p className="text-sm leading-relaxed text-neutral-900">
                Если вы ищете директора по маркетингу или лида digital-маркетинга для IT-продукта,
                напишите мне с кратким описанием задачи, стадии продукта и ключевых метрик.
              </p>
              <div className="space-y-1 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
                <div>Предпочтительный формат первого контакта — письмо или Telegram.</div>
                <div>Готов к встрече онлайн / офлайн после короткого интро.</div>
              </div>
            </div>

            <div className="space-y-3 border border-neutral-900/50 bg-[#141414] p-4 text-xs text-neutral-100 shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    Email
                  </div>
                  <a
                    href="mailto:al.vechersky@gmail.com"
                    className="mt-1 block text-sm font-semibold text-[#ffe7b8] hover:underline"
                  >
                    al.vechersky@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    Телефон
                  </div>
                  <a
                    href="tel:+79967781677"
                    className="mt-1 block text-sm font-semibold text-[#ffe7b8] hover:underline"
                  >
                    +7 (996) 778‑16‑77
                  </a>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    Telegram
                  </div>
                  <a
                    href="https://t.me/a_a_vc"
                    className="mt-1 inline-flex items-center text-sm font-semibold text-[#d5f3ff] hover:underline"
                  >
                    @a_a_vc
                  </a>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/in/alexandr-vechersky-ba423318"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center text-sm font-semibold text-[#d5f3ff] hover:underline"
                  >
                    Профиль LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-2 border-t border-neutral-700 pt-3 text-[11px] text-neutral-300">
                Резюме обновлено: 26 февраля 2026.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-dotted border-neutral-700/50 bg-[#fff7e5] py-3 text-center text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-600">
        © {new Date().getFullYear()} · Александр Вечерский · Marketing & Product Leadership
      </footer>
    </div>
  );
}
