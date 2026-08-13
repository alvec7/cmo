import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/resumeData";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-20% 0px -70%" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const nav = (mobile = false) => (
    <>
      {NAV_ITEMS.map((item) => (
        <a
          className={active === item.id ? "active" : ""}
          onClick={() => setOpen(false)}
          href={`#${item.id}`}
          key={item.id}
        >
          {item.label}
        </a>
      ))}
      {mobile && (
        <a className="btn" href="#contacts" onClick={() => setOpen(false)}>
          Обсудить задачу <span className="arr">↗</span>
        </a>
      )}
    </>
  );

  return (
    <header className="site-header">
      <div className="pad header-inner">
        <a className="brand" href="#about" aria-label="Александр Вечерский, на главную">
          <span className="brand-text">
            Александр Вечерский
            <small>Marketing leadership</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">{nav()}</nav>
        <span className="nav-counter">
          <span className="brand-mark">AV</span>
          <span className="sep">·</span>
          <span>0 / 14</span>
        </span>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
          aria-expanded={open}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 0.5h20M0 7h20M0 13.5h20" />
          </svg>
        </button>
      </div>
      <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Мобильная навигация">
        {open && nav(true)}
      </nav>
    </header>
  );
}
