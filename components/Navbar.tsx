"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TranslateSelect } from "@/components/TranslateSelect";
import { site, siteNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.startsWith("http")) return false;
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="CodeAndBuild Logo"
            width={221}
            height={184}
            sizes="40px"
            className="h-8 w-auto shrink-0 bg-transparent object-contain"
          />
          <span className="truncate">{site.name}</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {siteNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active
                      ? "font-medium text-foreground after:absolute after:inset-x-3 after:-bottom-2 after:h-px after:bg-foreground"
                      : "text-muted hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <TranslateSelect />
          <button
            type="button"
            className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-foreground/5 md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav
        id="site-menu"
        aria-label="Mobile"
        className={`border-t border-border px-4 py-3 md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1">
          {siteNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-foreground/10 font-medium text-foreground"
                      : "text-muted hover:bg-foreground/5 hover:text-foreground"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
