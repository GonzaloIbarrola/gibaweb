import Head from "next/head";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProjectBySlug, getProjects } from "@/services/api/portfolioApi";
import { buildAbsoluteUrl, siteMetadata } from "@/config/siteMetadata";

export default function ProjectPage({ project }) {
  if (!project) {
    return null;
  }

  const title = project.seoTitle || `${project.title} | ${siteMetadata.name}`;
  const description = project.seoDescription || project.summary;
  const url = buildAbsoluteUrl(`/projects/${project.slug}`);
  const imageUrl = project.thumbnail ? buildAbsoluteUrl(project.thumbnail) : "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteMetadata.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
        <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      </Head>

      <main className="min-h-screen bg-background text-foreground">
        <section className="border-b border-white/5 bg-hero-radial pb-16 pt-8">
          <Container>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
            >
              <span aria-hidden="true">&larr;</span>
              Volver al portfolio
            </Link>
            <ProjectHero project={project} />
          </Container>
        </section>

        <ProjectDetail project={project} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const projects = await getProjects({ featuredOnly: false });

  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      project
    },
    revalidate: 3600
  };
}
