import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import FilterPills from "@/components/projects/FilterPills";
import { buildTechnologyFilters } from "@/utils/projects/buildTechnologyFilters";

export default function FeaturedProjectsSection({ projects }) {
  const filters = buildTechnologyFilters(projects);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Proyectos destacados conectados a una fuente de datos real"
          description="La UI queda preparada para que consumas tu backend, filtres por tecnologias y muestres una vista de detalle con contenido mas completo por proyecto."
          align="center"
        />

        <FilterPills items={filters} />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
