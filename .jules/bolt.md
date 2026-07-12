## 2026-06-21 - LCP and CLS Optimization
**Learning:** Large PNG video posters (4.1MB) are a massive LCP bottleneck. Missing image dimensions on critical assets like logos and section images cause measurable CLS.
**Action:** Always convert heavy PNG posters to optimized JPEGs (target <200KB) and provide explicit `width` and `height` attributes for all `<img>` tags, combined with `loading="lazy"` for off-screen content.
