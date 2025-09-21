import { AboutSection } from "./_components/about-section";
import { FaqSection } from "./_components/faq-section";
import FeatureSection from "./_components/feature-section";
import { IntroSection } from "./_components/intro-section";
import { ModeToggle } from './_components/mode-toggle'

export default function Home() {
  return (
    <main className="pt-20 md:pt-18 items-center flex flex-col">
      <ModeToggle/>
      <IntroSection/>
      <AboutSection/>
      <FeatureSection/>
      <FaqSection/>
    </main>
  );
}
