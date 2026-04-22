import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  "Arquitectura desacoplada",
  "SEO first",
  "Componentes por funcion",
  "Codigo facil de escalar"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Sobre mi"
            title="Trabajo con una base clara para que cada proyecto pueda crecer bien."
            description="Me gusta desglosar responsabilidades, separar la logica del render y construir interfaces minimalistas que comuniquen valor sin ruido visual."
          />

          <div className="rounded-[32px] border border-white/10 bg-surface p-8 shadow-glow">
            <p className="text-lg leading-8 text-muted">
              Mi enfoque combina desarrollo full stack, estructura escalable y
              experiencia orientada a resultados. Busco que cada proyecto sea facil
              de mantener, rapido de entender y solido para evolucionar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-2xl border border-white/10 bg-background-soft px-4 py-3 text-sm font-medium text-foreground"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
