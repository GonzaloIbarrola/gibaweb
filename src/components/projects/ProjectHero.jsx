import TagBadge from "@/components/ui/TagBadge";

export default function ProjectHero({ project }) {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          Proyecto
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {project.seoDescription || project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <TagBadge key={tag}>{tag}</TagBadge>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-accent px-5 py-3 font-semibold text-background transition hover:bg-accent-strong"
            >
              Ver demo
            </a>
          ) : null}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-semibold text-foreground transition hover:border-accent/30 hover:text-accent"
          >
            Ver repositorio
          </a>
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-surface p-5 shadow-glow">
        {project.thumbnail ? (
          <div
            className="h-[360px] rounded-[24px] bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(8, 12, 24, 0.18), rgba(8, 12, 24, 0.5)), url(${project.thumbnail})` }}
          />
        ) : (
          <div className="relative flex h-[360px] items-end overflow-hidden rounded-[24px] bg-gradient-to-br from-[#11182F] via-[#1A2747] to-[#090F1B] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,255,26,0.28),transparent_45%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Full size preview
              </p>
              <h2 className="mt-4 max-w-sm text-3xl font-bold text-foreground">
                {project.title}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
