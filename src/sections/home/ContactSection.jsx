import Container from "@/components/ui/Container";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-surface p-10 shadow-glow md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Contacto
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Listo para construir algo solido y profesional?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Diseno y desarrollo sitios web modernos, tiendas online y
                sistemas a medida para que tu negocio gane presencia, velocidad
                y una base tecnica lista para crecer con resultados medibles.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:hola@gibaweb.com"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-semibold text-background transition hover:bg-accent-strong"
              >
                Enviar mensaje
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-base font-semibold text-foreground transition hover:border-accent/30 hover:text-accent"
              >
                Ver GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gonzalo-ibarrola/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#0A66C2] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#004182]"
              >
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
