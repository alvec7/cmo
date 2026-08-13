import { SKILLS } from "../data/resumeData";

export function Skills() {
  return (
    <section id="skills" className="section page-pad">
      <div className="section-frame">
        <div className="section-head section-head-split">
          <div>
            <div className="kicker-row">
              <span className="label-bar">03 / SYSTEM</span>
            </div>
            <h2 className="section-heading">
              <span>ОТ СТРАТЕГИИ</span>
              <span>ДО РЕЗУЛЬТАТА</span>
            </h2>
          </div>
          <p className="section-intro">
            Работаю на стыке маркетинга, продукта и коммерции — там, где решения
            превращаются в рост.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
