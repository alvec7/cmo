import { CONTACTS } from "../data/resumeData";

export function Contacts() {
  return (
    <section id="contacts" className="space-y-5">
      <h2 className="border-l-4 border-[#f94e3f] bg-[#ffe0cf] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
        Контакты и следующий шаг
      </h2>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Intro text */}
        <div className="space-y-4 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
          <p className="text-sm leading-relaxed text-neutral-900">
            Если вы ищете директора по маркетингу или лида digital-маркетинга для
            IT-проекта, напишите мне с кратким описанием задачи, стадии продукта и
            ключевых метрик.
          </p>
          <div className="space-y-1 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
            <div>Предпочтительный формат первого контакта — письмо или Telegram.</div>
            <div>Готов к встрече онлайн / офлайн после короткого интро.</div>
          </div>
        </div>

        {/* Contact details */}
        <div className="space-y-3 border border-neutral-900/50 bg-[#141414] p-4 text-xs text-neutral-100 shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                Email
              </div>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="mt-1 block text-sm font-semibold text-[#ffe7b8] hover:underline"
              >
                {CONTACTS.email}
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                Телефон
              </div>
              <a
                href={`tel:${CONTACTS.phone}`}
                className="mt-1 block text-sm font-semibold text-[#ffe7b8] hover:underline"
              >
                {CONTACTS.phone}
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                Telegram
              </div>
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="touch-target mt-1 inline-flex items-center text-sm font-semibold text-[#d5f3ff] hover:underline"
              >
                {CONTACTS.telegram}
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                LinkedIn
              </div>
              <a
                href={CONTACTS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="touch-target mt-1 inline-flex items-center text-sm font-semibold text-[#d5f3ff] hover:underline"
              >
                Профиль LinkedIn
              </a>
            </div>
          </div>
          <div className="mt-2 border-t border-neutral-700 pt-3 text-[11px] text-neutral-300">
            Резюме обновлено: 06 апреля 2026.
          </div>
        </div>
      </div>
    </section>
  );
}