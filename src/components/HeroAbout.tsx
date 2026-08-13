import { CONTACTS, STAT_CARDS } from "../data/resumeData";

export function HeroAbout() {
  return (
    <section id="about" className="hero page-pad">
      <div className="hero-frame">
        <div className="hero-content">
          <div className="kicker-row">
            <span className="label-bar">TRAFFIC</span>
            <span className="kicker-text">/ 00 · CMO · PRODUCT MARKETING · GROWTH</span>
          </div>

          <h1 className="display-heading">
            <span>MARKETING</span>
            <span>THAT MOVES</span>
          </h1>

          <div className="hero-bottom-copy">
            <p className="hero-lead">
              Собираю стратегию, продукт, продажи и команду в одну работающую систему
              роста — от первого сигнала до измеримого результата.
            </p>
            <div className="hero-actions">
              <a className="pill pill-filled" href="#contacts">
                Обсудить задачу <span aria-hidden="true">↗</span>
              </a>
              <a className="pill" href="#experience">
                Смотреть опыт <span aria-hidden="true">↳</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="micro-label">BASE</span>
              <span>Санкт-Петербург / remote</span>
            </div>
            <div className="hero-meta-item">
              <span className="micro-label">FOCUS</span>
              <span>IT · SaaS · cloud · travel-tech</span>
            </div>
            <div className="hero-meta-item">
              <span className="micro-label">FORMAT</span>
              <span>CMO / Product marketing lead</span>
            </div>
          </div>
          <div className="hero-chevron" aria-hidden="true">
            ⇊
          </div>
        </div>
      </div>

      <figure className="image-card">
        <figcaption className="image-caption">
          <span>
            <span className="caption-index">A)</span>{" "}
            <span className="caption-marked">PORTRAIT / WORKING MODE</span>
          </span>
          <span>SAINT PETERSBURG · 2026</span>
        </figcaption>
        <img
          className="portrait-image"
          src="https://2514247f-2831-4c5c-9ab6-3757161868db.selstorage.ru/Photo_me_HH.jpg"
          alt="Александр Вечерский"
        />
      </figure>

      <div className="stats-frame" aria-label="Ключевые факты">
        {STAT_CARDS.map((card) => (
          <div className="stat" key={card.label}>
            <span className="label-bar">{card.label}</span>
            <strong className="stat-value">{card.value}</strong>
            <span className="stat-sub">{card.sub}</span>
          </div>
        ))}
      </div>

      <a className="hero-email" href={`mailto:${CONTACTS.email}`}>
        {CONTACTS.email} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
