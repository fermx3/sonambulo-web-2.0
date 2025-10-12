import Image from "next/image";

import { Section } from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import How2 from "./components/How2";
import Process from "./components/Process";
import Capabilities from "./components/Capabilities";

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
      <div className="relative -mt-24 lg:-mt-32 pointer-events-none z-50">
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
        <p>Clientes / Proyectos…</p>
      </Section>
      <Section id="contact">
        <p>Contacto…</p>
      </Section>
    </main>
  );
}
