import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const footerColumns = [
  {
    title: "Publication",
    links: [
      { href: "/", label: "Home" },
      { href: "/#guides", label: "Guides" },
      { href: "/blog/how-to-get-google-adsense-approved", label: "Latest guide" },
    ],
  },
  {
    title: "Tools",
    links: [{ href: "/tools/code-generator", label: "Code generator" }],
  },
  {
    title: "Legal",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: `mailto:${site.email}`, label: site.email },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="group flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
            <Image
              src="/images/logo.png"
              alt=""
              width={221}
              height={184}
              className="h-7 w-auto bg-transparent object-contain"
            />
            {site.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{site.description}</p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">{column.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("mailto:") ? (
                    <a href={item.href} className="text-foreground transition-colors hover:text-accent">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-foreground transition-colors hover:text-accent">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.name}. Programming and tech guides.
          </p>
          <p>Advertising is served by Google AdSense.</p>
        </div>
      </div>
    </footer>
  );
}
