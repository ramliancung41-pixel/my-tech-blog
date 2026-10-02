import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CodeAndBuild is a programming and tech publication run by Ram Lian Cung. Read who writes the guides and how to get in touch.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-mono text-sm text-accent">~/about</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        About <span className="text-gradient">CodeAndBuild.</span>
      </h1>
      <p className="mt-6 text-base leading-7 text-prose">
        CodeAndBuild publishes practical guides on web development, Next.js, and the tools developers use to build software. Ram Lian Cung runs this site.
      </p>
      <p className="mt-4 text-base leading-7 text-prose">
        The guides are written for working developers. Some pages include example prompts and generated images. Those pictures are labeled as generated and are not photographs of real people.
      </p>
      <p className="mt-4 text-base leading-7 text-prose">
        Advertising on this site is served by Google AdSense. The{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          privacy policy
        </Link>{" "}
        explains the cookies ads use. Questions about a guide, a correction, or privacy go through the{" "}
        <Link
          href="/contact"
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          contact form
        </Link>{" "}
        or {site.contactEmail}.
      </p>
    </div>
  );
}
