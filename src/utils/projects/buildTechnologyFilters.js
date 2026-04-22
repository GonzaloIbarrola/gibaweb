export function buildTechnologyFilters(projects) {
  const names = new Set();

  projects.forEach((project) => {
    project.tags.forEach((tag) => names.add(tag));
  });

  return [
    { name: "Todos", slug: "all" },
    ...Array.from(names).map((name) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-")
    }))
  ];
}
