import { AboutSection } from "./_components/about-section";
import { MeusGostosSection } from "./_components/meus-gostos-seqtion";
import StacksSection from "./_components/stacks-section";
import { IntroSection } from "./_components/intro-section";
import { ModeToggle } from './_components/mode-toggle'

export default function Home() {
  return (
    <main className="pt-20 md:pt-18 items-center flex flex-col">
      <ModeToggle/>
      <IntroSection/>
      <AboutSection/>
      <StacksSection/>
      <MeusGostosSection/>
    </main>
  );
}
