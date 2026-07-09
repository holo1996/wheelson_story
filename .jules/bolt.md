
## 2026-06-21 - Asset Optimization as LCP Multiplier
**Learning:** High-resolution PNGs used as video posters or hero backgrounds are silent LCP killers. A single 4MB asset can delay the entire page's meaningful paint even on fast connections.
**Action:** Always convert large PNG posters to progressive JPEGs (~150-200KB) and use relative paths instead of absolute repository-prefixed paths to ensure stability across environments.
