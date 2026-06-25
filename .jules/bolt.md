## 2026-06-25 - Video Poster Optimization and CLS prevention
**Learning:** High-resolution PNGs used as video posters (4.1MB) are major LCP bottlenecks in this architecture. Furthermore, the use of absolute paths (e.g., `/wheelson_story/`) for specific assets created inconsistency and local 404s, as most other assets used relative paths.
**Action:** Convert heavy posters to optimized JPEGs (target <300KB), ensure all assets use consistent relative paths, and always provide explicit dimensions for the video and logo elements to eliminate layout shifts (CLS).
