export function Recommendations() {
  return (
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
          className="touch-target mt-3 inline-flex items-center border border-neutral-900 bg-[#d5f3ff] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-900 shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)]"
        >
          Открыть профиль в LinkedIn
        </a>
      </div>
    </section>
  );
}