import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "Frontend",
    description: "Interfaces limpias, rapidas y pensadas para comunicar valor.",
    items: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    title: "Backend",
    description: "Servicios claros, codigo modular y logica facil de mantener.",
    items: ["Node.js", "APIs REST", "Autenticacion"]
  },
  {
    title: "Producto y SEO",
    description: "Semantica, performance y jerarquia de contenido desde el inicio.",
    items: ["SEO tecnico", "Core Web Vitals", "Arquitectura semantica"]
  }
];

export default function TechStackSection({ technologies }) {
  return (
    <section id="stack" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack actual y enfoque de implementacion"
          description="Una base tecnica orientada a productos web escalables, con una estructura que te deja crecer sin rehacer todo a mitad de camino."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-white/10 bg-surface p-8 shadow-glow"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                {group.title}
              </p>
              <h3 className="mt-5 text-2xl font-bold text-foreground">
                {group.items.join(" - ")}
              </h3>
              <p className="mt-5 text-base leading-7 text-muted">{group.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {technologies.map((technology) => (
            <span
              key={technology.slug}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground"
            >
              {technology.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
