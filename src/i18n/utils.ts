/**
 * i18n helpers.
 *
 * Used by every component that renders user-facing text. The pattern is:
 *
 *   ---
 *   import { useTranslations } from '../../i18n/utils';
 *   const t = useTranslations(Astro.currentLocale);
 *   ---
 *   <h1>{t('hero.title.html')}</h1>
 *
 * Astro 6 sets `Astro.currentLocale` from the URL based on the `i18n` config in
 * astro.config.mjs (defaultLocale: 'es', '/en/...' for English). Components don't
 * need to do their own URL parsing — they just call `useTranslations`.
 */

import { defaultLang, ui, type Lang, type UIKey } from './ui';

/** Narrow `Astro.currentLocale` (string | undefined) to a typed Lang, with fallback. */
export function resolveLang(input: string | undefined | null): Lang {
  if (input && input in ui) return input as Lang;
  return defaultLang;
}

/**
 * Returns a `t(key)` function bound to the given locale. Falls back to the
 * default locale if a key is missing in the requested locale (prevents runtime
 * crashes when a translation is in flight).
 */
export function useTranslations(input: string | undefined | null) {
  const lang = resolveLang(input);
  return function t(key: UIKey): string {
    const dict = ui[lang] as Record<string, string>;
    return dict[key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a path that respects the active locale.
 *   localizedPath('es', '/')              → '/'
 *   localizedPath('en', '/')              → '/en/'
 *   localizedPath('en', '/#beneficios')   → '/en/#beneficios'
 *
 * Use this for every internal link so Inicio/Home stays inside its locale.
 */
export function localizedPath(input: string | undefined | null, path: string): string {
  const lang = resolveLang(input);
  const clean = path.startsWith('/') ? path : '/' + path;
  if (lang === defaultLang) return clean;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}
