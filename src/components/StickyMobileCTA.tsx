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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-ink bg-paper sm:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <div className="truncate max-w-[50%] text-[12px] uppercase text-ink">
          Александр Вечерский <span className="text-ink">· CMO</span>
        </div>
        <a
          href="#contacts"
          className="flex items-center gap-2 border border-carbon px-4 py-2.5 text-[12px] uppercase text-ink transition-colors active:bg-carbon active:text-paper"
        >
          Связаться
        </a>
      </div>
    </div>
  );
}