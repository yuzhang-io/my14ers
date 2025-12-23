// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isDev = process.env.NODE_ENV === "development";
const BASE = isDev ? "/" : "/my14ers/";

export default defineConfig({
  site: "https://yuzhang-io.github.io/my14ers/",
  base: BASE,
  vite: {
    plugins: [tailwindcss()]
  }
});