## 2026-06-21 - [LCP Poster and Path Fix]
**Learning:** Found that a 4.1MB PNG image (`car_shot.png`) was used as the poster image for the background video. Additionally, the poster used an absolute path (`/wheelson_story/assets/video/car_shot.png`) that was broken in local development environments.
**Action:** Resized and optimized the PNG to a progressive JPEG of 1280px width at 85% quality, resulting in ~206KB (a ~95% size reduction). Converted the absolute path to a relative path to fix 404s in local and potential other staging/production environments.
