// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const BASE = process.env.ASTRO_DEV ? "/" : "/my14ers/";

export default defineConfig({
  site: "https://yuzhang-io.github.io/my14ers/",
  base: BASE,
  vite: {
    plugins: [tailwindcss()]
  }
});