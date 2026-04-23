import Head from "next/head";
import { getProjects, getTechnologies } from "@/services/api/portfolioApi";
import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import TechStackSection from "@/sections/home/TechStackSection";
import FeaturedProjectsSection from "@/sections/home/FeaturedProjectsSection";
import ContactSection from "@/sections/home/ContactSection";
import { siteMetadata } from "@/config/siteMetadata";

export default function HomePage({ projects, technologies }) {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta
          name="description"
          content={siteMetadata.description}
        />
        <meta name="keywords" content={siteMetadata.keywords.join(", ")} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteMetadata.url} />
        <meta property="og:locale" content={siteMetadata.locale} />
        <meta property="og:type" content={siteMetadata.type} />
        <meta property="og:site_name" content={siteMetadata.name} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
      </Head>

      <main className="bg-background text-foreground">
        <HeroSection />
        <AboutSection />
        <TechStackSection technologies={technologies} />
        <FeaturedProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const [projects, technologies] = await Promise.all([
    getProjects(),
    getTechnologies()
  ]);

  return {
    props: {
      projects,
      technologies
    },
    revalidate: 3600
  };
}
