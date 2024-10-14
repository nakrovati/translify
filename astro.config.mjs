import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

import { manifest } from "./src/utils/manifest.ts";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    tailwind(),
    AstroPWA({
      manifest,
      registerType: "autoUpdate",
    }),
  ],
  output: "static",
});
