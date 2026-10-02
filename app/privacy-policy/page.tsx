import type { Metadata } from "next";
import { ArticleBody } from "@/components/ArticleBody";
import { JsonLd } from "@/components/JsonLd";
import {
  MobileTableOfContents,
  TableOfContents,
} from "@/components/TableOfContents";
import { formatDate } from "@/lib/format";
import { getHeadings } from "@/lib/posts";
import { privacyBlocks, privacyUpdated } from "@/lib/privacy";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CodeAndBuild collects information, uses cookies, and works with Google AdSense, plus the choices you have.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "How CodeAndBuild collects information, uses cookies, and works with Google AdSense, plus the choices you have.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const toc = getHeadings(privacyBlocks);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: absoluteUrl("/privacy-policy"),
    dateModified: privacyUpdated,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <JsonLd data={jsonLd} />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,42rem)_16rem]">
        <article>
          <header>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">Legal</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              How {site.name} handles information, cookies, and Google AdSense.
            </p>
            <p className="mt-4 font-mono text-xs text-muted">
              Effective <time dateTime={privacyUpdated}>{formatDate(privacyUpdated)}</time>
            </p>
          </header>
          <MobileTableOfContents items={toc} />
          <ArticleBody blocks={privacyBlocks} />
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>
    </div>
  );
}
