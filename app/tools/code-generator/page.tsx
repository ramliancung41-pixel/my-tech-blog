import type { Metadata } from "next";
import { CodeGenerator } from "@/components/CodeGenerator";

export const metadata: Metadata = {
  title: "Code generator",
  description:
    "Draft a starter code snippet in TypeScript, JavaScript, Python, Go, or Rust from a short prompt.",
  alternates: {
    canonical: "/tools/code-generator",
  },
};

export default function CodeGeneratorPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-mono text-sm text-accent">~/tools</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Draft a snippet <span className="text-gradient">from a prompt.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        Pick a language and describe what the code should do. The starter is built in
        your browser, so the prompt stays on this page.
      </p>
      <div className="mt-10">
        <CodeGenerator />
      </div>
    </div>
  );
}
