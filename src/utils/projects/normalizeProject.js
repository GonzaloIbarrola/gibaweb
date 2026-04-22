function ensureArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function buildSlug(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

export function normalizeProjectSummary(project = {}) {
  return {
    slug: project.slug || buildSlug(project.title || project.name || ""),
    title: project.title || project.name || "",
    summary: project.summary || project.description || "",
    tags: ensureArray(project.tags),
    thumbnail: project.thumbnail || "",
    thumbnailAlt:
      project.thumbnailAlt || project.title || project.name || "Project image",
    repoUrl: project.repoUrl || project.html_url || "#",
    demoUrl: project.demoUrl || project.homepage || "",
    featured: Boolean(project.featured),
    priority: project.priority || 999,
    published: typeof project.published === "boolean" ? project.published : true
  };
}

export function normalizeProjectDetail(project = {}) {
  const base = normalizeProjectSummary(project);

  return {
    ...base,
    seoTitle: project.seoTitle || `${base.title} | Gonzalo`,
    seoDescription: project.seoDescription || base.summary,
    description: project.description || "",
    technologies: ensureArray(project.technologies),
    gallery: ensureArray(project.gallery),
    features: ensureArray(project.features),
    challenges: project.challenges || "",
    published: Boolean(project.published),
    updatedAt: project.updatedAt || ""
  };
}
