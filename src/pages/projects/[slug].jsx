import Head from "next/head";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { getProjectBySlug, getProjects } from "@/services/api/portfolioApi";

export default function ProjectPage({ project }) {
  if (!project) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{project.seoTitle || `${project.title} | Gonzalo`}</title>
        <meta name="description" content={project.seoDescription || project.summary} />
        <meta property="og:title" content={project.seoTitle || project.title} />
        <meta property="og:description" content={project.seoDescription || project.summary} />
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
