import {
  projectDetailsMock,
  projectsMock,
  technologiesMock
} from "@/mocks/projects.mock";
import {
  normalizeProjectDetail,
  normalizeProjectSummary
} from "@/utils/projects/normalizeProject";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = "gonzaloibarrola";
const FEATURED_TOPICS = ["featured", "portfolio", "portfolio-featured"];
const IS_DEVELOPMENT = process.env.NODE_ENV !== "production";

function sortProjects(items) {
  return [...items].sort((current, next) => {
    const currentPriority = current.priority || 999;
    const nextPriority = next.priority || 999;

    return currentPriority - nextPriority;
  });
}

function buildGithubHeaders() {
  const headers = {
    Accept: "application/vnd.github+json"
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function logGithubStatus(message, extra = {}) {
  if (!IS_DEVELOPMENT) {
    return;
  }

  console.log("[portfolioApi]", message, {
    hasGithubToken: Boolean(process.env.GITHUB_TOKEN),
    ...extra
  });
}

async function fetchFromGithub(path) {
  const response = await fetch(`${GITHUB_API_URL}${path}`, {
    headers: buildGithubHeaders(),
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    if (response.status !== 404) {
      logGithubStatus("GitHub request failed", {
        path,
        status: response.status
      });
    }
    throw new Error(`GitHub API error: ${response.status} for ${path}`);
  }

  return response.json();
}

function parsePortfolioMeta(readmeContent = "") {
  const normalizedReadme = readmeContent.replace(/\r\n/g, "\n");
  const lines = normalizedReadme.split("\n");
  const headingIndex = lines.findIndex((line) =>
    /^#{2,6}\s*portfolio-meta\s*$/i.test(line.trim())
  );

  if (headingIndex === -1) {
    return {};
  }

  const fenceStartIndex = lines.findIndex(
    (line, index) => index > headingIndex && /^```(?:json)?\s*$/i.test(line.trim())
  );

  if (fenceStartIndex === -1) {
    return {};
  }

  const fenceEndIndex = lines.findIndex(
    (line, index) => index > fenceStartIndex && /^```\s*$/i.test(line.trim())
  );

  if (fenceEndIndex === -1) {
    return {};
  }

  const rawJson = lines.slice(fenceStartIndex + 1, fenceEndIndex).join("\n").trim();

  if (!rawJson) {
    return {};
  }

  try {
    return JSON.parse(rawJson);
  } catch (error) {
    console.error("Invalid portfolio-meta JSON:", error);
    logGithubStatus("Portfolio meta JSON parse failed", {
      rawJson
    });
    return {};
  }
}

function hasPortfolioMeta(metadata = {}) {
  return Object.keys(metadata).length > 0;
}

function summarizeMetadata(metadata = {}) {
  if (!hasPortfolioMeta(metadata)) {
    return {
      hasMeta: false
    };
  }

  return {
    hasMeta: true,
    slug: metadata.slug || "",
    title: metadata.title || "",
    published: metadata.published,
    featured: metadata.featured
  };
}

function buildMetadataLog(repoName, metadata = {}) {
  return {
    repo: repoName,
    hasMeta: true,
    metadata
  };
}

function parsePortfolioContent(readmeContent = "") {
  const contentMatch = readmeContent.match(
    /<!--\s*portfolio:start\s*-->([\s\S]*?)<!--\s*portfolio:end\s*-->/i
  );

  if (contentMatch) {
    return contentMatch[1].trim();
  }

  return "";
}

function getReadmeSummary(readmeContent = "") {
  const withoutCode = readmeContent
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const firstParagraph = withoutCode.find(
    (line) => !line.startsWith("#") && !line.startsWith("-") && !line.startsWith("*")
  );

  return firstParagraph || "";
}

function extractFeatures(readmeContent = "") {
  const featuresMatch = readmeContent.match(
    /##\s*Features([\s\S]*?)(##\s|$)/i
  );

  if (!featuresMatch) {
    return [];
  }

  return featuresMatch[1]
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim());
}

function extractChallenges(readmeContent = "") {
  const challengesMatch = readmeContent.match(
    /##\s*Challenges([\s\S]*?)(##\s|$)/i
  );

  if (!challengesMatch) {
    return "";
  }

  return challengesMatch[1]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");
}

function isFeaturedRepo(repo, metadata = {}) {
  if (typeof metadata.featured === "boolean") {
    return metadata.featured;
  }

  return (repo.topics || []).some((topic) => FEATURED_TOPICS.includes(topic));
}

function shouldPublishRepo(repo, metadata = {}) {
  if (typeof metadata.published === "boolean") {
    return metadata.published;
  }

  return !repo.fork && !repo.private;
}

function buildSummaryFromGithub(repo, metadata = {}) {
  return normalizeProjectSummary({
    slug: metadata.slug || repo.name,
    title: metadata.title || repo.name.replace(/-/g, " "),
    summary: metadata.summary || repo.description || "",
    tags: metadata.tags || repo.topics || [],
    thumbnail: metadata.thumbnail || "",
    thumbnailAlt: metadata.thumbnailAlt || `Vista principal de ${repo.name}`,
    repoUrl: metadata.repoUrl || repo.html_url,
    demoUrl: metadata.demoUrl || repo.homepage || "",
    featured: isFeaturedRepo(repo, metadata),
    priority: metadata.priority || 999,
    published: shouldPublishRepo(repo, metadata)
  });
}

function buildDetailFromGithub(repo, readmeContent = "", metadata = {}, languages = {}) {
  const summary = buildSummaryFromGithub(repo, metadata);
  const portfolioContent = parsePortfolioContent(readmeContent);

  return normalizeProjectDetail({
    ...summary,
    seoTitle: metadata.seoTitle || `${summary.title} | Gonzalo`,
    seoDescription: metadata.seoDescription || summary.summary || repo.description || "",
    description:
      portfolioContent || metadata.description || getReadmeSummary(readmeContent) || repo.description || "",
    technologies: metadata.technologies || [
      ...(metadata.tags || []),
      ...Object.keys(languages || {})
    ],
    gallery: metadata.gallery || [],
    features: metadata.features || extractFeatures(readmeContent),
    challenges: metadata.challenges || extractChallenges(readmeContent),
    published: shouldPublishRepo(repo, metadata),
    updatedAt: repo.updated_at || ""
  });
}

async function getReadmeForRepo(repoName) {
  try {
    const readme = await fetchFromGithub(
      `/repos/${GITHUB_USERNAME}/${repoName}/readme`
    );

    if (!readme.content) {
      return "";
    }

    const decodedReadme = Buffer.from(readme.content, "base64").toString("utf-8");

    return decodedReadme;
  } catch (error) {
    return "";
  }
}

async function getLanguagesForRepo(repoName) {
  try {
    return await fetchFromGithub(`/repos/${GITHUB_USERNAME}/${repoName}/languages`);
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error);
    return {};
  }
}

async function getGithubRepos() {
  return fetchFromGithub(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );
}

async function resolveRepoBySlug(slug) {
  const repos = await getGithubRepos();

  for (const repo of repos) {
    const readmeContent = await getReadmeForRepo(repo.name);
    const metadata = parsePortfolioMeta(readmeContent);

    if (!hasPortfolioMeta(metadata)) {
      continue;
    }

    const candidateSlug = metadata.slug || repo.name;

    if (candidateSlug === slug) {
      logGithubStatus("Repo metadata detected for detail", {
        requestedSlug: slug,
        ...buildMetadataLog(repo.name, metadata)
      });
      return { repo, metadata, readmeContent };
    }
  }

  return null;
}

function fallbackProjects(featuredOnly) {
  const items = featuredOnly
    ? projectsMock.filter((project) => project.featured)
    : projectsMock;

  return sortProjects(items).map(normalizeProjectSummary);
}

export async function getProjects({ featuredOnly = false } = {}) {
  try {
    const repos = await getGithubRepos();

    const summaries = await Promise.all(
      repos.map(async (repo) => {
        const readmeContent = await getReadmeForRepo(repo.name);
        const metadata = parsePortfolioMeta(readmeContent);

        if (!hasPortfolioMeta(metadata)) {
          return null;
        }

        logGithubStatus("Repo metadata detected", buildMetadataLog(repo.name, metadata));
        return buildSummaryFromGithub(repo, metadata);
      })
    );

    const publishedProjects = summaries.filter(
      (project) => project && project.slug && project.published === true
    );
    const featuredProjects = publishedProjects.filter((project) => project.featured);

    if (featuredOnly) {
      if (featuredProjects.length > 0) {
        return sortProjects(featuredProjects);
      }

      return sortProjects(publishedProjects.slice(0, 6));
    }

    return sortProjects(publishedProjects);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    logGithubStatus("Using fallback projects", {
      featuredOnly
    });
    return fallbackProjects(featuredOnly);
  }
}

export async function getProjectBySlug(slug) {
  try {
    const resolvedRepo = await resolveRepoBySlug(slug);

    if (!resolvedRepo) {
      return null;
    }

    const { repo, metadata: initialMetadata, readmeContent: initialReadme } = resolvedRepo;
    const [readmeContent, languages] = await Promise.all([
      initialReadme ? Promise.resolve(initialReadme) : getReadmeForRepo(repo.name),
      getLanguagesForRepo(repo.name)
    ]);
    const metadata = Object.keys(initialMetadata || {}).length
      ? initialMetadata
      : parsePortfolioMeta(readmeContent);

    return buildDetailFromGithub(repo, readmeContent, metadata, languages);
  } catch (error) {
    console.error(`Error fetching GitHub project detail for ${slug}:`, error);
    return null;
  }
}

export async function getTechnologies() {
  try {
    const projects = await getProjects({ featuredOnly: false });
    const names = new Set(technologiesMock.map((technology) => technology.name));

    projects.forEach((project) => {
      project.tags.forEach((tag) => names.add(tag));
    });

    return Array.from(names).map((name) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-")
    }));
  } catch (error) {
    console.error("Error building technologies list:", error);
    return technologiesMock;
  }
}
