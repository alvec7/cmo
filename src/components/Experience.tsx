import { EXPERIENCE } from "../data/resumeData";

export function Experience() {
  return (
    <section id="experience" className="section void">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">01</span>
            <span className="sep">/</span>
            Практика
          </div>
          <h2 className="section-title">
            <span className="line">Опыт, который</span>
            <span className="line">можно измерить</span>
          </h2>
        </div>
        <p className="section-note">
          От запуска и масштабирования стартапов до построения маркетинговых систем
          в больших технологических компаниях.
        </p>
      </div>
      <div className="experience-list">
        {EXPERIENCE.map((x) => (
          <article className="pad experience-card" key={x.company}>
            <div className="exp-aside">
              <div className="exp-period">
                {x.period}
                <br />
              </div>
              <div className="exp-industry">{x.industry}</div>
              <a className="exp-company" href={x.url} target="_blank" rel="noreferrer">
                {x.company} ↗
              </a>
            </div>
            <div>
              <h3 className="exp-role">{x.role}</h3>
              <p className="exp-desc">{x.description}</p>
              <ul className="achievement-list">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
