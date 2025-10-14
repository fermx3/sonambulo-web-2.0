import Image from "next/image";

import { Section } from "./(marketing)/components/Section";
import Hero from "./(marketing)/components/Hero";
import About from "./(marketing)/components/About";
import How from "./(marketing)/components/How";
import How2 from "./(marketing)/components/How2";
import Process from "./(marketing)/components/Process";
import Capabilities from "./(marketing)/components/Capabilities";
import Clients from "./(marketing)/components/Clients";
import Contact from "./(marketing)/components/Contact";

export default function Page() {
  return (
    <main>
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="how">
        <How />
        <How2 />
      </Section>
      <Section id="process">
        <Process />
      </Section>
      <div className="relative -mt-24 lg:-mt-24 pointer-events-none z-50">
        <Image
          src="/sections/process/capabilities-ribbon.png"
          alt="Capabilities"
          width={1920}
          height={200}
          className="mx-auto"
          priority={false}
        />
      </div>
      <Section id="capabilities">
        <Capabilities />
      </Section>
      <Section id="clients">
        <Clients />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
