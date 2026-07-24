"use client";

import { useState, useEffect, useCallback } from "react";
import { NAV_ITEMS } from "../data/resumeData";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggle = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  // Close mobile menu on link click
  const handleClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

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

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 sm:hidden"
          onClick={toggle}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] border-l border-neutral-900/10 bg-[#fffdf8] shadow-xl transition-transform duration-300 sm:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col pt-safe pb-safe">
          {/* Close button */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-neutral-900 bg-[#f94e3f] font-mono text-sm font-bold text-white">
                AV
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-600">
                  Маркетинг / Продукт / Продажи
                </div>
                <div className="text-sm font-semibold">Александр Вечерский</div>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleClick}
                    className={`touch-target flex items-center rounded border border-transparent px-3 py-3 text-[13px] font-mono uppercase tracking-[0.14em] transition ${
                      activeSection === item.id
                        ? "border-neutral-900 bg-[#fff1c2] text-neutral-900"
                        : "text-neutral-700 hover:bg-[#fff7e5] hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA at bottom */}
          <div className="border-t border-neutral-200 px-5 py-4">
            <a
              href="#contacts"
              onClick={handleClick}
              className="touch-target flex w-full items-center justify-center border border-neutral-900 bg-[#f94e3f] px-4 py-3 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)]"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}