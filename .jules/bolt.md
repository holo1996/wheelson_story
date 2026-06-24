## 2026-06-21 - LCP Optimization via Video Poster Compression
**Learning:** Heavy video poster images (e.g., 4.1MB PNG) are critical LCP bottlenecks and can fail to load if absolute paths are used in local dev environments. In this project, a single unoptimized poster accounted for the majority of the initial payload.
**Action:** Always audit visual assets above the fold. Convert heavy PNGs to optimized JPEGs (target <200KB), use relative paths for portability, and provide explicit width/height attributes to prevent CLS.
