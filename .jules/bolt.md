## 2025-06-05 - [Poster Image Optimization]
**Learning:** Large PNG files (4.1MB) used as video posters significantly degrade LCP and waste bandwidth on initial load.
**Action:** Always convert heavy posters to optimized JPEG or WebP and resize to a reasonable maximum width (e.g., 1280px or 1920px) to balance quality and performance.

## 2025-06-05 - [Preventing FOUC and Layout Shifts]
**Learning:** Hiding UI elements via JavaScript during `DOMContentLoaded` causes Flash of Unstyled Content (FOUC) and layout jumps (CLS).
**Action:** Use CSS classes (e.g., `.hidden { display: none; }`) directly in the HTML for initial state management to ensure the page is stable from the first paint.
