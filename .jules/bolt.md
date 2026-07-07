## 2026-06-21 - FOUC Prevention and CLS Optimization
**Learning:** Pre-applying 'hidden' state in source HTML/CSS is superior to JavaScript-based hiding. It eliminates Flash of Unstyled Content (FOUC) and prevents the browser's preload scanner from fetching unnecessary assets immediately. Also, explicit `width/height` attributes on images are useless without `height: auto` in CSS for responsive layouts.
**Action:** Always check if dynamic visibility can be handled by static CSS classes first. Ensure global CSS has responsive image rules when adding fixed dimensions in HTML.
