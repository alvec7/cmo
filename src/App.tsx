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
import { StickyMobileCTA } from "./components/StickyMobileCTA";

export function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] font-sans text-neutral-900">
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
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
      <StickyMobileCTA />
    </div>
  );
}