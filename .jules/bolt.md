## 2026-06-14 - Optimized LCP and CLS for Video Poster
**Learning:** Large PNG posters (4.1MB) are a significant LCP bottleneck for video-heavy landing pages. Converting to optimized JPEG and providing explicit dimensions in HTML (width/height) significantly improves both LCP and CLS (~95% reduction in asset size).
**Action:** Always check the poster attribute of video tags for unoptimized assets and missing dimensions.
