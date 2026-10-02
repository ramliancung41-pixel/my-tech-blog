"use client";

import { useMemo, useState, type FormEvent } from "react";

const languages = [
  { id: "typescript", label: "TypeScript", extension: "ts" },
  { id: "javascript", label: "JavaScript", extension: "js" },
  { id: "python", label: "Python", extension: "py" },
  { id: "go", label: "Go", extension: "go" },
  { id: "rust", label: "Rust", extension: "rs" },
] as const;

type LanguageId = (typeof languages)[number]["id"];

const stopWords = new Set([
  "a",
  "an",
  "and",
  "the",
  "or",
  "to",
  "of",
  "for",
  "from",
  "with",
  "into",
  "that",
  "this",
  "return",
]);

function toIdentifier(prompt: string) {
  const words = prompt
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !stopWords.has(word))
    .slice(0, 4);

  const parts = words.length > 0 ? words : ["generated", "snippet"];
  const camel = parts
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join("");
  const snake = parts.join("_");
  const pascal = camel.charAt(0).toUpperCase() + camel.slice(1);

  return { camel, snake, pascal };
}

function buildSnippet(language: LanguageId, prompt: string) {
  const task = prompt.trim();
  const { camel, snake, pascal } = toIdentifier(task);

  if (language === "typescript") {
    return `type Result = {\n  ok: true;\n  value: string;\n};\n\n/** ${task} */\nexport function ${camel}(input: string): Result {\n  const value = input.trim();\n  if (!value) {\n    throw new Error("Input is required.");\n  }\n\n  return { ok: true, value };\n}\n`;
  }

  if (language === "javascript") {
    return `/** ${task} */\nexport function ${camel}(input) {\n  const value = String(input ?? "").trim();\n  if (!value) {\n    throw new Error("Input is required.");\n  }\n\n  return { ok: true, value };\n}\n`;
  }

  if (language === "python") {
    return `def ${snake}(value: str) -> str:\n    """${task}"""\n    cleaned = value.strip()\n    if not cleaned:\n        raise ValueError("Input is required.")\n    return cleaned\n`;
  }

  if (language === "go") {
    return `package snippet\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\n// ${pascal} ${task}\nfunc ${pascal}(input string) (string, error) {\n\tvalue := strings.TrimSpace(input)\n\tif value == "" {\n\t\treturn "", fmt.Errorf("input is required")\n\t}\n\treturn value, nil\n}\n`;
  }

  return `/// ${task}\npub fn ${snake}(input: &str) -> Result<String, &'static str> {\n    let value = input.trim();\n    if value.is_empty() {\n        return Err("input is required");\n    }\n    Ok(value.to_string())\n}\n`;
}

export function CodeGenerator() {
  const [language, setLanguage] = useState<LanguageId>("typescript");
  const [prompt, setPrompt] = useState("Validate a user name and return the trimmed value");
  const [snippet, setSnippet] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const selected = useMemo(
    () => languages.find((item) => item.id === language) ?? languages[0],
    [language],
  );

  function onGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const task = prompt.trim();
    if (task.length < 8) {
      setError("Describe the snippet in at least a short sentence.");
      setSnippet("");
      return;
    }

    setError("");
    setCopied(false);
    setSnippet(buildSnippet(language, task));
  }

  async function onCopy() {
    if (!snippet) return;
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <form onSubmit={onGenerate} className="rounded-2xl border border-border bg-card p-5">
        <label htmlFor="language" className="text-sm font-medium text-foreground">
          Language
        </label>
        <select
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value as LanguageId)}
          className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        >
          {languages.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <label htmlFor="prompt" className="mt-5 block text-sm font-medium text-foreground">
          Prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={6}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm leading-6 text-foreground outline-none transition-colors focus:border-accent"
        />
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Generate snippet
        </button>
      </form>
      <section className="overflow-hidden rounded-2xl border border-border bg-code-bg" aria-live="polite">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-wide text-zinc-400">
            {snippet ? `snippet.${selected.extension}` : "Output"}
          </p>
          <button
            type="button"
            onClick={onCopy}
            disabled={!snippet}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200 transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="min-h-72 overflow-x-auto p-4 font-mono text-[13px] leading-6 text-zinc-100">
          <code>{snippet || "Choose a language, describe the snippet, then generate it."}</code>
        </pre>
      </section>
    </div>
  );
}
