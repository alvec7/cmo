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
    <div className="sticky-cta sm:hidden">
      <div className="sticky-inner">
        <div className="truncate max-w-[50%] text-[11px] uppercase text-bone">
          Александр Вечерский <span className="text-bone">· CMO</span>
        </div>
        <a href="#contacts" className="btn">
          Связаться
        </a>
      </div>
    </div>
  );
}
