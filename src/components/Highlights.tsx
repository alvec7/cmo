import { HIGHLIGHTS } from "../data/resumeData";

export function Highlights() {
  return (
    <section id="highlights" className="space-y-5">
      <h2 className="border-l-4 border-[#008aa8] bg-[#d5f3ff] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
        Достижения
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.company}
            className="flex flex-col gap-2 border border-neutral-900/50 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]"
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-700">
              {item.company}
            </div>
            <div className="text-sm font-semibold">{item.title}</div>
            <p className="leading-relaxed text-neutral-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}