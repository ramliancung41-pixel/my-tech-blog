"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Watermark() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-2.5 bottom-2 z-10 font-mono text-[11px] font-medium tracking-wide text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_0_10px_rgba(0,0,0,0.55)] sm:right-3 sm:bottom-3 sm:text-xs"
    >
      codeandbuild.tech
    </span>
  );
}

export function CoverImage({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 z-10 cursor-zoom-in outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={alt ? `View larger image: ${alt}` : "View larger image"}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        <Watermark />
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={() => setOpen(false)}
            >
              <h2 id={titleId} className="sr-only">
                {alt || "Image preview"}
              </h2>
              <button
                ref={closeRef}
                type="button"
                className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-sm text-white outline-none hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <div className="relative w-fit max-w-full">
                {/* The preview uses the photo's own box so the watermark sits on the image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
                />
                <Watermark />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
