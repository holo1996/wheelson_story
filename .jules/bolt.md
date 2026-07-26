# Bolt's Journal

## 2026-06-21 - Image Optimization & Path Standardization
**Learning:** Heavy visual assets like PNG video posters (e.g., 4.1MB) heavily impact Largest Contentful Paint (LCP) and cause performance bottlenecks.
**Action:** Always optimize posters by converting them to progressive JPEGs, target ~100-200KB, resize to a maximum width of 1280px or 1920px, and ensure relative paths are utilized rather than absolute or incorrect subdirectory paths.
