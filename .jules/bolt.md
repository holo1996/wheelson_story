## 2026-06-14 - Optimized Video Poster and CLS Prevention
**Learning:** Large PNG assets used as video posters significantly impact LCP. Converting a 4.1MB PNG to a 215KB optimized JPEG (95% reduction) with proper dimensions provides a massive performance boost. Additionally, explicit width/height attributes are crucial for zero CLS, but must be accompanied by `height: auto` in CSS to maintain responsiveness.
**Action:** Always audit for heavy PNGs that can be JPEGs and ensure all images have intrinsic dimensions and lazy loading if below the fold.
