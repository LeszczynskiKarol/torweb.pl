// env.d.ts

/// <reference types="astro/client" />

// Deklaracje typów dla Google Analytics
interface Window {
  dataLayer: any[];
  gtag?: (...args: any[]) => void;
}

declare function gtag(...args: any[]): void;

// Typy dla zmiennych środowiskowych (jeśli używasz)
interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
