## 2026-06-21 - Poster Optimization & CLS Fix
**Learning:** PNG is an inefficient format for photographic video posters (found a 4.1MB file). Converting to optimized JPEG (80% quality) and resizing to a reasonable max width (1280px) reduced the weight by 95% with minimal visual impact. Missing `width`/`height` on the `<video>` tag also caused layout shifts.
**Action:** Always audit media assets for format efficiency (JPG/WebP vs PNG) and ensure all `<video>` and `<img>` elements have explicit dimensions to prevent CLS.
