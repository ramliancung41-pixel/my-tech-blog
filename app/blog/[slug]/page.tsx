import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { ArticleCard } from "@/components/ArticleCard";
import { CoverImage } from "@/components/CoverImage";
import { JsonLd } from "@/components/JsonLd";
import {
  MobileTableOfContents,
  TableOfContents,
} from "@/components/TableOfContents";
import { formatDate } from "@/lib/format";
import {
  getAllPosts,
  getHeadings,
  getPost,
  getRelatedPosts,
} from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Guide not found" };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author ?? site.name, url: site.url }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags,
      ...(post.coverImage
        ? {
            images: [
              {
                url: post.coverImage,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const toc = getHeadings(post.content);
  const related = getRelatedPosts(post.slug);
  const url = absoluteUrl(`/blog/${post.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en",
        mainEntityOfPage: url,
        url,
        keywords: post.tags.join(", "),
        articleSection: post.category,
        ...(post.coverImage ? { image: absoluteUrl(post.coverImage) } : {}),
        author: {
          "@type": "Organization",
          name: post.author ?? site.name,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: absoluteUrl("/#guides"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <JsonLd data={jsonLd} />
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,42rem)_16rem]">
        <article>
          <header>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#guides" className="hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{post.category}</li>
              </ol>
            </nav>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-accent">
              {post.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{post.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
              {post.author ? <span>{post.author}</span> : null}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readingMinutes} min read</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {post.coverImage ? (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
                <CoverImage
                  src={post.coverImage}
                  alt={post.title}
                  priority
                  sizes="(min-width: 1024px) 42rem, 100vw"
                />
              </div>
            ) : null}
          </header>
          <MobileTableOfContents items={toc} />
          <ArticleBody blocks={post.content} />
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>
      {related.length > 0 ? (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">More guides</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((item) => (
              <ArticleCard key={item.slug} post={item} headingLevel={3} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
