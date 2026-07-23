# Bolt Journal

## 2026-06-21 - LCP Optimization via Poster Format
**Learning:** Using heavy PNG images (e.g. 4.1MB) as a `poster` for HTML5 background video severely degrades Largest Contentful Paint (LCP). Additionally, hardcoded repository subdirectory paths like `/wheelson_story/` cause 404 errors during standard local development, forcing the browser to attempt downloading the heavy background MP4 immediately, wasting cellular data/bandwidth.
**Action:** Always compress video posters to progressive JPEGs/WebPs at normal desktop resolutions (max 1280px-1920px width), aim for ~100-200KB, and use relative paths for universal compatibility and instant preloading.
