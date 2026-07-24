import { EXPERIENCE } from "../data/resumeData";

function ExperienceCard({
  company,
  url,
  role,
  period,
  industry,
  description,
  bullets,
}: (typeof EXPERIENCE)[number]) {
  return (
    <article className="flex flex-col gap-3 border border-neutral-900/50 bg-[#fff7e5] p-4 text-sm shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-700">
            {role}
          </div>
          <div className="font-semibold">{company}</div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 mt-0.5 transition-colors"
        >
          {new URL(url).hostname}
        </a>
        <div className="text-[11px] font-mono text-neutral-700">
          {period} · {industry}
        </div>
      </header>
      <p className="text-xs leading-relaxed text-neutral-800">{description}</p>
      <ul className="space-y-1 text-xs leading-relaxed text-neutral-900">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
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
        {EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
}