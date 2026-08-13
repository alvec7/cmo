import { SKILLS } from "../data/resumeData";

export function Skills() {
  return (
    <section id="skills" className="section grad-maroon">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">03</span>
            <span className="sep">/</span>
            Компетенции
          </div>
          <h2 className="section-title">
            <span className="line">От стратегии</span>
            <span className="line">до результата</span>
          </h2>
        </div>
        <p className="section-note">
          Работаю на стыке маркетинга, продукта и коммерции — там, где решения
          превращаются в рост.
        </p>
      </div>
      <div className="pad skills-grid">
        {SKILLS.map((x) => (
          <div className="skill-group" key={x.category}>
            <h3>{x.category}</h3>
            <ul>
              {x.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
