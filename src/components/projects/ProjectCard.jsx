import Link from "next/link";
import TagBadge from "@/components/ui/TagBadge";

function ProjectPreview({ title, thumbnail }) {
  if (thumbnail) {
    return (
      <div
        className="h-52 rounded-2xl border border-white/5 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(8, 12, 24, 0.15), rgba(8, 12, 24, 0.6)), url(${thumbnail})` }}
      />
    );
  }

  return (
    <div className="relative flex h-52 items-end overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#0D1324] via-[#16223E] to-[#09101C] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(156,255,26,0.24),transparent_40%)]" />
      <div className="relative max-w-[16rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Proyecto destacado
        </p>
        <h3 className="mt-3 text-2xl font-bold text-foreground">{title}</h3>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-surface p-5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-accent/20">
      <ProjectPreview title={project.title} thumbnail={project.thumbnail} />

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <TagBadge key={tag}>{tag}</TagBadge>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>

        <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-xl bg-accent px-4 py-3 text-background transition hover:bg-accent-strong"
          >
            Ver detalle
          </Link>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground transition hover:text-accent"
          >
            GitHub
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground transition hover:text-accent"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
