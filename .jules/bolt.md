## 2026-06-21 - Poster Optimization and CLS Prevention
**Learning:** A heavy PNG video poster (4.1MB) was a major LCP bottleneck. Converting it to an optimized JPEG (183KB) reduced its size by ~95%. Missing width/height on images caused layout shifts.
**Action:** Always optimize heavy video posters first. Use explicit dimensions on all images and 'height: auto' in global CSS to prevent CLS without breaking responsiveness.

## 2026-06-21 - FOUC in Gallery
**Learning:** Relying on JavaScript to hide gallery cards caused a Flash of Unstyled Content (FOUC).
**Action:** Pre-apply the 'hidden' class in source HTML/CSS for elements that should be hidden on load.
