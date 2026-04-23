# GibaWeb Portfolio

Portfolio profesional construido con Next.js, React y Tailwind CSS. El sitio muestra una presentacion personal, stack tecnico, proyectos destacados y una vista de detalle por proyecto, con contenido preparado para SEO y generacion estatica.

## Features

- Home responsive con hero, seccion "Sobre mi", stack tecnico, proyectos destacados y contacto.
- Paginas dinamicas para proyectos en `/projects/[slug]`.
- Generacion estatica con ISR para actualizar contenido sin reconstruir todo el sitio.
- Integracion con GitHub API para obtener repositorios, README, lenguajes y metadata de portfolio.
- Fallback local de proyectos y tecnologias si GitHub no responde o no hay metadata disponible.
- SEO por pagina con `next/head`, titulos y descripciones especificas.
- Estilos con Tailwind CSS y tokens visuales centralizados en `tailwind.config.js`.
- Configuracion de produccion con headers basicos de seguridad, compresion y formatos modernos de imagen.
- Linting con ESLint y reglas Core Web Vitals de Next.js.

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS 3
- JavaScript
- ESLint
- PostCSS
- Autoprefixer
- GitHub REST API

## Metadata de proyectos

El sitio puede leer metadata desde los README de repositorios de GitHub. Para que un repositorio aparezca en el portfolio, incluir una seccion `portfolio-meta` con JSON:

````md
## portfolio-meta

```json
{
  "slug": "nombre-del-proyecto",
  "title": "Nombre del proyecto",
  "summary": "Descripcion corta del proyecto.",
  "tags": ["Next.js", "React", "Tailwind CSS"],
  "thumbnail": "/images/projects/proyecto/cover.png",
  "thumbnailAlt": "Vista principal del proyecto",
  "demoUrl": "https://demo.com",
  "repoUrl": "https://github.com/usuario/repositorio",
  "published": true,
  "featured": false,
  "priority": 1
}
```
````

## Estructura principal

```text
src/
  components/     Componentes reutilizables
  mocks/          Datos fallback para proyectos y tecnologias
  pages/          Rutas Pages Router
  sections/       Secciones de la home
  services/       Integracion con GitHub y normalizacion de datos
  styles/         Estilos globales
  utils/          Helpers de proyectos
```
