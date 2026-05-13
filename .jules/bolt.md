# Bolt's Journal - Wheelson Story

## 2025-05-22 - Layout Stability and Loading Optimization
**Learning:** Using JavaScript to hide elements after `DOMContentLoaded` causes a "Flash of Unstyled Content" (FOUC) and significant Cumulative Layout Shift (CLS). Additionally, missing `width` and `height` attributes on media elements prevents the browser from reserving space, further degrading CLS.
**Action:** Pre-apply `hidden` states in the source HTML/CSS and always provide explicit dimensions for `<img>` and `<video>` tags. Use `loading="lazy"` for non-critical below-the-fold assets to prioritize bandwidth for the initial viewport.
