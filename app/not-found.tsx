import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col px-4 py-24 sm:px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        That page is not here.
      </h1>
      <p className="mt-4 text-base leading-7 text-muted">
        The address may be mistyped, or the guide may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
      >
        Back to guides
      </Link>
    </div>
  );
}
