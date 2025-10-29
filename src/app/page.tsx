import { Section } from "./(marketing)/components/Section";
import Hero from "./(marketing)/components/Hero";
import About from "./(marketing)/components/About";
import How from "./(marketing)/components/How";
import How2 from "./(marketing)/components/How2";
import Process from "./(marketing)/components/Process";
import Capabilities from "./(marketing)/components/Capabilities";
import Clients from "./(marketing)/components/Clients";
import Contact from "./(marketing)/components/Contact";
import RibbonImage from "./(marketing)/components/RibbonImage";

export default function Page() {
  return (
    <main>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="how" scrollOffset>
        <How />
        <How2 />
      </Section>
      <Section id="process">
        <Process />
      </Section>
      <RibbonImage />
      <Section id="capabilities">
        <Capabilities />
      </Section>
      <Section id="clients">
        <Clients />
      </Section>
      <Section id="contact" scrollOffset>
        <Contact />
      </Section>
    </main>
  );
}
