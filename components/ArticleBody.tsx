import Link from "next/link";
import type { PostBlock } from "@/lib/posts";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={index}
          className="rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={index} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1];
      const href = link[2];

      if (href.startsWith("/")) {
        return (
          <Link
            key={index}
            href={href}
            className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            {label}
          </Link>
        );
      }

      const external = href.startsWith("http");
      return (
        <a
          key={index}
          href={href}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
          {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function HeadingAnchor({ id, text }: { id: string; text: string }) {
  return (
    <a href={`#${id}`} className="group">
      {text}
      <span
        aria-hidden="true"
        className="ml-2 font-mono text-base font-normal text-accent opacity-0 transition-opacity group-hover:opacity-100"
      >
        #
      </span>
    </a>
  );
}

export function ArticleBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="mt-8 min-w-0">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "paragraph":
            return (
              <p key={key} className="mt-4 text-base leading-7 text-prose first:mt-0">
                <RichText text={block.text} />
              </p>
            );
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={key}
                  id={block.id}
                  className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
                >
                  <HeadingAnchor id={block.id} text={block.text} />
                </h2>
              );
            }

            return (
              <h3
                key={key}
                id={block.id}
                className="mt-8 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
              >
                <HeadingAnchor id={block.id} text={block.text} />
              </h3>
            );
          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={key}
                className={`mt-4 space-y-2 pl-5 text-base leading-7 text-prose ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ListTag>
            );
          }
          case "code":
            return (
              <figure
                key={key}
                className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-code-bg"
              >
                <figcaption className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-2 font-mono text-xs text-zinc-400">
                  <span className="truncate">{block.filename}</span>
                  <span className="shrink-0 uppercase tracking-wide">{block.language}</span>
                </figcaption>
                <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-zinc-100">
                  <code>{block.code}</code>
                </pre>
              </figure>
            );
          case "note":
            return (
              <aside
                key={key}
                className="mt-6 rounded-r-xl border-l-2 border-accent bg-accent/10 px-4 py-3"
              >
                <p className="font-medium text-foreground">{block.title}</p>
                <p className="mt-1 text-base leading-7 text-prose">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={key} className="mt-6 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                  <thead className="bg-card">
                    <tr>
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="border-b border-border px-4 py-3 font-medium text-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]} className="odd:bg-background even:bg-card">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${row[0]}-${cellIndex}`}
                            className="border-b border-border px-4 py-3 align-top text-prose last:border-b-0"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "steps":
            return (
              <ol key={key} className="mt-6 space-y-6">
                {block.items.map((item, stepIndex) => (
                  <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                    <span className="pt-0.5 font-mono text-sm text-accent">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base leading-7 text-prose">
                        <RichText text={item.text} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            );
          default: {
            const unreachable: never = block;
            return unreachable;
          }
        }
      })}
    </div>
  );
}
