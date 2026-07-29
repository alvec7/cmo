import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/resumeData";

export function Header() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("about");
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin:"-20% 0px -70%" }); NAV_ITEMS.forEach(({id}) => document.getElementById(id) && observer.observe(document.getElementById(id)!)); return () => observer.disconnect(); }, []);
  const nav = (mobile=false) => <>{NAV_ITEMS.map(item => <a className={active === item.id ? "active" : ""} onClick={() => setOpen(false)} href={`#${item.id}`} key={item.id}>{item.label}</a>)}{mobile && <a className="button button-primary" href="#contacts" onClick={() => setOpen(false)}>Обсудить задачу</a>}</>;
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#about" aria-label="Александр Вечерский, на главную"><span className="brand-mark">AV</span><span className="brand-text">Александр Вечерский<small>Marketing leadership</small></span></a><nav className="main-nav" aria-label="Основная навигация">{nav()}</nav><a className="button button-primary header-cta" href="#contacts">Связаться</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}><svg width="23" height="18" viewBox="0 0 23 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 1h23M0 9h23M0 17h23" /></svg></button></div><nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Мобильная навигация">{open && nav(true)}</nav></header>;
}
