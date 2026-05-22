## 2024-05-15 - [Pre-rendering 'hidden' state vs JS hiding]
**Learning:** Hiding elements via JavaScript (e.g., in `DOMContentLoaded`) causes both Layout Shift (CLS) and Flash of Unstyled Content (FOUC). It also allows the browser's preload scanner to start fetching images that won't be visible initially.
**Action:** Always apply `display: none` or `hidden` classes directly in the HTML for elements that shouldn't be visible on the first paint.

## 2024-05-15 - [CDN Thumbnail Optimization]
**Learning:** Even with fixed `width` and `height` attributes to prevent CLS, loading original 48MP images (6048x8064) as 300x400 thumbnails is a massive performance bottleneck.
**Action:** Always check if external asset providers (like UCareCDN) support URL-based resizing and use it for thumbnails.
