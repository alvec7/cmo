import { EDUCATION } from "../data/resumeData";

export function Education() {
  return (
    <section id="education" className="section page-pad">
      <div className="section-frame">
        <div className="section-head section-head-split">
          <div>
            <div className="kicker-row">
              <span className="label-bar">04 / EDUCATION</span>
            </div>
            <h2 className="section-heading">
              <span>ИНСТРУМЕНТЫ</span>
              <span>И МЫШЛЕНИЕ</span>
            </h2>
          </div>
          <p className="section-intro">
            Учусь там, где меняются инструменты: от продуктовой аналитики и growth до
            генеративного AI.
          </p>
        </div>

        <div className="education-grid">
          {EDUCATION.map((item, index) => (
            <div className="education-item" key={item}>
              <span className="education-index">0{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
