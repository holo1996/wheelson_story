## 2026-06-06 - Heavy LCP bottleneck identified
**Learning:** The video poster image (`car_shot.png`) was a massive 4.1MB, significantly impacting Largest Contentful Paint (LCP). PNG is suboptimal for photographic video posters.
**Action:** Always check the file size and format of video posters and HERO images. Prefer optimized JPEGs or WebPs with a maximum width of 1920px (or 1280px for smaller displays) to keep the initial payload light.
