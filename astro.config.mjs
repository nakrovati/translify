// @ts-check
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

import { manifest } from "./src/utils/manifest.ts";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  adapter: vercel({ webAnalytics: { enabled: !isDev } }),
  integrations: [
    AstroPWA({
      base: "/",
      devOptions: {
        enabled: !isDev,
      },
      manifest,
      registerType: "autoUpdate",
      scope: "/",
    }),
  ],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
