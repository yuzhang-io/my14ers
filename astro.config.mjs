// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://yuzhang-io.github.io/my14ers/",
  base: "/my14ers/",
  vite: {
    plugins: [tailwindcss()]
  }
});