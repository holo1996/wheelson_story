# Bolt's Journal - Critical Learnings

## 2024-05-13 - [CLS and Asset Optimization]
**Learning:** Found several performance issues in `index.html`:
1. **Cumulative Layout Shift (CLS):** `<img>` and `<video>` tags lack `width` and `height` attributes, causing layout jumps during load.
2. **Unused Dependencies:** `imagesloaded` script is loaded via CDN but not used in `js/script.js`.
3. **Resource Paths:** Absolute paths starting with the repository name (e.g., `/wheelson_story/...`) break in local development environments.
4. **Loading Strategy:** Images below the fold lack `loading="lazy"`, impacting initial page load performance.

**Action:**
1. Always specify `width` and `height` for visual elements.
2. Audit third-party scripts for actual usage.
3. Use relative paths for local assets.
4. Implement lazy loading and async decoding for non-critical assets.
