import type { TocItem } from "@/lib/posts";

function TocLinks({ items }: { items: TocItem[] }) {
  return (
    <ol className="mt-3 space-y-1 border-l border-border">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block border-l border-transparent py-1 pl-3 text-sm leading-5 text-muted hover:border-accent hover:text-foreground"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">On this page</p>
      <TocLinks items={items} />
    </nav>
  );
}

export function MobileTableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <details className="mt-8 rounded-xl border border-border bg-card px-4 py-3 lg:hidden">
      <summary className="cursor-pointer text-sm font-medium text-foreground">
        On this page
      </summary>
      <TocLinks items={items} />
    </details>
  );
}
