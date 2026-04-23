export const siteMetadata = {
  name: "GibaWeb",
  title: "GibaWeb | Portfolio de Gonzalo Ibarrola",
  description:
    "Portfolio profesional de Gonzalo Ibarrola, desarrollador web full stack enfocado en productos modernos, escalables y optimizados para SEO.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gibaweb.vercel.app",
  author: "Gonzalo Ibarrola",
  locale: "es_AR",
  type: "website",
  keywords: [
    "Gonzalo Ibarrola",
    "GibaWeb",
    "desarrollador web",
    "desarrollador full stack",
    "Next.js",
    "React",
    "Tailwind CSS",
    "portfolio web"
  ]
};

export function buildAbsoluteUrl(path = "/") {
  if (!path) {
    return siteMetadata.url;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${siteMetadata.url}${path.startsWith("/") ? path : `/${path}`}`;
}
