import { useState } from "react";
import { Header } from "./components/Header";
import { HeroAbout } from "./components/HeroAbout";
import { Experience } from "./components/Experience";
import { Highlights } from "./components/Highlights";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Recommendations } from "./components/Recommendations";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function CookieBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="cookie-bar" aria-label="Уведомление о cookies">
      <div className="page-pad cookie-inner">
        <div className="cookie-message">
          <span className="label-bar">COOKIES</span>
          <span className="cookie-copy">
            Этот сайт использует cookies, чтобы помнить настройки и измерять посещаемость.
          </span>
        </div>
        <button
          className="cookie-close"
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Закрыть уведомление о cookies"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}

export function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroAbout />
        <Experience />
        <Highlights />
        <Skills />
        <Education />
        <Recommendations />
        <Contacts />
      </main>
      <Footer />
      <BackToTop />
      <CookieBar />
    </div>
  );
}
