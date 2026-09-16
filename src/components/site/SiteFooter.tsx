import { Facebook, Instagram, Youtube } from "lucide-react";

import logo from "@/assets/logo-bi.png.asset.json";

const COLUMNS = [
  {
    title: "Início",
    links: [
      { label: "Página inicial", href: "#portal" },
      { label: "Publicações", href: "#noticias" },
      { label: "Destaques", href: "#destaques" },
    ],
  },
  {
    title: "Sobre nós",
    links: [
      { label: "O Batalhão", href: "#portal" },
      { label: "Seções", href: "#destaques" },
      { label: "Documentos", href: "#documentos" },
    ],
  },
  {
    title: "Links úteis",
    links: [
      { label: "FAQ", href: "#acesso-rapido" },
      { label: "Telefones", href: "#acesso-rapido" },
      { label: "Chat de atendimento", href: "#acesso-rapido" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="documentos" className="border-t-2 border-gold/60 bg-footer">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 lg:grid-cols-[1.2fr_2fr_auto] lg:px-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
          <img
            src={logo.url}
            alt="Brasão do Batalhão"
            className="size-16 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <strong className="block text-sm leading-snug font-extrabold text-white/95">
              A Máquina de Guerra do Comando Militar do Leste: os Punhos de Aço da 9ª de Guerra!
            </strong>
            <small className="mt-2 block text-xs font-semibold tracking-[0.14em] text-gold-soft uppercase">
              Leões de guerra! Aço! Sampaio!
            </small>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.7rem] font-extrabold tracking-[0.16em] text-gold-soft uppercase">
                {column.title}
              </h3>
              <span className="mt-2 mb-3 block h-px w-10 bg-gold/50" />
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-gold-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-2 lg:flex-col">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#portal"
              aria-label="Rede social do Batalhão"
              className="grid size-10 place-items-center rounded-md border border-white/15 text-white/75 transition-colors hover:border-gold hover:text-gold-soft"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/25">
        <div className="mx-auto max-w-[1280px] px-4 py-4 text-center text-xs text-white/60 lg:px-8">
          ©2026 Todos os direitos reservados | Desenvolvido por: CB Fabio Martins
        </div>
      </div>
    </footer>
  );
}
