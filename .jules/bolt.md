## 2026-06-21 - Hero section performance optimization (LCP & CLS)

**Learning:** Large PNG video posters (4.1MB) are critical LCP bottlenecks. Converting them to optimized, progressive JPEGs (~150KB) and resizing to reasonable dimensions (1280px) can reduce payload size by >95% without significant visual loss. Also, missing `width` and `height` on the logo and hero video were the primary sources of CLS. Using absolute paths like `/wheelson_story/` in a static site causes 404s in many environments; relative paths are safer.

**Action:** Always optimize heavy video posters first for media-heavy sites. Explicitly dimension all above-the-fold assets (Logo, Hero Video) in HTML attributes. Use relative paths for all assets to ensure portability.
