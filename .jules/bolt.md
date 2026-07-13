## 2026-07-13 - LCP Optimization via Poster Compression
**Learning:** PNG posters for full-screen videos are a major LCP bottleneck. Even "optimized" PNGs can be several megabytes. Converting to a progressive JPEG with a max-width of 1280px reduced the asset size by ~96% (4.1MB to 177KB) without significant visual loss on high-DPI screens.
**Action:** Always check video posters and convert them to optimized JPEGs or WebPs.

## 2026-07-13 - FOUC Prevention via Static HTML
**Learning:** Hiding gallery elements via JavaScript (DOMContentLoaded) causes a Flash of Unstyled Content (FOUC) and minor layout shifts.
**Action:** Pre-apply the `.hidden` class in the source HTML for any elements that should be hidden on load, and use JS only to toggle that state.
