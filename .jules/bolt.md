## 2026-06-21 - Optimize Video Poster for Largest Contentful Paint (LCP)
**Learning:** Extremely heavy assets like a 4.1MB PNG image used as a video poster block the critical rendering path and severely degrade LCP. Converting them to progressive JPEGs with a max width of 1280px and quality of 80% retains excellent visual fidelity while achieving a ~95% file size reduction.
**Action:** Always inspect the video poster attribute and optimize background/critical images using modern progressive formats and responsive resolutions to keep LCP as low as possible.
