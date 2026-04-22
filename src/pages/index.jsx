import Head from "next/head";
import { getProjects, getTechnologies } from "@/services/api/portfolioApi";
import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import TechStackSection from "@/sections/home/TechStackSection";
import FeaturedProjectsSection from "@/sections/home/FeaturedProjectsSection";
import ContactSection from "@/sections/home/ContactSection";

export default function HomePage({ projects, technologies }) {
  return (
    <>
      <Head>
        <title>Gonzalo | Desarrollador Web Full Stack</title>
        <meta
          name="description"
          content="Portfolio profesional de Gonzalo: desarrollo web full stack, tecnologias usadas, proyectos destacados y contacto."
        />
        <meta property="og:title" content="Gonzalo | Desarrollador Web Full Stack" />
        <meta
          property="og:description"
          content="Portfolio profesional con proyectos destacados, stack tecnologico y enfoque orientado a SEO y escalabilidad."
        />
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
