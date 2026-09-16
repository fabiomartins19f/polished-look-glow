import { ArrowUpRight, FileText, FolderOpen, Newspaper, ServerCog } from "lucide-react";

const ITEMS = [
  {
    icon: Newspaper,
    title: "Publicações",
    text: "Portarias, boletins e ordens de serviço.",
    href: "#noticias",
  },
  {
    icon: FileText,
    title: "Documentos",
    text: "Modelos, formulários e arquivos úteis.",
    href: "#documentos",
  },
  {
    icon: ServerCog,
    title: "Sistemas Internos",
    text: "SISCAU, painel e integrações do Batalhão.",
    href: "#sistemas-internos",
  },
  {
    icon: FolderOpen,
    title: "Seções",
    text: "Páginas e conteúdos de cada seção.",
    href: "#destaques",
  },
];

export function SiteQuickAccess() {
  return (
    <section id="acesso-rapido" className="border-y border-border bg-surface/60 py-8 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="card-surface group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-brand/25 text-gold-soft ring-1 ring-gold/25">
                <item.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-sm font-extrabold tracking-[0.06em] text-foreground uppercase">
                  {item.title}
                </strong>
                <small className="mt-0.5 block text-[0.78rem] text-muted-foreground">
                  {item.text}
                </small>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
