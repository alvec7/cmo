import { EXPERIENCE } from "../data/resumeData";

export function Experience() {
  return (
    <section id="experience" className="section page-pad">
      <div className="section-frame">
        <div className="section-head section-head-split">
          <div>
            <div className="kicker-row">
              <span className="label-bar">01 / WORK</span>
            </div>
            <h2 className="section-heading">
              <span>ОПЫТ, КОТОРЫЙ</span>
              <span>МОЖНО ИЗМЕРИТЬ</span>
            </h2>
          </div>
          <p className="section-intro">
            От запуска и масштабирования стартапов до построения маркетинговых систем
            в больших технологических компаниях.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((item) => (
            <article className="experience-card" key={item.company}>
              <div className="exp-aside">
                <span className="micro-label">{item.period}</span>
                <span className="exp-industry">{item.industry}</span>
                <a className="arrow-link" href={item.url} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">↳</span> {item.company}
                </a>
              </div>
              <div className="exp-main">
                <h3>{item.role}</h3>
                <p className="body-copy">{item.description}</p>
                <ul className="achievement-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
