# Bolt's Performance Journal

## 2026-06-21 - Initial Performance Audit of wheelson_story
**Learning:** Found several performance bottlenecks in wheelson_story: 4.2MB unoptimized PNG video poster with invalid absolute path, heavy work card preview images (400-800KB), JS-based initial card hiding causing FOUC, missing lazy loading/explicit dimensions on images, non-existent `no-repeat` HTML attribute, and broken VK Cloud image URLs returning 403 Forbidden.
**Action:** Address critical performance and asset issues sequentially, starting with poster/image payload optimizations and FOUC prevention.
