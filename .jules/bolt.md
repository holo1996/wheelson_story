## 2026-06-06 - LCP & CLS Optimization for Static Assets
**Learning:** Heavy PNG assets (e.g., 4.1MB posters) act as massive LCP bottlenecks. Combining format conversion (PNG -> JPEG) with explicit HTML dimensions and CSS `height: auto` solves both loading speed and Layout Shift (CLS). Pre-hiding elements in HTML/CSS instead of JS prevents FOUC and unnecessary resource preloading.
**Action:** Always audit asset sizes first and prioritize LCP image optimization. Use Pillow for batch conversion and BeautifulSoup for automated HTML attribute injection.
