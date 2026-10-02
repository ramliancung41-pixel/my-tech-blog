export const site = {
  name: "CodeAndBuild",
  title: "CodeAndBuild | Programming & Tech Guides",
  description:
    "Learn web development, Next.js, software engineering, and modern tech tutorials step-by-step.",
  url: "https://codeandbuild.tech",
  email: "privacy@codeandbuild.tech",
  contactEmail: "contact@codeandbuild.tech",
};

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/#guides", label: "Guides" },
  { href: "/tools/code-generator", label: "Tools" },
  { href: "https://app.codeandbuild.tech/generator", label: "AI Generator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
