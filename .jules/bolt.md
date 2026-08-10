## 2026-06-21 - Video Poster and Path Optimization
**Learning:** Large uncompressed video posters (like a 4.1MB PNG) act as severe LCP bottlenecks. Additionally, absolute paths prefixed with repository-specific directories (such as `/wheelson_story/`) break during local development, serving 404s.
**Action:** Always resize and compress poster images using PIL/Pillow to progressive JPEGs/WebP (targeting under 250KB), pre-load them in the HTML `<head>`, and use clean relative paths instead of subfolder absolute paths.
