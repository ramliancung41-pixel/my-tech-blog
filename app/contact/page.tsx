import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message CodeAndBuild directly through the contact form about a guide, a correction, feedback, or a privacy question.",
  alternates: {
    canonical: "/contact",
  },
};

const addresses = [
  {
    label: "General",
    email: site.contactEmail,
    detail: "Guides, corrections, and other notes.",
  },
  {
    label: "Privacy",
    email: site.email,
    detail: "Privacy questions and deletion requests.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="font-mono text-sm text-accent">~/contact</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Message <span className="text-gradient">CodeAndBuild.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        Use the form to send feedback, a correction, or a privacy question. Your note is delivered from this page, and we reply to the email address you enter.
      </p>
      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <ContactForm />
        <aside className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Direct message</p>
          <p className="mt-3 text-sm leading-6 text-prose">
            The form on this page sends your message straight to our inbox. Add the page URL when your note is about a specific guide.
          </p>
          <ul className="mt-4 space-y-5">
            {addresses.map((item) => (
              <li key={item.email}>
                <p className="text-sm text-muted">{item.label}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="mt-1 block text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  {item.email}
                </a>
                <p className="mt-1 text-sm leading-6 text-prose">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-4 text-sm leading-6 text-muted">
            You can also write to the addresses above. The form is the direct way to send feedback from this page.
          </p>
        </aside>
      </div>
    </div>
  );
}
