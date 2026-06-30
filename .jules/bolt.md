## 2026-06-21 - Poster Optimization and Path Portability

**Learning:** Heavy visual assets like PNG video posters (4.1MB) are major LCP bottlenecks. Converting them to optimized JPEGs (180KB) with explicit dimensions significantly improves performance and stability.

**Action:** Always check for heavy PNGs used as posters and convert them to JPEGs. Use relative paths for assets to ensure portability across different deployment subpaths.
