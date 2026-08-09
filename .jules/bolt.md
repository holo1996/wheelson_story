## 2026-06-21 - [LCP Optimization via Video Poster Format Conversion]
**Learning:** Video background poster images can be a significant bottleneck for Largest Contentful Paint (LCP) if they are in uncompressed formats like heavy PNGs (e.g., 4.1MB) or use absolute site sub-paths that trigger 404 errors during local development.
**Action:** Convert heavy png poster images to optimized, resized progressive JPEGs (<200KB) and always use relative paths for local development and portability.
