"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormState, value: string) {
    setSent(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subject || !message) {
      setError("Fill in your name, email, subject, and message.");
      setSent(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      setSent(false);
      return;
    }

    setSubmitting(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website: form.website,
        }),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(data?.error || "We could not send your message. Try again in a moment.");
        return;
      }
      setForm(emptyForm);
      setSent(true);
    } catch {
      setError("We could not send your message. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-5 sm:p-6" noValidate>
      <p className="text-sm leading-6 text-prose">
        Send feedback or a message from this form. It is delivered to our inbox, and replies go to the email address you enter.
      </p>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Name
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-foreground">
        Subject
        <input
          name="subject"
          value={form.subject}
          onChange={(event) => update("subject", event.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm font-normal leading-6 text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>
      {error ? (
        <p className="mt-4 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 text-sm leading-6 text-prose" role="status">
          Your message was sent. We received it through this form and will reply to the email address you entered.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
