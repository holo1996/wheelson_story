## 2026-06-17 - Asset Optimization and CLS Prevention
**Learning:** Heavy visual assets like PNG video posters (4.1MB) are major LCP bottlenecks. Converting to optimized JPEGs and resizing to standard widths (e.g., 1280px) can reduce LCP by ~90%. Additionally, missing `width` and `height` attributes on images and videos cause layout shifts, even if they are small.
**Action:** Always check the size of poster images. Use JPEG for photographic content. Explicitly define dimensions in HTML and use `height: auto` in CSS to prevent CLS while maintaining responsiveness.
