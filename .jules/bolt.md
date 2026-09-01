## 2026-06-21 - Heavy video poster optimization
**Learning:** Video background poster images in PNG format can be massive LCP bottlenecks (4.1MB). Converting to progressive JPEG at 1280px width reduces size by ~95% (~187KB) with no perceptual quality loss.
**Action:** Always inspect video poster formats and sizes when profiling LCP; convert heavy PNG posters to optimized JPEGs or WebPs.
