## 2026-06-21 - Initial Performance Baseline and Project Observations
**Learning:** Found critical LCP bottleneck with 4.2MB PNG video poster (`car_shot.png`) and missing image dimension attributes causing CLS. Also identified broken paths prefixed with `/wheelson_story/`.
**Action:** Convert video poster to optimized JPG, fix absolute path prefixes, and add explicit width/height attributes to images.
