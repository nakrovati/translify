import type { ManifestOptions } from "vite-plugin-pwa";

export const manifest: Partial<ManifestOptions> = {
  background_color: "#ffffff", // Change this to your background color.
  description:
    "Online tool for converting Georgian transliteration (Latin script) to the Georgian alphabet", // Change this to your websites description.
  display: "standalone",
  icons: [
    {
      purpose: "any",
      sizes: "192x192",
      src: "/android-chrome-192x192.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "/android-chrome-512x512.png",
      type: "image/png",
    },
  ],
  id: "/",
  name: "Translify: Georgian transliteration converter",
  scope: "/",
  screenshots: [
    {
      form_factor: "wide",
      sizes: "1280x720",
      src: "/screenshots/desktop.webp",
      type: "image/webp",
    },
    {
      sizes: "390x844",
      src: "/screenshots/mobile.webp",
      type: "image/webp",
    },
  ],
  short_name: "Translify",
  start_url: "/",
  theme_color: "#ffffff",
};
