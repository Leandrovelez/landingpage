import { AboutSection } from "./_components/about-section";
import { FaqSection } from "./_components/faq-section";
import FeatureSection from "./_components/feature-section";
import { IntroSection } from "./_components/intro-section";


export default function Home() {
  return (
    <main className="">
      <IntroSection/>
      <AboutSection/>
      <FeatureSection/>
      <FaqSection/>
    </main>
  );
}
