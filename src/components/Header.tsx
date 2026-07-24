"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "../data/resumeData";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggle = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/20 bg-[#fffdf8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-neutral-900 bg-[#f94e3f] font-mono text-lg font-bold text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)]">
            AV
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">
              Маркетинг / Продукт / Продажи
            </div>
            <div className="text-sm font-semibold">Александр Вечерский</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-700 sm:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border-b-2 px-1 pb-1 transition hover:border-neutral-900 hover:text-neutral-900 ${
                activeSection === item.id
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#contacts"
            className="hidden rounded-none border border-neutral-900 bg-[#f94e3f] px-3 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)] sm:inline-flex"
          >
            Связаться
          </a>

          {/* Hamburger */}
          <button
            onClick={toggle}
            className="touch-target relative flex h-11 w-11 items-center justify-center sm:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute block h-0.5 w-6 rounded bg-neutral-900 transition-all duration-300 ${
                mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded bg-neutral-900 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded bg-neutral-900 transition-all duration-300 ${
                mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {mobileOpen && (
        <nav
          className="sm:hidden border-t border-neutral-200 bg-[#fff7e5] px-4 py-5 shadow-lg"
          role="navigation"
          aria-label="Мобильная навигация"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`touch-target flex items-center rounded border px-4 py-3 text-[13px] font-mono uppercase tracking-[0.14em] transition ${
                    activeSection === item.id
                      ? "border-neutral-900 bg-[#fff1c2] text-neutral-900 font-semibold"
                      : "border-transparent text-neutral-700 hover:bg-[#fffdf8] hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button inside dropdown */}
          <div className="mt-5 border-t border-dotted border-neutral-300 pt-4">
            <a
              href="#contacts"
              onClick={(e) => handleNavClick(e, "contacts")}
              className="touch-target flex w-full items-center justify-center border border-neutral-900 bg-[#f94e3f] px-4 py-3 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)]"
            >
              Связаться
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}