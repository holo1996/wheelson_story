# Bolt's Journal

## 2026-06-21 - Image & Poster Optimization and CLS prevention
**Learning:** Found that the project used a massive 4.2MB PNG video poster with an absolute path `/wheelson_story/` prefix which breaks on custom domain or local development servers. Also, missing explicit dimensions on logo and card preview images led to severe layout shifts (CLS).
**Action:** Always resize and compress large visual assets (e.g. video posters to progressive JPEG format under 250KB) and explicitly declare `width`, `height`, and `loading="lazy"` attributes on non-LCP images.
