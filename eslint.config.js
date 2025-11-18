import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import astroPlugin from "eslint-plugin-astro";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import unicornPlugin from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/", ".vercel/", ".astro/"]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  perfectionistPlugin.configs["recommended-natural"],
  unicornPlugin.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  prettierConfig,
);
