const LIMITS = {
  name: 120,
  email: 200,
  subject: 180,
  message: 5000,
} as const;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function readPayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  return {
    name: clean(record.name, LIMITS.name),
    email: clean(record.email, LIMITS.email),
    subject: clean(record.subject, LIMITS.subject).replace(/[\r\n]+/g, " "),
    message: clean(record.message, LIMITS.message),
    website: clean(record.website, 200),
  };
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function jsonError(error: string, status: number) {
  return Response.json({ error }, { status });
}

async function sendWithFormspree(formId: string, payload: ContactPayload) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _replyto: payload.email,
      _subject: `[CodeAndBuild] ${payload.subject}`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Formspree contact delivery failed", response.status, detail.slice(0, 300));
    return false;
  }

  return true;
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return false;

  const from = process.env.RESEND_FROM_EMAIL || "CodeAndBuild <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[CodeAndBuild] ${payload.subject}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend contact delivery failed", response.status, detail.slice(0, 300));
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Send a valid message.", 400);
  }

  const payload = readPayload(body);
  if (!payload) return jsonError("Send a valid message.", 400);
  if (payload.website) return Response.json({ ok: true });

  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return jsonError("Fill in your name, email, subject, and message.", 400);
  }

  if (!isEmail(payload.email)) {
    return jsonError("Enter a valid email address.", 400);
  }

  const formId = process.env.FORMSPREE_FORM_ID?.trim() ?? "";
  if (/^[a-z0-9]+$/i.test(formId)) {
    const sent = await sendWithFormspree(formId, payload);
    if (sent) return Response.json({ ok: true });
    return jsonError("We could not send your message. Email contact@codeandbuild.tech and we will read it there.", 502);
  }

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const sent = await sendWithResend(payload);
    if (sent) return Response.json({ ok: true });
    return jsonError("We could not send your message. Email contact@codeandbuild.tech and we will read it there.", 502);
  }

  console.error("Contact form has no FORMSPREE_FORM_ID or RESEND_API_KEY + CONTACT_TO_EMAIL.");
  return jsonError("We could not send your message. Email contact@codeandbuild.tech and we will read it there.", 503);
}
