import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-900/10 bg-[#fffdf8]/95 backdrop-blur-xl sm:hidden pb-safe">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="text-xs text-neutral-800 truncate max-w-[50%]">
          <span className="font-semibold">Александр Вечерский</span>
          <span className="text-neutral-600"> · CMO</span>
        </div>
        <a
          href="#contacts"
          className="touch-target flex items-center gap-2 rounded-none border border-neutral-900 bg-[#f94e3f] px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white shadow-[2px_2px_0_rgba(0,0,0,0.75)] transition active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_rgba(0,0,0,0.75)]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Связаться
        </a>
      </div>
    </div>
  );
}