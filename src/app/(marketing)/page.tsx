import { Section } from "./components/Section";
import Hero from "./components/Hero";
// FadeUp import removed (not used) to avoid unused variable lint error
import About from "./components/About";
import How from "./components/How";

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
      </Section>
      <Section id="process">
        <p>Proceso…</p>
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
