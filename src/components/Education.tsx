import { EDUCATION } from "../data/resumeData";

export function Education() {
  return (
    <section id="education" className="section void">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">04</span>
            <span className="sep">/</span>
            Обучение
          </div>
          <h2 className="section-title">
            <span className="line">Инструменты</span>
            <span className="line">и мышление</span>
          </h2>
        </div>
      </div>
      <div className="pad education">
        {EDUCATION.map((x) => (
          <div className="education-item" key={x}>
            {x}
          </div>
        ))}
      </div>
    </section>
  );
}
