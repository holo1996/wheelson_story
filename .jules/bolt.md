## 2026-05-10 - [CLS and Resource Optimization in Static Landing Page]
**Learning:** For static sites with galleries, pre-applying the 'hidden' class to cards beyond the fold in HTML (instead of JS) prevents Flash of Unstyled Content (FOUC) and reduces redundant image requests. Standardizing width/height attributes for both <img> and <video poster> is essential for zero CLS.
**Action:** Always check for 'hidden-by-JS' patterns and move them to HTML. Ensure all media elements have explicit dimensions if known.
