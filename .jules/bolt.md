## 2026-07-14 - LCP optimization & video posters
**Learning:** Video posters in PNG format can be extremely heavy (4.1MB in this case) and act as a massive bottleneck for LCP. Even if the path is broken (404), the browser still attempts to fetch it, wasting resources.
**Action:** Always convert video posters to optimized, progressive JPEGs and use 'fetchpriority="high"' for critical above-the-fold media.
