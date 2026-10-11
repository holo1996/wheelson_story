## 2026-06-21 - Heavy PNG Video Poster Optimization
**Learning:** Video poster images stored as uncompressed PNG files (4.1MB) severely degrade LCP (Largest Contentful Paint) and waste network bandwidth on initial load.
**Action:** Convert video posters to optimized progressive JPEG (~168KB) and use correct relative paths to achieve a ~96% reduction in poster payload size.
