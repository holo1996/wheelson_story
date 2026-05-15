## 2025-05-15 - [Pre-applying 'hidden' state for Performance]
**Learning:** Pre-applying the 'hidden' attribute and CSS classes in the source HTML (instead of hiding elements via JavaScript after DOMContentLoaded) eliminates Cumulative Layout Shift (CLS) and prevents the browser's preload scanner from fetching unnecessary assets (like images in hidden gallery cards).
**Action:** Always prefer server-side or static HTML 'hidden' states for initially invisible elements to optimize LCP and CLS.
