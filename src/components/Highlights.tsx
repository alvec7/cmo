import { HIGHLIGHTS } from "../data/resumeData";

export function Highlights() {
  return (
    <section id="highlights" className="section void">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">02</span>
            <span className="sep">/</span>
            Результаты
          </div>
          <h2 className="section-title">
            <span className="line">Несколько точек</span>
            <span className="line">роста</span>
          </h2>
        </div>
      </div>
      <div className="highlight-grid">
        {HIGHLIGHTS.map((x) => (
          <article className="highlight" key={x.company}>
            <div className="highlight-company">{x.company}</div>
            <h3>{x.title}</h3>
            <p>{x.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
