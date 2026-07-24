import { SKILLS } from "../data/resumeData";

export function Skills() {
  return (
    <section id="skills" className="space-y-5">
      <h2 className="border-l-4 border-[#2d7b46] bg-[#daf5dd] px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900">
        Навыки и экспертиза
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="space-y-2 border border-neutral-900/40 bg-[#fff7e5] p-4 text-xs shadow-[3px_3px_0_rgba(0,0,0,0.6)]"
          >
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-700">
              {group.category}
            </div>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}