import { ArrowRight, CalendarDays } from "lucide-react";

import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";

const NEWS = [
  {
    image: news1,
    category: "Segurança",
    date: "12 set 2026",
    title: "Normas e orientações administrativas para consulta no portal",
  },
  {
    image: news2,
    category: "Instrução",
    date: "09 set 2026",
    title: "Adestramento da tropa mecanizada em campo de instrução",
  },
  {
    image: news3,
    category: "Cerimonial",
    date: "05 set 2026",
    title: "Formatura de entrega de boinas ao efetivo do Batalhão",
  },
  {
    image: news4,
    category: "Comunicação",
    date: "01 set 2026",
    title: "Boletim interno reúne publicações e comunicados da semana",
  },
];

export function SiteLatestPosts() {
  return (
    <section id="noticias" className="border-t border-border bg-surface/45 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <header className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <span className="section-label">Comunicação social</span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-[0.02em] text-foreground uppercase sm:text-3xl">
              Últimas Publicações
            </h2>
          </div>
          <a
            href="#noticias"
            className="inline-flex shrink-0 items-center gap-2 border-b border-gold/40 pb-1 text-xs font-extrabold tracking-[0.12em] text-gold-soft uppercase transition-colors hover:border-gold"
          >
            Ver todas
            <ArrowRight className="size-3.5" />
          </a>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((item) => (
            <a
              key={item.title}
              href="#noticias"
              className="group overflow-hidden rounded-lg border border-border bg-surface transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-deep/85 via-brand-deep/10 to-transparent" />
                <span className="absolute top-3 left-3 rounded-sm bg-gold px-2 py-1 text-[0.62rem] font-extrabold tracking-[0.14em] text-gold-foreground uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  <CalendarDays className="size-3.5" />
                  {item.date}
                </span>
                <h3 className="mt-2 text-[0.95rem] leading-snug font-bold text-foreground transition-colors group-hover:text-gold-soft">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
