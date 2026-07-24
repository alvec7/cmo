import { EDUCATION } from "../data/resumeData";

export function Education() {
  return (
    <section id="education" className="space-y-5">
      <h2 className="border-l-4 border-[#b24c00] bg-[#ffe0cf] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
        Образование
      </h2>
      <div className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
          Специалитет, курсы, тренинги
        </div>
        <ul className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {EDUCATION.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}