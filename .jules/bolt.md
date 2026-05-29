## 2024-05-29 - [Eliminating FOUC and CLS in Gallery Initialization]
**Learning:** Pre-applying 'hidden' state in source HTML/CSS is superior to JavaScript-based hiding for performance. Relying on a JS loop to hide elements after DOMContentLoaded causes Flash of Unstyled Content (FOUC), increases Cumulative Layout Shift (CLS), and wastes CPU cycles on initial render.
**Action:** Always pre-hide elements that shouldn't be visible on page load directly in the HTML source using a `.hidden` class or the `hidden` attribute.
