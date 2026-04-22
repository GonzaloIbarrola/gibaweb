import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

function DetailBlock({ title, children }) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-surface p-8 shadow-glow">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-5 text-base leading-8 text-muted">{children}</div>
    </section>
  );
}

export default function ProjectDetail({ project }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Detalle"
          title="Contexto, decisiones y resultado"
          description="La idea es que esta vista reciba la informacion larga desde tu backend, ya procesada desde el README o desde la fuente que prefieras."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <DetailBlock title="Overview">
              <p>{project.description}</p>
            </DetailBlock>
          </div>

          <div className="space-y-8">
            <DetailBlock title="Tech Stack">
              <ul className="grid grid-cols-2 gap-3">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-2xl border border-white/10 bg-background-soft px-4 py-3 text-sm font-medium text-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </div>
        </div>
      </Container>
    </section>
  );
}
