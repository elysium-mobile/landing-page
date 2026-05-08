// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Astro config — single static site, two locales.
//   - i18n.routing.prefixDefaultLocale=false → '/' is es, '/en/...' is en.
//   - integrations.icon() loads SVGs from src/icons/ and emits a single sprite.
//   - vite.plugins.tailwindcss() is the v4 plugin; tokens live in src/styles/global.css.
export default defineConfig({
    integrations: [icon()],
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
