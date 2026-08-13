export function Recommendations() {
  return (
    <section id="recommendations" className="section grad-crimson">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">05</span>
            <span className="sep">/</span>
            Отзывы
          </div>
        </div>
      </div>
      <div className="pad recommendation">
        <p>
          Отзывы CMO, CPO и руководителей компаний, с которыми я работал, — в моём
          профиле LinkedIn.
        </p>
        <a
          className="btn"
          href="https://www.linkedin.com/in/alexandr-vechersky-ba423318"
          target="_blank"
          rel="noreferrer"
        >
          Смотреть рекомендации <span className="arr">↗</span>
        </a>
      </div>
    </section>
  );
}
