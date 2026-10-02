"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "my", label: "မြန်မာ" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh-CN", label: "中文" },
  { code: "zh-TW", label: "中文（繁體）" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "hi", label: "हिन्दी" },
  { code: "ar", label: "العربية" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "ru", label: "Русский" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

const listeners = new Set<() => void>();

function readLanguage(): LanguageCode {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/);
  const code = match?.[1];
  return languages.some((language) => language.code === code) ? (code as LanguageCode) : "en";
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function emit() {
  listeners.forEach((listener) => listener());
}

function cookieDomains() {
  const host = location.hostname;
  const domains = new Set<string>([host, `.${host}`]);
  const parts = host.split(".");
  if (parts.length > 2) {
    const parent = parts.slice(1).join(".");
    domains.add(parent);
    domains.add(`.${parent}`);
  }
  return [...domains];
}

function clearTranslateCookie() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const variants = [
    `googtrans=;path=/;max-age=0;${expired}`,
    `googtrans=/auto/en;path=/;max-age=0;${expired}`,
  ];
  for (const value of variants) {
    document.cookie = value;
    for (const domain of cookieDomains()) {
      document.cookie = `${value};domain=${domain}`;
    }
  }
}

function writeCookie(code: LanguageCode) {
  clearTranslateCookie();
  if (code === "en") return;
  document.cookie = `googtrans=/en/${code};path=/`;
}

function restoreEnglish() {
  clearTranslateCookie();
  const combo = document.querySelector(".goog-te-combo");
  if (combo instanceof HTMLSelectElement) {
    combo.value = "";
    combo.dispatchEvent(new Event("change"));
  }
  const frame = document.querySelector("iframe.skiptranslate");
  frame?.remove();
  document.documentElement.lang = "en";
  emit();
  window.location.reload();
}

function applyTranslation(code: LanguageCode, attempt = 0) {
  const combo = document.querySelector(".goog-te-combo");
  if (!(combo instanceof HTMLSelectElement)) {
    if (attempt < 20) {
      window.setTimeout(() => applyTranslation(code, attempt + 1), 200);
    }
    return;
  }
  combo.value = code === "en" ? "" : code;
  combo.dispatchEvent(new Event("change"));
}

function initTranslate() {
  const google = window.google;
  if (!google?.translate || document.querySelector(".goog-te-combo")) return;
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: languages.map((language) => language.code).join(","),
      autoDisplay: false,
    },
    "google_translate_element",
  );
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
      };
    };
  }
}

export function TranslateSelect() {
  const pathname = usePathname();
  const language = useSyncExternalStore(subscribe, readLanguage, () => "en" as const);

  useEffect(() => {
    window.googleTranslateElementInit = initTranslate;
    if (!document.querySelector("script[data-google-translate]")) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.dataset.googleTranslate = "true";
      document.body.appendChild(script);
    } else {
      initTranslate();
    }
  }, []);

  useEffect(() => {
    if (language === "en") return;
    const timer = window.setTimeout(() => applyTranslation(language), 50);
    return () => window.clearTimeout(timer);
  }, [language, pathname]);

  function onChange(code: LanguageCode) {
    if (code === "en") {
      restoreEnglish();
      return;
    }
    writeCookie(code);
    emit();
    applyTranslation(code);
  }

  return (
    <>
      <div id="google_translate_element" aria-hidden="true" />
      <label className="sr-only" htmlFor="site-language">
        Language
      </label>
      <div className="relative shrink-0">
        <select
          id="site-language"
          value={language}
          translate="no"
          onChange={(event) => onChange(event.target.value as LanguageCode)}
          className="notranslate h-8 w-[7.25rem] appearance-none rounded-full border border-border bg-[#111827] pl-3 pr-7 text-xs text-white outline-none transition-colors hover:bg-[#1f2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-40"
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[10px] text-muted"
        >
          ▾
        </span>
      </div>
    </>
  );
}
