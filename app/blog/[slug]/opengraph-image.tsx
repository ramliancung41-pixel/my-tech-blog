import { getPost } from "@/lib/posts";
import { createOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "CodeAndBuild guide";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return createOgImage({
    kicker: post?.category ?? "CodeAndBuild",
    title: post?.title ?? "Guide",
    footer: "CodeAndBuild",
  });
}
