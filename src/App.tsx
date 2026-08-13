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
    </div>
  );
}
