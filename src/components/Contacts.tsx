import { CONTACTS } from "../data/resumeData";

export function Contacts() {
  const rows: [string, string, string, boolean][] = [
    ["Email", CONTACTS.email, `mailto:${CONTACTS.email}`, false],
    ["Telegram", CONTACTS.telegram, CONTACTS.telegramUrl, true],
    ["Телефон", CONTACTS.phone, `tel:${CONTACTS.phone}`, false],
    ["LinkedIn", "Профиль LinkedIn", CONTACTS.linkedin, true],
  ];

  return (
    <section id="contacts" className="section grad-violet">
      <div className="pad section-head">
        <div>
          <div className="eyebrow">
            <span className="num">06</span>
            <span className="sep">/</span>
            Контакты
          </div>
          <h2 className="section-title">
            <span className="line">Есть задача</span>
            <span className="line">для роста?</span>
          </h2>
        </div>
      </div>
      <div className="pad contact-grid">
        <div className="contact-copy">
          <p>
            Напишите пару строк о продукте, стадии и ключевой метрике. Вернусь с
            ответом и предложу следующий шаг.
          </p>
        </div>
        <div className="contact-links">
          {rows.map(([label, value, href, external]) => (
            <a
              className="contact-link"
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span>{label}</span>
              <b>{value}</b>
              <i>↗</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
