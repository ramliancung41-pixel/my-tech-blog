import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { privacyUpdated } from "@/lib/privacy";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: posts[0]?.date ?? privacyUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: privacyUpdated,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: privacyUpdated,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified: privacyUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/tools/code-generator"),
      lastModified: privacyUpdated,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
