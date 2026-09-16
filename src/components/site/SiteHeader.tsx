import { useEffect, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import logo from "@/assets/logo-bi.png.asset.json";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "SISCAU", href: "#portal" },
  {
    label: "Sistemas Internos",
    href: "#sistemas-internos",
    children: [
      { label: "Painel administrativo", href: "#acesso-restrito" },
      { label: "Iframe institucional", href: "#portal" },
      { label: "Plugins internos", href: "#acesso-rapido" },
    ],
  },
  {
    label: "Sistemas Externos",
    href: "#sistemas-externos",
    children: [
      { label: "Links externos", href: "#acesso-rapido" },
      { label: "Sistemas externos", href: "#acesso-rapido" },
    ],
  },
  {
    label: "Publicações",
    href: "#noticias",
    children: [
      { label: "Notícias do Batalhão", href: "#noticias" },
      { label: "Boletim interno", href: "#noticias" },
      { label: "Boletim administrativo", href: "#noticias" },
    ],
  },
  {
    label: "Seções",
    href: "#destaques",
    children: [
      { label: "Portal institucional", href: "#portal" },
      { label: "Destaques", href: "#destaques" },
      { label: "Últimas Publicações", href: "#noticias" },
    ],
  },
  {
    label: "Documentos",
    href: "#documentos",
    children: [
      { label: "Biblioteca de documentos", href: "#documentos" },
      { label: "Modelos de documentos", href: "#documentos" },
      { label: "Arquivos úteis", href: "#documentos" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* Faixa institucional */}
      <div className="brand-band relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,.6) 14px 15px)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-4 lg:px-8 lg:py-5">
          <a
            href="#portal"
            className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:gap-4"
            aria-label="Página inicial"
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white/8 ring-1 ring-gold/40 sm:size-16">
              <img
                src={logo.url}
                alt="Brasão do 1º Batalhão de Infantaria Mecanizado (Escola)"
                className="size-11 object-contain sm:size-[3.25rem]"
              />
            </span>
            <span className="min-w-0">
              <span className="eyebrow block">Intranet Institucional</span>
              <strong className="mt-0.5 block truncate text-[0.95rem] leading-tight font-extrabold tracking-[0.02em] text-brand-foreground uppercase sm:text-lg lg:text-[1.35rem]">
                1º Batalhão de Infantaria Mecanizado (Escola)
              </strong>
              <small className="mt-1 block truncate text-[0.72rem] font-semibold tracking-[0.14em] text-gold-soft uppercase sm:text-xs">
                Leões de guerra! Aço! Sampaio!
              </small>
            </span>
          </a>

          <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
            <div className="h-11 w-px bg-white/15" />
            <div className="text-right">
              <span className="block text-[0.65rem] font-bold tracking-[0.18em] text-white/60 uppercase">
                Regimento
              </span>
              <span className="block text-sm font-extrabold tracking-[0.1em] text-gold-soft uppercase">
                Sampaio
              </span>
            </div>
          </div>
        </div>
        <div className="h-[3px] w-full bg-linear-to-r from-gold/0 via-gold to-gold/0" />
      </div>

      {/* Navegação */}
      <nav
        className={`sticky top-0 z-50 border-b border-white/8 bg-navbar/95 backdrop-blur transition-shadow ${
          stuck ? "shadow-[0_14px_30px_-18px_rgba(0,0,0,.9)]" : ""
        }`}
        aria-label="Navegação principal"
      >
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-2 lg:px-8">
          <ul className="hidden items-center lg:flex">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="nav-link flex items-center gap-1.5 px-3.5 py-3.5 xl:px-4"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                  )}
                </a>
                {item.children && (
                  <div className="invisible absolute top-full left-0 z-50 min-w-60 translate-y-1 rounded-md border border-border bg-surface-2 py-1.5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mx-3 mb-1 block border-b border-border pb-1.5 text-[0.62rem] font-bold tracking-[0.16em] text-gold-soft uppercase">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-white/5 hover:text-gold-soft"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="my-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold tracking-wider text-foreground/85 uppercase hover:bg-white/5 lg:hidden"
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            Menu
          </button>

          <form
            className="ml-auto flex w-full max-w-64 items-center gap-2 py-2 pr-1"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <label className="flex w-full items-center gap-2 rounded-md border border-border bg-white/4 px-3 py-2 transition-colors focus-within:border-gold/60">
              <Search className="size-4 shrink-0 text-foreground/50" />
              <input
                type="search"
                placeholder="Buscar no portal"
                aria-label="Buscar no portal"
                className="w-full min-w-0 bg-transparent text-sm text-foreground placeholder:text-foreground/45 focus:outline-none"
              />
            </label>
          </form>
        </div>

        {open && (
          <div className="border-t border-border bg-navbar lg:hidden">
            <ul className="mx-auto max-w-[1280px] px-2 py-2">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-border/60 last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-bold tracking-wider text-foreground/85 uppercase"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pb-2 pl-6">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-foreground/65"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
