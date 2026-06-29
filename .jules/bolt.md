## 2026-06-21 - [Asset Optimization & Path Portability]
**Learning:** Large unoptimized PNG assets (e.g., 4.1MB video posters) are critical LCP bottlenecks. Additionally, hardcoded absolute paths prefixed with project names (e.g., `/wheelson_story/`) break local development and portability.
**Action:** Always convert photo-style posters to optimized JPEGs (target <200KB) and use relative paths for internal assets to ensure environment-agnostic rendering.
