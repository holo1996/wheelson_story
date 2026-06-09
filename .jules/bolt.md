## 2026-06-06 - Image and Layout Optimization
**Learning:** Heavy assets (like the 4.1MB video poster) and JavaScript-driven visibility for gallery cards were the primary performance bottlenecks. JS-based hiding causes Flash of Unstyled Content (FOUC) and Cumulative Layout Shift (CLS) because the browser's preload scanner starts fetching images before JS can hide them.
**Action:** Always prefer CSS-based hiding (`.hidden` class in source HTML) for elements below the fold. Convert heavy PNG posters to optimized JPEGs and use CDN transformation parameters (e.g., UCareCDN `/-/preview/`) to deliver correctly sized thumbnails.

## 2026-06-06 - Asset Dimensions and CLS
**Learning:** Missing `width` and `height` attributes on `<img>` tags contribute significantly to CLS. Even with responsive designs, providing intrinsic dimensions allows the browser to reserve space before the asset loads.
**Action:** Explicitly set `width` and `height` on all images and videos. Use `height: auto` in CSS to maintain responsiveness without losing the layout stability benefits.
