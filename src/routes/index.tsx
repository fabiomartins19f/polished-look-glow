import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteCarousel } from "@/components/site/SiteCarousel";
import { SiteQuickAccess } from "@/components/site/SiteQuickAccess";
import { SiteHighlights } from "@/components/site/SiteHighlights";
import { SiteLatestPosts } from "@/components/site/SiteLatestPosts";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteWidgets } from "@/components/site/SiteWidgets";

const TITLE = "Intranet 1º BI Mec (Es) — Portal Institucional";
const DESCRIPTION =
  "Portal institucional do 1º Batalhão de Infantaria Mecanizado (Escola): publicações, boletins, documentos, sistemas internos e seções.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <SiteCarousel />
        <SiteQuickAccess />
        <SiteHighlights />
        <SiteLatestPosts />
      </main>
      <SiteFooter />
      <SiteWidgets />
    </div>
  );
}
