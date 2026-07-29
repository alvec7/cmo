import { EDUCATION } from "../data/resumeData";
export function Education() { return <section id="education" className="section"><div className="section-head"><div><div className="eyebrow">04 / Обучение</div><h2 className="section-title">Инструменты<br/>и мышление</h2></div></div><div className="education">{EDUCATION.map(x=><div className="education-item" key={x}>{x}</div>)}</div></section>; }
