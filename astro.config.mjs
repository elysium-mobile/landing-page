// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import vercelStatic from '@astrojs/vercel';

// Astro config — single static site, two locales.
//   - i18n.routing.prefixDefaultLocale=false → '/' is es, '/en/...' is en.
//   - integrations.icon() loads SVGs from src/icons/ and emits a single sprite.
//   - vite.plugins.tailwindcss() is the v4 plugin; tokens live in src/styles/global.css.
export default defineConfig({
  // Icon integration for SVG icons in src/icons/, emitted as a single sprite.
  integrations: [icon()],

  // i18n config for two locales, Spanish and English. The default locale is Spanish, and the URL prefix is only added for English.
  i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      routing: {
          prefixDefaultLocale: false,
      },
  },

  // Tailwind CSS v4 plugin for Astro's Vite build.
  vite: {
      plugins: [tailwindcss()],
  },

  // Vercel adapter for static output.
  output: 'static',
  adapter: vercelStatic(),
});