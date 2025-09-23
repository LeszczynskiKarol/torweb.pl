// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://torweb.pl",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  image: {
    // Wbudowane wsparcie dla obrazów w Astro 3+
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
