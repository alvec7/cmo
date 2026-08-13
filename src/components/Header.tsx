import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/resumeData";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-18% 0px -72%" }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const renderNav = () =>
    NAV_ITEMS.map((item) => (
      <a
        className={active === item.id ? "active" : ""}
        href={`#${item.id}`}
        key={item.id}
        aria-current={active === item.id ? "page" : undefined}
        onClick={() => setOpen(false)}
      >
        <span className="arrow-glyph" aria-hidden="true">
          ↳
        </span>
        {item.label}
      </a>
    ));

  return (
    <header className="site-header">
      <div className="page-pad header-inner">
        <a className="brand" href="#about" aria-label="Александр Вечерский — в начало">
          <span className="brand-name">
            ALEXANDER VECHERSKY<sup>®</sup>
          </span>
          <span className="brand-role">CMO / GROWTH</span>
        </a>

        <nav className="main-nav" aria-label="Основная навигация">
          {renderNav()}
        </nav>

        <div className="header-index" aria-label="Номер страницы">
          <span>AV</span>
          <span className="header-slash">/</span>
          <span>00—06</span>
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          <span>{open ? "CLOSE" : "MENU"}</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Мобильная навигация">
        {open && renderNav()}
      </nav>
    </header>
  );
}
