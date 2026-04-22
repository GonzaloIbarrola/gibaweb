export const technologiesMock = [
  { name: "Next.js", slug: "nextjs" },
  { name: "React", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodejs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "SEO", slug: "seo" }
];

export const projectsMock = [
  {
    slug: "panel-administrativo",
    title: "Panel administrativo",
    summary:
      "Gestion de productos, usuarios y metricas con una UI modular y una base pensada para crecer sin friccion.",
    tags: ["Next.js", "Tailwind CSS", "Dashboard"],
    thumbnail: "",
    thumbnailAlt: "Vista principal del panel administrativo",
    repoUrl: "https://github.com/tu-user/panel-administrativo",
    demoUrl: "https://demo.com/panel-administrativo",
    featured: true,
    priority: 1
  },
  {
    slug: "tienda-online",
    title: "Tienda online",
    summary:
      "Catalogo, filtros, checkout y panel interno con foco en conversion, performance y experiencia de compra.",
    tags: ["Next.js", "Node.js", "E-commerce"],
    thumbnail: "",
    thumbnailAlt: "Vista principal de la tienda online",
    repoUrl: "https://github.com/tu-user/tienda-online",
    demoUrl: "https://demo.com/tienda-online",
    featured: true,
    priority: 2
  },
  {
    slug: "sistema-de-turnos",
    title: "Sistema de turnos",
    summary:
      "Reserva de servicios, panel administrativo y gestion de disponibilidad con una experiencia clara y profesional.",
    tags: ["PostgreSQL", "Node.js", "Booking"],
    thumbnail: "",
    thumbnailAlt: "Vista principal del sistema de turnos",
    repoUrl: "https://github.com/tu-user/sistema-de-turnos",
    demoUrl: "https://demo.com/sistema-de-turnos",
    featured: true,
    priority: 3
  }
];

export const projectDetailsMock = {
  "panel-administrativo": {
    slug: "panel-administrativo",
    title: "Panel administrativo",
    summary:
      "Gestion de productos, usuarios y metricas con una UI modular y una base pensada para crecer sin friccion.",
    seoTitle: "Panel administrativo | Portfolio de Gonzalo",
    seoDescription:
      "Panel administrativo con estructura modular, gestion interna y una interfaz disenada para escalar con claridad.",
    description:
      "Este proyecto fue pensado para resolver la gestion operativa diaria desde una interfaz clara, rapida y facil de mantener. La arquitectura se planteo separando responsabilidades para que cada modulo pudiera evolucionar sin afectar el resto del sistema.",
    tags: ["Next.js", "Tailwind CSS", "Dashboard"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    thumbnail: "",
    thumbnailAlt: "Vista principal del panel administrativo",
    gallery: ["", ""],
    features: [
      "Dashboard con metricas principales y accesos rapidos.",
      "Gestion de entidades con formularios desacoplados.",
      "Base visual coherente para crecer con nuevas secciones."
    ],
    challenges:
      "El desafio principal fue mantener una estructura escalable desde el inicio, evitando componentes demasiado grandes y separando la logica para que el sistema siguiera siendo facil de extender.",
    repoUrl: "https://github.com/tu-user/panel-administrativo",
    demoUrl: "https://demo.com/panel-administrativo",
    published: true,
    featured: true,
    priority: 1,
    updatedAt: "2026-04-15"
  },
  "tienda-online": {
    slug: "tienda-online",
    title: "Tienda online",
    summary:
      "Catalogo, filtros, checkout y panel interno con foco en conversion, performance y experiencia de compra.",
    seoTitle: "Tienda online | Portfolio de Gonzalo",
    seoDescription:
      "Proyecto e-commerce con catalogo, checkout y una arquitectura centrada en rendimiento, claridad y escalabilidad.",
    description:
      "La tienda se diseno priorizando una experiencia simple de navegacion y compra, cuidando la estructura de componentes para que catalogo, filtros y logica comercial pudieran mantenerse de forma independiente.",
    tags: ["Next.js", "Node.js", "E-commerce"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    thumbnail: "",
    thumbnailAlt: "Vista principal de la tienda online",
    gallery: ["", ""],
    features: [
      "Listado de productos con filtros y categorias.",
      "Checkout preparado para integraciones externas.",
      "Seccion administrativa para gestion de catalogo."
    ],
    challenges:
      "Uno de los focos fue sostener un frontend limpio mientras el flujo comercial crecia, manteniendo performance y orden en la estructura visual.",
    repoUrl: "https://github.com/tu-user/tienda-online",
    demoUrl: "https://demo.com/tienda-online",
    published: true,
    featured: true,
    priority: 2,
    updatedAt: "2026-04-15"
  },
  "sistema-de-turnos": {
    slug: "sistema-de-turnos",
    title: "Sistema de turnos",
    summary:
      "Reserva de servicios, panel administrativo y gestion de disponibilidad con una experiencia clara y profesional.",
    seoTitle: "Sistema de turnos | Portfolio de Gonzalo",
    seoDescription:
      "Sistema web para gestion de turnos y disponibilidad, con un flujo claro de reserva y administracion interna.",
    description:
      "Este sistema organiza reservas, disponibilidad y gestion interna desde una interfaz orientada a claridad. La idea fue construir un flujo simple para el usuario final sin perder orden tecnico ni capacidad de crecimiento.",
    tags: ["PostgreSQL", "Node.js", "Booking"],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    thumbnail: "",
    thumbnailAlt: "Vista principal del sistema de turnos",
    gallery: ["", ""],
    features: [
      "Reserva de turnos con validaciones claras.",
      "Panel para administrar disponibilidad y servicios.",
      "Base preparada para notificaciones y recordatorios."
    ],
    challenges:
      "La complejidad estuvo en organizar el flujo de reserva y el panel administrativo sin mezclar demasiadas responsabilidades en una sola capa.",
    repoUrl: "https://github.com/tu-user/sistema-de-turnos",
    demoUrl: "https://demo.com/sistema-de-turnos",
    published: true,
    featured: true,
    priority: 3,
    updatedAt: "2026-04-15"
  }
};
