import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  background_color: "#ffffff", // Change this to your background color.
  description:
    "Online tool for converting Georgian transliteration (Latin script) to the Georgian alphabet", // Change this to your websites description.
  display: "minimal-ui",
  icons: [
    {
      purpose: "any",
      sizes: "192x192",
      src: "/pwa-192x192.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "/pwa-512x512.png",
      type: "image/png",
    },
    {
      purpose: "maskable",
      sizes: "192x192",
      src: "/pwa-maskable-192x192.png",
      type: "image/png",
    },
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "/pwa-maskable-512x512.png",
      type: "image/png",
    },
  ],
  name: "Translify: Georgian transliteration converter",
  scope: "/",
  short_name: "Translify",
  start_url: "/",
  theme_color: "#ffffff",
};
