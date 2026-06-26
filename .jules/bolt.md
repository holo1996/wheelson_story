## 2026-06-21 - Image Optimization and CLS prevention
**Learning:** Large PNG video posters (4.1MB) are a massive LCP bottleneck. Converting them to optimized JPEGs (target ~200KB) and resizing to reasonable dimensions (1280px) provides a massive performance boost. Additionally, missing width/height attributes on media causes high CLS, which can be solved by explicit attributes combined with CSS "height: auto".

**Action:** Always audit video posters for format and size. Implement width/height attributes on all <img> and <video> tags to stabilize layout.
