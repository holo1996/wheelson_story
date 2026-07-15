## 2026-07-15 - LCP Optimization via Poster Preloading and Compression
**Learning:** Browser preload scanner cannot prioritize poster images of `<video>` elements as highly as `<img>` tags unless explicitly hinted. Moreover, absolute paths starting with `/` can cause 404s in local dev environments using simple servers (like `http.server`), whereas relative paths are more robust.
**Action:** Always use `<link rel="preload" as="image" href="..." fetchpriority="high">` for hero video posters and ensure paths are relative to the root for better portability.
