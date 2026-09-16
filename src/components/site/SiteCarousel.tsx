import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slideFormatura from "@/assets/slide-formatura.jpg";
import slideManobra from "@/assets/slide-manobra.jpg";
import slideCerimonia from "@/assets/slide-cerimonia.jpg";

const SLIDES = [
  {
    image: slideFormatura,
    label: "Portal Institucional",
    title: "Informação, integração e excelência",
    text: "Notícias, boletins e sistemas do Batalhão reunidos em um único ambiente.",
    cta: { label: "Ver publicações", href: "#noticias" },
  },
  {
    image: slideManobra,
    label: "Publicações e Comunicados",
    title: "Boletins, documentos e notícias",
    text: "Acompanhe as ordens de serviço, portarias e comunicados oficiais.",
    cta: { label: "Ver destaques", href: "#destaques" },
  },
  {
    image: slideCerimonia,
    label: "Painel Administrativo",
    title: "Controle e gestão do portal",
    text: "Usuários, auditoria, menus, carrossel e plugins sob gestão da seção de informática.",
    cta: { label: "Área restrita", href: "#acesso-restrito" },
  },
];

const INTERVAL = 5000;

export function SiteCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="portal" className="bg-background py-6 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div
          className="group relative overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_70px_-40px_rgba(0,0,0,.95)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carrossel"
        >
          <div className="relative aspect-[16/9] max-h-[560px] w-full sm:aspect-[21/9]">
            {SLIDES.map((slide, i) => (
              <article
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === index ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`size-full object-cover transition-transform duration-[6000ms] ease-out ${
                    i === index ? "scale-105" : "scale-100"
                  }`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-linear-to-r from-brand-deep/95 via-brand-deep/70 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-background/85 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-5 sm:p-8 lg:max-w-3xl lg:p-12">
                    <span className="eyebrow inline-flex items-center gap-2">
                      <span className="h-px w-8 bg-gold" />
                      {slide.label}
                    </span>
                    <h1 className="mt-3 text-2xl leading-[1.1] font-extrabold text-white sm:text-4xl lg:text-[2.9rem]">
                      {slide.title}
                    </h1>
                    <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                      {slide.text}
                    </p>
                    <a
                      href={slide.cta.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-xs font-extrabold tracking-[0.12em] text-gold-foreground uppercase transition-colors hover:bg-gold-soft"
                    >
                      {slide.cta.label}
                      <ChevronRight className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Slide anterior"
            className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/35 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:border-gold hover:text-gold-soft focus-visible:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próximo slide"
            className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/35 text-white opacity-0 backdrop-blur transition group-hover:opacity-100 hover:border-gold hover:text-gold-soft focus-visible:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute right-5 bottom-4 flex items-center gap-2 sm:right-8">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-9 bg-gold" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
