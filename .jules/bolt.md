## 2026-06-21 - Hero Video Poster LCP Optimization

**Learning:** Heavy uncompressed PNG images used as video poster frames (`assets/video/car_shot.png`, 4.1MB) severely degrade LCP on initial page load.
**Action:** Convert hero video posters to progressive JPEGs (1280px max width, ~180KB) and add `<link rel="preload" as="image" href="..." fetchpriority="high">` in `<head>` for optimal critical path loading.
