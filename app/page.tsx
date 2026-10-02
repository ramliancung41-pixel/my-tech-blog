import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { getFeaturedPosts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export default function Home() {
  const posts = getFeaturedPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: site.name,
    description: site.description,
    url: site.url,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: absoluteUrl(`/blog/${post.slug}`),
      ...(post.coverImage ? { image: absoluteUrl(post.coverImage) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-mono text-sm text-accent">~/guides</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.05]">
            Field notes on{" "}
            <span className="text-gradient">building for the web.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {site.name} publishes guides on Next.js, TypeScript, and the habits that
            keep a codebase understandable six months later.
          </p>
        </div>
      </section>
      <section id="guides" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Featured guides
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Recent essays on shipping software with fewer surprises.
            </p>
          </div>
          <p className="hidden font-mono text-xs text-muted sm:block">{posts.length} guides</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
