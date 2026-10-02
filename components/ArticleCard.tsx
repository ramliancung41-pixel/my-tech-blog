import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";

export function ArticleCard({
  post,
  headingLevel = 2,
}: {
  post: Post;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const tags = [post.category, ...post.tags.filter((tag) => tag !== post.category)].slice(0, 3);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/80 transition duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-16px_rgba(125,211,252,0.55)] motion-safe:hover:-translate-y-0.5 has-[:focus-visible]:border-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent">
      {post.coverImage ? (
        <div className="relative aspect-[16/9] border-b border-border">
          <CoverImage
            src={post.coverImage}
            alt={post.title}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-foreground/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <Heading className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          <Link
            href={`/blog/${post.slug}`}
            className="outline-none after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between gap-3 font-mono text-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </article>
  );
}
