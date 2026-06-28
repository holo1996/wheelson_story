# Bolt's Journal

## 2026-06-21 - Optimizing LCP with Video Poster Compression
**Learning:** Heavy PNG assets used as video posters (4.1MB in this case) are massive LCP bottlenecks. Converting them to optimized JPEGs (85% quality) and resizing to reasonable dimensions (1280px width) can reduce the payload by over 90% without significant visual loss.
**Action:** Always audit media assets in the initial viewport. Convert non-transparent PNGs to JPEGs and resize to match the target device's maximum required resolution.
