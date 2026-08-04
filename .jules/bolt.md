# Bolt's Journal

## 2026-06-21 - Image optimizations and HTML cleanup
**Learning:** Heavy visual assets are significant LCP bottlenecks; optimizing poster images from PNG to progressive JPEGs with 1280px max-width yields up to a 95% reduction in size. Standardizing absolute paths to relative ones prevents 404 errors during local development.
**Action:** Use modern progressive formats, resize visual assets below 200KB, and use relative paths for local development.
