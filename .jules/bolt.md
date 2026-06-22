## 2026-06-21 - Asset Pathing and LCP Optimization
**Learning:** Found that LCP was severely impacted by a 4.1MB PNG video poster with an incorrect absolute-style path (/wheelson_story/...) which failed in local development.
**Action:** Always use relative paths for assets to ensure portability. Convert heavy PNG posters to optimized JPEGs (target <200KB) and resize to 1280px width for a ~95% reduction in asset weight.
