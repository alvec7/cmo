import { CONTACTS } from "../data/resumeData";

export function Contacts() {
  const rows = [
    ["Email", CONTACTS.email, `mailto:${CONTACTS.email}`, false],
    ["Telegram", CONTACTS.telegram, CONTACTS.telegramUrl, true],
    ["Телефон", CONTACTS.phone, `tel:${CONTACTS.phone}`, false],
    ["LinkedIn", "Профиль LinkedIn", CONTACTS.linkedin, true],
  ] as const;

  return (
    <section id="contacts" className="section page-pad contact-section">
      <div className="section-frame contact-frame">
        <div className="kicker-row">
          <span className="label-bar">06 / CONTACT</span>
        </div>
        <h2 className="contact-heading">
          <span>GET</span>
          <span>IN TOUCH</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-copy">
            <p className="body-copy">
              Напишите пару строк о продукте, стадии и ключевой метрике. Вернусь с
              ответом и предложу следующий шаг.
            </p>
            <div className="contact-status">
              <span className="micro-label">CURRENT STATUS</span>
              <span className="label-bar">OPEN TO CMO / HEAD OF MARKETING</span>
            </div>
          </div>

          <div className="contact-links">
            {rows.map(([label, value, href, external]) => (
              <a
                className="contact-link"
                href={href}
                key={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span className="contact-type">{label}</span>
                <strong>{value}</strong>
                <span className="contact-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
