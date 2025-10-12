import { Section } from "./components/Section";
import Hero from "./components/Hero";
// FadeUp import removed (not used) to avoid unused variable lint error
import About from "./components/About";
import How from "./components/How";
import How2 from "./components/How2";
import Process from "./components/Process";

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
      <Section id="capabilities">
        <p>Servicios…</p>
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
