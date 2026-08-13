import { HIGHLIGHTS } from "../data/resumeData";

export function Highlights() {
  return (
    <section id="highlights" className="section page-pad">
      <div className="section-frame">
        <div className="section-head">
          <div className="kicker-row">
            <span className="label-bar">02 / RESULTS</span>
          </div>
          <h2 className="section-heading">
            <span>НЕСКОЛЬКО</span>
            <span>ТОЧЕК РОСТА</span>
          </h2>
        </div>

        <div className="result-grid">
          {HIGHLIGHTS.map((item, index) => (
            <article className="result-card" key={item.company}>
              <span className="result-index">0{index + 1}</span>
              <span className="label-bar">{item.company}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
