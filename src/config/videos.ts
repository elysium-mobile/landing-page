/**
 * YouTube video IDs for the Media & Community page.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD A VIDEO
 * ─────────────────────────────────────────────────────────────────────────────
 *  Paste the video ID (or the whole YouTube URL — either works) between the
 *  quotes. The ID is the 11-character code after `v=`:
 *
 *    https://www.youtube.com/watch?v=dQw4w9WgXcQ   →  dQw4w9WgXcQ
 *    https://youtu.be/dQw4w9WgXcQ                  →  dQw4w9WgXcQ
 *
 *  Leaving a value as '' keeps that card as a non-playable placeholder.
 *
 *  Shared by both locales (/media-community and /en/media-community), so you
 *  only paste each ID once.
 */
export const videos = {
  /** "About the Product" — product walk-through. */
  product: 'https://www.youtube.com/watch?v=rmh9LruBnsc',

  /** "App Validation" — validation with pilot teams. */
  validation: 'https://www.youtube.com/watch?v=AtwN1HZsvvo',

  /** "About the Team" — meet the team. */
  team: 'https://www.youtube.com/watch?v=KjCzCiI95mM',
} as const;
