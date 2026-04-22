import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="border-b border-white/5 bg-hero-radial pb-20 pt-8">
      <Container>
        <header className="flex items-center justify-between rounded-[28px] border border-white/10 bg-surface/70 px-6 py-5 backdrop-blur">
          <span className="text-xl font-bold text-foreground">GibaWeb</span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#about" className="transition hover:text-foreground">
              Sobre mi
            </a>
            <a href="#stack" className="transition hover:text-foreground">
              Stack
            </a>
            <a href="#projects" className="transition hover:text-foreground">
              Proyectos
            </a>
            <a href="#contact" className="transition hover:text-foreground">
              Contacto
            </a>
          </nav>
        </header>

        <div className="grid gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">
              Gonzalo Ibarrola
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
              Desarrollo web solido, moderno y escalable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Construyo productos digitales con foco en arquitectura clara, SEO y
              una experiencia de usuario simple, rapida y profesional.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl bg-accent px-6 py-3.5 font-semibold text-background transition hover:bg-accent-strong"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-foreground transition hover:border-accent/30 hover:text-accent"
              >
                Contactarme
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-surface p-5 shadow-glow">
            <div className="rounded-[24px] border border-white/5 bg-[#0B1020] p-6">
              <div className="mb-5 flex gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="grid gap-5 md:grid-cols-[0.36fr_0.64fr]">
                <div className="space-y-4 rounded-2xl bg-background-soft p-4">
                  <p className="font-mono text-sm text-cyan-300">const profile = {'{'}</p>
                  <p className="pl-4 font-mono text-sm text-amber-300">seo: true,</p>
                  <p className="pl-4 font-mono text-sm text-emerald-300">scalable: true,</p>
                  <p className="pl-4 font-mono text-sm text-rose-300">modular: true</p>
                  <p className="font-mono text-sm text-slate-400">{'}'}</p>
                </div>
                <div className="space-y-4 rounded-2xl bg-background-soft p-4">
                  <p className="font-mono text-sm text-slate-300">function FeaturedProject() {'{'}</p>
                  <p className="pl-4 font-mono text-sm text-pink-300">&lt;ProjectCard title=&quot;Dashboard Admin&quot; /&gt;</p>
                  <p className="pl-4 font-mono text-sm text-lime-300">&lt;TagBadge&gt;Next.js&lt;/TagBadge&gt;</p>
                  <p className="font-mono text-sm text-slate-300">{'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
