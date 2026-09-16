import { ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  {
    label: "Publicações",
    title: "Portarias e ordens de serviço",
    text: "Acesse as publicações oficiais do Batalhão.",
    href: "#noticias",
  },
  {
    label: "Documentos",
    title: "Modelos e formulários",
    text: "Padrões e arquivos úteis para o serviço diário.",
    href: "#documentos",
  },
  {
    label: "Sistemas",
    title: "Acesso aos sistemas",
    text: "Sistemas internos e externos em um só lugar.",
    href: "#sistemas-internos",
  },
  {
    label: "Seções",
    title: "Páginas das seções",
    text: "Informações, contatos e conteúdos por seção.",
    href: "#destaques",
  },
];

export function SiteHighlights() {
  return (
    <section id="destaques" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="section-label">Portal institucional</span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-[0.02em] text-foreground uppercase sm:text-3xl">
              Destaques
            </h2>
          </div>
          <span className="h-px min-w-24 flex-1 bg-linear-to-r from-gold/60 to-transparent" />
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="card-surface group relative flex flex-col gap-2 overflow-hidden p-5"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              />
              <small className="eyebrow">{item.label}</small>
              <strong className="text-base leading-snug font-extrabold text-foreground">
                {item.title}
              </strong>
              <em className="text-sm text-muted-foreground not-italic">{item.text}</em>
              <ArrowRight className="mt-2 size-4 text-gold transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
