## 2026-06-21 - Image & LCP Optimization
**Learning:** Video poster image car_shot.png was 4.2MB causing significant LCP delay.
**Action:** Convert uncompressed PNG posters to progressive JPEG format (<200KB) and add link rel=preload with fetchpriority=high for instant LCP.
