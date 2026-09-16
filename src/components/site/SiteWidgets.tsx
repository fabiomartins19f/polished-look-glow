import { useEffect, useState } from "react";
import { ArrowUp, Bot, Cake, Lock, Send, X } from "lucide-react";

type Panel = "chat" | "birthday" | null;

const BIRTHDAYS = [
  { name: "Cb Fabio Martins", day: "16/09" },
  { name: "Sgt Almeida", day: "18/09" },
  { name: "Ten Ribeiro", day: "24/09" },
];

const CHAT_OPTIONS = [
  "Suporte técnico",
  "Abrir chamado",
  "Publicações",
  "Documentos",
];

export function SiteWidgets() {
  const [panel, setPanel] = useState<Panel>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (next: Panel) => setPanel((p) => (p === next ? null : next));

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {panel === "chat" && (
        <section className="pointer-events-auto w-[19rem] overflow-hidden rounded-lg border border-border bg-surface-2 shadow-2xl">
          <header className="brand-band flex items-center justify-between gap-2 px-4 py-3">
            <div>
              <small className="block text-[0.62rem] font-bold tracking-[0.14em] text-gold-soft uppercase">
                Assistente virtual
              </small>
              <strong className="text-sm text-white">IA Regimento Sampaio</strong>
            </div>
            <button
              type="button"
              onClick={() => setPanel(null)}
              aria-label="Fechar chatbot"
              className="text-white/80 hover:text-gold-soft"
            >
              <X className="size-4" />
            </button>
          </header>
          <div className="space-y-3 p-4">
            <p className="rounded-md bg-white/5 p-3 text-sm text-foreground/85">
              Olá! Aqui é a Inteligência Artificial do Regimento Sampaio. O que deseja?
            </p>
            <div className="flex flex-wrap gap-2">
              {CHAT_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-gold-soft transition-colors hover:bg-gold/15"
                >
                  {option}
                </button>
              ))}
            </div>
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="Digite o que você deseja..."
                aria-label="Mensagem para o assistente"
                className="min-w-0 flex-1 rounded-md border border-border bg-white/4 px-3 py-2 text-sm text-foreground placeholder:text-foreground/45 focus:border-gold/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Enviar"
                className="grid size-9 shrink-0 place-items-center rounded-md bg-gold text-gold-foreground"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </section>
      )}

      {panel === "birthday" && (
        <section className="pointer-events-auto w-[17rem] overflow-hidden rounded-lg border border-border bg-surface-2 shadow-2xl">
          <header className="brand-band flex items-center justify-between px-4 py-3">
            <strong className="text-sm text-white">Aniversariantes</strong>
            <button
              type="button"
              onClick={() => setPanel(null)}
              aria-label="Fechar aniversariantes"
              className="text-white/80 hover:text-gold-soft"
            >
              <X className="size-4" />
            </button>
          </header>
          <ul className="divide-y divide-border">
            {BIRTHDAYS.map((person) => (
              <li
                key={person.name}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
              >
                <span className="min-w-0 truncate text-foreground/85">{person.name}</span>
                <span className="shrink-0 text-xs font-bold text-gold-soft">{person.day}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="pointer-events-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={() => toggle("birthday")}
          aria-label="Aniversariantes"
          title="Aniversariantes"
          className="grid size-11 place-items-center rounded-full border border-gold/40 bg-surface-2/95 text-gold-soft shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <Cake className="size-5" />
        </button>
        <a
          id="acesso-restrito"
          href="#acesso-restrito"
          aria-label="Acesso restrito"
          title="Acesso restrito"
          className="grid size-11 place-items-center rounded-full border border-gold/40 bg-surface-2/95 text-gold-soft shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <Lock className="size-5" />
        </a>
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao início"
            title="Voltar ao início"
            className="grid size-11 place-items-center rounded-full border border-gold/40 bg-surface-2/95 text-gold-soft shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            <ArrowUp className="size-5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => toggle("chat")}
          aria-label="Abrir chatbot"
          title="Assistente virtual"
          className="grid size-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-[0_16px_36px_-14px_rgba(0,0,0,.9)] transition-transform hover:scale-105"
        >
          <Bot className="size-6" />
        </button>
      </div>
    </div>
  );
}
