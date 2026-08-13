import { CONTACTS, STAT_CARDS } from "../data/resumeData";

export function HeroAbout() {
  return (
    <>
      <section id="about" className="hero">
        <span className="arc" aria-hidden="true" />
        <span className="arc-inner" aria-hidden="true" />
        <div className="pad hero-body">
          <div className="eyebrow">
            <span className="num">00</span>
            <span className="sep">/</span>
            CMO · Product marketing · Growth
          </div>
          <h1 className="display">
            <span className="line"><span className="dash">—</span>Александр</span>
            <span className="line">Вечерский</span>
          </h1>
          <p className="hero-lead">
            Маркетинг, который становится частью бизнеса. Собираю стратегию, продукт,
            продажи и команду в одну работающую систему роста.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contacts">
              Обсудить задачу <span className="arr">↗</span>
            </a>
            <a className="btn" href={CONTACTS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span className="arr">↗</span>
            </a>
          </div>
          <div className="meta">
            <div className="meta-col">
              <strong>Локация</strong>
              Санкт-Петербург
              <br />
              гибрид / удалённо / командировки
            </div>
            <div className="meta-col">
              <strong>Фокус</strong>
              IT, SaaS, cloud, travel-tech
            </div>
            <div className="meta-col">
              <strong>Языки</strong>
              Русский · English B2 · Deutsch A2
            </div>
          </div>
        </div>
        <div className="portrait-strip">
          <img
            className="portrait-image"
            src="https://2514247f-2831-4c5c-9ab6-3757161868db.selstorage.ru/Photo_me_HH.jpg"
            alt="Александр Вечерский"
          />
          <div className="pad portrait-cap">
            <span>Александр Вечерский — Marketing &amp; product leader</span>
            <span>Открыт к ролям CMO / Head of Marketing</span>
          </div>
        </div>
      </section>

      <div className="pad stats">
        {STAT_CARDS.map((card) => (
          <div className="stat" key={card.label}>
            <div className="stat-label">{card.label}</div>
            <div className="stat-value">{card.value}</div>
            <div className="stat-sub">{card.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}
